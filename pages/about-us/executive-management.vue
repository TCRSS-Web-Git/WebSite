<script lang="ts" setup>
import PageBanner from "~/components/PageBanner.vue";

const {t} = useI18n()

useHead({
  title: t('executive_management.title'),
})

const leaders = [
  {
    id: 1,
    image: '/about-us/board-of-director/Yongyuth-Malithong.png',
    name: computed(() => t('executive_management.members.mr_yongyuth_malithong')),
    role: computed(() => t('executive_management.position.president')),
  },
  {
    id: 2,
    image: '/about-us/executive-management/Yusuke-Kawamoto.png',
    name: computed(() => t('executive_management.members.mr_yusuke_kawamoto')),
    role: computed(() => t('executive_management.position.executive_vice_president_sales_and_marketing')),
  },
  {
    id: 3,
    image: '/about-us/executive-management/Manin-Inprom.png',
    name: computed(() => t('executive_management.members.mr_manin_inprom')),
    role: computed(() => t('executive_management.position.executive_vice_president_general_administration')),
  },
  {
    id: 4,
    image: '/about-us/board-of-director/Hiroshi-Nakano.png',
    name: computed(() => t('executive_management.members.mr_hiroshi_nakano')),
    role: computed(() => t('executive_management.position.executive_vice_president_finance_and_accounting')),
  },
  {
    id: 5,
    image: '/about-us/executive-management/Manop-Yodeiam.png',
    name: computed(() => t('executive_management.members.mr_manop_yodeiam')),
    role: computed(() => t('executive_management.position.vice_president_manufacturing')),
  },
  {
    id: 6,
    image: '/about-us/executive-management/Pornthep-Hongdilokkul.png',
    name: computed(() => t('executive_management.members.mr_pornthep_hongdilokkul')),
    role: computed(() => t('executive_management.position.vice_president_sales_and_marketing')),
  },
  {
    id: 7,
    image: '/about-us/executive-management/Rawi-Kumduongdaow.png',
    name: computed(() => t('executive_management.members.mr_rawi_kumduongdaow')),
    role: computed(() => t('executive_management.position.vice_president_finance_and_accounting')),
  },
  {
    id: 8,
    image: '/about-us/executive-management/Ken-Okutsu.png',
    name: computed(() => t('executive_management.members.mr_ken_okutsu')),
    role: computed(() => t('executive_management.position.general_manager_sales_and_marketing')),
  },
]
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
      <div class="mb-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-y-12">
        <div
            v-for="(leader, index) in leaders"
            :key="leader.id"
            class="mb-3"
            :class="[
          index === 0 ? 'col-start-1 md:col-span-1 lg:col-span-3' : ''
        ]"
        >
          <div class="w-auto lg:max-w-96 lg:h-60 justify-center items-center mb-6 bg-gray-200">
            <img
                :alt="leader.name"
                :src="leader.image"
                class="w-62 h-full mx-auto"
            >
          </div>
          <h3 class="leader-name">{{ leader.name }}</h3>

          <p class="leader-position">{{ leader.role }}</p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}

.leader-name {
  @apply text-base font-bold text-gray-500 dark:text-gray-300
}

.leader-position {
  @apply text-base font-normal text-gray-500 dark:text-gray-300
}
</style>
