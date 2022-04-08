<template>
  <h1>Most Used Features in Vue JS</h1>

  <ul>
    <li v-for="(list,index) in lists" :key="index">
      {{ list.name }} =>  {{ list.desc }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      lists: [
        { name: 'name', desc: 'နာမည်' },
        { name: 'props', desc: 'parentမှ childသို့ဒေတာပေးပို့သောအခါသုံး' },
        { name: 'emit', desc: 'parentမှ childသို့eventခေါ်ချင်သောအခါသုံး' },
        { name: 'data', desc: 'object,array,variable တို့ကို ကြေညာသောနေရာ' },
        { name: 'computed', desc: 'dataတွင်ကြေငြာထားသောအရာများကိုပြန်ပြင်လိုလျှင်သုံးသောနေရာ' },
        { name: 'methods', desc: 'functionများရေးသောနေရာ' },
        { name: 'watch', desc: 'dataများ urlများပြောင်းလဲသည်ကို စောင့်ကြည်သောနေရာ'},
        { name: 'mounted', desc: 'domပြီးမှ အလုပ်စလုပ်သောနေရာ'},
        { name: 'created', desc: 'pageကို စဝင်သည်နှင့်လုပ်စေချင်သောအရာများကိုလုပ်ခိုင်းသောနေရာ' },
      ],
      object: {

      },
    }
  },
  computed() {

  },
  methods: {
    click() {

    }
  },
  watch: {
    'route': function() {
      alert('hi')
    }
  },
  mounted() {
    
  },
  created() {
    
  }
}
</script>

<style>
  
</style>