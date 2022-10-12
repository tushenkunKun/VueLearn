<template>
  <div class="count">
    <h1>当前求和为: {{ sum }}</h1>
    <h1>当前求和结果的十倍为: {{ biggerSum }}</h1>
    <h1>名字: {{ name }}</h1>
    <h1>校名: {{ school }}</h1>
    <h2 style="color:blue;margin-bottom:15px">此时列表中总人数为: {{personList.length}}</h2>
    <div class="handle-wrapper">
      <!-- 注意这里的修饰符.number -->
      <select v-model.number="userNum">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

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
    ...mapState(["sum", "name", "school","personList"]),
    ...mapGetters(["biggerSum"]),
  },
  methods: {
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
.count {
  margin-bottom: 40px;
}
</style>
