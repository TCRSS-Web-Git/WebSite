<script setup lang="ts">

const { t } = useI18n()
const { errorToast } = useBasicToast()

interface PropInterface {
  id: string | number;
  modelValue: (Media | TemporaryMedia)[] | undefined;
  hint?: string;
  errors?: string | undefined;
  limit?: number;
  accept?: string;
  multiple?: boolean;
  fileSizeLimit?: number;
}

const props = withDefaults(defineProps<PropInterface>(), {
  limit: 5,
  accept: '.gif,.jpg,.jpeg,.png,.webp',
  multiple: true,
  fileSizeLimit: 10, // MB
  hint: '',
})

const emit = defineEmits<{
  'update:modelValue': [Media[] | TemporaryMedia[]],
}>()

const errorState = ref()
const previewImages = ref<File[]>([])

const updateModelValue = async (media: TemporaryMedia | Media) => {
  const updatedModelValue = [...props.modelValue, media] as Media[] | TemporaryMedia[]
  emit('update:modelValue', updatedModelValue)
}

const addFile = async (files: File[]) => {
  if (files?.length + props.modelValue?.length + previewImages.value?.length > props.limit) {
    errorState.value = t('uploadImage.limit_files', { limit: props.limit })
    return
  }
  previewImages.value = [...previewImages.value, ...files]

  for (const file of files) {
    if (!await validateFileInput(file)) {
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
        const media = {
          id: '',
          ...data?.value?.data,
        }
        await updateModelValue(media)
      }
      previewImages.value = previewImages.value.filter(file => file.name !== data?.value?.data?.name)
    } catch (err) {
      previewImages.value = []
      const error = handleApiError(err)

      if (error.isValidationError) {
        form.value.setErrors(formatAPIErrors(error.payload.errors))
      }
      // todo: 500, เน็ตหลุด
      errorToast(err.data.message)
    }
  }
}

const removeFile = (index: number) => {
  if (props.modelValue && props.modelValue.length > 0) {
    const afterRemoveFiles = props.modelValue
    afterRemoveFiles.splice(index, 1)
    emit('update:modelValue', afterRemoveFiles)
  }
}

const validateFileInput = async (file: File) => {
  if (isExceedFileSize(file, props.fileSizeLimit)) {
    errorState.value = t('uploadImage.file_too_big', { limit: props.fileSizeLimit })
    return false
  }

  if (props.modelValue && props.limit <= props.modelValue.length) {
    errorState.value = t('uploadImage.limit_files', { limit: props.limit })
    return false
  }

  errorState.value = null
  return true
}

const isExceedFileSize = (file: File, fileSizeLimit: number) => { // for single select files
  const size = Math.round((file.size / 1024))
  return size >= fileSizeLimit * 1024
}

</script>

<template>
  <div>
    <UploadZone
        v-if="modelValue?.length < limit"
        :id="id"
        :hint="hint"
        :accept="accept"
        :multiple="multiple"
        :error="errorState || !!errors"
        :limit="limit"
        @add-file="addFile"
    />

    <div
        v-if="errorState"
        id="front-error"
        class="mt-2 flex items-center text-xs font-normal text-red-500 dark:text-red-400"
    >
      <div>{{ errorState }}</div>
    </div>

    <div
        v-if="previewImages.length"
        class="flex flex-col gap-4 md:col-span-2"
        :class="[modelValue?.length < limit ? 'mt-4' : 'mt-1']"
    >
      <div
          v-for="(file, index) in previewImages"
          :key="index"
          class="border border-gray-300 dark:border-gray-600 p-2 rounded flex items-center justify-between bg-white dark:bg-gray-900 gap-3"
      >
        <UIcon
            name="i-heroicons-document"
            class="w-6 h-6 shrink-0 text-gray-500 dark:text-gray-200"
        />
        <div class="grow text-sm text-gray-900 dark:text-white font-semibold line-clamp-2">
          {{ file.name }}
        </div>
        <UIcon
            name="i-heroicons-arrow-path"
            class="w-4 h-4 shrink-0 text-gray-500 dark:text-gray-200 animate-spin"
            aria-hidden="true"
        />
      </div>
    </div>

    <div
        v-if="modelValue && modelValue.length > 0"
        class="flex flex-col gap-4 md:col-span-2"
        :class="[modelValue?.length < limit ? 'mt-4' : 'mt-1']"
    >
      <div
          v-for="(file, index) in modelValue"
          :key="index"
          class="border border-gray-300 dark:border-gray-600 p-2 rounded flex items-center justify-between bg-white dark:bg-gray-900 gap-3"
      >
        <NuxtLink
            class="flex items-center w-full"
            :href="file?.url ?? ''"
            target="_blank"
        >
          <UIcon
              name="i-heroicons-document"
              class="w-6 h-6 shrink-0 text-gray-500 dark:text-gray-200"
          />
          <div class="grow text-sm text-gray-900 dark:text-white font-semibold line-clamp-2">
            {{ file?.name }}
          </div>
        </NuxtLink>

        <button
            type="button"
            class="flex items-center justify-center"
            @click="removeFile(index)"
        >
          <span class="sr-only">Remove File</span>
          <UIcon
              name="i-heroicons-trash"
              class="w-4 h-4 shrink-0 text-gray-500 dark:text-gray-200"
              aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
