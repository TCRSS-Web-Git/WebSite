<script setup lang="ts">
// const switchLocalePath = useSwitchLocalePath()
const { locale, setLocale, locales } = useI18n()

// const locales = [{
//   name: 'English',
//   value: 'en',
// }, {
//   name: 'ไทย',
//   value: 'th',
// }]

// const availableLocales = computed(() => {
//   return locales.value.filter(i => i.code !== locale.value)
// })

const currentLocale = computed(() => locales.value.find(l => l.code === locale.value))
// const langCookie = useCookie('i18n_lang', {})

// const changeLocal = (newLocale: string) => {
// setLocale(newLocale) // this update real time locale
// langCookie.value = newLocale // this will update cookie value
// }
</script>

<template>
  <ClientOnly>
    <UPopover
      mode="hover"
      v-bind="$attrs"
    >
      <template #default>
        <UButton
          color="white"
          variant="ghost"
          aria-label="Locale"
          class="text-lightest hover:text-downriver-950"
          :label="currentLocale.name"
        />
      </template>
      <template #panel="{ close }">
        <div class="p-2 w-40 space-y-1">
          <UButton
            v-for="l in locales"
            :key="l.code"
            :variant="locale === l.code ? 'soft' : 'ghost'"
            :label="l.name"
            class="w-full text-downriver-950"
            @click="setLocale(l.code); close()"
          />
        </div>
      </template>
    </UPopover>
    <template #fallback>
      <div class="w-16 h-8" />
    </template>
  </ClientOnly>
</template>
