<template>
  <div class="relative bg-neutral-100 dark:bg-neutral-800 text-sm my-2">
    <div class="absolute right-0 top-0 pt-2 pr-2 flex items-start justify-center">
      <Icon
        name="ic:outline-folder-copy"
        size="18"
        style="z-index: 1;"
        class="cursor-pointer transition-all"
        :class="{'opacity-100': !isCopied, 'opacity-0': isCopied}"
        @click.stop="copy"
      />
    </div>
    <div class="absolute right-0 top-0 pt-2 pr-2 flex items-start justify-center">
      <Icon
        name="mdi:check-all"
        size="18"
        style="z-index: 0;"
        class="cursor-pointer transition-all"
        :class="{'opacity-100': isCopied, 'opacity-0': !isCopied}"
      />
    </div>
    <div class="p-1">
      <span v-if="language">
        [{{ language }}]
      </span>
      <span v-if="filename" class="filename-text">
        {{ filename }}
      </span>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    code?: string;
    language?: string | null;
    filename?: string | null;
    highlights?: Array<number>;
  }>(), {
    code: '',
    language: null,
    filename: null,
    highlights: () => []
  }
)

const isCopied = ref<boolean>(false)

const copy = () => {
  navigator.clipboard.writeText(props.code || '')
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 1000)
}
</script>

<style scoped>
:slotted(pre) {
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
  line-height: 1.4;
  counter-reset: lines;
}

:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
  white-space: pre-wrap;
}

:slotted(pre code .line::before) {
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: left;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid red;
}
:slotted(.dark pre code .highlight) {
  background-color: #363b46;
}

:slotted(.light pre code .highlight) {
  background-color: #dde1ea;
}
</style>
