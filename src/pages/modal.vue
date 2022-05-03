<template>
  <div>
    <div class="modal-box" :class="{ show: showModal }">
      <p>hello</p>
    </div>
    <button @click="show">{{ showModal ? 'Hide':'Show' }}</button>
  </div>
</template>

<script>
export default {
  name: 'modal-page',
  data() {
    return {
      showModal: false,

    }
  },
  methods: {
    show() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
  .modal-box {
    background: white;
    width: 100px;
    border: 1px solid red;
    display: none;
  }
  .modal-box.show {
    display: block;
  }
</style>