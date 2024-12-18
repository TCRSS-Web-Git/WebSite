<script setup lang="ts">
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

interface Props {
  error?: string
  placeholder?: string
}

interface PhoneObject {
  country: {
    dialCode: string
    iso2: string
    name: string
  }
  countryCallingCode: string
  countryCode: string
  formatted: string
  nationalNumber: string
  number: string
  valid: boolean
}

const props = withDefaults(defineProps<Props>(), {
  error: '',
  placeholder: '',
})

const modelValue = defineModel<string>('modelValue')

const phone = ref('')

const options = ref({
  mode: 'national',
  validCharactersOnly: true,
  autoFormat: true,
  styleClasses: 'focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-xs p-0 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
})

const phoneObject = ref('')

const inputOptions = ref({
  placeholder: props.placeholder,
  maxlength: 15,
  styleClasses: 'focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
})
const dropdownOptions = ref({
  showDialCodeInList: true,
  showDialCodeInSelection: true,
  showFlags: true,
  showSearchBox: true,
})

const updatePhone = (_: string, phoneObject2: PhoneObject) => {
  phoneObject.value = phoneObject2.number
  modelValue.value = phoneObject.value
}

watch(modelValue, () => {
  if (modelValue.value) {
    phone.value = modelValue.value
  }
}, { immediate: true })
</script>

<template>
  <VueTelInput
    v-model="phone"
    :class="error ? 'vue-tel-input-error' : ''"
    v-bind="options"
    :input-options="inputOptions"
    :default-country="'TH'"
    :auto-default-country="false"
    :dropdown-options="dropdownOptions"
    mode="national"
    @on-input="updatePhone"
  >
    <template #arrow-icon>
      <UIcon
        name="i-heroicons-chevron-down"
        class="ml-2"
      />
    </template>
  </VueTelInput>
</template>

<style>
.vue-tel-input {
  @apply flex border-none text-left focus-within:shadow-none ring-0 rounded-md !important;
}

.vue-tel-input-error > input {
  @apply ring-red-500 dark:ring-red-400 focus:ring-red-500 dark:focus:ring-red-400 focus:outline-none focus:border-red-500 dark:focus:border-red-400 !important;
}

.vue-tel-input.disabled .selection, .vue-tel-input.disabled .dropdown, .vue-tel-input.disabled input {
  @apply cursor-not-allowed
}

.vti__dropdown {
  @apply flex flex-col items-center justify-center relative p-1.5 cursor-pointer
  border-t border-b border-l border-gray-200 dark:border-gray-700 rounded-l-md ring-transparent !important;
}

.vti__dropdown.show {
  @apply max-h-[300px] overflow-y-scroll
}

.vti__dropdown.open {
  @apply bg-transparent
}

.vti__dropdown.disabled {
  @apply cursor-not-allowed outline-none bg-gray-200
}

.vti__selection {
  @apply text-xs flex items-center
}

.vti__selection .vti__country-code {
  @apply text-gray-500 dark:text-gray-200;
}

.vti__flag {
  @apply mx-1.5
}

.vti__dropdown-list {
  @apply bg-white dark:bg-gray-800 border rounded-md shadow mt-3 border-gray-200 dark:border-gray-700;
}

.vti__dropdown-list::-webkit-scrollbar {
  width: 8px;
}

.vti__dropdown-list::-webkit-scrollbar-thumb {
  @apply rounded-full h-2/3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 hover:dark:bg-gray-600;
}

.vti__dropdown-list::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-transparent;
}

.vti__dropdown-list {
  scrollbar-width: thin; /* Firefox */
  -ms-overflow-style: inherit; /* Internet Explorer 10+ */
}

.vti__dropdown-arrow {
  @apply transition-all inline-block text-gray-600
}

.vti__dropdown-item {
  @apply cursor-default flex items-center gap-1 px-2 py-1.5 bg-white dark:bg-gray-800
}

.vti__dropdown-item.highlighted {
  @apply bg-gray-100 dark:bg-gray-900
}

.vti__dropdown-item.last-preferred {
  @apply border-b border-solid border-gray-300
}

.vti__dropdown-item .vti__flag {
  @apply inline-block mr-1.5
}

.vti__input {
  @apply form-input relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-none rounded-r-md rounded-l-none placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400
}

.vti__search_box {
  @apply border-none ring-0 rounded-tl-md rounded-r-none w-full sticky top-0 m-0 !important;
}

.vti__search_box_container {
  @apply border-b border-gray-200 dark:border-gray-700
}

.vti__dropdown > ul > li {
  @apply dark:bg-gray-800 hover:dark:bg-gray-900 dark:text-white !important;
}

.vti__dropdown {
  @apply form-input disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-l-md rounded-r-none placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400;
}

.vti__dropdown.open {
  @apply dark:bg-gray-900 dark:text-white dark:border-none !important;
}
</style>
