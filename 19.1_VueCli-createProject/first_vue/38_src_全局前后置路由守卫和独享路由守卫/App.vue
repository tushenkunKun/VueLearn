<template>
  <div class="root">
    <el-container>
      <el-header height="50px">
        <Header></Header>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="100px">
            <el-menu class="el-menu-demo">
              <!-- router-link的 replace 属性, 可以操作浏览器的浏览记录, 表示删除上一条记录, 将新记录添加进去 -->
              <!-- 默认的是 push 方式添加记录, 所以可以在浏览器上执行后退的操作 -->
              <el-menu-item><router-link to="/home" :replace="true">去首页</router-link></el-menu-item>
              <el-menu-item><router-link to="/about" :replace="true">去关于</router-link></el-menu-item>
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
