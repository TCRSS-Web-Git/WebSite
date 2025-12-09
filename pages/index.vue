<script setup lang="ts">
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const localePath = useLocalePath()

const {data: popups} = await useApiFetch<Collection<Popup>>('/public/popups', {
  method: 'GET',
})

const isOpenPopup = ref(false)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.from("#heroSection", {
    x: '-100%',
    ease: "power2.out",
    opacity: 0,
    duration: 1
  });

  gsap.from("#visionSection", {
    scrollTrigger: {
      trigger: "#visionSection",
      start: "top center",
      toggleActions: "play none none none",
    },
    x: '100%',
    ease: "power2.out",
    opacity: 0,
    duration: 0.5
  });

  gsap.from("#valuesSection", {
    scrollTrigger: {
      trigger: "#valuesSection",
      start: "top center",
      toggleActions: "play none none none"
    },
    opacity: 0,
    ease: "power2.out",
    duration: 1.5
  });

  gsap.from("#newsSection", {
    scrollTrigger: {
      trigger: "#newsSectionTrigger",
      start: "top center",
      toggleActions: "play none none none"
    },
    y: "120%",
    ease: "power2.out",
    duration: 1,
  });

  gsap.from("#footerSection", {
    scrollTrigger: {
      trigger: "#footerSection",
      start: "top bottom",
      toggleActions: "play none none none"
    },
    x: '100%',
    opacity: 0,
    ease: "power2.out",
    duration: 1
  });

})

watchEffect(() => {
  if (popups.value && popups.value.data.length > 0) {
    isOpenPopup.value = true
  }
})
</script>


<template>
  <div v-if="popups && popups.data.length > 0">
    <Popup v-model:image-url="popups.data[0].image.url" v-model:is-open="isOpenPopup" />
  </div>
  <div
      class="bg-cover bg-center flex items-center justify-center bg-[url('/homepage/cover-mobile.webp')] lg:bg-[url('/homepage/cover.webp')]"
      style="background-image: url('/homepage/cover-mobile.webp')"
  >
    <UContainer class="grid lg:grid-cols-2 my-16 lg:my-28">
      <div/>
      <div
          id="heroSection"
          class=" p-8 lg:p-12 rounded-xl max-w-2xl bg-gray-400/40 backdrop-blur-md">
        <div class="flex flex-col items-start  text-white gap-4 lg:gep-6">
          <span class="title">{{ $t('home.header.label') }}</span>
          <span class="description">{{$t('home.header.description')}}</span>
          <UButton
              :to="localePath('/about-us/company-profile')"
              :label="$t('home.header.button')"
              class="bg-downriver-950 hover:bg-downriver-900"
              size="lg"
          />
        </div>
      </div>
    </UContainer>
  </div>

  <div class="my-10 lg:my-20 overflow-hidden">
    <UContainer class="mb-4 lg:mb-10">
      <span class="title text-downriver-950">{{ $t('home.vision.title') }}</span>
      <UDivider class="lg:my-8 my-4"/>
      <span class="sub-title text-light">{{ $t('home.vision.sub_title') }}</span>
    </UContainer>
    <VisionSlider id="visionSection"/>
  </div>

  <div class="my-10 lg:my-20 overflow-hidden">
  <UContainer class="mb-4 lg:mb-10 text-center">
    <span class="title text-downriver-950">{{ $t('home.value.title') }}</span>
  </UContainer>
  <ValuesSlider id="valuesSection" class="will-change-auto"/>
  </div>


  <div class="overflow-hidden">
    <div id="newsSectionTrigger">
    <NewsSection id="newsSection"/>
    </div>
  </div>


  <div
      class="bg-cover bg-center flex items-center justify-center overflow-hidden"
      style="background-image: url('/homepage/footer.webp')"
  >
    <UContainer id='footerSection' class="grid lg:grid-cols-12 my-16 lg:my-28">
      <div
          class="p-8 lg:p-12 rounded-xl max-w-2xl col-span-5 bg-gray-400/40 backdrop-blur-sm">
        <div class="flex flex-col items-start  text-white gap-4 lg:gep-6">
          <span class="title">{{ $t('home.footer.label') }}</span>
          <span class="description">{{$t('home.footer.description')}}</span>
          <UButton
              :to="localePath('/careers')"
              :label="$t('home.footer.button')"
              class="bg-downriver-950 hover:bg-downriver-900"
              size="lg"
          />
        </div>
      </div>
      <div/>
    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-lg lg:text-3xl font-bold
}

.description {
  @apply text-base lg:text-xl font-normal
}

.sub-title {
  @apply text-lg lg:text-2xl font-normal
}
</style>
