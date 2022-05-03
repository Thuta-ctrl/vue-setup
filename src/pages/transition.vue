<template>
  <div>
    <button @click="show = !show">Toggle</button>
    <Transition>
      <p v-if="show">How are you!</p>
    </Transition>
    <hr/>

    Named Transition
    <named-transition></named-transition>
  </div>
</template>

<script>
import NamedTransition from '@/components/transition/named.vue'
export default {
  name: 'transition-page',
  data() {
    return {
      show: false
    }
  },
  components: {
    NamedTransition
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>