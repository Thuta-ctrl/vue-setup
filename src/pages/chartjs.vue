<template>
  <div>
    <h1>ChartJS</h1>
    <div class="graph">
      <canvas id="myChart" width="50" height="50"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "chart-js",
  props: {
    msg: String,
  },
  mounted() {
    console.log("component mounted.");
    const ctx = document.getElementById("myChart");
    const data = {
      labels: [
        "内省的観察",
        "抽象的概念化",
        "能動的実験",
        "ジョブクラフティング(仕事）",
        "ジョブクラフティング（人間関係）",
        "ネットワーク構築",
        "職務変更交渉",
        "ポジティブフレームワーク",
        "顧客志向行動",
        "P-O fit行動",
        "困難への対処に関する学習",
        "思考のモデリング",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [45, 90, 75, 100, 56, 55, 40, 25, 35, 85, 15, 65],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132, 0.1)",
          pointBackgroundColor: "rgb(35, 163, 199)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(255, 99, 132)",
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "radar",
      data: data,
      options: {
        scales: {
          r: {
            angleLines: {
              color: "#B5E5F2",
            },
            grid: {
              color: "#B5E5F2",
            },
            ticks: {
              color: "#23A3C7",
              weight: "800",
            },
          },
        },
        elements: {
          line: {
            borderWidth: 3,
          },
        },
      },
    });
    myChart;
  },
};
</script>

<style>
.graph {
  width: 500px;
  height: 500px;
}
</style>
