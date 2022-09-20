<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showStudentName">点击输出学生的名字</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "wuyifan",
      age: 20,
    };
  },
  methods: {
    /* 触发全局事件总线上的函数, 并将参数传给对应的函数, 实现任意组件上的数据传递 */
    showStudentName(){
      this.$bus.$emit('acceptStudentName',this.name)
    }
  },
};
</script>
<style scoped></style>
