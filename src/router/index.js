import VueRouter from "vue-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Pricing from "../pages/Pricing";

const router = new VueRouter({
  routes: [
    { path: "", name: "home", component: Home },
    { path: "/about", name: "About", component: About, meta: { auth: true } },
    { path: "/blog", name: "blog", component: Blog, meta: { auth: true } },
    {
      path: "/pricing",
      name: "pricing",
      component: Pricing,
      meta: { auth: true },
    },
  ],
  mode: "history",
});
router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.auth);
  if (requireAuth && !localStorage.getItem("tkn")) {
    next("/?msg=need_login");
  } else {
    next();
  }
});
export default router;
