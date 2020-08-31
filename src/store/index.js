import Vuex from "vuex";
import Vue from "vue";
import auth from "@/store/modules/auth";

// Setup Vue to use Vuex
Vue.use(Vuex);

// Setup Vuex Store
export default new Vuex.Store({
  modules: {
    auth,
  },
});
