<script setup lang="ts">
import {useLocaleTimeAgo} from "~/composables/useLocaleTimeAgo";

interface Props {
  career: Career
}

const localePath = useLocalePath()

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col space-y-2 border rounded-md p-4">
    <div class="text-downriver-950 text-base font-bold flex gap-6 items-center justify-between">
      <span class="truncate">{{ career.title }}</span>
      <span class="w-fit shrink-0 text-right text-sm font-normal"> {{ useLocaleTimeAgo(career.created_at) }} </span>
    </div>
    <div class="text-light text-sm lg:text-base font-normal">{{ career.type.name }}</div>
    <div class="text-light text-sm lg:text-base font-normal flex items-center gap-2">
      <UIcon name="i-heroicons-outline-building-office" class="h-5 w-5 shrink-0"/>
      <span>{{ career.department.name }}</span>
    </div>
    <div class="text-light text-sm lg:text-base font-normal flex items-center justify-between gap-2">
      <div class="flex gap-2">
        <UIcon name="i-heroicons-outline-map-pin" class="h-5 w-5"/>
        <span>{{ career.location.name }}</span>
      </div>
      <div
          class="text-light text-sm font-medium lg:text-right flex justify-center lg:justify-end items-center">
        <UButton
            :to="localePath(`/careers/${career.id}`)"
            :label="$t('careers.view_this_job')"
            class="w-full lg:w-auto flex justify-center items-center bg-downriver-950 hover:bg-downriver-900"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
