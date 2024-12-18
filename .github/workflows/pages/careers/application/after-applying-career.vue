<script setup lang="ts">

import PageBanner from "~/components/PageBanner.vue";

const {t} = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('careers.title'),
})

</script>


<template>
  <PageBanner
      :pos-x="0"
      :pos-y="9"
      image-path="/contact-us/contact-us-banner.png"
      :title="t('careers.title')"
  >
  </PageBanner>
  <UContainer class="mt-6 mb-12 lg:mt-24 lg:mb-14">
    <div class="mx-0 lg:mx-64 flex flex-col gap-6">
      <div class="text-xl lg:text-2xl font-bold text-downriver-950 text-center">
        {{$t('careers.thank_you_for_applying')}}
      </div>
      <div class="flex justify-center">
        <UButton
            size="lg"
            :label="t('careers.go_to_home_page')"
            class="bg-downriver-950 hover:bg-downriver-900"
            :to="localePath('/')"
        />
      </div>

    </div>
  </UContainer>
</template>

<style scoped>

</style>
