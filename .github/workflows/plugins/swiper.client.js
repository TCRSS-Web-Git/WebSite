import {defineNuxtPlugin} from '#app'
import {Swiper, SwiperSlide} from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import required modules
// import {Navigation, Pagination, Autoplay} from 'swiper/modules'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
})
