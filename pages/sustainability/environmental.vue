<script lang="ts" setup>
const {t} = useI18n()

useHead({
  title: t('environmental.title'),
})
</script>

<template>
  <div>
    <div
        class="bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/sustainability/environmental/cover.png')"
    >
      <UContainer class="my-16 lg:my-28">
        <div class="p-8 lg:p-12 rounded-xl bg-gray-400/40 backdrop-blur-md">
          <div class="flex flex-col items-center text-center  text-white gap-4 lg:gep-6">
            <span class="page-title">{{ $t('environmental.title') }}</span>
            <span class="page-description">{{$t('environmental.sub_title')}}</span>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="my-6 lg:my-24 text-darkest">
      <div class="grid lg:grid-cols-2 gap-x-6 pb-10">
        <img class="object-cover bg-cover h-[15rem] lg:h-80 w-full mb-4 lg:mb-0"
             src="/sustainability/environmental/energy.png" alt="environmental-energy">
        <div>
          <p class="text-title mb-2">{{ $t('environmental.energy.title') }}</p>
          <p class="text-description">{{ $t('environmental.energy.description') }}</p>
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-x-6 pb-10">
        <div class="order-2 lg:order-1">
          <p class="text-title mb-2">{{ $t('environmental.water.title') }}</p>
          <p class="text-description">{{ $t('environmental.water.description') }}</p>
        </div>
        <img class="object-cover bg-cover h-[15rem] lg:h-80 w-full order-1 lg:order-2 mb-4 lg:mb-0"
             src="/sustainability/environmental/water.png" alt="environmental-water">
      </div>
      <div class="grid lg:grid-cols-2 gap-x-6 pb-10">
        <img class="object-cover bg-cover h-[13rem] lg:h-80 w-full mb-4 lg:mb-0"
             src="/sustainability/environmental/waste.png" alt="environmental-waste">
        <div>
          <p class="text-title mb-2">{{ $t('environmental.waste.title') }}</p>
          <p class="text-description">{{ $t('environmental.waste.description') }}</p>
        </div>
      </div>
    </UContainer>

      <div
          class="bg-cover bg-center flex items-center justify-center"
          style="background-image: url('/sustainability/environmental/air.png')"
      >
        <UContainer class="my-8 lg:my-16">
            <div class="p-8 lg:p-12 rounded-lg  bg-gray-400/40 backdrop-blur-md">
              <div class="flex flex-col items-start text-white gap-2 lg:gap-6">
                <span class="text-title">{{ $t('environmental.air.title') }}</span>
                <span class="text-description">{{ $t('environmental.air.description') }}</span>
              </div>
            </div>
        </UContainer>
      </div>

      <div
          class="bg-cover bg-center flex items-center justify-center"
          style="background-image: url('/sustainability/environmental/climate.png')">
        <UContainer class="my-8 lg:my-28">
            <div class="flex flex-col items-start gap-2 lg:gap-6">
              <p class="text-title">{{ $t('environmental.climate.title') }}</p>
              <p class="text-description">{{ $t('environmental.climate.description') }}</p>
          </div>
        </UContainer>
      </div>
  </div>
</template>

<style scoped>
.page-title {
  @apply text-xl lg:text-2xl font-bold
}

.page-description {
  @apply text-sm lg:text-base font-normal
}

.text-title {
  @apply text-base lg:text-lg font-bold
}

.text-description {
  @apply text-sm lg:text-base font-normal
}
</style>
