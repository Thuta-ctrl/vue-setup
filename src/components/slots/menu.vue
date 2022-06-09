<template>
  <div>
    <h1>Header</h1>
    <slot :open="open"></slot>
    <div ref="menu">
      <slot name="menu" :is-open="isOpen" :close="close" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
const isOpen = ref()
const menu = ref()
const open = () => {
  if (!isOpen.value) {
    isOpen.value = true
  }
}
onClickOutside(menu, () => isOpen.value = false)
const close = () => isOpen.value = false
</script>

<style>

</style>