<script setup lang="ts">
import {Navigation, Autoplay} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue';

const awardImages = defineModel<Banner[]>('awardImages', {default: []})

</script>

<template>
  <swiper
    :modules="[Navigation, Autoplay]"
    :autoplay="{ delay: 2000, disableOnInteraction: false }"
    :centeredSlides="true"
    :loop="true"
    :slides-per-view="'auto'"
    :spaceBetween="20"
  >
    <swiper-slide v-for="banner in awardImages" :key="banner?.id">
      <img
        class="w-full h-full object-center lg:object-cover"
        :src="banner?.image?.url"
        :alt="banner?.image?.name"
      >
    </swiper-slide>
  </swiper>
</template>
<style>
.slide-content {
  @apply flex justify-center items-center min-h-[180px] h-[180px] lg:min-h-[557px] lg:h-[557px] xl:h-full;
}

.swiper-slide {
  width: 70%;
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
