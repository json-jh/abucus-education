<template>
  <h4 :id="id">
    <a v-if="generate" :href="`#${id}`">
      <b><slot /></b>
    </a>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id: string }>()
const heading = 4
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
