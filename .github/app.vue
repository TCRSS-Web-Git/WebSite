<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
  <Head>
    <Link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
    <Link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <Link rel="shortcut icon" href="/favicon.ico" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Meta name="apple-mobile-web-app-title" content="VetWork" />
    <Link rel="manifest" href="/site.webmanifest" />
  </Head>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
  </Html>
</template>

<script setup lang="ts">
const title = useState('title', () => 'TCRSS')
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title.value}` : title.value
  },
})

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>
