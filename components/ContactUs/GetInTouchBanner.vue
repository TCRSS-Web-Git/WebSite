<script setup lang="ts">
interface Props {
  posX?: number
  posY?: number
}

const props = withDefaults(defineProps<Props>(), {
  posX: 0,
  posY: 50,
})


</script>

<template>
  <div class="relative">
    <div
        class="bg-cover bg-right-bottom py-8 lg:py-20"
        style="background-image: url('/contact-us/bg-get-in-touch-2.jpg'); box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);background-position: 0% 75%;"
    >
      <div class="text-white">
      <div class="text-2xl lg:text-3xl font-bold w-full text-center mb-10">{{ $t('contact_us.get_in_touch') }}</div>
      <UContainer class="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full text-center">
        <div class="backdrop-blur-md bg-gray-400/40 flex flex-col gap-3 p-6 lg:p-8 text-left">
          <UIcon name="i-heroicons-phone" class="h-4 w-4"/>
          <div class="text-sm lg:text-base">{{ $t('contact_us.contact') }} {{ $t('contact_us.customer_service') }}</div>
          <div class="text-sm lg:text-base">customer_service@tcrss.com</div>
        </div>
        <div class="backdrop-blur-md bg-gray-400/40 flex flex-col gap-3 p-6 lg:p-8 text-left">
          <UIcon name="i-heroicons-circle-stack" class="h-4 w-4"/>
          <div class="text-sm lg:text-base">{{ $t('contact_us.contact') }} {{ $t('contact_us.sales_and_marketing') }}</div>
          <div class="text-sm lg:text-base">sales_marketing@tcrss.com</div>
        </div>
        <div class="backdrop-blur-md bg-gray-400/40 flex flex-col gap-3 p-6 lg:p-8 text-left">
          <UIcon name="i-heroicons-user" class="h-4 w-4"/>
          <div class="text-sm lg:text-base">{{ $t('contact_us.contact') }} {{ $t('contact_us.hr_and_recruit') }}</div>
          <div class="text-sm lg:text-base">hr_recruit@tcrss.com</div>
        </div>
        <div class="backdrop-blur-md bg-gray-400/40 flex flex-col gap-3 p-6 lg:p-8 text-left">
          <UIcon name="i-heroicons-shopping-cart" class="h-4 w-4"/>
          <div class="text-sm lg:text-base">{{ $t('contact_us.contact') }} {{ $t('contact_us.procurement') }}</div>
          <div class="text-sm lg:text-base">procurement_dept@tcrss.com</div>
        </div>
      </UContainer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-banner {
  @apply absolute
  top-1/2
  left-1/2
  -translate-y-1/2
  -translate-x-1/2
  text-3xl
  lg:text-5xl
  font-bold
  text-white
  text-center
}
</style>
