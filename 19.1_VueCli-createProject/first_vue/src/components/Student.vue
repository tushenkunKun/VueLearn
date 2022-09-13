<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showStudentName">点击输出学生名字</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      age: 20,
    };
  },
  methods: {
    showStudentName(){
      this.$emit('alkEvent',this.name)
    }
  },
};
</script>
<style scoped>
.student{
  background-color: pink;
}
</style>
