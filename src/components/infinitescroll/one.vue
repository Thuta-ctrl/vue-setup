<template>
  <div class="container">
    <h6>Lazy Loader One</h6>
    <div ref="el">
        <div class="card" v-for="city in cities" :key="city.name" v-show="cities">
        <h6 class="card-title">{{ city.name }}</h6>
        </div>
    </div>
  </div>
</template>

<script>
import city from '@/reuseable/city.json'
import { useScroll } from '@vueuse/core'
import { ref } from 'vue'
export default {
  name: 'scroll-one',
  setup() {
    const cities = ref(city)
    const el = ref(null)
    const { x, y, isScrolling, arrivedState, directions } = useScroll(el)
   
    return {
      x,
      y,
      isScrolling,
      arrivedState,
      directions,
      cities,
    }
  },
}
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: transform 1s linear;
  }

  .v-enter-from,
  .v-leave-to {
    transform: rotateY(60deg);
  }
  .container {
    margin: 0 auto;
    max-width: 1100px;
  }
  .card {
    padding: 5px;
    margin: 5px;
    text-align: center;
    background-color: antiquewhite;
  }
</style>