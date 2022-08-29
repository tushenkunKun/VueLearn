import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

//完整写法
new Vue({
  el:'#app',
  render(createElement) {
    return createElement(App)
  },
  // template:'<App></App>',
  // components:{App}
})
// 简写
/* new Vue({
  render: (h) => h(App),
}).$mount("#app"); */
