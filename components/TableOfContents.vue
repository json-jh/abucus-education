<template>
  <div class="w-full sticky top-24">
    <nav>
      <h4 class="mb-3">
        <b>Table of contents</b>
      </h4>
      <ul class="flex flex-col gap-1 overflow-hidden">
        <template v-if="links.length">
          <li
            v-for="link of links"
            :key="link.props?.id"
            :class="{
              'pl-0 text-lg': link.tag === 'h1',
              'pl-4 text-base': link.tag === 'h2',
              'pl-8 text-sm': link.tag === 'h3',
              'pl-12 text-xs': link.tag === 'h4',
              'pl-16 text-xs': link.tag === 'h5',
              'pl-20 text-xs': link.tag === 'h6'
            }"
          >
            <NuxtLink
              :to="`#${link.props?.id}`"
              :class="{
                'text-emerald-400': $props.activeIds.includes(link.props?.id)
              }"
            >
              {{ r(link.children) }}
            </NuxtLink>
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const { path } = useRoute()
const { data } = await useAsyncData(() => queryContent(path.split(/[:?#]/)[0].replace(/^(.+)[/]$/, '$1')).findOne())
const links = computed(() => data.value?.body?.children.filter((x:any) => /^h[0-9]$/.test(x.tag)) ?? [])

const r = (children:any) => children.map((child:any) => child.type === 'text' ? child.value : r(child.children)).join(' ')

withDefaults(
  defineProps<{
    activeIds: string[]
  }>(), {}
)
</script>

<style lang="scss">

</style>