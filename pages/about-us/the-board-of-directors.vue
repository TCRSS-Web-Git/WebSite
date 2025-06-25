<script lang="ts" setup>
import PageBanner from "~/components/PageBanner.vue";

const {t} = useI18n()

useHead({
  title: t('board_of_director.title'),
})

const leaders = [
  {
    id: 1,
    image: '/about-us/board-of-director/Hisanori-Enoki.png',
    name: computed(() => t('board_of_director.members.mr_hisanori_enoki')),
    role: computed(() => t('board_of_director.position.chairman')),
  },
  {
    id: 2,
    image: '/about-us/board-of-director/Yongyuth-Malithong.png',
    name: computed(() => t('board_of_director.members.mr_yongyuth_malithong')),
    role: computed(() => t('board_of_director.position.director_and_president')),
  },
  {
    id: 3,
    image: '/about-us/board-of-director/Narongrit-Chotnuchittakul.png',
    name: computed(() => t('board_of_director.members.mr_narongrit_chotnuchittakul')),
    role: computed(() => t('board_of_director.position.director')),
  },
  {
    id: 4,
    image: '/about-us/board-of-director/Toshiaki-Fujinaka.png',
    name: computed(() => t('board_of_director.members.mr_toshiaki_fujinaka')),
    role: computed(() => t('board_of_director.position.director')),
  },
  {
    id: 5,
    image: '/about-us/board-of-director/Shinichi-Yaguchi.png',
    name: computed(() => t('board_of_director.members.mr_shinichi_yaguchi')),
    role: computed(() => t('board_of_director.position.director')),
  },
  {
    id: 6,
    image: '/about-us/board-of-director/Nobuyoshi-Kariya.png',
    name: computed(() => t('board_of_director.members.mr_nobuyoshi_kariya')),
    role: computed(() => t('board_of_director.position.director')),
  },
  {
    id: 7,
    image: '/about-us/board-of-director/Hiroshi-Nakano.png',
    name: computed(() => t('board_of_director.members.mr_hiroshi_nakano')),
    role: computed(() => t('board_of_director.position.director')),
  },
  {
    id: 8,
    image: '/about-us/board-of-director/Chalerm-Angatip.png',
    name: computed(() => t('board_of_director.members.mr_chalerm_angkatip')),
    role: computed(() => t('board_of_director.position.director')),
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
        {{ $t('board_of_director.title') }}
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
