<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition name="hello">
      <p v-if="show">I am named trasition!</p>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'named-transition',
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
.hello-enter-active,
.hello-leave-active {
  transition: opacity 0.5s ease;
}

.hello-enter-from,
.hello-leave-to {
  opacity: 0;
}
</style>