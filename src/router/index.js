import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Err404",
    name: "Err404",
    component: () => import("../views/404/Err404.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/Err404"
  },
  {
    path: "/Page0",
    name: "Page0",
    component: () => import("../views/blogs/Page0.vue")
  },
  {
    path: "/Page1",
    name: "Page1",
    component: () => import("../views/blogs/Page1.vue")
  },
  {
    path: "/Page2",
    name: "Page2",
    component: () => import("../views/blogs/Page2.vue")
  },
  {
    path: "/Page3",
    name: "Page3",
    component: () => import("../views/blogs/Page3.vue")
  },
  {
    path: "/Page4",
    name: "Page4",
    component: () => import("../views/blogs/Page4.vue")
  },
  {
    path: "/Page5",
    name: "Page5",
    component: () => import("../views/blogs/Page5.vue")
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
