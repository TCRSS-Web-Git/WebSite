<script setup lang="ts">
import {Autoplay, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';

const {t} = useI18n()
const lists = ref([
  {
    image: '/homepage/value1.webp',
    title: computed(() => t('home.value.content_1.title')),
    description: computed(() => t('home.value.content_1.description'))
  },
  {
    image: '/homepage/value2.webp',
    title: computed(() => t('home.value.content_2.title')),
    description: computed(() => t('home.value.content_2.description'))
  },
  {
    image: '/homepage/value3.webp',
    title: computed(() => t('home.value.content_3.title')),
    description: computed(() => t('home.value.content_3.description'))
  },
  {
    image: '/homepage/value4.webp',
    title: computed(() => t('home.value.content_4.title')),
    description: computed(() => t('home.value.content_4.description'))
  },
  {
    image: '/homepage/value5.webp',
    title: computed(() => t('home.value.content_5.title')),
    description: computed(() => t('home.value.content_5.description'))
  }
])
</script>

<template>
  <div>
    <swiper
        :modules="[Navigation, Autoplay]"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :loop="true"
        :slides-per-view="'auto'"
        :space-between="150"
    >
      <swiper-slide v-for="item in lists" :key="item?.title">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-6">
          <img
              class="w-full h-auto object-center object-cover "
              :src="item?.image"
              :alt="item?.title"
              loading="lazy"
          >
          <div class="flex flex-col justify-end">
            <div class="title">{{item.title}}</div>
            <div class="description">{{item.description}}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.title {
  @apply text-base lg:text-xl xl:text-3xl font-bold text-gray-600 text-wrap xl:text-balance w-full
}
.description {
  @apply text-base lg:text-xl xl:text-3xl font-normal text-gray-600 text-wrap xl:text-balance w-full lg:mt-6
}
.slide-content {
  @apply flex justify-center items-center;
}

.swiper-slide {
  @apply px-6 lg:px-0 w-full lg:w-[80%]
}

.swiper-pagination-bullet {
  @apply w-3 h-3 lg:w-4 lg:h-4 opacity-30 rounded-full;
  transition: background-color 0.3s;
}

.swiper-pagination-bullet-active {
  @apply opacity-100;
  background-color: #F1F5F9;
}

.swiper-pagination {
  @apply flex justify-center gap-2 items-center;
}
</style>
