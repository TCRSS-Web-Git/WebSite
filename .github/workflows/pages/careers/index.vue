<script setup lang="ts">
import {useApiFetch} from "~/composables/useApiFetch";
import CareerCard from "~/components/Career/CareerCard.vue";

const {t} = useI18n()

useHead({
  title: t('careers.title'),
})

const localePath = useLocalePath()

const {data: careers} = await useApiFetch<Collection<Career>>('/public/careers', {
  method: 'GET',
  query: {
    per_page: 5,
  }
})
</script>

<template>
  <div>
    <!-- top banner-->
    <div
        class="bg-cover bg-center flex items-center justify-center"
        style="background-image: url('/careers/top-banner.jpeg');background-position:50% 50%;"
    >
      <UContainer class="grid lg:grid-cols-2 my-16 lg:my-28">
        <div/>
        <div
            class="p-8 lg:p-12 rounded-lg max-w-2xl bg-gray-400/40 backdrop-blur-md">
          <div class="flex flex-col items-start  text-white gap-4 lg:gep-6">
            <span class="top-banner-title">{{ $t('careers.top_banner_title') }}</span>
            <span class="top-banner-description">{{ $t('careers.top_banner_sub_title') }}</span>
          </div>
        </div>
      </UContainer>
    </div>

    <!-- second top banner -->
    <div class="relative bg-gray-100 h-[38rem] lg:h-[34rem] ">
      <div class="w-full h-1/2 lg:w-1/2 lg:h-full">
        <img src="/careers/gray-leaves-background.png" alt="bg" class="w-full h-full object-cover object-center">
      </div>
      <div class="absolute top-0 left-0 w-full flex justify-between items-center h-full ">
        <UContainer class="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 h-full">
          <div class="flex items-center lg:pr-28">
            <div class="flex flex-col items-start text-white gap-4">
              <span class="text-blue-950 second-top-banner-description">{{ $t('careers.come_and_join_us') }}</span>
              <span class="text-indigo-950 second-top-banner-title">
              {{ $t('careers.we_provides_opportunities') }}
            </span>
            </div>
          </div>
          <div class="flex items-stretch overflow-clip">
            <div
                class="bg-cover shrink-0 w-1/3 h-full"
                style="background-image: url('/careers/second-top-banner-1.jpeg');background-position:55% 0;"
            />
            <div
                class="self-end bg-cover shrink-0 w-1/3 h-[10.5rem] lg:h-[25rem] bg-left-top"
                style="background-image: url('/careers/second-top-banner-2.jpeg');"
            />
            <div
                class="bg-cover w-1/3 h-[10.5rem] lg:h-[25rem] bg-left-top"
                style="background-image: url('/careers/second-top-banner-3.jpeg');background-position:50% 50%;"
            />
          </div>
        </UContainer>
      </div>
    </div>

    <!-- open positions-->
    <UContainer class="mt-6 lg:mt-24 lg:mb-20">
      <div class="flex justify-between mb-4 lg:mb-14">
        <h1 class="title">{{ $t('careers.open_positions') }}</h1>
        <UButton
            :to="localePath('/careers/jobs-opening')"
            :label="$t('careers.view_all_job')"
            color="primary"
            variant="outline"
            class="bg-white text-downriver-950 border-downriver-950 text-sm font-medium"
        />
      </div>

      <div class="flex flex-col gap-4 mb-8">
        <div
            v-for="(career, index) in careers?.data" :key="index"
        >
          <CareerCard :career="career"/>
          <UDivider v-if="index < careers?.data?.length -1" class="mt-4 hidden lg:block"/>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}

.top-banner-title {
  @apply text-xl lg:text-3xl font-bold
}

.top-banner-description {
  @apply text-sm lg:text-lg font-normal
}

.second-top-banner-title {
  @apply text-lg lg:text-3xl font-bold
}

.second-top-banner-description {
  @apply text-base lg:text-lg font-normal
}
</style>
