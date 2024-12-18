<script setup lang="ts">

const state = defineModel<ApplicationForm>('state')
const career = defineModel<Career>('career')

const {t} = useI18n()

const emit = defineEmits(['next', 'back'])
const nextStep = () => {
  emit('next')
}

const isDisabled = computed(() => state.value.salary === null || state.value.salary === '')
const backStep = () => {
  emit('back')
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <UFormGroup
        :label="t('careers.position_applied')"
        class="text-downriver-950"
        name="position_applied"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
    >
      <div class="text-light text-sm">
        {{ career?.data?.department?.name }}
      </div>
    </UFormGroup>

    <UFormGroup
        label="เงินเดือนที่คาดหวัง (Salary Requirement)"
        class="text-downriver-950"
        name="salary"
        required
        :ui="{ label: { base: 'text-downriver-950' }  }"
    >
      <UInput
          v-model="state.salary"
          type="number"
          size="md"
          :placeholder="t('careers.salary.placeholder')"
      >
        <template #trailing>
          <span class="text-light">฿</span>
        </template>
      </UInput>
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
