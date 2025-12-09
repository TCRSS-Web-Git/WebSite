<script setup lang="ts">
const imageUrl = defineModel("imageUrl", {
  default: "",
  type: String,
});

const isOpen = defineModel("isOpen", {
  default: false,
  type: Boolean,
});

const handleClose = () => {
  isOpen.value = false;
};
</script>

<template>
  <div>
    <UModal
      v-model="isOpen"
      :ui="{
        background: 'bg-transparent shadow-none',
        container: 'flex items-center',
      }"
    >
      <div v-if="imageUrl" class="w-full h-full flex justify-center">
        <div class="relative">
          <div
            class="absolute -top-10 -right-10 cursor-pointer rounded-full bg-white/30"
            @click="handleClose"
          >
            <UButton
              icon="i-heroicons-x-mark"
              variant="ghost"
              color="gray"
              class="rounded-full"
            />
          </div>
          <img
            :src="imageUrl"
            alt="Popup"
            class="popup-image object-contain rounded-lg"
          />
        </div>
      </div>

      <div v-else class="text-gray-500">No image to preview</div>
    </UModal>
  </div>
</template>

<style scoped>
.popup-image {
  max-width: 80vw;
  max-height: 80vh;
}
</style>
