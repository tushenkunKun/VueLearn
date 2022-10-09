<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 插槽传入数据的写法 -->
    <slot :games="games"></slot>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: {
        title: "游戏",
        content: ["APEX", "英雄联盟", "CSGO", "DNF"],
      },
    };
  },
};
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 150px;
  height: 200px;
}
h3 {
  text-align: center;
  margin-bottom: 15px;
  background-color: pink;
  color: brown;
}
ul {
  text-align: center;
}
li {
  margin-bottom: 5px;
}
</style>
