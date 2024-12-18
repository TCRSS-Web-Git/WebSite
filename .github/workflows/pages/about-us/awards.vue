<script lang="ts" setup>
import PageBanner from "~/components/PageBanner.vue";
import {useApiFetch} from "~/composables/useApiFetch";

const {t} = useI18n()

const fetchData = async () => {
  const [awardResult, awardImageResult] = await Promise.all([
    useApiFetch<CollectionAll<Award>>(`/public/awards`, {
      transform(data: CollectionAll<Award>) {
        return data?.data
      },
    }),

    useApiFetch<CollectionAll<AwardImage>>(`/public/award-images`, {
      transform(data: CollectionAll<AwardImage>) {
        return data?.data
      },
    }),
  ])

  const awards = awardResult.data ?? []
  const awardImages = awardImageResult.data ?? []

  return {awards, awardImages}
}

const {awards, awardImages} = await fetchData()

useHead({
  title: t('awards.title'),
})

</script>
<template>
  <div>
    <PageBanner
        :pos-x="0"
        :pos-y="9"
        image-path="/about-us/banner.jpeg"
        :title="$t('awards.title')"
    />

    <UContainer class="mt-6 mb-4 lg:mt-24 lg:mb-14">
      <h1 class="mb-4 lg:mb-14 text-xl lg:text-2xl font-bold text-downriver-950">
        {{ $t('awards.title') }}
      </h1>
    </UContainer>

    <AwardsSlider v-if="awardImages" v-model:award-images="awardImages"/>

    <UContainer class="mt-6 mb-4 lg:mt-24 lg:mb-14">
      <div class="flex flex-col gap-10">
        <div v-for="award in awards" :key="award.id" class="flex flex-col gap-4">
          <div class="text-light text-lg font-bold">{{ award.title }}</div>
          <div class="text-light prose max-w-full" v-html="award.description"/>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<style scoped>

</style>
