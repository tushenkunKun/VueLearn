<template>
  <div class="root">
    <el-container>
      <el-header height="150px">
        <Search></Search>
      </el-header>
      <el-main>
        <List></List>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    Search,
    List,
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
</style>
