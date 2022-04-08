<template>
  <h1>Life Hooks</h1>
</template>

<script>
export default {
  name: 'life-hooks',
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('created')
  },
  unmounted() {
    console.log('unmounted')
  },
  beforeCreate() {
    console.log('before create')
  },
  beforeMount() {
    console.log('before mount')
  }
}
</script>

<style>

</style>