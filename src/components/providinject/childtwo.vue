<template>
  <div>
    <h4>Child Two Inside Child One</h4>
    <ul>
      <li v-for="(animal,index) in animals" :key="index">
        {{ animal.name }} => {{ animal.count }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'provide-childtwo',
  inject: ['animals']
}
</script>

<style>

</style>