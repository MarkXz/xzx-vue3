import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/login/index.vue";
import Layout from "@/views/layout/index.vue";
import Home from "@/views/home/index.vue";
const addRouter = [
  {
    path: "/index",
    name: "首页",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      redirect: "/index",
      children: addRouter,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export { router, addRouter };
