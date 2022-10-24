/* 引入 vuerouter */
import VueRouter from "vue-router";
/* 引入组件 */
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Lol from "../pages/Lol.vue";
import Apex from "../pages/Apex.vue";
import Detail from "../pages/Detail.vue";

const router = new VueRouter({
  routes: [
    {
      name: "home",
      path: "/home",
      meta: { isAuth: false, title: "首页" },
      component: Home,
      children: [
        {
          name: "lol",
          path: "lol",
          meta: { isAuth: true, title: "lol 游戏" },
          component: Lol,
          children: [
            {
              name: "lolgame",
              path: "detail/:id/:name",
              component: Detail,
              props: true,
            },
          ],
          /* 独享路由守卫 */
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem("name") == "alkalk") {
                next();
              } else {
                alert("name 不正确, 没有权限查看");
              }
            } else {
              next();
            }
          },
        },
        {
          name: "apex",
          path: "apex",
          meta: { isAuth: false, title: "apex 游戏" },
          component: Apex,
          children: [
            {
              name: "apexgame",
              path: "detail/:id/:name",
              component: Detail,
              props(route) {
                return {
                  id: route.params.id,
                  name: route.params.name,
                };
              },
            },
          ],
        },
      ],
    },
    {
      name: "about",
      path: "/about",
      meta: { isAuth: true, title: "关于页" },
      component: About,
    },
  ],
});
/* 全局前置路由守卫 */
/* router.beforeEach((to, from, next) => {
  if (to.meta.isAuth) {
    if (localStorage.getItem("name") == "alkalk") {
      next();
    } else {
      alert("name 不正确, 没有权限查看");
    }
  } else {
    next();
  }
}); */
/* 全局后置路由守卫 */
router.afterEach((to, from) => {
  document.title = to.meta.title || "alk练习";
});
export default router;
