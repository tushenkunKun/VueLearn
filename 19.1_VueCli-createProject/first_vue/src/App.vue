<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <School></School>
    <Student></Student>
  </div>
</template>
<script>
// 引入组件
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  data() {
    return {
      msg:'你好啊!'
    };
  },
  components: { School, Student },
};
</script>
<style scoped>
.app{
  background-color: #ddd;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>
