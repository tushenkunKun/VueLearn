import Vue from 'vue'
import App from './App.vue'

new Vue({
  render:(h) => h(App),
  /* 1. 安装全局事件总线 */
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')