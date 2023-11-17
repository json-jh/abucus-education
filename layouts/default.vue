<template>
  <div class="w-full">
    <LayoutHeader />
    <div class="flex flex-nowrap w-full">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss">
body {
  @apply antialiased font-sans text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900;
}
</style>