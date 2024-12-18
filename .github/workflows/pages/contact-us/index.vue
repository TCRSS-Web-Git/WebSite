<script setup lang="ts">

import {useApiFetch} from "~/composables/useApiFetch";

import PageBanner from "~/components/PageBanner.vue";
import GetInTouchBanner from "~/components/ContactUs/GetInTouchBanner.vue";
import ContactUsForm from "~/components/ContactUs/ContactUsForm.vue";

// const route = useRoute()
const {t} = useI18n()
const {
  errorToast,
  successToast
} = useBasicToast()

const formErrors = ref()
const state = reactive({
  name: null,
  surname: null,
  phone: null,
  email: null,
  department_type: null,
  detail: null,
})

useHead({
  title: t('contact_us.title'),
})

const isSubmitting = ref(false)

const onSubmit = async () => {
  const form = {...state}
  try {
    isSubmitting.value = true
    const { error } = await useApiFetch('/public/contact-us', {
      method: 'POST',
      body: form,
    })
    if (error.value) {
      formErrors.value = error.value?.data.errors
      isSubmitting.value = false
    } else {
      successToast(t('common.submit_successfully'))
      isSubmitting.value = false
      formErrors.value = {}
    }
  } catch (err: any) {
    errorToast(err.data.message)
    isSubmitting.value = false
  }
}
</script>


<template>
  <PageBanner
      :pos-x="0"
      :pos-y="9"
      image-path="/contact-us/contact-us-banner.png"
      :title="$t('contact_us.title')"
  />

  <UContainer class="mt-6 mb-4 lg:mt-24 lg:mb-14">
    <h1 class="mb-4 lg:mb-14 text-xl lg:text-2xl font-bold text-downriver-950">
      {{ $t('contact_us.title') }}
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="flex flex-col gap-4">
        <div class="w-full h-full">
          <img class="w-full h-full object-cover object-center" src="../../public/contact-us/tcr-bkk-map.png" alt="tcr bkk map">
        </div>
        <div class="text-light font-bold text-lg">
          สำนักงานใหญ่
        </div>
        <div class="text-light">
          28/1 อาคารประภาวิทย์ ชั้น 5 ถนนสุรศักดิ์ แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500
          โทร : +66-2630-0300 แฟกซ์ : +66-2630-0320-1
        </div>
        <div class="text-light">
          <div>Head Office</div>
          <div>28/1 Prapawit Building 5th  Floor, Surasak Road, Silom Sub-district, Bangrak District, Bangkok 10500</div>
          <div>Tel: +66-2630-0300 Fax: +66-2630-0320-1</div>
          <div class="truncate w-full">
            <NuxtLink class="link-style" target="_blank" to="https://maps.app.goo.gl/cWg1MMjGGjjbEhEUA">
              https://maps.app.goo.gl/cWg1MMjGGjjbEhEUA
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="w-full h-full">
          <img class="w-full h-full object-cover object-center" src="../../public/contact-us/tcr-bsp-map.png" alt="tcr bsp map">
        </div>
        <div class="text-light font-bold text-lg">
          โรงงาน
        </div>
        <div class="text-light">
          111 หมู่ที่ 4  ถนนบ้านกลางนา-ยายพลอย ตำบลแม่รำพึง อำเภอบางสะพาน จังหวัดประจวบคีรีขันธ์ 77140
          โทร : +66-32510-699  แฟกซ์ : +66-32510-691-2
        </div>
        <div class="text-light">
          <div>Factory</div>
          <div>111 Moo 4, Ban Klang Na - Yai Ploy Road, Mae Ramphueng Sub-district, Bang Saphan District, Prachuap Khiri Khan Province 77140</div>
          <div>Tel: +66-32510-699  Fax: +66-32510-691-2</div>
          <div class="truncate w-full">
            <NuxtLink class="link-style" target="_blank" to="https://maps.app.goo.gl/76X8eEmWJHVA1CtQ7">
              https://maps.app.goo.gl/76X8eEmWJHVA1CtQ7
            </NuxtLink>
          </div>

        </div>
      </div>
    </div>
  </UContainer>

  <GetInTouchBanner />

  <div class="mt-6 mb-10 lg:mt-10 lg:mb-24">
    <UContainer class="max-w-xl">
    <div class="text-downriver-950 text-2xl font-bold text-center mb-10">
      {{ $t('contact_us.contact_us_directly') }}
    </div>
    <UForm
        id="contact-form"
        ref="form"
        :state="state"
        @submit="onSubmit"
    >
      <ContactUsForm
          v-model:state="state"
          :form-errors="formErrors"
      />
    </UForm>
    <div class="flex justify-end mt-8">
      <UButton
          form="contact-form"
          type="submit"
          size="lg"
          :loading="isSubmitting"
          :label="$t('common.submit')"
          class="bg-downriver-950 hover:bg-downriver-900"
      />
    </div>
    </UContainer>
  </div>


</template>

<style scoped>
.link-style {
  @apply text-blue-500 hover:text-blue-600 hover:underline underline-offset-4 text-left
}
</style>
