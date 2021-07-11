import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/index";
import VueRouter from "vue-router";
import Vuex from "vuex";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

const route = new VueRouter({
  mode: "history",
  router,
});
Vue.router = route;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
