<template>
  <div>
    <h1>ChartJS</h1>
    <canvas id="myChart" width="50" height="50"></canvas>
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
          data: [65, 59, 75, 81, 56, 55, 40, 21, 35, 85, 45, 65],
          fill: true,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132, 0.1)",
          pointBackgroundColor: "rgb(255, 99, 132)",
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
        elements: {
          line: {
            borderWidth: 3,
            borderColor: "rgb(181, 229, 242)",
          },
        },
      },
    });
    myChart;
  },
};
</script>

<style></style>