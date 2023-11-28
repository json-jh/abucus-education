<template>
  <header class="sticky top-0">
    <div class="backdrop-blur sticky top-0 z-50 px-2 py-1 flex h-full">
      <div class="flex-auto dark:text-blue-500">
        
      </div>
      <div class="flex-auto flex flex-nowrap justify-end">
        <ConfigColorMode />
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const bind = ref({
  modelValue: '1234'
})
</script>

<style lang="scss">
:root {
  --header-height: 4rem;
}

header {
  @apply h-[var(--header-height)]
}
</style>