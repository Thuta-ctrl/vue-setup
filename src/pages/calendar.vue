<template>
  <div class="text-center">
    <DatePicker 
      v-model="date" 
      locale="ja"
      title-position="left"
      :masks="masks"
      ref="datepicker"
      :value="date"
      :popover="popover"
    >  
      <template #day-content="{ day }" :ref="el => { lists[day.day] = el }">
        <span 
          @click="clickdate(day.id)" :aria-label="day.ariaLabel" 
          aria-disabled="false" role="button" 
          class="vc-day-content"
          style="margin-left: 3px; margin-top: 2px"
          :style="getStyle(day.id)"
        >
        {{ day.day }}</span>
      </template>
      <template #header-title="{ monthLabel, yearLabel }">
        <div>
          {{ yearLabel + '年' + monthLabel }}
        </div>
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
import { onMounted, ref, watch } from 'vue';
import 'v-calendar/dist/style.css'
import { Calendar, DatePicker } from 'v-calendar';
const date = ref(new Date())
const masks = ref({
  input: 'YYYY-MM-DD',
})
const lists = ref([])
const today = ref(new Date())
const datepicker = ref(null)
const popover = ref({ visibility: 'click', keepVisibleOnInput: false })
const parseDate = (date) => {
  var mydate = new Date(date);
  return `${mydate.getFullYear()}-${mydate.getMonth()+1 < 10 ? `0${mydate.getMonth()+1}`: `${mydate.getMonth()+1}`}-${mydate.getDate() < 10 ? `0${mydate.getDate()}`: `${mydate.getDate()}`}`;
}

const getStyle = (payload) => {
  if (parseDate(date.value) == payload) return { 'color': 'white' }
  if (parseDate(today.value) == payload) return { 'color': '#FC346A' }
}

const clickdate = (day) => {
  date.value = day
}

watch(date, (newVal) => {
  datepicker.value.hidePopover()
})

onMounted(() => {
  // console.log(datepicker.value)
})
</script>

<style>
.vc-popover-caret {
  display: none;
}
.in-next-month.is-not-in-month {
  color: blue;
  display: none;
}
.vc-highlight {
  background-color: #FC346A !important;
}
/* .vc-day-content:focus {
  color: 'white';
  font-weight: normal;
  background-color: #FC346A;
}  */
</style>