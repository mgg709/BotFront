//@ts-nocheck
import { createRouter, createWebHistory } from "vue-router";

const routes= [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/bot",
      name: "bothome",
      component: () => import("../views/BotHomeView.vue"),
    },
    {
      path: "/consejo",
      name: "consejo",
      component: () => import("../views/AdviseView.vue"),
    },
    {
      path: "/bot/dca",
      name: "botdca",
      component: () => import("../views/BotDCAView.vue"),
    },
    {
      path: "/bot/hold",
      name: "bothold",
      component: () => import("../views/BotHoldView.vue"),
    },
    {
      path: "/bot/indicators",
      name: "botindicators",
      component: () => import("../views/BotIndicatorsView.vue"),
    },
    {
      path: "/dashboard/:name",
      name: "botstats",
      component: () => import("../views/BotStatsView.vue"),
    }
  ]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
