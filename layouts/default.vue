<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col min-h-screen bg-downriver-950">
      <AppHeader/>
      <div class="grow h-full bg-white">
        <slot/>
      </div>

      <AppFooter/>
    </div>


</template>

<style scoped>

</style>
