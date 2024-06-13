import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/layouts/AuthLayout.vue"),
      children: [
        {
          path: "/home",
          component: () => import("@/views/home/Home.vue"),
        },
        {
          path: "/products",
          component: () => import("@/views/home/Product.vue"),
        },
        {
          path: "/orders",
          component: () => import("@/views/home/Order.vue"),
        },
        {
          path: "/profile",
          component: () => import("@/views/home/Profile.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
