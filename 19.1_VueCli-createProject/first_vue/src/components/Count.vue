<template>
  <div class="count">
    <h1>当前求和为: {{ sum }}</h1>
    <div class="handle-wrapper">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button>+</button>
      <button>-</button>
      <button>当前求和为奇数时+</button>
      <button>等一秒再加</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Count",
  data() {
    return {
      sum: 0,
    };
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
