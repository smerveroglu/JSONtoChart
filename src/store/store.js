import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tutorials: [],
    pages: [],
    stars: [],
    isShow: true
  }
});
