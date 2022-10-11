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
      <button @click="increase">+</button>
      <button @click="decrease">-</button>
      <button @click="increaseOdd">当前求和为奇数时+</button>
      <button @click="increaseWait">等一秒再加</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      userNum: 1,
    };
  },
  computed: {
    /* ----------------第一步: 这种写法还是重复 */
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
    ...mapState(['sum','name','school']),
    ...mapGetters(['biggerSum']), 
  },
  methods: {
    /* 直接.commit, 与mutations对话 */
    increase() {
      this.$store.commit("INCREASE", this.userNum);
    },
    decrease() {
      this.$store.commit("DECREASE", this.userNum);
    },
    increaseOdd() {
      this.$store.dispatch("increaseOdd", this.userNum);
    },
    increaseWait() {
      this.$store.dispatch("increaseWait", this.userNum);
    },
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
