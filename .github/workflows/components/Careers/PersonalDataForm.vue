<script setup lang="ts">

import { format } from 'date-fns'
import {DatePicker} from "v-calendar";
import { th, enUS } from 'date-fns/locale'
import 'v-calendar/dist/style.css'
import BaseTelephoneInput from "~/components/BaseTelephoneInput.vue";

const state = defineModel<ApplicationForm>('state')

interface Props {
  formErrors: object | undefined
}
defineProps<Props>()

const {t, locale} = useI18n()
const { errorToast } = useBasicToast()

const emit = defineEmits(['next', 'back'])
const nextStep = () => {
  emit('next')
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
    state.value.sub_district_id,
    state.value.postal_code,
    state.value.phone,
    state.value.email,
    state.value.family_status,
    state.value.military_service
  ]

  return requiredFields.some(field => field === null || field === '' || field === undefined)
})

const titleOptions = [{
  value: 'Mr.',
  label: 'นาย (Mr.)'
}, {
  value: 'Mrs.',
  label: 'นาง (Mrs.)'
}, {
  value: 'Ms.',
  label: 'นางสาว (Ms.)'
}]

const familyStatusOptions = [{
  value: 'Single',
  label: 'โสด (Single)'
}, {
  value: 'Married',
  label: 'สมรส (Married)'
}, {
  value: 'Divorced',
  label: 'หย่า / หม้าย (Divorced / Widow)'
}]

const militaryServiceOptions = [{
  value: 'Exempted',
  label: 'ได้รับการยกเว้น'
}, {
  value: 'ROTC',
  label: 'สำเร็จวิชารักษาดินแดน'
}, {
  value: 'Conscripted',
  label: 'รับราชการทหารแล้ว'
}, {
  value: 'Woman',
  label: 'เพศหญิง (ยกเว้น)'
}]


const provinces = ref<Province[]>([])

const getProvinces = async () => {
  try {
    const {data} = await useApiFetch<Province[]>('/geography/provinces')

    if (data) {
      provinces.value = data.value?.data ?? null
    }
  } catch (error: any) {
    errorToast(error.data.message)
  }
}

const districts = ref<District[]>([])
const getDistricts = async (provinceId: string) => {
  state.value.districts_id = null
  state.value.sub_districts_id = null
  state.value.postal_code = null
  try {
    const {data} = await useApiFetch<District[]>(`/geography/provinces/${provinceId}/districts`)
    if (data) {
      districts.value =  data.value?.data ?? null
    }
  } catch (error: any) {
    errorToast(error.data.message)
  }
}

const subDistricts = ref<Subdistrict[]>([])
const getSubdistricts = async (districtId: string) => {
  state.value.sub_districts_id = null
  state.value.postal_code = null
  try {
    const {data} = await useApiFetch<Subdistrict[]>(`/geography/districts/${districtId}/subdistricts`)
    if (data) {
      subDistricts.value =  data.value?.data ?? null
    }
  } catch (error: any) {
    errorToast(error.data.message)
  }
}

const getZipcode = (subdistrictId: string) => {
  const subdistrict: Subdistrict | undefined = subDistricts.value.find(subdistrict => subdistrict.id === subdistrictId)
  if (subdistrict) {
    state.value.postal_code = subdistrict.zip
  }
}

const localeMap = {
  th,
  en: enUS,
}

const formattedDate = computed(() => {
  const year = locale.value === 'th'
      ? (new Date(state.value.date_of_birth).getFullYear() + 543).toString()
      : format(state.value.date_of_birth, 'yyyy')

  // รูปแบบวันที่ในแบบ "วัน เดือน ปี"
  const dayMonth = format(state.value.date_of_birth, 'd MMM', {
    locale: localeMap[locale.value] || enUS,
  })

  return `${dayMonth} ${year}`
})

