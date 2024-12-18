<script setup lang="ts">
import BaseTelephoneInput from "~/components/BaseTelephoneInput.vue";

interface Props {
  formErrors: object | undefined
}

const {t} = useI18n()

const departmentOptions = ref([{
  id: 'Customer Service',
  name: t('contact_us.customer_service'),
}, {
  id: 'Sales and Marketing',
  name: t('contact_us.sales_and_marketing'),
}, {
  id: 'HR and Recruit',
  name: t('contact_us.hr_and_recruit'),
}, {
  id: 'Procurement',
  name: t('contact_us.procurement'),
}])

defineProps<Props>()

const state = defineModel<ContactUsForm>('state')
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UFormGroup
          :label="t('contact_us.name.label')"
          class="text-downriver-950"
          name="name"
          required
          :ui="{ label: { base: 'text-downriver-950' }  }"
          :error="formErrors?.name ? formErrors?.name[0] : undefined"
      >
        <UInput
            v-model="state.name"
            size="md"
            :placeholder="t('contact_us.name.placeholder')"
        />
      </UFormGroup>
      <UFormGroup
          :label="t('contact_us.surname.label')"
          name="surname"
          required
          :ui="{ label: { base: 'text-downriver-950' }  }"
          :error="formErrors?.surname ? formErrors?.surname[0] : undefined"
      >
        <UInput
            v-model="state.surname"
            size="md"
            :placeholder="t('contact_us.surname.placeholder')"
        />
      </UFormGroup>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <UFormGroup
          :label="t('contact_us.phone.label')"
          class="text-downriver-950"
          name="phone"
          required
          :ui="{ label: { base: 'text-downriver-950' }  }"
          :error="formErrors?.phone ? formErrors?.phone[0] : undefined"
      >
        <BaseTelephoneInput
            v-model="state.phone"
            placeholder="0812223333"
        />
      </UFormGroup>
      <UFormGroup
          :label="t('contact_us.email.label')"
          name="email"
          required
          :ui="{ label: { base: 'text-downriver-950' }  }"
          :error="formErrors?.email ? formErrors?.email[0] : undefined"
      >
        <UInput
            v-model="state.email"
            size="md"
            :placeholder="t('contact_us.email.placeholder')"
        />
      </UFormGroup>
    </div>
    <UFormGroup
        :label="t('contact_us.department_type.label')"
        name="department_type"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.department_type ? formErrors?.department_type[0] : undefined"
    >
      <USelectMenu
          v-model="state.department_type"
          :options="departmentOptions"
          :placeholder="t('contact_us.department_type.placeholder')"
          size="md"
          value-attribute="id"
          option-attribute="name"
      />
    </UFormGroup>
    <UFormGroup
        :label="t('contact_us.detail.label')"
        name="detail"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
        :error="formErrors?.detail ? formErrors?.detail[0] : undefined"
    >
      <UTextarea
          v-model="state.detail"
          :placeholder="t('contact_us.detail.placeholder')"
          size="md"
      />
    </UFormGroup>
  </div>
</template>

<style scoped>
</style>