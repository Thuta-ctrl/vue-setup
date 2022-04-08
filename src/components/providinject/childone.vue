<template>
  <div>
    <h4>Child One</h4>
    <ul>
      <li v-for="(animal,index) in animals" :key="index">
        {{ animal.count }} => {{ animal.name }}
      </li>
    </ul>

    <child-two></child-two>
  </div>
</template>

<script>
import ChildTwo from '@/components/providinject/childtwo.vue'
export default {
  name: 'provide-childone',
  components: {
    ChildTwo
  },
  inject: ['animals']
}
</script>

<style>

</style>