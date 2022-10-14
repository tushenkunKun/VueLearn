import Vue from "vue";
// 1.下载并引入 Vuex
import Vuex from "vuex";

// 2.使用 Vuex 插件
Vue.use(Vuex);

/* 求和相关的配置 */
const countOptions = {
  namespaced: true, // 打开命名空间, 这样组件中需要应用这里数据时, 就能写成简单的形式
  state: { sum: 0 },
  actions: {
    increaseOdd(context, value) {
      context.commit("INCREASEODD", value);
    },
    increaseWait(context, value) {
      context.commit("INCREASEWAIT", value);
    },
  },
  mutations: {
    INCREASE(state, value) {
      state.sum += value;
    },
    DECREASE(state, value) {
      state.sum -= value;
    },
    INCREASEODD(state, value) {
      if (state.sum % 2) {
        state.sum += value;
      }
    },
    INCREASEWAIT(state, value) {
      setTimeout(() => {
        state.sum += value;
      }, 1000);
    },
  },
  getters: {
    biggerSum(state) {
      return state.sum * 10;
    },
  },
};
/* 人员管理相关的配置 */
const personOptions = {
  namespaced: true,
  state: {
    name: "lostname",
    school: "beida",
    personList: [{ id: 1, name: "zhangsan" }],
  },
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("wang") === 0) {
        context.commit("ADDPERSON", value);
      }else{
        alert('只可以添加姓王的')
      }
    },
  },
  mutations: {
    ADDPERSON(state, value) {
      state.personList.unshift(value);
    },
  },
  getters: {
    showFirstName(state) {
      return state.personList[0].name;
    },
  },
};

// 3.新建 store 对象并抛出, 在 Vue 实例挂载前使用
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions,
  },
});
