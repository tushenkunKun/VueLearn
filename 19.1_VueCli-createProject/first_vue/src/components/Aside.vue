<template>
  <div class="aside">
    <el-container>
      <el-aside width="100px">
        <el-menu class="el-menu-demo">
          <el-menu-item><router-link to="/home">去首页</router-link></el-menu-item>
          <el-menu-item><router-link to="/about">去关于</router-link></el-menu-item>
        </el-menu>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Aside",
  data() {
    return {};
  },
};
</script>
<style scoped>
 .el-aside {
   overflow: hidden;
 }
 .el-menu-demo a{
   display: inline-block;
   width: 100%;
   height: 100%;
   text-decoration: none;
 }
</style>
