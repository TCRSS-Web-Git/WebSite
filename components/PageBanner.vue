<script setup lang="ts">
interface Props {
  title: string
  imagePath: string
  posX: number
  posY: number
}

const props = withDefaults(defineProps<Props>(), {
  posX: 0,
  posY: 50,
})


const imageStyle = `background-image: url('${props.imagePath}');background-position:${props.posX}% ${props.posY}%;`
</script>

<template>
  <div
      class="bg-cover h-28 lg:h-60 flex items-center justify-center"
      :style="imageStyle"
      style="box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);"
  >
    <div class="text-banner flex flex-col gap-2 lg:gap-6">
      {{ title }}
      <slot name="subTitle"></slot>
    </div>
  </div>
</template>

<style scoped>
.text-banner {
  @apply
  text-3xl
  lg:text-5xl
  font-bold
  text-white
  text-center
}
</style>
