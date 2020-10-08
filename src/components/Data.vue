<template>
  <div>
    <button id="btn" @click="getData">CHART</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Data",
  data() {
    return {
      json_data: {},
      tutorials: this.$store.state.tutorials,
      pages: this.$store.state.pages,
      stars: this.$store.state.stars,
    };
  },
  created() {
    axios
      .get(
        "https://12bd6557-362d-4eb3-8e17-e61af4254404.mock.pstmn.io/panel/classroom/1/details?product=APPMAKER/data.json"
      )
      .then((response) => {
        this.json_data = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    getPages(value) {
      value.solutions.forEach((sol) => {
        this.pages[--sol.pageNumber] = ++sol.pageNumber;
      });
    },
    getStars(value) {
      value.solutions.forEach((star) => {});
    },
    getData() {
      this.json_data.data.students[0].tutorials.forEach((value) => {
        this.tutorials.push(value.tutorialTitle);
        let s = [];
        value.solutions.forEach((sol) => {
          s.push(sol.star);
          this.pages[--sol.pageNumber] = ++sol.pageNumber;
        });
        this.stars.push(s);
      });
    },
  },
};
</script>

<style scoped>
#btn {
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid #FF6F61;
}
#btn:hover {
  background-color: #FF6F61;
  color: white;
}
</style>
