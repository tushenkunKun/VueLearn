<template>
  <div class="count">
    <h1>当前求和为: {{ sum }}</h1>
    <h1>当前求和结果的十倍为: {{ biggerSum }}</h1>
    <h1>名字: {{ name }}</h1>
    <h1>校名: {{ school }}</h1>
    <div class="handle-wrapper">
      <!-- 注意这里的修饰符.number -->
      <select v-model.number="userNum">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <!-- 普通写法 -->
      <!-- <button @click="increase">+</button>
      <button @click="decrease">-</button> -->

      <!-- 利用了 mapMutations 的对象写法后的使用, 不加参数的话默认把 event 传过去 -->
      <!-- <button @click="increase(userNum)">+</button>
      <button @click="decrease(userNum)">-</button> -->

      <!-- 利用了 mapMutations 的数组写法后的使用, 不加参数的话默认把 event 传过去 -->
      <button @click="INCREASE(userNum)">+</button>
      <button @click="DECREASE(userNum)">-</button>

      <!-- 利用了 mapActions 的对象写法和数组方法后的使用(使用方法是一样的), 不加参数的话默认把 event 传过去 -->
      <button @click="increaseOdd(userNum)">当前求和为奇数时+</button>
      <button @click="increaseWait(userNum)">等一秒再加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      userNum: 1,
    };
  },
  computed: {
    /* ----------------第一步: 这种写法还是有重复 */
    /* sum() {
      return this.$store.state.sum;
    },
    name() {
      return this.$store.state.name;
    },
    school() {
      return this.$store.state.school;
    }, */

    /* ----------------第二步: 试着利用 mapState 和 mapgetters, 它会自动生成和第一步一样的代码 */
    // 第一种写法:对象写法
    // ...mapState({sum:'sum',name:'name',school:'school'}) // 考虑一下为什么不用成简写形式sum,name,school(提示:如果写成简写形式,后面的值是变量)
    // ...mapGetters({biggerSum:'biggerSum'}),
    // 第二种写法:数组写法
    ...mapState(["sum", "name", "school"]),
    ...mapGetters(["biggerSum"]),
  },
  methods: {
    /* -------------------第一步: 这种写法还是有重复 */
    /* 直接.commit, 与mutations对话 */
    /* increase() {
      this.$store.commit("INCREASE", this.userNum);
    },
    decrease() {
      this.$store.commit("DECREASE", this.userNum);
    }, */
    /* increaseOdd() {
      this.$store.dispatch("increaseOdd", this.userNum);
    },
    increaseWait() {
      this.$store.dispatch("increaseWait", this.userNum);
    }, */

    /* -------------------第二步: 试着利用 mapMutations(跳过.dispatch 直接触发 .commit) 和 mapActions(触发.dispatch), 它会自动生成和第一步一样的代码 */
    // 第一种写法:对象写法
    // ...mapMutations({ increase: "INCREASE", decrease: "DECREASE" }),
    // ...mapActions({increaseOdd:'increaseOdd',increaseWait:'increaseWait'}),
    // 第二种写法:数组写法
    ...mapMutations(["INCREASE", "DECREASE"]),
    ...mapActions(["increaseOdd", "increaseWait"]),
  },
};
</script>
<style scoped>
h1 {
  margin-bottom: 10px;
}
select {
  margin-right: 10px;
}
button {
  padding: 2px 10px;
  margin-right: 10px;
}
</style>
