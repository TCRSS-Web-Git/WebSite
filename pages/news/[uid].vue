<script setup lang="ts">

import {useApiFetch} from "~/composables/useApiFetch";

import NewsCard from "~/components/News/NewsCard.vue";
import PageBanner from "~/components/PageBanner.vue";

const route = useRoute()
const localePath = useLocalePath()
const {t} = useI18n()

const links = computed(() => [
  {
    label: t('news.all_news'),
    to: localePath('/news'),
  },
  {
    label: data.value?.data?.title || '',
  },
])

interface BlogsWithOtherBlogs {
  data: Item<Blog>,
  other_blogs: CollectionAll<Blog>
}

const {data} = await useApiFetch<Item<BlogsWithOtherBlogs>>(`/public/blogs/${route.params.uid}`,)

useHead({
  title: computed(() => data.value?.data?.meta_title || ''),
})

useSeoMeta({
  title: data.value?.data?.meta_title || '',
  ogTitle: data.value?.data?.meta_title || '',
  description: data.value?.data?.meta_description || '',
  ogDescription: data.value?.data?.meta_description || '',
  ogImage: data.value?.data?.thumbnail?.url,
})

</script>


<template>
  <PageBanner
      :pos-x="0"
      :pos-y="9"
      image-path="/news/news-banner.jpeg"
      :title="$t('news.title')"
  />

  <UContainer class="mt-6 mb-4 lg:mt-24 lg:mb-14">
    <UBreadcrumb :links="links" class="mt-8 mb-4 lg:mt-24 lg:mb-14"/>
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 mt-4 lg:mt-10">
      <div class="col-span-2">
        <div class="text-xl lg:text-2xl font-bold text-downriver-950">
          {{ data?.data?.title }}
        </div>
        <div class="w-full h-40 lg:h-[606px] mt-6">
          <img class="w-full h-full object-center object-cover" :src="data?.data?.cover?.url" :alt="data?.data?.cover?.name">
        </div>
        <div class="flex text-gray-700 my-4 text-base">
          {{ formatLongDate(data?.data?.updated_at || 0) }}
        </div>
        <div class="text-light prose max-w-full" v-html="data?.data?.body"/>
        <div v-if="data?.data?.tags.length > 0" class="flex flex-col">
          <div class="text-gray-700 my-4 text-sm lg:text-base">
            TAG
          </div>
          <div class="flex gap-4">
            <div v-for="item in data?.data?.tags" :key="item">
              <UBadge
                  :label="item"
                  color="gray"
                  variant="solid"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 flex flex-col mt-4 lg:mt-0">
        <div class="text-xl font-bold text-light">
          {{ $t('news.other_news') }}
        </div>
        <div class="flex flex-col gap-y-6 lg:gap-y-14 mt-6">
          <NewsCard
              v-for="news in data?.other_blogs"
              :key="news.id"
              :news="news"
              class="col-span-1"
          />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>

</style>
