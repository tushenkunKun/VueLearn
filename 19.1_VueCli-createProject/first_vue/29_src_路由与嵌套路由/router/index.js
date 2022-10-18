/* 引入 vuerouter */
import VueRouter from "vue-router";
/* 引入组件 */
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Lol from "../pages/Lol.vue";
import Apex from "../pages/Apex.vue";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "lol",
          component: Lol,
        },
        {
          path: "apex",
          component: Apex,
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
