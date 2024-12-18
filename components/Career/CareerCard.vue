<script setup lang="ts">
interface Props {
  career: Career
}

const localePath = useLocalePath()

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4 border rounded-md lg:border-0 p-4 lg:p-0">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
      <div class="col-span-3 text-downriver-950 text-base font-bold truncate flex items-center">
        {{ career.title }}
      </div>
      <div class="col-span-1 text-light text-sm lg:text-base font-normal flex items-center">
        {{ career.type.name }}
      </div>
      <div class="col-span-3 text-light text-sm lg:text-base font-normal flex items-center gap-2">
        <UIcon name="i-heroicons-outline-building-office" class="h-5 w-5 shrink-0"/>
        <span>{{ career.department.name }}</span>
      </div>
      <div class="col-span-3 text-light text-sm lg:text-base font-normal flex items-center gap-2">
        <UIcon name="i-heroicons-outline-map-pin" class="h-5 w-5 shrink-0"/>
        <span>{{ career.location.name }}</span>
      </div>
      <div
          class="col-span-2 text-light text-sm font-medium lg:text-right flex justify-center lg:justify-end items-center">
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
