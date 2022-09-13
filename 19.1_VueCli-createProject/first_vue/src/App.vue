<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <!-- 1. 利用props方法完成子传父 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 2. 利用自定义事件, v-on:xxx='yyy'或@xxx='yyy'的形式, 完成子传父 -->
    <!-- <Student v-on:alkEvent="getStudentName"></Student> -->

    <!-- 3. 利用ref, 配合mounted勾子, 完成子传父, 可以更具自由性(比如可以在勾子里写定时器) -->
    <Student ref="student"></Student>
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
  methods: {
    getSchoolName(value){
      console.log('获取到学校名字:',value);
    },
    getStudentName(value){
      console.log('获取到学生名字:',value);
    }
  },
  mounted() {
    this.$refs.student.$on('alkEvent',this.getStudentName)
  },
};
</script>
<style scoped>
.app{
  background-color: #ddd;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>
