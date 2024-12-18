<script setup lang="ts">
interface PropInterface {
  id: string | number
  modelValue: Media | TemporaryMedia | null
  accept?: string
  error?: string | undefined
  label?: string | undefined
  hint?: string | undefined
  fileSizeLimit?: number
  previewSize?: string
}

const props = withDefaults(defineProps<PropInterface>(), {
  accept: '.gif,.jpg,.jpeg,.png,.webp',
  fileSizeLimit: 10, // MB
  error: undefined,
  label: undefined,
  hint: undefined,
  previewSize: 'aspect-square'
})

const { t } = useI18n()
const { errorToast } = useBasicToast()

const preview = ref(null)
const isDragging = ref(false)
const errorState = ref()
const dropZone = ref<HTMLDivElement | null>(null)

const emit = defineEmits<{
  'update:modelValue': [Media | TemporaryMedia | null]
}>()

onMounted(() => {
  if (dropZone.value) {
    dropZone.value.addEventListener('dragover', dropZoneDragOverHandler)
    dropZone.value.addEventListener('dragleave', dropZoneDragLeaveHandler)
  }
})

const dropZoneDragOverHandler = () => {
  isDragging.value = true
}

const dropZoneDragLeaveHandler = () => {
  isDragging.value = false
}

const dragFile = (event: DragEvent) => {
  isDragging.value = false

  if (event.dataTransfer) {
    const filesArray = Array.from(event.dataTransfer.files)
    addFile(filesArray)
  }
}

const fileChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement

  if (inputElement?.files) {
    const filesArray = Array.from(inputElement.files)
    addFile(filesArray)
  }
}

const addFile = async (files: File[]) => {
  for (const file of files) {
    if (!validateFileInput(file)) {
      return
    }

    const formData = new FormData()
    formData.append('media', file)

    try {
      const {data} = await useApiFetch(`/public/temporary-media`, {
        method: 'POST',
        body: formData,
      })

      if (data?.value?.data) {
        emit('update:modelValue', { ...data?.value?.data, id: '' })
      }
    }
    catch (err) {
      const error = handleApiError(err)

      if (error.isValidationError) {
        form.value.setErrors(formatAPIErrors(error.payload.errors))
      }

      // todo: 500, เน็ตหลุด
      errorToast(err.data.message)
    }
  }
}

const validateFileInput = (file: File) => {
  if (isExceedFileSize(file, props.fileSizeLimit)) {
    errorState.value = computed(() => t('uploadImage.file_too_big', { limit: props.fileSizeLimit }))
    return false
  }

  if (!isFileTypeAllowed(file)) {
    errorState.value = computed(() => t('uploadImage.wrong_type', { type: props.accept }))
    return false
  }

  errorState.value = null
  return true
}

const isFileTypeAllowed = (file: File) => {
  const extension = file.name.split('.').pop()?.toLowerCase()
  return !!extension && props.accept.includes(`.${extension}`)
}

const isExceedFileSize = (file: File, fileSizeLimit: number) => { // for single select files
  const size = Math.round((file.size / 1024))
  return size >= fileSizeLimit * 1024
}
</script>

<template>
  <div>
    <div
      class="w-full"
      @dragover.prevent
      @drop.prevent
    >
      <div
        ref="dropZone"
        class="w-full flex justify-center p-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md bg-white dark:bg-gray-900"
        :class="{
          'border-primary-500 dark:opacity-75': isDragging,
          'border-red-500 dark:border-red-400': error || errorState,
        }"
        @drop.prevent="dragFile"
      >
        <div>
          <label
            v-if="modelValue"
            :for="id"
            class="relative cursor-pointer rounded-md py-1 px-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500"
          >
            <img
              ref="preview"
              :src="modelValue?.url"
              alt="preview"
              class="object-center object-cover border border-container rounded overflow-hidden w-52"
              :class="[previewSize]"
            >
          </label>
          <div
            v-else
            class="space-y-2 text-center py-6"
          >
            <UIcon
              name="i-heroicons-arrow-up-tray"
              class="w-6 h-6 shrink-0 text-gray-500 dark:text-gray-200 mx-auto"
            />
            <div class="flex text-sm justify-center items-center text-gray-600">
              <label
                :for="id"
                class="relative cursor-pointer rounded-md py-1 px-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500"
              >
                <span class="text-primary-500 hover:text-primary-600 text-xs font-medium">
                  {{ $t('common.upload') }}
                </span>
              </label>
              <p class="pl-1 text-gray-500 dark:text-gray-400 font-normal">
                {{ label ? label : $t('uploadImage.or_drag_to_upload') }}
              </p>
            </div>
            <div class="text-xs text-gray-400 dark:text-gray-500 font-normal">
              {{ hint ? hint : $t('uploadImage.change_image_info') }}
            </div>
          </div>
          <input
            :id="id"
            ref="file"
            :name="id"
            type="file"
            class="sr-only"
            :accept="accept"
            @change="fileChange"
          >
        </div>
      </div>
      <span
        v-if="errorState"
        class="mt-2 block text-red-500 dark:text-red-400 text-xs font-normal"
      >
        {{ errorState }}
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
