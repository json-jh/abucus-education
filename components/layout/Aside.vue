<template>
  <aside class="w-64">
    <div class="sticky top-[var(--header-height)]">
      <Navigater :links="navigation!" />
    </div>
  </aside>
</template>

<script lang="ts" setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
console.log(navigation)
</script>

<style lang="scss" scoped>


</style>