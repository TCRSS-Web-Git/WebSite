<script setup lang="ts">
import PageBanner from "~/components/PageBanner.vue";

const {t} = useI18n()

useHead({
  title: t('company_profile.title'),
})

const histories = [
  {
    icon: '/about-us/company-profile/company-registration.svg',
    date: 'company_profile.history_1990_mar_20_date',
    detail: 'company_profile.history_1990_mar_20_detail',
  },
  {
    icon: '/about-us/company-profile/agreement.svg',
    date: 'company_profile.history_1995_jun_7_date',
    detail: 'company_profile.history_1995_jun_7_detail',
  },
  {
    icon: '/about-us/company-profile/commercial-production.svg',
    date: 'company_profile.history_1997_jun_27_date',
    detail: 'company_profile.history_1997_jun_27_detail',
  },
]
const shareHolders = [
  {
    icon: '/about-us/company-profile/logo-sahaviriya-steel-industries-min.png',
    name: 'company_profile.sahaviriya_steel',
    percents: '35.19',
  },
  {
    icon: '/about-us/company-profile/logo-jfe-holdings-company-min.png',
    name: 'company_profile.jfe_steel',
    percents: '34.47',
  },
  {
    icon: '/about-us/company-profile/logo-marubeni-min.png',
    name: 'company_profile.marubeni_steel',
    percents: '25.10',
  },
]
</script>

<template>
  <div>
    <PageBanner
        :title="$t('about_us')"
        image-path="/about-us/banner.jpeg"
        :pos-x="0"
        :pos-y="9"
    />

    <UContainer class="mt-6 lg:mt-24">
      <h1 class="mb-4 lg:mb-14 title">{{ $t('company_profile.title') }}</h1>
      <div class="flex flex-col gap-4 lg:gap-10">
        <div class="grid lg:grid-cols-4 gap-2">
          <span class="lg:col-span-1 topic-text">{{ $t('company_profile.name') }}</span>
          <span class="lg:col-span-3 value-text">{{ $t('company_profile.name_value') }}</span>
        </div>

        <UDivider/>
        <div class="grid lg:grid-cols-4 gap-2">
          <span class="lg:col-span-1 topic-text">{{ $t('company_profile.type_of_business') }}</span>
          <span class="lg:col-span-3 value-text">{{ $t('company_profile.type_of_business_value') }}</span>
        </div>

        <UDivider/>

        <div class="grid lg:grid-cols-4 gap-2">
          <span class="lg:col-span-1 topic-text">{{ $t('company_profile.investment') }}</span>
          <span class="lg:col-span-3 value-text">{{ $t('company_profile.investment_value') }}</span>
        </div>

        <UDivider/>

        <div class="grid lg:grid-cols-4 gap-2">
          <span class="lg:col-span-1 topic-text">{{ $t('company_profile.registered_capital') }}</span>
          <span class="lg:col-span-3 value-text">{{ $t('company_profile.registered_capital_value') }}</span>
        </div>

        <UDivider/>

        <div class="grid lg:grid-cols-4 gap-2">
          <span class="lg:col-span-1 topic-text">{{ $t('company_profile.history') }}</span>
          <div class="lg:col-span-3 value-text">
            <div v-for="(history, index) in histories" :key="index">
              <div class="flex flex-col items-center">
                <UDivider
                    v-if="index != 0" size="lg" orientation="vertical" class="my-6 h-28"
                    :ui="{border:{base: 'rounded-full'}}"/>
                <div class="flex flex-col gap-2 items-center">
                  <img :src="history.icon" :alt="history.detail">
                  <span class="history-date-text text-center">{{ $t(history.date) }} </span>
                  <span class="history-detail-text text-center">{{ $t(history.detail) }} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <div class="mt-10 lg:mt-24 w-full grid lg:grid-cols-2">
      <div
          class="bg-cover bg-top h-56 lg:h-[29rem]"
          style=" background-image: url('/about-us/company-profile/number-of-employees.jpeg');"/>
      <div class="px-4 lg:pr-0 lg:pl-36 py-6 lg:py-0 flex flex-col justify-start lg:justify-center bg-gray-200">
        <div>
          <div
              class="number-of-employees mb-10">
            {{ $t('company_profile.number_of_employees') }}
          </div>
          <div
              class="number-of-employees-detail">
            {{ $t('company_profile.number_of_employees_head_office')  }}
          </div>
          <div
              class="number-of-employees-detail">
            {{ $t('company_profile.number_of_employees_factory') }}
          </div>
          <div
              class="number-of-employees-detail">
            {{ $t('company_profile.number_of_employees_total') }}
          </div>
        </div>

      </div>
    </div>

    <div class="w-full">
      <div
          class=" bg-cover bg-center h-full -scale-x-100"
          style=" background-image: url('/about-us/company-profile/major-shareholders.jpeg');"
      >

      <div class=" py-8 lg:py-20 -scale-x-100">
        <div class="shareholders mb-10 lg:mb-14">
          {{ $t('company_profile.major_shareholders') }}
        </div>
        <UContainer class="grid lg:grid-cols-3 gap-6 ">

          <div v-for="shareHolder in shareHolders" :key="shareHolder.name">
            <div
                class="p-8 flex flex-col items-center h-full bg-gray-400/40 backdrop-blur-md">
              <img :src="shareHolder.icon" class="mb-4 shrink-0" alt="Major Shareholders">
              <div class="flex flex-col items-center text-center">
                <span class="shareholders-name">{{ $t(shareHolder.name) }}</span>
                <span class="shareholders-percent">
                  {{$t('company_profile.ratio') }} {{ shareHolder.percents }} {{ $t('company_profile.major_shareholders_percent') }}
                </span>
              </div>
            </div>
          </div>
        </UContainer>
      </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}

.topic-text {
  @apply text-gray-500 dark:text-gray-300 text-base lg:text-lg font-bold
}

.value-text {
  @apply text-gray-500 dark:text-gray-300 text-sm lg:text-base font-normal
}

.history-date-text {
  @apply text-gray-600 dark:text-gray-200 text-lg font-bold
}

.history-detail-text {
  @apply text-gray-500 dark:text-gray-300 text-lg font-normal
}

.number-of-employees {
  @apply text-gray-500 dark:text-gray-300 text-xl lg:text-2xl font-bold
}

.number-of-employees-detail {
  @apply text-gray-500 dark:text-gray-300 text-lg lg:text-xl font-normal
}

.shareholders {
  @apply text-white text-center text-xl lg:text-2xl font-bold
}

.shareholders-name {
  @apply text-gray-200 text-sm lg:text-base font-bold
}

.shareholders-percent {
  @apply text-white text-base lg:text-lg font-bold
}
</style>
