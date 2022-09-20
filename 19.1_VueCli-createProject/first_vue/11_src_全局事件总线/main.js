import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

/**
 * -------------  全局事件总线-- 主要做法是,安装全局事件总线, 在a 组件中给总线绑定事件, 在 b 组件中$emit 触发事件,b 的参数就能传到 a 中
 * 1. 做全局事件总线, 需要满足它能被所有的组件获取到, 并且它能利用$on, $off, $emit这些方法
 * 2. 要能被所有的组件获取到, 就需要将其绑定在 vue 原型对象上, 利用 Vue.prototype.xxx = yyy
 * 3. 要能利用$on, $off, $emit 这些方法, 就需要它是一个 VueComponent 的实例对象
 * 4. 想创建VueComponent 的实例对象需要用到 Vue.extend()先创建一个全新的VueComponent构造函数, 然后 new VueComponent()创建其实例对象
 * 5. 但这里不需要使用第四步这么麻烦, 因为 vm 本身就是 Vue 的实例对象, 所以可以将其作为全局事件总线的值
 * 6. 全局事件总线要写在beforeCreate勾子里
 */
new Vue({
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this; // 安装全局事件总线
  }
}).$mount("#app");