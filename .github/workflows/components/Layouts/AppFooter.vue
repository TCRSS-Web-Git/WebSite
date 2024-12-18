<script setup lang="ts">
interface FooterLink {
  label: string
  to: string
}

const localePath = useLocalePath()
const {t,locale} = useI18n()


const links = ref<FooterLink>([
  {
    label: computed(() => t('policy.pdpa')),
    to: '/policies/pdpa'
  },{
    label: computed(() => t('policy.cookie')),
    to: '/policies/cookie'
  },{
    label: computed(() => t('policy.anti_corruption')),
    to: '/policies/anti-corruption'
  }
])

const codeOfConductFile = computed(() => locale.value === 'en' ? '/policy-files/Code%20of%20Conduct.pdf' : '/policy-files/จรรยาบรรณธุรกิจ.pdf')
</script>

<template>
  <div class="wrapper">
    <UContainer class="footer-container text-lightest">
      <div v-for="link in links" :key="link.label">
        <ULink
            :to="localePath(link.to)"
            class="px-2 py-3 text-sm lg:text-base hover:cursor-pointer"
            inactive-class="text-lightest hover:text-white font-normal"
        >
          {{link.label}}
        </ULink>
      </div>
      <ULink
          target="_blank"
          :to="codeOfConductFile"
          class="px-2 py-3 text-sm lg:text-base hover:cursor-pointer"
          inactive-class="text-lightest hover:text-white font-normal"
      >
        {{$t('policy.code_of_conduct')}}
      </ULink>
    </UContainer>
  </div>
</template>

<style scoped>
.wrapper {
  @apply bg-downriver-950 backdrop-blur bottom-0 z-50
}

.footer-container {
  @apply flex items-center justify-center gap-4 py-3.5 flex-wrap
}
</style>
