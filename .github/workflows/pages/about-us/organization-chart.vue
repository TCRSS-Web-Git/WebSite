<script setup lang="ts">

</script>

<template>
  <div>
    <PageBanner
        :pos-x="0"
        :pos-y="9"
        image-path="/about-us/banner.jpeg"
        :title="$t('about_us')"
    />

    <UContainer class="mt-6 mb-12 lg:mt-24">
      <h1 class="mb-4 lg:mb-14 title">
        {{ $t('org_chart.title') }}
      </h1>
      <div class="flex justify-center lg:px-40">
        <img src="/about-us/organization-chart.png" alt="organization-chart">
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.title {
  @apply text-xl lg:text-2xl font-bold text-downriver-950
}
</style>
