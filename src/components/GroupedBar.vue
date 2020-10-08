<template>
  <div id="chart">
    <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "GroupedBar",
  props: {
    series: [],
    categories: [],
    colors: [],
    height: [],
    horizontal: false,
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "bar",
          width: "100%",
          height: this.height,
        },
        plotOptions: {
          bar: {
            horizontal: this.horizontal,
            dataLabels: {
              position: "top",
            },
          },
        },
        fill: {
          colors: this.colors,
        },
        legend: {
          markers: { fillColors: this.colors },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        xaxis: {
          categories: this.$store.state.pages,
        },
      },
    };
  },
};
</script>
<style scoped>
#chart {
  margin: auto;
  max-width: 768px;
}
</style>

