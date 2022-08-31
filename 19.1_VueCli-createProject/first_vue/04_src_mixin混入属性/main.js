import Vue from 'vue'
import App from './App.vue'
// import { hunhe1 } from './mixin'
// 全局混入, vm和所有的vc上都用到了
// Vue.mixin(hunhe1)
new Vue({
  render:(h) => h(App)
}).$mount('#app')