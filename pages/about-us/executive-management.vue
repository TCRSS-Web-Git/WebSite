<script lang="ts" setup>
import PageBanner from "~/components/PageBanner.vue";
import {useApiFetch} from "~/composables/useApiFetch";

const {t} = useI18n()

useHead({
  title: t('executive_management.title'),
})

const {data} = await useApiFetch<Collection<Member>>('/public/executives')

// Group members into hierarchy tiers (by group_order); the API already returns them
// sorted by group_order then order.
const tiers = computed<Member[][]>(() => {
  const list = data.value?.data ?? []
  const map = new Map<number, Member[]>()
  for (const member of list) {
    const g = member.group_order ?? 0
    if (!map.has(g)) map.set(g, [])
    map.get(g)!.push(member)
  }
  return [...map.keys()].sort((a, b) => a - b).map(k => map.get(k)!)
})
</script>
<template>
  <div>
    <PageBanner
        :pos-x="0"
        :pos-y="9"
        image-path="/about-us/banner.jpeg"
        :title="$t('about_us')"
    />

    <UContainer class="mt-6 lg:mt-24">
      <h1 class="mb-4 lg:mb-14 title">
        {{ $t('executive_management.title') }}
      </h1>

      <div
          v-for="(tier, tierIndex) in tiers"
          :key="tierIndex"
          class="mb-6 lg:mb-12 flex flex-wrap justify-left gap-x-6 gap-y-6 lg:gap-y-12"
      >
        <div
            v-for="leader in tier"
            :key="leader.id"
            class="w-full sm:w-80 lg:w-96"
        >
          <div class="w-full lg:h-60 flex justify-center items-center mb-6 bg-gray-200">
            <img
                v-if="leader.image?.url"
                :alt="leader.name"
                :src="leader.image.url"
                class="h-full max-h-60 mx-auto object-contain"
            >
          </div>
          <h3 class="leader-name">{{ leader.name }}</h3>
          <pre class="leader-position" style="white-space: pre-line;">{{ leader.position }}</pre>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950;
}

.leader-name {
  @apply text-base font-bold text-gray-500 dark:text-gray-300;
}

.leader-position {
  @apply text-base font-normal text-gray-500 dark:text-gray-300;
  font-family: inherit;
}
</style>
