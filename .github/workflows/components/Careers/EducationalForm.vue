<script setup lang="ts">

const {t} = useI18n()

const state = defineModel<ApplicationForm>('state')

interface Props {
  formErrors: object | undefined
}
defineProps<Props>()

const emit = defineEmits(['next', 'back'])
const nextStep = () => {
  emit('next')
}

const backStep = () => {
  emit('back')
}

const educationOptions = [{
  value: 'Secondary',
  label: 'มัธยมศึกษา (Secondary)'
}, {
  value: 'Vocational certificate',
  label: 'ประกาศนียบัตรวิชาชีพ - ปวช. (Vocational Certificate)'
}, {
  value: 'Diploma',
  label: 'ประกาศนียบัตรวิชาชีพชั้นสูง - ปวส. / อนุปริญญา (Vocational certificate / Diploma)'
}, {
  value: 'Bachelor degree',
  label: 'ปริญญาตรี (Bachelor’s Degree)'
}, {
  value: 'Master degree',
  label: 'ปริญญาโท (Master’s Degree)'
}, {
  value: 'Doctor degree',
  label: 'ปริญญาเอก (Doctor’s Degree)'
}]

const isDisabled = computed(() => {
  const requiredFields = [
    state.value.salary,
    state.value.first_name_th,
    state.value.last_name_th,
    state.value.nick_name,
    state.value.first_name_en,
    state.value.last_name_en,
    state.value.date_of_birth,
    state.value.address,
    state.value.province_id,
    state.value.district_id,
    state.value.subdistrict_id,
    state.value.postal_code,
    state.value.phone,
    state.value.email,
    state.value.family_status,
    state.value.military_service,
    state.value.education,
    state.value.major,
    state.value.institution,
    state.value.gpa,
  ]

  return requiredFields.some(field => field === null || field === '')
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-light font-bold text-lg">
      ประวัติการศึกษา (Educational)
    </div>
    <UFormGroup
        label="ระดับการศึกษา (Education Level)"
        class="text-downriver-950"
        name="education"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.education ? formErrors?.education[0] : undefined"
    >
      <URadioGroup v-model="state.education" :options="educationOptions" class="mt-4" :ui-radio="{container: 'mb-4'}">
        <template #label="{ option }">
          <div class="flex flex-col gap-4 text-downriver-950 text-sm">
            {{ option.label }}
          </div>
        </template>
      </URadioGroup>
    </UFormGroup>
    <UFormGroup
        label="สาขาวิชา (Major Subject)"
        class="text-downriver-950"
        name="major"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.major ? formErrors?.major[0] : undefined"
    >
      <UInput
          v-model="state.major"
          size="md"
          :placeholder="t('careers.major.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="สถานศึกษา (Institution)"
        class="text-downriver-950"
        name="institution"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.institution ? formErrors?.institution[0] : undefined"
    >
      <UInput
          v-model="state.institution"
          size="md"
          :placeholder="t('careers.institution.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="เกรดเฉลี่ย (GPA)"
        class="text-downriver-950"
        name="gpa"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.gpa ? formErrors?.gpa[0] : undefined"
    >
      <UInput
          v-model="state.gpa"
          size="md"
          :placeholder="t('careers.gpa.placeholder')"
      />
    </UFormGroup>
    <div class="flex justify-between mt-2">
      <UButton
          variant="outline"
          size="lg"
          class="text-downriver-950 hover:text-downriver-900"
          :label="t('common.back')"
          @click="backStep"
      />
      <UButton
          :disabled="isDisabled"
          size="lg"
          :label="t('common.next')"
          class="bg-downriver-950 hover:bg-downriver-900"
          :ui="{variant: {solid: 'disabled:bg-downriver-950 aria-disabled:bg-downriver-950'}}"
          @click="nextStep"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
