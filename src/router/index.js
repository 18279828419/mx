import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
  // {
  //   path: "/Home",
  //   name: "Home",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/home/Home.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;