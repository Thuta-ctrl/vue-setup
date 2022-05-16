<template>
  <div>
    <h1>Day Month Years</h1>
    <select v-model="day">
      <option v-for="n in days" :key="n">{{ n }}</option>
    </select>
    <select v-model="month">
      <option v-for="n in months" :key="n">{{ n }}</option>
    </select>
    <select v-model="year">
      <option v-for="n in years" :key="n">{{ n }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'day-month-year',
  data() {
    return {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear()  ,
      days_30: [4,9,11],
      days: [],
      months: [],
      years: []
    }
  },
  methods: {
    
  },
  created() {
    Array.from({length: 31}, (v,k) => this.days.push(k+1))
    Array.from({length: 12}, (v,k) => this.months.push(k+1))
    Array.from({length: 100}, (v,k) => this.years.push(k+1990))
  }
}
</script>

<style>

</style>