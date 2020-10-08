import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueApexCharts from "vue-apexcharts";

Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
