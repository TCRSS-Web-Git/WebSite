<script setup lang="ts">
interface ProductAndService {
  readonly id: string
  title: string
  published_at: string
  created_at: string
  updated_at: string
  cover: Media
  file: File
  status: string
  translations?: {
    th: { title: string }
    en: { title: string }
  }
}

const {t} = useI18n()

useHead({
  title: t('common.products_and_services'),
})

const {data} = await useApiFetch<Collection<ProductAndService>>('/public/products-and-services')
</script>

<template>
  <div>
  <PageBanner
      :title="$t('common.products_and_services')"
      image-path="/products-and-services/cover.jpg"
  />

  <UContainer class="my-6 lg:my-24 text-darkest">
    <h1 class="title mb-4 lg:mb-14">{{ $t('common.products_and_services') }}</h1>

    <div class="custom-grid">
      <div v-for="item in data?.data" :key="item.id" class="w-fit">
        <div class="max-w-64 h-full flex flex-col">
          <img
              :src="item.cover?.url"
              :alt="item.cover?.name"
              class="object-cover object-center w-full aspect-[4/5]"
          >
          <div class="grow">
            <h3 class="file-title">{{ item.title }}</h3>
          </div>
          <div>
            <UButton
                block
                icon="i-heroicons-eye"
                :to="item.file.url"
                target="_blank"
                :label="$t('common.view')"
                class="bg-downriver-950 hover:bg-downriver-900"
            />
          </div>
        </div>
      </div>
    </div>

  </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}

.file-title {
  @apply text-xs lg:text-base font-bold text-gray-500 line-clamp-2 text-wrap my-3
}

.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 16px;
}

@media screen and (max-width: 1023px) {
  .custom-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
</style>
