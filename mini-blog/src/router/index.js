import Vue from "vue";
import VueRouter from "vue-router";
import validate from "../middleware";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/personal/:id",
    name: "personal",
    component: () => import("../views/PersonalPage.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/blogs/:id",
    name: "blogDetail",
    component: () => import("../views/BlogDetail.vue"),
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: { layout: "unauth" },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { layout: "secret", requiresAuth: true },
  },
  {
    path: "*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(validate);

export default router;
