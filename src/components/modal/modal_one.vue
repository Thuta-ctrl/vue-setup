<template>
  <div>
    <div class="modal-box" :class="{ show: showModal }" v-click-outside="onClickOutside">
      <div class="modal_content">
        <p class="modal_ttl">Title</p>
        <p class="modal_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
</div>
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
    },
    onClickOutside(){
        this.showModal = false
    }
  }
}
</script>

<style>
  .modal-box {
    background: rgb(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    display: none;
    position: relative;
  }
  .modal-box.show {
    display: block;
  }
  .modal_content{
    width: 40%;
    margin: 0 auto;
    padding: 50px 100px;
    background: #fff;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }
  .modal_ttl{
    font-size: 22px;
  }
</style>