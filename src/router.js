import Vue from "vue";
import Router from "vue-router";
import todopage from "./components/todopage";
import home from "../src/home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { name: "home", path: "/", component: home },

    { path: "/todopage/:id", component: todopage, name: "/todopage" },
  ],
});
