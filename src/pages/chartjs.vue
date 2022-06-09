<template>
  <div>
    <h1>ChartJS</h1>
    <div class="graph">
      <canvas id="radar-chart" width="50" height="50"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Chart from "chart.js/auto";
import radarChart from '@/reuseable/chart/radarChart'
const data = radarChart
var chart = null
const onResize = () => {
  if (window.innerWidth < 767) {
    chart.data.datasets[0].borderColor = "red"
    chart.options.scales.r.pointLabels.font.size = 18
  } else {
    chart.data.datasets[0].borderColor = "rgb(255, 99, 132, 0.1)"
    chart.options.scales.r.pointLabels.font.size = 14
  }
  chart.update()
}
onMounted(() => {
  const ctx = document.getElementById('radar-chart');
  chart = new Chart(ctx, data);
  window.addEventListener('resize', onResize)
}) 
</script>

<style>
.graph {
  width: 500px;
  height: 500px;
}
</style>
