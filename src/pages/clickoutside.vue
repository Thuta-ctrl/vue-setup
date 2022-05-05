<template>
  <div style="width: 500px; height: 500px">
    <button @click="show">Show</button>
    <div v-click-outside-custom="onClickOutside" v-show="modal">hello world</div>
  </div>
</template>

<script>
export default {
  name: 'click-outside',
  data() {
    return {
      modal: false
    }
  },
  methods: {
    show() {
      this.modal = true
    },
    onClickOutside() {
      console.log('hi')
    },
  }
}
</script>

<style>

</style>