<template>
  <div id="app">
    <Data></Data>
    <div class="chart-block">
      <GroupedBar
        :series="series"
        :categories="categories"
        :colors="colors"
        :horizontal="horizontal"
        :key="selected"
      />
    </div>
  </div>
</template>

<script>
import GroupedBar from "./components/GroupedBar";
import Data from "./components/Data";

export default {
  name: "App",
  components: {
    GroupedBar,
    Data,
  },
  data() {
    return {
      colors: ["#F7CAC9", "#7FCDCD"],
      horizontal: false,
    };
  },

  computed: {
    series: function () {
      return [
        {
          name: "Todo App",
          data: [3, 2, 2, 0, 0, 0, 0],
        },
        {
          name: "Simple Calculator",
          data: [3, 1, 3, 2, 1, 0],
        },
      ];
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
