<template>
  <div>
    <h1>ChartJS</h1>
    <div class="graph">
      <canvas id="radar-chart" width="50" height="50"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import Chart from "chart.js/auto";
import radarChart from '@/reuseable/chart/radarChart'

const data = reactive(radarChart)

onMounted(() => {
  const ctx = document.getElementById('radar-chart');
  new Chart(ctx, data);
}) 
</script>

<style>
.graph {
  width: 500px;
  height: 500px;
}
</style>
