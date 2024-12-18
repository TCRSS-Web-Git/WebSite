<script setup lang="ts">

import {useApiFetch} from "~/composables/useApiFetch";

import NewsCard from "~/components/News/NewsCard.vue";
import PageBanner from "~/components/PageBanner.vue";

const route = useRoute()
const {t} = useI18n()

useHead({
  title: t('news.title'),
})

const filters = reactive({
  per_page: 9,
  page: parseInt(route.query?.page ?? 1),
})

const {data} = await useApiFetch<Collection<Blog>>('/public/blogs', {
  query: filters,
  watch: [filters],
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
    <h1 class="mb-4 lg:mb-14 text-xl lg:text-2xl font-bold text-downriver-950">
      {{ $t('news.all_news') }}
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-14">
      <NewsCard
          v-for="news in data?.data"
          :key="news.id"
          :news="news"
          class="col-span-1"
      />
    </div>
    <div class="mt-6 mb-24 flex justify-end">
      <UPagination
          v-model="filters.page"
          :page-count="data?.meta?.per_page ?? 10"
          :total="data?.meta?.total ?? 0"
          :to="(page: number) => ({
            query: { ...filters, page }
          })"
      />
    </div>
  </UContainer>


</template>

<style scoped>

</style>
