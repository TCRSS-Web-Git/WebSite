<script lang="ts" setup>

import {useApiFetch} from "~/composables/useApiFetch";
import PageBanner from "~/components/PageBanner.vue";

const route = useRoute()
const localePath = useLocalePath()
const {t} = useI18n()

const links = computed(() => [
  {
    label: t('careers.view_job_open'),
    to: localePath('/careers/jobs-opening'),
  },
  {
    label: data.value?.data?.title || '',
  },
])

const {data} = await useApiFetch<Item<Career>>(`/public/careers/${route.params.uid}`,)

useHead({
  title: data.value?.data?.meta_title || '',
})

useSeoMeta({
  title: data.value?.data?.meta_title || '',
  ogTitle: data.value?.data?.meta_title || '',
  description: data.value?.data?.meta_description || '',
  ogDescription: data.value?.data?.meta_description || '',
})

</script>


<template>
  <PageBanner
      :pos-x="0"
      :pos-y="50"
      image-path="/careers/careers-banner.jpeg"
      :title="data?.data?.title"
  >
    <template #subTitle>
      <div class="text-white text-base font-normal hidden lg:flex gap-4 items-center justify-center">
        <div class="flex gap-2 items-center">
          <UIcon name="i-heroicons-building-office" class="h-4 w-4"/>
          <span>{{ data?.data?.department?.name }}</span>
        </div>
        <div class="flex gap-2 items-center">
          <UIcon name="i-heroicons-map-pin" class="h-4 w-4"/>
          <span>{{ data?.data?.location?.name }}</span>
        </div>
        <span>{{ data?.data?.type?.name }}</span>
      </div>
    </template>
  </PageBanner>
  <UContainer class="my-6 lg:my-24 text-darkest">
    <UBreadcrumb :links="links" class="mt-8 mb-10 lg:mt-24 lg:mb-10"/>
    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-10 lg:mb-14">
      <div class="mb-4 lg:mb-0 w-full">
        <h1 class="text-xl font-bold text-downriver-950 mb-4 lg:mb-2">{{ data.data.title }}</h1>
        <div
            class="flex flex-col lg:flex-row gap-6 items-start lg:items-center text-light text-sm font-normal lg:text-base font-normal">
          <div class="flex items-center gap-2">
            <UIcon class="h-5 w-5 " name="i-heroicons-outline-building-office"/>
            <span>{{ data.data.department.name }}</span>
          </div>
          <div class="flex items-center gap-2">
            <UIcon class="h-5 w-5" name="i-heroicons-outline-map-pin"/>
            <span>{{ data.data.location.name }}</span>
          </div>
          <div class="flex justify-between lg:gap-6 w-full lg:w-auto items-center">
            <span>{{ data.data.type.name }}</span>
            <span>{{ useLocaleTimeAgo(data.data.created_at) }}</span>
          </div>
        </div>
      </div>
      <UButton
          :label="$t('careers.apply_job')"
          :to="localePath(`/careers/application/${data.data.id}`)"
          aria-label="Locale"
          class="w-full lg:w-auto flex justify-center items-center bg-downriver-950 hover:bg-downriver-900"
      />
    </div>
    <div>
      <div class="text-light prose max-w-full" v-html="data?.data?.body"/>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
