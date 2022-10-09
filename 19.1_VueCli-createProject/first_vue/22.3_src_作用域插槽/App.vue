<template>
  <div class="root">
    <el-container>
      <!-- 作用域插槽的第一种写法: 利用 scope="xxx"接收子组件中插槽传入的数据(旧写法) -->
      <Category title="游戏">
        <template scope="games">
          <ul>
            <li v-for="(item, index) in games.games.content" :key="index">{{ item }}</li>
          </ul>
        </template>
      </Category>
      <!-- 作用域插槽的第二种写法: 利用 slot-scope="xxx"接收子组件中插槽传入的数据(新写法) -->
      <Category title="游戏">
        <template slot-scope="games">
          <ul>
            <li v-for="(item, index) in games.games.content" :key="index">{{ item }}</li>
          </ul>
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
    return {};
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
