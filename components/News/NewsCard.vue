<script setup lang="ts">

interface Prop {
  news: Blog
}

defineProps<Prop>()

const localePath = useLocalePath()


</script>


<template>
  <NuxtLink :to="localePath(`/news/${news?.slug}`)">
    <div class="w-full aspect-video">
      <img class="w-full h-full object-center object-cover" :src="news?.thumbnail?.url" :alt="news?.thumbnail?.name">
    </div>
    <div class="flex my-2 lg:my-4 text-sm gap-2">
      <div v-if="news.tags?.length >= 1" class="flex gap-2">
        <span class="text-downriver-950">{{ news.tags[0] }}</span>
        <span class="text-gray-700">|</span>
      </div>
      <span class="text-gray-700">{{ formatLongDate(news.updated_at) }}</span>
    </div>
    <div class="text-light text-base font-bold">
      {{ news.title }}
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
