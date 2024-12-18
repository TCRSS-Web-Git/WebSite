<script setup lang="ts">
import {useApiFetch} from "~/composables/useApiFetch";
const route = useRoute()
const localePath = useLocalePath()

const filters = reactive({
  per_page: 8,
  page: parseInt(route.query?.page ?? 1),
})
const {data: newsLists} = await useApiFetch<Collection<Blog>>('/public/blogs', {
  query: filters,
  watch: [filters],
})
</script>

<template>
  <div class="my-10 lg:my-20">
    <UContainer class="mb-4 lg:mb-10 ">
      <div class="flex items-center justify-between mb-10">
        <span class="title text-downriver-950">{{ $t('home.news.title') }}</span>
        <UButton variant="link" :to="localePath('/news')" :label="$t('home.news.button')" class="text-downriver-950 hover:text-downriver-900"/>
      </div>

        <div class="hidden lg:grid gap-6">
          <div class="grid grid-cols-2 gap-6">
              <NuxtLink :to="localePath(`/news/${newsLists?.data[0]?.slug}`)">
                <div
                    class="h-full w-full bg-center bg-cover lg:py-6 lg:px-8 px-4 py-2 flex items-end"
                    :style="`background-image: url(${newsLists?.data[0]?.thumbnail?.url})`"
                >
                  <div class="text-lg lg:text-2xl font-bold text-white text-wrap lg:max-w-lg">{{newsLists?.data[0]?.title}}</div>
                </div>
              </NuxtLink>
            <div class="grid gap-4">
              <div v-for="news in newsLists?.data.slice(1,4)" :key="news.id">
                <NuxtLink :to="localePath(`/news/${news?.slug}`)" class="grid grid-cols-3 gap-6">
                  <div class="w-full aspect-video">
                    <img class="w-full h-full object-center object-cover" :src="news?.thumbnail?.url" :alt="news?.thumbnail?.name">
                  </div>
                  <div class="flex flex-col text-sm gap-2 col-span-2 justify-between">
                    <div class="text-light text-base font-bold">
                      {{ news.title }}
                    </div>
                    <div class="text-light text-sm font-normal">
                      <span class="line-clamp-3 text-wrap">{{ news.meta_description}}</span>
                    </div>
                    <div class="flex gap-2">
                      <div v-if="news.tags?.length >= 1" class="flex gap-2">
                        <span class="text-downriver-950">{{ news.tags[0] }}</span>
                        <span class="text-gray-700">|</span>
                      </div>
                      <span class="text-gray-700">{{ formatLongDate(news.updated_at) }}</span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="flex gap-6">
            <NewsCard
                v-for="news in newsLists?.data.slice(4,10)"
                :key="news.id"
                :news="news"
                class="col-span-1"
            />
          </div>
        </div>

      <div class="grid lg:hidden gap-4">
          <NuxtLink :to="localePath(`/news/${newsLists?.data[0]?.slug}`)">
            <div
                class="h-64 w-full bg-center bg-cover lg:py-6 lg:px-8 px-4 py-2 flex items-end"
                :style="`background-image: url(${newsLists?.data[0]?.thumbnail?.url})`"
            >
              <div class="text-lg lg:text-2xl font-bold text-white text-wrap lg:max-w-lg">{{newsLists?.data[0]?.title}}</div>
            </div>
          </NuxtLink>
        <div v-for="news in newsLists?.data.slice(1,10)" :key="news.id">
          <NuxtLink :to="localePath(`/news/${news?.slug}`)" class="grid grid-cols-2 gap-4">
            <div class="w-full aspect-video">
              <img class="w-full h-full object-center object-cover aspect-[3/2]" :src="news?.thumbnail?.url" :alt="news?.thumbnail?.name">
            </div>
            <div class="flex flex-col text-xs gap-2 justify-between">
              <div class="text-light text-sm font-bold">
                {{ news.title }}
              </div>
              <div class="flex gap-2">
                <div v-if="news.tags?.length >= 1" class="flex gap-2">
                  <span class="text-downriver-950">{{ news.tags[0] }}</span>
                  <span class="text-gray-700">|</span>
                </div>
                <span class="text-gray-700">{{ formatLongDate(news.updated_at) }}</span>
              </div>

            </div>
          </NuxtLink>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>

</style>
