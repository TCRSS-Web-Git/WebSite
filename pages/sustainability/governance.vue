<script setup lang="ts">
const {t} = useI18n()

useHead({
  title: t('governance.title'),
})
</script>

<template>
<div>
  <div
      class="bg-cover flex items-center justify-center"
      style="background-image: url('/sustainability/governance/cover.png');background-position:0 40%;"
  >
    <UContainer class="grid lg:grid-cols-2 my-16 lg:my-28">
      <div/>
      <div
          class="p-8 lg:p-12 rounded-xl max-w-2xl bg-gray-400/40 backdrop-blur-md">
        <div class="flex flex-col items-start  text-white gap-4 lg:gep-6">
          <span class="page-title">{{ $t('governance.title') }}</span>
          <span class="page-description">{{$t('governance.sub_title')}}</span>
        </div>
      </div>
    </UContainer>
  </div>

  <UContainer class="my-6 lg:my-24 text-darkest">
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.compliance.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.compliance.description')}}</span>
    </div>
    <UDivider class="py-10"/>
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.declaration.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.declaration.description')}}</span>
    </div>
    <UDivider class="py-10"/>
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.disclosure.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.disclosure.description')}}</span>
    </div>
    <UDivider class="py-10"/>
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.risk.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.risk.description')}}</span>
    </div>
    <UDivider class="py-10"/>
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.delivery.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.delivery.description')}}</span>
    </div>
    <UDivider class="py-10"/>
    <div class="grid lg:grid-cols-3 gap-x-36">
      <span class="text-title col-span-1">{{ $t('governance.internal.title') }}</span>
      <span class="text-description col-span-2">{{$t('governance.internal.description')}}</span>
    </div>
  </UContainer>

  <div class="bg-cover bg-center w-full h-48 lg:h-96">
    <img class="w-full h-full object-cover" src="/sustainability/governance/footer.png" alt="governance">
  </div>

<!--    <div-->
<!--        class="bg-cover bg-center flex items-center justify-center"-->
<!--        style="background-image: url('/sustainability/governance/footer.png')"-->
<!--    >-->
<!--      <UContainer class="w-full py-28">-->
<!--        <div class="grid lg:grid-cols-2 gap-6">-->
<!--          <div-->
<!--              class="p-8 lg:p-12 rounded-xl bg-gray-400/40 backdrop-blur-md">-->
<!--            <div class="flex flex-col items-start text-white gap-4 lg:gep-6">-->
<!--              <span class="text-title">{{ $t('governance.delivery.title') }}</span>-->
<!--              <span class="text-description">{{$t('governance.delivery.description')}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div-->
<!--              class="p-8 lg:p-12 rounded-xl bg-gray-400/40 backdrop-blur-md">-->
<!--            <div class="flex flex-col items-start text-white gap-4 lg:gep-6">-->
<!--              <span class="text-title">{{ $t('governance.internal.title') }}</span>-->
<!--              <span class="text-description">{{$t('governance.internal.description')}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </UContainer>-->
<!--    </div>-->

</div>
</template>

<style scoped>
.page-title {
  @apply text-xl lg:text-2xl font-bold
}

.page-description {
  @apply text-sm lg:text-base font-normal
}

.text-title {
  @apply text-base lg:text-lg font-bold
}

.text-description {
  @apply text-sm lg:text-base font-normal
}
</style>
