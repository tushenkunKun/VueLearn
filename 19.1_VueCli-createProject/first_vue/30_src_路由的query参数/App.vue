<template>
  <div class="root">
    <el-container>
      <el-header height="30px">
        <Header></Header>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="100px">
            <el-menu class="el-menu-demo">
              <el-menu-item><router-link to="/home">去首页</router-link></el-menu-item>
              <el-menu-item><router-link to="/about">去关于</router-link></el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header },
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
html,
body {
  height: 100vh;
  width: 100vh;
}
.el-menu-demo a {
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
</style>
