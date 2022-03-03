import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "./router/index.js";
import store from "./store";
import App from "./App.vue";
import "./vee-validate";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
