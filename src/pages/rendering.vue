<template>
  <div>
    <div class="computed">
      <h4>Computed Properties</h4>
      <input v-model="name" /><br/>
      {{ changeName }}
    </div>

    <div class="list">
      <h4>List Rendering (v-for)(keyအမြဲ bindပေးရမည်)</h4>
      <ul>
        <li v-for="(value,key) in object" :key="key" v-show="number == 3">
          {{ key }}: {{ value }}
        </li>
      </ul>

      <ul>
        <li v-for="(value,index) in filterLists" :key="index">
          {{ value.animal }} {{ value.count }}
        </li>
      </ul>
    </div>
   
    <div class="conditional">
      <h4>Conditional rendering (v-show, v-if,v-else-if,v-else)(v-for နှင့် v-if တွဲသုံးလို့မရပါ။)</h4>
      <span v-if="number == 1">Number 1</span>
      <span v-else-if="number == 2">Number 2</span>
      <span v-else>Number 3</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rendering-page',
  data() {
    return {
      name: '',
      number: 3,

      lists: [
        { animal: 'cat', count: 2 },
        { animal: 'dog', count: 2 },
        { animal: 'pig', count: 2 }
      ],

      object: {
        name: 'kyaw kyaw',
        age: '10',
      }
    }
  },
  computed: {
    changeName() {
      return this.name + ' is 10 years old'
    },

    filterLists() {
      return this.lists.filter(list => list.animal == 'cat')
    }
  }
}
</script>

<style scoped>
  div.computed {
    margin: 10px;
  }

  div.list {
    margin: 10px;
  }

  div.conditional {
    margin: 10px;
  }
</style>