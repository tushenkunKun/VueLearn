import Vue from "vue";
import App from "./App.vue";
// 1.下载并引入 Vuex
import Vuex from "vuex";
import store from "./store/index"

// 2.使用 Vuex 插件
Vue.use(Vuex);

const vm = new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
console.log(vm);
