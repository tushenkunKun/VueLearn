/* 引入 vuerouter */
import VueRouter from "vue-router";
/* 引入组件 */
import Home from "../pages/Home.vue"
import About from "../pages/About.vue"

export default new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/about", component: About },
  ],
});
