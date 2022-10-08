<template>
  <div class="root">
    <el-container>
      <Category title="游戏">
        <!-- 具名插槽的第一种写法: 可以给单独的元素加 slot="xxx"或者将所有元素用 div 包裹, 给 div 加 slot="xxx" -->
        <ul>
          <li v-for="(item, index) in games.content" :key="index">{{ item }}</li>
        </ul>
      </Category>
      <Category title="游戏">
        <!-- 具名插槽的第一种写法: 可以给单独的元素加 slot="xxx"或者将所有元素用 div 包裹, 给 div 加 slot="xxx" -->
        <ul>
          <li v-for="(item, index) in games.content" :key="index">{{ item }}</li>
        </ul>
      </Category>
    </el-container>
  </div>
</template>
<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
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
<style>
* {
  padding: 0;
  margin: 0;
}
ul,
li {
  list-style: none;
}
.el-container,
.gameCategory {
  display: flex;
  justify-content: space-evenly;
}
</style>
