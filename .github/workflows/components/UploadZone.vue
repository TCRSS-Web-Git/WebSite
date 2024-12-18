<script setup lang="ts">

interface PropInterface {
  id: string | number;
  hint: string;
  accept: string;
  multiple: boolean;
  error?: string | undefined;
}

withDefaults(defineProps<PropInterface>(), {
  error: undefined,
})

const isDragging = ref(false)
const dropZone = ref<HTMLDivElement | null>(null)

const emit = defineEmits<{
  'add-file': [File[]]
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
    emit('add-file', filesArray)
  }
}

const fileChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement

  if (inputElement?.files) {
    const filesArray = Array.from(inputElement.files)
    emit('add-file', filesArray)
  }
}
</script>

<template>
  <div class="mt-1 md:mt-0 md:col-span-2" @dragover.prevent @drop.prevent>
    <div
        ref="dropZone"
        class="w-full flex justify-center p-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md bg-white dark:bg-gray-900"
        :class="{'border-primary-500 dark:opacity-75': isDragging, 'border-red-500 dark:border-red-400': error}"
        @drop.prevent="dragFile"
    >
      <div class="space-y-2 text-center py-6">
        <UIcon
            name="i-heroicons-arrow-up-tray"
            class="w-6 h-6 shrink-0 text-gray-500 dark:text-gray-200 mx-auto"
        />
        <div class="flex text-sm justify-center items-center text-gray-600">
          <label
              :for="id"
              class="relative cursor-pointer rounded-md py-1 px-2 focus-within:outline-none focus-within:ring-1 focus-within:ring-primary-500"
          >
            <span class="text-primary-500 hover:text-primary-600 text-xs font-medium">{{ $t('common.upload') }}</span>
            <input
                :id="id"
                ref="file"
                :name="id"
                type="file"
                :multiple="multiple"
                class="sr-only"
                :accept="accept"
                @change="fileChange"
            >
          </label>
          <p class="pl-1 text-gray-500 dark:text-gray-400 font-normal">
            {{ $t('uploadImage.or_drag_to_upload') }}
          </p>
        </div>
        <div class="text-xs text-gray-400 dark:text-gray-500 font-normal">
          {{ hint ? hint : $t('uploadImage.change_image_info') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
