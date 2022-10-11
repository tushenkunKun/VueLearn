import Vue from "vue";
// 1.下载并引入 Vuex
import Vuex from "vuex";

// 2.使用 Vuex 插件
Vue.use(Vuex);

// state 存储数据
const state = {
  sum: 0,
};
// actions 用于响应组件中的动作(各种业务逻辑,包含 ajax 请求等)
const actions = {
  /* actions 里的方法可以接收到两个参数, context 是简单版本的 Store 实例(意为上下文), value 是 dispatch 方法传过来的值 */
  /* ---- 因为没什么特别的逻辑, 所以可以注释掉下面两个方法, 在Count.vue 中直接.commit 与 mutations 对话 */
  /* increase(context, value) {
    context.commit("INCREASE", value); // 一般写成大写的
  },
  decrease(context, value) {
    context.commit("DECREASE", value);
  }, */
  increaseOdd(context, value) {
    context.commit("INCREASEODD", value);
  },
  increaseWait(context, value) {
    context.commit("INCREASEWAIT", value);
  },
};
// mutations 用于直接操作 state 中的数据
const mutations = {
  /* mutations 里的方法可以接收到两个参数, state 是上面存储的数据, value 是 commit 方法传过来的值 */
  INCREASE(state, value) {
    state.sum += value;
  },
  DECREASE(state, value) {
    state.sum -= value;
  },
  INCREASEODD(state, value) {
    if (state.sum%2) {
      state.sum += value;
    }
  },
  INCREASEWAIT(state, value) {
    setTimeout(() => {
      state.sum += value;
    }, 1000);
  },
};
// 3.新建 store 对象并抛出, 在 Vue 实例挂载前使用
export default new Vuex.Store({
  state,
  actions,
  mutations,
});
