const radarChart = {
  type: "radar",
  data: {
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
        label: "Radar Chart",
        data: [45, 90, 75, 100, 56, 55, 40, 25, 35, 85, 15, 65],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132, 0.1)",
        pointBackgroundColor: "rgb(35, 163, 199)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  },
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
        pointLabels: {
          font: {
            size: 14
          }
        }
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    onResize() {
      if (window.innerWidth < 767) {
        radarChart.options.scales.r.pointLabels.font.size = 18
      } else {
        radarChart.options.scales.r.pointLabels.font.size = 14
      }
    },
    responsive: true
  },
};

export default radarChart;