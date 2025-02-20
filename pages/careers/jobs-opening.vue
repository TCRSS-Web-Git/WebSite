<script setup lang="ts">
import {useApiFetch} from "~/composables/useApiFetch";
import CareerCard from "~/components/Career/CareerCard.vue";
import CareerLongCard from "~/components/Career/CareerLongCard.vue";

const route = useRoute()
const {t} = useI18n()

useHead({
  title: t('careers.open_positions'),
})

const filters = reactive({
  per_page: 8,
  page: parseInt(route.query?.page ?? 1),
})

const {data: careers} = await useApiFetch<Collection<Career>>('/public/careers', {
  method: 'GET',
  query: filters,
  watch: [filters],
})
</script>

<template>
  <div>
    <UContainer class="mt-6 lg:mt-24 mb-10 lg:mb-20">
      <div class="flex justify-between mb-4 lg:mb-14">
        <h1 class="title">{{ $t('careers.open_positions') }}</h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 lg:mb-14">
        <div
            v-for="(career, index) in careers?.data" :key="index"
        >
          <CareerLongCard :career="career" class="hidden lg:block"/>
          <CareerCard :career="career" class="block lg:hidden"/>
        </div>
      </div>

      <div class="flex justify-end">
        <UPagination
            v-model="filters.page"
            :page-count="careers?.meta?.per_page ?? 10"
            :total="careers?.meta?.total ?? 0"
            :to="(page: number) => ({
            query: { ...filters, page }
          })"
        />
      </div>

    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}
</style>
