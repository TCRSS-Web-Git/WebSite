<script setup lang="ts">
interface Props {
  links: any[]
  selectedCurrentPage: string
}

defineProps<Props>()
const localePath = useLocalePath()
const isOpen = defineModel<boolean>('isOpen')
</script>

<template>
  <USlideover
      v-model="isOpen"
      side="left"
      :ui="{wrapper: 'top-15', overlay: {base: 'top-15'}}"
  >
    <div class="py-6 px-4 flex-1">
      <div
          v-for="item in links"
          :key="item.label"
          class="flex flex-col gap-6"
      >
        <ULink
            v-if="!item.children"
            class="px-2 py-3 text-base font-semibold"
            :to="localePath(item.to)"
            @click="isOpen=false"
        >
          {{item.label}}
        </ULink>
        <div v-else
             class="flex flex-col"
        >
          <span class="px-2 py-3 text-base font-semibold">{{item.label}}</span>
          <div class="flex flex-col ps-4">
            <ULink
                v-for="child in item.children"
                :key="child.label"
                class="px-2 py-3 text-sm font-normal"
                :to="localePath(child.to)"
                @click="isOpen=false"
            >
              {{child.label}}
            </ULink>
          </div>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<style scoped>

</style>
