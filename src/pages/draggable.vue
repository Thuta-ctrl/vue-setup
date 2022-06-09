<template>
  <draggable 
    v-model="list" 
    group="people" 
    tag="transition-group" :component-data="{name:'fade', tag:'ul'}"
    @start="start" 
    @end="end"
    :move="onMoveCallback"
    item-key="id">
      <template #item="{element}">
        <li>{{element.name}}</li>
      </template>
  </draggable>
</template>

<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'
const drag = ref(false)
const list = ref([
  { id: 1, position: 1, name: 'Monkey' },
  { id: 2, position: 2, name: 'Cat' },
  { id: 3, position: 3, name: 'Dog' }
])
const start = (e) => {
  drag.value = true
}
const end = () => {
  drag.value = false
}
</script>