// create router vuejs
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import Login from "../pages/Login.vue";

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/SignUp",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
