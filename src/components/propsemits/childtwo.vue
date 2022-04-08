<template>
  <h1>CHild Two {{ age }}</h1>

  <input :value="age" @input="updateAge">
</template>

<script>
export default {
  name: 'child-page',
  props: ['age'],
  emits: ['update'],

  methods: {
    updateAge(e) {
      this.$emit('update', e.target.value)
    }
  }
}
</script>

<style>

</style>