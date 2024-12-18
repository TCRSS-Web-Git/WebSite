<script setup lang="ts">
import {Autoplay, Navigation} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/vue';

const {t} = useI18n()
const lists = ref([
  {
    image: '/homepage/vision1.webp',
    message: computed(() => t('home.vision.content_1'))
  },
  {
    image: '/homepage/vision2.webp',
    message: computed(() => t('home.vision.content_2'))
  },
  {
    image: '/homepage/vision3.webp',
    message: computed(() => t('home.vision.content_3'))
  },
  {
    image: '/homepage/vision4.webp',
    message: computed(() => t('home.vision.content_4'))
  },
  {
    image: '/homepage/vision5.webp',
    message: computed(() => t('home.vision.content_5'))
  }
])
</script>

<template>
  <div>
    <swiper
        :modules="[Navigation, Autoplay]"
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
        :centeredSlides="true"
        :loop="true"
        :slides-per-view="'auto'"
        :spaceBetween="20"
    >
      <swiper-slide v-for="item in lists" :key="item?.message">
        <div
            class="h-64 lg:h-[30rem] bg-center bg-cover lg:py-6 lg:px-8 px-4 py-2"
            :style="`background-image: url(${item.image})`"
        >
          <div class="label">{{item.message}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.label {
  @apply text-lg lg:text-2xl font-bold text-white text-wrap lg:max-w-lg
}

.slide-content {
  @apply flex justify-center items-center;
}

.swiper-slide {
  @apply w-[85%] lg:w-1/2
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
