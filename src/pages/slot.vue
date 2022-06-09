<template>
  <div>
    <Menu>
      <template #default="{ open }">
        <button @click="open">
          <font-awesome-icon icon="user-secret" />
        </button>
      </template>
      <template #menu="{ close, isOpen }">
        <div @click="close" v-if="isOpen">
          I am opening
        </div>
      </template>
    </Menu>
  </div>
</template>

<script setup>
import Menu from '@/components/slots/menu.vue'
</script>

<style>

</style>