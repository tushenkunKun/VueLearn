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
      path: "/home",
      component: Home,
      children: [
        {
          name:'lol',
          path: "lol",
          component: Lol,
          children: [{ path: "detail/:id/:name", component: Detail, props: true }],
        },
        {
          name:'apex',
          path: "apex",
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
      path: "/about",
      component: About,
    },
  ],
});
router.beforeEach((to, from, next) => {
  console.log("@@@前置守卫");
  if (to.name == "apex" || to.name == "lol") {
    if (localStorage.getItem("name") == "alkalk") {
      next();
    } else {
      alert("name 不正确, 没有权限查看");
    }
  }else {
    next()
  }
});
export default router;
