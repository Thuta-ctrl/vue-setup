<template>
  <div class="text-center">
    <DatePicker 
      v-model="date" 
      locale="ja"
      title-position="left"
      :masks="masks"
      ref="datepicker"
      :select-attribute="selectAttribute"
      @dayclick="onDayClick"
      :popover="{ visibility: 'click' }"
    >  
      <template #day-content="{day}">
        <div class="today" style="color: #FC346A" v-if="day.label == 16">{{ day.label }}</div>
        <div class="others" @click="clickdate(day.id)" v-else>{{ day.label }}</div>
      </template>
      <template #header-title="{ monthLabel, yearLabel }">
        {{ yearLabel + '年' + monthLabel }}
      </template>
      <template v-slot="{ inputValue, inputEvents }">
        <input
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </DatePicker>

    <!-- <Calendar 
      title-position="left"
      :attributes='attributes'
      @dayclick="onDayClick"
      :masks="masks"
      locale="ja"
    ></Calendar> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import 'v-calendar/dist/style.css'
import { Calendar, DatePicker } from 'v-calendar';
const date = ref(new Date())
const year = date.value.getFullYear();
const month = date.value.getMonth();
const datepicker = ref(null)
const selectAttribute = ref({
  highlight: {
    style: {
      background: '#FC346A'
    },
    contentStyle: {
      color: 'white'
    }
  }
})
const attributes = ref([
  {
    key: 'today',
    highlight: {
      contentStyle: {
        color: '#FC346A'
      }
    },
    dates: new Date(),
  },
  {
    highlight: {
      style: {
        background: '#FC346A'
      },
      contentStyle: {
        color: 'white'
      }
    },
    dates: new Date(year, month, 9),
  },
])
const masks = ref({
  input: 'YYYY-MM-DD',
})
const clickdate = (day) => {
  date.value = day
}
const onDayClick = (date) => {
  attributes.value[1].dates = date.id
  attributes.value[1].highlight.style.background = 'red'
}
onMounted(() => {
  console.log(datepicker.value)
})
</script>

<style>

</style>