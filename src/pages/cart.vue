<template>
  <div>
    <ul>
      <li v-for="(item,index) in cartItems" :key="item.id">
        {{ item.name }}
        <input :value="model[index].name" @input="change(index, $event.target.value)">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const model = ref([])
const cartItems = computed(() => store.state.cartItems)

cartItems.value.map(() => model.value.push({name: ''}))

const change = (index,value) => {
  store.commit('updateCartName', {
    index,
    value
  })
  model.value[index].name = value
}
</script>

<style>

</style>