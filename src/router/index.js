import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import DashBoard from "../views/DashBoard.vue";
import Register from "../views/Register.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/dashboard/:userId", component: DashBoard, props: true },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
