<template>
  <NuxtLayout name="default">
    <div class="w-[calc(100%-var(--aside-width))] flex flex-nowrap">
      <div ref="elemContent" class="flex-1 overflow-hidden p-2">
        <ContentDoc>
          <template #empty>
            <h1>Document is empty</h1>
          </template>
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>
      </div>
      <div class="hidden lg:block w-72 p-2">
        <TableOfContents :active-ids="activeIds" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const contentQuery = await queryContent(useRoute().path).find()
useHead({
  title: contentQuery[0]?.title
})

const elemContent = ref<HTMLElement>()
const options = {
  root: elemContent.value,
  rootMargin: '0px',
  threshold: 0.5
}
const activeIds = ref<string[]>(reactive([]))

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entrie) => {
      const id = entrie.target.id
      if (entrie.isIntersecting && !activeIds?.value.includes(id)) {
        activeIds.value.push(id)
      } else if (!entrie.isIntersecting && activeIds?.value.includes(id)) {
        activeIds.value.splice(activeIds.value.findIndex((x:any) => x === id), 1)
      }
    })
  }, options)

  elemContent.value?.querySelectorAll('[id]').forEach((element) => {
    observer.observe(element)
  })
})
</script>