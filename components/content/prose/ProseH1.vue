<template>
  <h1 :id="id" class="border-b mb-3 pb-1 border-gray-300">
    <a v-if="generate" :href="`#${id}`">
      <b><slot /></b>
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()
const heading = 1
const { anchorLinks } = useRuntimeConfig().public.content

const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
