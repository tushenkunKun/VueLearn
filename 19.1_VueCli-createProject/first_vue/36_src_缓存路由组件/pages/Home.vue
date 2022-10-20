<template>
  <div class="home">
    <h1>这是 Home 组件</h1>
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item><router-link to="/home/lol">英雄联盟</router-link></el-menu-item>
      <el-menu-item><router-link to="/home/apex">APEX 英雄</router-link></el-menu-item>
    </el-menu>
    <!-- 缓存路由的写法, include 后写的是组件名称 -->
    <keep-alive include="Lol">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>
<style scoped></style>
