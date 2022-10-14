<template>
  <div class="root">
    <el-container>
      <el-main>
        <Aside></Aside>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Aside from './components/Aside.vue'
export default {
  name: "App",
  components: {Aside},
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
html,body {
  height: 100vh;
  width: 100vh;
}
</style>
