<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: undefined,
    required: false
  }
})
</script>

<template>
  <NuxtLink :href="href" :target="target" class="border-b border-dotted">
    <slot />
  </NuxtLink>
</template>
