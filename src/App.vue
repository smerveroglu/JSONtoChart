<template>
  <div id="app">
    <Data v-if="this.$store.state.isShow"></Data>
    <GroupedBar
      v-else
      :series="series"
      :categories="categories"
      :colors="colors"
      :horizontal="horizontal"
      :key="selected"
    />
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
          data: this.$store.state.stars[0],
        },
        {
          name: "Simple Calculator",
          data: this.$store.state.stars[1],
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