onMounted(async () => {
  await nextTick()
  await getProvinces()
})
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="text-light font-bold text-lg">
      ประวัติส่วนตัว (Personal Data)
    </div>
    <UFormGroup
        label="คำนำหน้า (Name Title)"
        class="text-downriver-950"
        name="title"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.title ? formErrors?.title[0] : undefined"
    >
      <URadioGroup v-model="state.title" :options="titleOptions" class="mt-4" :ui-radio="{container: 'mb-4'}">
        <template #label="{ option }">
          <div class="flex flex-col gap-4 text-downriver-950 text-sm">
            {{ option.label }}
          </div>
        </template>
      </URadioGroup>
    </UFormGroup>
    <UFormGroup
        label="ชื่อภาษาไทย (Thai Name)"
        class="text-downriver-950"
        name="first_name_th"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.first_name_th ? formErrors?.first_name_th[0] : undefined"
    >
      <UInput
          v-model="state.first_name_th"
          size="md"
          :placeholder="t('careers.first_name_th.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="นามสกุลภาษาไทย (Thai Surname)"
        class="text-downriver-950"
        name="last_name_th"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.last_name_th ? formErrors?.last_name_th[0] : undefined"
    >
      <UInput
          v-model="state.last_name_th"
          size="md"
          :placeholder="t('careers.last_name_th.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="ชื่อเล่น (Nickname)"
        class="text-downriver-950"
        name="nick_name"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.nick_name ? formErrors?.nick_name[0] : undefined"
    >
      <UInput
          v-model="state.nick_name"
          size="md"
          :placeholder="t('careers.nick_name.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="ชื่อภาษาอังกฤษ (English Name) (ภาษาอังกฤษตัวพิมพ์ใหญ่)"
        class="text-downriver-950"
        name="first_name_en"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        @input="state.first_name_en = state.first_name_en.toUpperCase()"
        :error="formErrors?.first_name_en ? formErrors?.first_name_en[0] : undefined"
    >
      <UInput
          v-model="state.first_name_en"
          size="md"
          :placeholder="t('careers.first_name_en.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="นามสกุลภาษาอังกฤษ (English Surname) (ภาษาอังกฤษตัวพิมพ์ใหญ่)"
        class="text-downriver-950"
        name="last_name_en"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        @input="state.last_name_en = state.last_name_en.toUpperCase()"
        :error="formErrors?.last_name_en ? formErrors?.last_name_en[0] : undefined"
    >
      <UInput
          v-model="state.last_name_en"
          size="md"
          :placeholder="t('careers.last_name_en.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="วันเกิด (Date of Birth)"
        class="text-downriver-950"
        name="date_of_birth"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
    >
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton class="w-fit bg-downriver-950 hover:bg-downriver-900" icon="i-heroicons-calendar-days-20-solid" :label="formattedDate" />

        <template #panel="{ close }">
          <DatePicker v-model="state.date_of_birth" is-required @close="close" />
        </template>
      </UPopover>
    </UFormGroup>
    <UFormGroup
        label="ที่อยู่ปัจจุบัน (Present Address)"
        class="text-downriver-950"
        name="address"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.address ? formErrors?.address[0] : undefined"
    >
      <UTextarea
          v-model="state.address"
          :placeholder="t('careers.address.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        id="province_id"
        label="จังหวัด (Province)"
        required
        :error="formErrors?.province_id ? formErrors?.province_id[0] : undefined"
    >
      <USelectMenu
          v-model="state.province_id"
          :options="provinces"
          value-attribute="id"
          :option-attribute="locale === 'th' ? 'name_th' : 'name_en'"
          :placeholder="t('careers.province.placeholder')"
          @change="getDistricts($event)"
      >
      </USelectMenu>
    </UFormGroup>
    <UFormGroup
        id="district_id"
        label="อำเภอ/เขต (District)"
        required
        :error="formErrors?.district_id ? formErrors?.district_id[0] : undefined"
    >
      <USelectMenu
          v-model="state.district_id"
          :options="districts"
          value-attribute="id"
          :option-attribute="locale === 'th' ? 'name_th' : 'name_en'"
          :placeholder="t('careers.district.placeholder')"
          @change="getSubdistricts($event)"
      >
      </USelectMenu>
    </UFormGroup>
    <UFormGroup
        id="sub_district_id"
        label="ตำบล/แขวง (Sub-district)"
        required
        :error="formErrors?.sub_district_id ? formErrors?.sub_district_id[0] : undefined"
    >
      <USelectMenu
          v-model="state.sub_district_id"
          :options="subDistricts"
          value-attribute="id"
          :option-attribute="locale === 'th' ? 'name_th' : 'name_en'"
          :placeholder="t('careers.subdistrict.placeholder')"
          @change="getZipcode($event)"
      >
      </USelectMenu>
    </UFormGroup>
    <UFormGroup
        id="postal_code"
        label="รหัสไปรษณีย์ (Postal Code)"
        required
        :error="formErrors?.postal_code ? formErrors?.postal_code[0] : undefined"
    >
      <UInput
          v-model="state.postal_code"
          disabled
          :placeholder="t('careers.postal_code.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        id="registered_province_id"
        label="จังหวัดตามทะเบียนบ้าน (Registered Province)"
        required
        :error="formErrors?.registered_province_id ? formErrors?.registered_province_id[0] : undefined"
    >
      <USelectMenu
          v-model="state.registered_province_id"
          :options="provinces"
          value-attribute="id"
          :option-attribute="locale === 'th' ? 'name_th' : 'name_en'"
          :placeholder="t('careers.registered_province.placeholder')"
      >
      </USelectMenu>
    </UFormGroup>
    <UFormGroup
        label="เบอร์โทรศัพท์ (Phone)"
        class="text-downriver-950"
        name="phone"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.phone ? formErrors?.phone[0] : undefined"
    >
      <BaseTelephoneInput
          v-model="state.phone"
          placeholder="0812223333"
          :error="formErrors?.phone ? formErrors?.phone[0] : undefined"
      />
    </UFormGroup>
    <UFormGroup
        label="Email"
        class="text-downriver-950"
        name="email"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.email ? formErrors?.email[0] : undefined"
    >
      <UInput
          v-model="state.email"
          type="email"
          :placeholder="t('careers.email.placeholder')"
      />
    </UFormGroup>
    <UFormGroup
        label="สภานภาพทางครอบครัว (Family Status)"
        class="text-downriver-950"
        name="family_status"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.family_status ? formErrors?.family_status[0] : undefined"
    >
      <URadioGroup v-model="state.family_status" :options="familyStatusOptions" class="mt-4" :ui-radio="{container: 'mb-4'}">
        <template #label="{ option }">
          <div class="flex flex-col gap-4 text-downriver-950 text-sm">
            {{ option.label }}
          </div>
        </template>
      </URadioGroup>
    </UFormGroup>
    <UFormGroup
        label="สถานภาพทางทหาร (Military Service)"
        class="text-downriver-950"
        name="military_service"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.military_service ? formErrors?.military_service[0] : undefined"
    >
      <URadioGroup v-model="state.military_service" :options="militaryServiceOptions" class="mt-4" :ui-radio="{container: 'mb-4'}">
        <template #label="{ option }">
          <div class="flex flex-col gap-4 text-downriver-950 text-sm">
            {{ option.label }}
          </div>
        </template>
      </URadioGroup>
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
          @click="nextStep"
          :ui="{variant: {solid: 'disabled:bg-downriver-950 aria-disabled:bg-downriver-950'}}"
      />
    </div>
  </div>

</template>

<style scoped>

</style>
