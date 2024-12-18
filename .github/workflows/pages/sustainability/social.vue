<script setup lang="ts">
const {t} = useI18n()

useHead({
  title: t('social.title'),
})
</script>

<template>
  <div>
      <div
          class="bg-cover bg-center flex items-center justify-center"
          style="background-image: url('/sustainability/social/cover.png')"
      >
        <UContainer class="max-w-5xl my-16 lg:my-28">
          <div class="p-8 lg:p-12 rounded-xl bg-gray-400/40 backdrop-blur-md">
            <div class="flex flex-col items-center text-center  text-white gap-4 lg:gep-6">
              <span class="page-title">{{ $t('social.title') }}</span>
              <span class="page-description">{{$t('social.sub_title')}}</span>
            </div>
          </div>
        </UContainer>
      </div>

    <UContainer class="my-6 lg:my-24 text-darkest">
        <div class="text-title">{{ $t('social.good_corporate.title') }}</div>
        <div class="text-description">{{$t('social.good_corporate.description')}}</div>
      <div class="grid lg:grid-cols-2 gap-x-6 gap-y-10 my-10">
        <div>
          <div
              style="background-image: url('/sustainability/social/fair-business-engagement.png')"
              class="image-style"
          />
          <div class="text-title mt-2 lg:mt-4">{{ $t('social.fair_business.title') }}</div>
          <div class="text-description">{{$t('social.fair_business.description')}}</div>
        </div>
        <div>
          <div
              style="background-image: url('/sustainability/social/respect-to-human.png')"
              class="image-style"
          />
          <div class="text-title mt-2 lg:mt-4">{{ $t('social.respect.title') }}</div>
          <div class="text-description">{{$t('social.respect.description')}}</div>
        </div>
        <div>
          <div
              style="background-image: url('/sustainability/social/participation-in-development.png')"
              class="image-style"
          />
          <div class="text-title mt-2 lg:mt-4">{{ $t('social.participation.title') }}</div>
          <div class="text-description">{{$t('social.participation.description')}}</div>
        </div>
        <div>
          <div
               style="background-image: url('/sustainability/social/relation-to-customers-and-suppliers.png')"
               class="image-style"
          />
          <div class="text-title mt-2 lg:mt-4">{{ $t('social.relation.title') }}</div>
          <div class="text-description">{{$t('social.relation.description')}}</div>
        </div>
      </div>
    </UContainer>

      <div
          class="bg-cover"
          style="background-image: url('/sustainability/social/footter.png');"
      >
      <div class="relative w-full">
        <UContainer class="grid lg:grid-cols-2 gap-x-20 gap-y-6 items-center">
          <div class="h-56 lg:h-0">
          </div>
          <div class="py-10">
            <div class="text-title text-gray-700">{{ $t('social.safety.title') }}</div>
            <div class="text-description text-gray-500">{{$t('social.safety.description_1')}}</div>
            <div class="text-description text-gray-500">{{$t('social.safety.description_2')}}</div>
            <div class="text-description text-gray-500">{{$t('social.safety.description_3')}}</div>
          </div>
        </UContainer>
        <div class="absolute left-0 top-0 lg:top-[16%] h-56 lg:h-[35rem] lg:w-1/2 w-full">
          <div
              style="background-image: url('/sustainability/social/company.png')"
              class="bg-cover bg-center h-56 lg:h-[35rem] w-full"
          />
        </div>

      </div>
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
  @apply text-sm lg:text-base font-normal mt-2 lg:mt-4
}

.image-style {
  @apply bg-cover bg-center h-56 lg:h-72 w-full
}
</style>
