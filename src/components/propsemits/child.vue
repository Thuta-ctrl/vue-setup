<template>
  <h1>CHild One {{ name }}</h1>  

  <button @click="changeName">Change</button>
</template>

<script>
export default {
  name: 'child-page',
  props: ['name'],
  emits: ['change'],

  methods: {
    changeName() {
      this.$emit('change', 'Kyaw Kyaw')
    }
  }
}
</script>

<style>

</style>