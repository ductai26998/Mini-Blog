import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: ()=>import("../views/Contact.vue")
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../views/Blogs.vue")
  },
  {
    path: "/blogs/:id",
    component: () => import("../views/BlogDetail.vue")
  },
  {
    path: "/auth/login",
    component: ()=>import("../views/Login.vue"),
    meta: {layout:"unauth"}
  },
  {
    path:"/auth/register",
    component: ()=>import("../views/Register.vue"),
    meta: {layout:"unauth"}
  },
  {
    path: "/dashboard",
    component: ()=>import("../views/Dashboard.vue"),
    meta: {layout:"secret"}
  },
  {
    path: "*",
    component: ()=>import("../views/NotFound.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
