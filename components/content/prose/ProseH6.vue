<template>
  <h6 :id="id">
    <a v-if="generate" :href="`#${id}`">
      <b><slot /></b>
    </a>
    <slot v-else />
  </h6>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id: string }>()
const heading = 6
const { anchorLinks } = useRuntimeConfig().public.content
const generate = anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
