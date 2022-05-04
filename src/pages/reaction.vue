<template>
  <div class="container">
    <div class="reaction">
      <Transition @click="reaction">
        <img src="@/assets/heart.png" v-if="!this.like" />
        <img src="@/assets/heart-fill.png" v-else/>
      </Transition>
      <p class="reaction-count">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reaction-page',
  data() {
    return {
      count: 0,
      like: false
    }
  },
  methods: {
    reaction() {
      this.like = !this.like
      if (this.like) this.count++
      else this.count--
    }
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    max-width: 1100px;
  }
  .reaction {
    text-align: center;
    padding: 30px;
    cursor: pointer;
  }
  .reaction-count {
    font-size: 30px;
    font-weight: bold;
  }
  .v-enter-active {
    transition: all 0.3s ease;
  }
  .v-leave-active {
    transition: all 0.3s ease;
  }
  .v-enter-from {
    transform: translate(-20px, 20px);
    opacity: 0;
  }
  .v-leave-to {
    transform: translateY(-20px, -20px);
    opacity: 0;
  }
</style>