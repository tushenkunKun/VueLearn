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
          children: [{ path: "detail/:id/:name", component: Detail, props: true }],
        },
        {
          path: "apex",
          component: Apex,
          children: [
            {
              name: "apexgame",
              path: "detail/:id/:name",
              component: Detail,
              /* 路由的 props 参数: 哪个组件接收东西就写到哪个组件的的路由配置项里 */
              // 第一种写法, 只能传固定的值, 以 props 的形式传给Detail组件
              // props: { a: 1, b: "hello", },

              // 第二种写法, 只能将所有的 params 参数通过props 的形式传给Detail组件, query 参数无法获取
              // props: true,

              // 第三种写法, 既能传 params 参数, 又能穿 query 参数, 这是一个函数, 可以接收到一个参数, 这个参数是$route
              props(route){
                return {
                  id: route.params.id,
                  name: route.params.name
                }
              }
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
