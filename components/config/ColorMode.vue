<template>
  <HeadlessMenu as="div" class="relative inline-block text-left">
    <div>
      <HeadlessMenuButton
        class="inline-flex w-full justify-center rounded-md px-2 py-1 text-sm font-medium hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <Icon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" class="text-xl" />
      </HeadlessMenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <HeadlessMenuItems
        class="absolute right-0 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <HeadlessMenuItem v-for="(item, index) in ['dark', 'light']" :key="index">
            <button
              :class="[
                item === colorMode.preference ? 'bg-violet-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2',
              ]"
              @click.stop="colorMode.preference = item"
            >
              <Icon :name="item === 'dark' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" class="text-xl" />
              {{ item.toLocaleUpperCase() }}
            </button>
          </HeadlessMenuItem>
        </div>
      </HeadlessMenuItems>
    </transition>
  </HeadlessMenu>
  <!-- <UPopover>
    <UButton
      color="gray"
      variant="ghost"
      :ui="{ base: '!p-2' }"
    >
      <Icon :name="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" class="text-xl" />
    </UButton>

    <template #panel>
      <UCard :ui="{ header: { base: '!p-2' }, body: { base: 'grid grid-cols-6 gap-2 !p-2' }, footer: { base: 'grid grid-cols-6 gap-2 !p-2' } }">
        <template #header>
          <UToggle
            v-model="isDark"
            on-icon="i-heroicons-moon-20-solid"
            off-icon="i-heroicons-sun-20-solid"
            variant="ghost"
            aria-label="Theme"
            :ui="{
              base: 'flex items-center'
            }"
          />
        </template>

        <UButton
          v-for="(color, index) in primarys"
          :key="index"
          variant="solid"
          :color="color"
          :ui="{ rounded: 'rounded' }"
          size="md"
          :title="color"
          @click="setUiPrimary(color)"
        />
        <template v-if="isDark" #footer>
          <UButton
            v-for="(color, index) in grays"
            :key="index"
            variant="solid"
            :color="color"
            :ui="{ rounded: 'rounded' }"
            size="md"
            :title="color"
            @click="setUiGray(color)"
          />
        </template>
      </UCard>
    </template>
  </UPopover> -->
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

</script>

<style lang="scss">
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>