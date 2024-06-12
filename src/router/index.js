import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/layouts/AdminLayout.vue"),
      children: [
        {
          path: "/home",
          component: () => import("@/views/home/Index.vue"),
        },
        {
          path: "/orders",
          component: () => import("@/views/orders/Index.vue"),
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
