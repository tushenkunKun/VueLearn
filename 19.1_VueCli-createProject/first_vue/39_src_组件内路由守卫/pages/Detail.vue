<template>
  <div class="detail">
    <h3>{{ name }}</h3>
    <p>英雄 ID 为: {{ id }}</p>
    <p>
      这是
      <span>{{ name }}</span>
      的详细介绍
    </p>
    <!-- 第一种写法的展示 -->
    <!-- <span>a:{{a}}</span>
    <span>b:{{b}}</span> -->
  </div>
</template>
<script>
export default {
  name: "Detail",
  props:['id','name'],
  data() {
    return {};
  },
};
</script>
<style scoped>
span {
  color: green;
  font-size: 18px;
  font-weight: bolder;
}
</style>
