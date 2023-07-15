import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "@/views/NotFoundView.vue";
import ErrorView from "@/views/ErrorView.vue";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/product:id",
    //   name: "product",
    //   component: ProductView,
    // },
    {
      path: "/error",
      name: "error",
      component: ErrorView,
    },
    { path: "/:pathMatch(.*)*", component: NotFoundView }
  ],
});

export default router;
