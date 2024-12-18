<script setup lang="ts">

// import {useApiFetch} from "~/composables/useApiFetch";

import PageBanner from "~/components/PageBanner.vue";
import EducationalForm from "~/components/Careers/EducationalForm.vue";
import {useApiFetch} from "~/composables/useApiFetch";

const {t} = useI18n()
const route = useRoute()
const router = useRouter()
const localePath = useLocalePath()
const state = reactive<ApplicationForm>({
  career_id: route.params.uid,
  salary: null,
  title: null,
  first_name_th: null,
  last_name_th: null,
  first_name_en: null,
  last_name_en: null,
  nick_name: null,
  date_of_birth: new Date(),
  address: null,
  province_id: null,
  district_id: null,
  sub_district_id: null,
  postal_code: null,
  registered_province_id: null,
  phone: null,
  email: null,
  family_status: null,
  military_service: null,
  education: null,
  major: null,
  institution: null,
  gpa: null,
  resume_file: [],
  transcript_file: [],
  certificate_files: [],
  photo: null,
})

const step = ref<number>(1)

const nextStep = () => {
  step.value += 1
}

const backStep = () => {
  step.value -= 1
}

const {
  errorToast,
  successToast
} = useBasicToast()

const {data: career} = useApiFetch<Item<Career>>(`public/careers/${route.params.uid}`)

useHead({
  title: career?.value?.data.title,
})

useSeoMeta({
  title: career?.value?.data?.meta_title || '',
  ogTitle: career?.value?.data?.meta_title || '',
  description: career?.value?.data?.meta_description || '',
  ogDescription: career?.value?.data?.meta_description || '',
})


const formErrors = ref()

const isLoading = ref(false)
const onSubmit = async () => {
  isLoading.value = true
  const form = {
    ...state,
    resume_file: state.resume_file[0],
    transcript_file: state.transcript_file[0],
    photo: state.photo,
  }
  try {
    const { error } = await useApiFetch('/public/job-applications', {
      method: 'POST',
      body: form,
    })
    if (error.value) {
      formErrors.value = error.value?.data.errors
      errorToast(error.value?.data.message)
    } else {
      successToast(t('common.submit_successfully'))
      await router.push(localePath('/careers/application/after-applying-career'))
    }
  } catch (err: any) {
    errorToast(err.data.message)
  } finally {
    isLoading.value = false
  }
}

const onDisagree = async () => {
  await router.push(localePath(`/careers/${route.params.uid}`))
}

</script>


<template>
  <PageBanner
      :pos-x="0"
      :pos-y="50"
      image-path="/careers/careers-banner.jpeg"
      :title="career?.data?.title"
  >
    <template #subTitle>
      <div class="text-white text-base font-normal hidden lg:flex gap-4 items-center justify-center">
        <div class="flex gap-2 items-center">
          <UIcon name="i-heroicons-building-office" class="h-4 w-4"/>
          <span>{{ career?.data?.department?.name }}</span>
        </div>
        <div class="flex gap-2 items-center">
          <UIcon name="i-heroicons-map-pin" class="h-4 w-4"/>
          <span>{{ career?.data?.location?.name }}</span>
        </div>
        <span>{{ career?.data?.type?.name }}</span>
      </div>
    </template>
  </PageBanner>
  <UContainer class="mt-6 mb-12 lg:mt-24 lg:mb-14">
    <div class="mx-0 lg:mx-64 flex flex-col gap-6">
      <div class="text-xl lg:text-2xl font-bold text-downriver-950">
        {{ $t('careers.job_application_form') }}
      </div>
      <ApplicationTerms
          v-show="step === 1"
          @next="nextStep"
          @disagree="onDisagree"
      />
      <SalaryRequirement
          v-show="step === 2"
          v-model:state="state"
          v-model:career="career"
          @next="nextStep"
          @back="backStep"
      />
      <PersonalDataForm
          v-show="step === 3"
          v-model:state="state"
          :form-errors="formErrors"
          @next="nextStep"
          @back="backStep"
      />
      <EducationalForm
          v-show="step === 4"
          v-model:state="state"
          :form-errors="formErrors"
          @next="nextStep"
          @back="backStep"
      />
      <AttachedDocumentsForm
          v-show="step === 5"
          v-model:state="state"
          :form-errors="formErrors"
          :loading="isLoading"
          @submit="onSubmit"
          @back="backStep"
      />
    </div>
  </UContainer>
</template>

<style scoped>

</style>
