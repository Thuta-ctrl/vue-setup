<template>
  <draggable 
    v-model="list" 
    group="people" 
    tag="transition-group" :component-data="{name:'fade', tag:'table'}"
    @start="start" 
    @end="end"
    item-key="id">
      <template #item="{element}">
        <tr>
          <td>{{ element.id }}</td>
          <td>{{ element.name }}</td>
          <td>{{ element.position }}</td>
        </tr>
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
  console.log(e.target)
  console.log('I am dragging')
  drag.value = true
}
const end = () => {
  console.log('I am ended dragging')
  drag.value = false
}
</script>
<style scoped>
tr {
  padding: 20px;
}
td {
  border: 1px solid grey;
  padding: 20px;
}
table {
  border: 1px solid grey;
}
</style>