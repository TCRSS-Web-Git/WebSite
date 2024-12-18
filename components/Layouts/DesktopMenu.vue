<script setup lang="ts">

interface Props {
  links: any[]
  selectedCurrentPage: string
}
defineProps<Props>()
const localePath = useLocalePath()

const classLink = {
  active: 'text-gray-50 font-bold',
  inactive: 'text-lightest hover:text-white font-normal'
}
</script>

<template>
  <nav>
    <ul class="flex items-center min-w-0 gap-4">
      <li v-for="(item, index) of links" :key="`section=-${index}`">
        <ULink
            v-if="!item.children"
            class="px-2 py-3 text-sm lg:text-base hover:cursor-pointer"
            :active-class="classLink.active"
            :inactive-class="classLink.inactive"
            :active="item.pages.includes(selectedCurrentPage)"
            :to="localePath(item.to)"
        >
          {{item.label}}
        </ULink>
        <div v-else>
          <UPopover mode="hover">
            <template #default>
              <button
                  class="px-2 py-3 text-sm lg:text-base hover:cursor-pointer flex gap-x-1.5 items-center"
                  :class="[item.pages.includes(selectedCurrentPage) ? classLink.active : classLink.inactive]"
              >
                {{item.label}}
                <UIcon name="i-heroicons-chevron-down" class="h-4 w-4"/>
              </button>
            </template>
            <template #panel="{ close }">
              <div class="p-2 space-y-1" :class="item.label.toString().toLowerCase().includes('sustainability') ? 'w-96' : 'w-60'">
                  <UButton
                      v-for="child in item.children"
                      :key="child.label"
                      class="text-sm lg:text-base hover:cursor-pointer w-full text-downriver-950"
                      variant="ghost"
                      type="link"
                      :to="localePath(child.to)"
                      :label="child.label"
                      @click="close()"
                  />
              </div>
            </template>
          </UPopover>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
