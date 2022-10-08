<template>
  <div class="root">
    <el-container>
      <Category title="影视">
        <img slot="alk" src="../assets/logo.png" alt="" width="100%" />
        <a slot="alkalk" href="https://www.baidu.com/">百度</a>
      </Category>
      <Category title="游戏">
        <!-- 具名插槽的第一种写法: 可以给单独的元素加 slot="xxx"或者将所有元素用 div 包裹, 给 div 加 slot="xxx" -->
        <ul slot="alk">
          <li v-for="item in games.content" :key="item">{{ item }}</li>
        </ul>
        <div class="gameCategory" slot="alkalk">
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </div>
      </Category>
      <Category title="食品">
        <!-- 具名插槽的第二种写法, 用 template 标签包裹所有的元素, 给 template 加 v-slot:xxx -->
        <template v-slot:alk>
          <ul>
            <li v-for="item in games.content" :key="item">{{ item }}</li>
          </ul>
          <div class="gameCategory">
            <a href="#">单机游戏</a>
            <a href="#">网络游戏</a>
          </div>
        </template>
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
      movies: {
        title: "影视",
        content: ["泰坦尼克号", "进击的巨人", "火影忍者", "东京喰种"],
      },
      games: {
        title: "游戏",
        content: ["APEX", "英雄联盟", "CSGO", "DNF"],
      },
      foods: {
        title: "食物",
        content: ["必胜客", "麦当劳", "肯德基"],
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
