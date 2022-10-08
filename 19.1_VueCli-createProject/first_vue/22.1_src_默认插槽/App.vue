<template>
  <div class="root">
    <el-container>
      <Category title="影视">
        <img src="../assets/logo.png" alt="" width="100%" />
      </Category>
      <Category title="游戏">
        <ul>
          <li v-for="item in games.content" :key="item">{{ item }}</li>
        </ul>
      </Category>
      <Category title="食品">
        <input type="text" placeholder="你好啊, 请输入一些东西吧">
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
.el-container {
  display: flex;
  justify-content: space-evenly;
}
</style>
