<template>
  <div class="count">
    <h1>当前求和为: {{$store.state.sum}}</h1>
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
export default {
  name: "Count",
  data() {
    return {
      userNum: 1,
    };
  },
  methods: {
    /* 直接.commit, 与mutations对话 */
    increase() {
      this.$store.commit('INCREASE',this.userNum)
    },
    decrease() {
      this.$store.commit('DECREASE',this.userNum)
    },
    increaseOdd() {
      this.$store.dispatch('increaseOdd',this.userNum)
    },
    increaseWait() {
      this.$store.dispatch('increaseWait',this.userNum)
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
