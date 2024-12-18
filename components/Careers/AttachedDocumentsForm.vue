<script setup lang="ts">

const {t} = useI18n()

const state = defineModel<ApplicationForm>('state')

interface Props {
  formErrors: object | undefined
  loading: boolean
}
defineProps<Props>()

const emit = defineEmits(['submit', 'back'])
const onSubmit = () => {
  emit('submit')
}

const backStep = () => {
  emit('back')
}

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
    state.value.resume_file.length,
    state.value.transcript_file.length,
    state.value.photo,
  ]

  return requiredFields.some(field => field === null || field === '' || field === 0)
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-light font-bold text-lg">
      เอกสารแนบ (Attached documents)
    </div>
    <UFormGroup
        label="ประวัติส่วนตัว (Resume)"
        class="text-downriver-950"
        name="resume_file"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.resume_file ? formErrors?.resume_file[0] : undefined"
    >
      <BaseFileUploadInput
          id="resume_file"
          v-model="state.resume_file"
          :hint="t('uploadImage.change_image_info')"
          :limit="1"
          :multiple="false"
      />
    </UFormGroup>
    <UFormGroup
        label="สำเนาวุฒิการศึกษา (Transcript)"
        class="text-downriver-950"
        name="transcript_file"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.transcript_file ? formErrors?.transcript_file[0] : undefined"
    >
      <BaseFileUploadInput
          id="transcript_file"
          v-model="state.transcript_file"
          :hint="t('uploadImage.change_image_info')"
          :limit="1"
          :multiple="false"
      />
    </UFormGroup>
    <UFormGroup
        :label="`ใบประกาศต่างๆ หรือผลสอบต่างๆ ที่เกี่ยวข้อง (Certificate) (${state.certificate_files.length}/5)`"
        class="text-downriver-950"
        name="certificate_files"
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.certificate_files ? formErrors?.certificate_files[0] : undefined"
    >
      <BaseFileUploadInput
          id="certificate_files"
          v-model="state.certificate_files"
          :hint="t('uploadImage.change_image_info')"
          :limit="5"
          :multiple="true"
      />
    </UFormGroup>
    <UFormGroup
        label="ภาพถ่ายตัวท่าน (Photo)"
        class="text-downriver-950"
        name="photo"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.photo ? formErrors?.photo[0] : undefined"
    >
      <BaseImageUploadInputSingle
          id="photo"
          v-model="state.photo"
          :hint="t('uploadImage.change_image_info')"
          class="mt-1 flex justify-center"
          preview-size="aspect-[4/5]"
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
          :loading="loading"
          size="lg"
          :label="t('common.submit')"
          class="bg-downriver-950 hover:bg-downriver-900"
          :ui="{variant: {solid: 'disabled:bg-downriver-950 aria-disabled:bg-downriver-950'}}"
          @click="onSubmit"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
