<template>
  <h1>Modalbox</h1>
  <div id="modalBox" class="modal-vue">
    <!-- button show -->
    <button @click="showModal = true">Modalbox</button>
    <!-- overlay -->
    <div class="overlay" v-if="showModal" @click="showModal = false"></div>
    <!-- modal -->
    <div class="modalbox_content" v-if="showModal">
      <button class="close" @click="showModal = false">x</button>
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chart-js',
  el: '#modalBox',
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style>
  .modal-vue .overlay {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }
  .modal-vue .modalbox_content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 47%;
    z-index: 999;
    margin: 0 auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 20px;
  }
  .modal-vue .close{
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>