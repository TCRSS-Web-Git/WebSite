<script lang="ts" setup>
const localePath = useLocalePath()
const route = useRoute()
const {t} = useI18n()

const links = ref([{
  label: computed(() => t('about_us')),
  pages: ['about-us-company-profile', 'about-us-the-board-of-directors', 'about-us-executive-management', 'about-us-organization-chart', 'about-us-annual-reports', 'about-us-awards'],
  children: [
    {
      label: computed(() => t('company_profile.title')),
      to: '/about-us/company-profile',
    }, {
      label: computed(() => t('board_of_director.title')),
      to: '/about-us/the-board-of-directors',
    }, {
      label: computed(() => t('executive_management.title')),
      to: '/about-us/executive-management',
    }, {
      label: computed(() => t('org_chart.title')),
      to: '/about-us/organization-chart',
    }, {
      label: computed(() => t('awards.title')),
      to: localePath('/about-us/awards'),
    }, {
      label: computed(() => t('annual_reports.title')),
      to: '/about-us/annual-reports',
    },
  ]
}, {
  label: computed(() => t('common.products_and_services')),
  to: '/products-and-services',
  pages: ['products-and-services']

}, {
  label: computed(() => t('sustainability')),
  pages: ['sustainability-environmental', 'sustainability-social', 'sustainability-governance'],
  children: [
    {
      label: computed(() => t('environmental.title')),
      to: '/sustainability/environmental',
    }, {
      label: computed(() => t('social.title')),
      to: '/sustainability/social',
    }, {
      label: computed(() => t('governance.title')),
      to: '/sustainability/governance',
    }
  ]
}, {
  label: computed(() => t('news.title')),
  to: localePath('/news'),
  pages: ['news', 'news-uid']

}, {
  label: computed(() => t('careers.title')),
  to: '/careers',
  pages: ['careers', 'careers-uid', 'careers-jobs-opening', 'careers-application-uid', 'careers-application-after-applying-career']

}, {
  label: computed(() => t('contact_us.title')),
  to: '/contact-us',
  pages: ['contact-us']
},])

const cleanRouteName = (name: string) => {
  return name.split('___')[0]
}

const isOpen = ref(false)
const selectedCurrentPage = ref(cleanRouteName(route?.name as string ?? ''))


const checkPath = () => {
  selectedCurrentPage.value = cleanRouteName(route?.name as string ?? '')
}

watch(() => route.path,
    () => {
      checkPath()
    },
)
</script>

<template>
  <header class="wrapper">
    <UContainer class="header-container text-lightest">
      <div class="left">
        <UButton
            :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
            :padded="false"
            class="flex lg:hidden"
            color="white"
            variant="link"
            @click="isOpen = !isOpen"
        />
        <MobileMenu
            v-model:is-open="isOpen"
            :links="links"
            :selected-current-page="selectedCurrentPage"
        />
        <ULink :to="localePath('/')">
          <img alt="LOGO" class="logo h-8 lg:h-12 w-8 lg:w-12" src="/logo-tcrss.png">
        </ULink>
      </div>
      <div class="hidden lg:block">
        <DesktopMenu
            :links="links"
            :selected-current-page="selectedCurrentPage"
        />
      </div>
      <div class="right">
        <LocalePicker/>
      </div>
    </UContainer>
  </header>
</template>

<style scoped>
.wrapper {
  @apply bg-downriver-950 backdrop-blur sticky top-0 z-50
}

.header-container {
  @apply flex items-center justify-between gap-3 py-3.5
}

.left {
  @apply lg:flex-1 flex items-center gap-1.5
}

.right {
  @apply flex items-center justify-end lg:flex-1 gap-1.5
}

.logo {
  @apply flex-shrink-0 font-bold text-xl flex items-end gap-1.5
}
</style>
