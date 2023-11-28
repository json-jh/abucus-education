<template>
  <div 
    class="pl-2"
    v-for="(link, index) in $props.links" :key="index"
    >
      <NuxtLink :to="link._path" class="hover:text-gray-300 hover:border-white border-l-2 pl-2">
        {{ link.title }}
      </NuxtLink>
      <template v-if="link.children">
        <Navigater :links="link.children.filter(item => link._path !== item._path)"/>
      </template>
  </div>
</template>

<script lang="ts" setup>
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const props = withDefaults(defineProps<{
  links: NavItem[]
}>(), {
})
</script>

<style lang="scss" scoped>


</style>