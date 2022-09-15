<template>
  <div class="app">
    <h2>{{ msg }}, {{studentName}}</h2>
    <!-- 1. 利用props方法完成子传父 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 2.1 父组件给子组件绑定自定义事件, v-on:xxx='yyy'或@xxx='yyy'的形式, 完成数据子传父 -->
    <!-- <Student v-on:alkEvent="getStudentName"></Student> -->

    <!-- 2.2 父组件给子组件绑定多个自定义事件, 然后解绑 -->
    <Student v-on:alkEvent="getStudentName" @alkEvent2="otherGetStudentName"></Student>

    <!-- 3. 父组件给子组件绑定自定义事件, 利用ref, 配合mounted勾子, 完成数据子传父, 可以更具自由性(比如可以在勾子里写定时器) -->

    <!-- !!!!!! 第一个坑: 利用ref完成数据子传父的这种方式, 在mounted勾子里直接写回调函数会有this的指向问题 -->
    <Student ref="student"></Student>

    <!-- 4. 组件绑定原生dom事件, 需要用到native修饰符, 会将dom事件绑定在组件中最外围的dom元素上 -->
    <Student @click.native="giveMeFive"></Student>
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
      msg: "你好啊!",
      studentName:''
    };
  },
  components: { School, Student },
  methods: {
    getSchoolName(value) {
      console.log("获取到学校名字:", value);
    },
    /* 可以接收多个子组件传来的数据, 可用...的方式解构 */
    getStudentName(value, ...parms) {
      console.log("获取到学生名字:", value, parms);
      this.studentName = value
    },
    otherGetStudentName() {
      console.log("触发第二个自定义事件");
    },
    giveMeFive(){
      alert(123123)
    }
  },
  mounted() {
    /* 推荐写法 */
    // this.$refs.student.$on("alkEvent", this.getStudentName);

    /* 第一个坑    普通函数写法 */
    // this.$refs.student.$on("alkEvent", function (value, ...parms) {
    //   console.log("获取到学生名字:", value, parms);
    //   // 下面的执行了, 但没生效, 因为这个回调函数由Student组件触发, this指向Student组件
    //   this.studentName = value
    // });
    
    /* 第一个坑    箭头函数写法 */
    this.$refs.student.$on("alkEvent", (value, ...parms) =>{
      console.log("获取到学生名字:", value, parms);
      // 因为是箭头函数, 没有自身的this, 会向外找, 找到了App这个组件, this指向App组件
      this.studentName = value
    });
  },
};
</script>
<style scoped>
.app {
  background-color: #ddd;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>
