<template>
  <div>
    <input type="text" v-model="bind.binding.modelValue">11111111111
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  binding: {
    modelValue: string
  }
}>(), {
  binding: () => ({
    modelValue: ''
  })
})

const bind = ref(props)
</script>

<style lang="scss" scoped>


</style>