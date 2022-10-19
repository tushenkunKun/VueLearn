/* 引入 vuerouter */
import VueRouter from "vue-router";
/* 引入组件 */
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Lol from "../pages/Lol.vue";
import Apex from "../pages/Apex.vue";
import Detail from "../pages/Detail.vue";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "lol",
          component: Lol,
          children: [{ path: "detail", component: Detail }],
        },
        {
          path: "apex",
          component: Apex,
          // 命名路由配置
          children: [{ name: "apexgame", path: "detail", component: Detail }],
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
