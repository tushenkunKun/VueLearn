import Vue from 'vue'
import App from './App.vue'
import plugins from './plugins'

// 使用插件, Vue.use()
Vue.use(plugins)

new Vue({
  render:(h) => h(App)
}).$mount('#app')