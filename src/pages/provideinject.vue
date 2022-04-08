<template>
  <div>
    <h1>Provide Inject</h1>

    <h5>props သည် dataများကို တစ်ဆင့်ပြီးမှတစ်ဆင့်ယူပြီး <br>
      parent => child1 => child2 => child 3
    <br/>
     provide injectသည် parentမှ dataကို မည်သည့်childက မဆို လှမ်းခေါ်နိုင်သည်။ <br/>
     parent (provide) => child1 (inject) <br>
     parent (provide) => child2 (inject) <br>
     parent (provide) => child3 (inject) <br>
    </h5>

    <child-one></child-one>
  </div>
</template>

<script>
import ChildOne from '@/components/providinject/childone.vue'

export default {
  name: 'provide-inject',
  components: {
    ChildOne,
  },
  provide() {
    return {
      animals: [
        {name: 'cat', count: 2},
        {name: 'dog', count: 3}
      ]
    }
  }
}
</script>

<style>

</style>