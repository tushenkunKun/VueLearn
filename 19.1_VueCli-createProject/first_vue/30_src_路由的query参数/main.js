import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入 VueRouter
import VueRouter from "vue-router";
// 引入路由器 router
import router from "./router/index";

Vue.use(ElementUI);
Vue.use(VueRouter);

const vm = new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
