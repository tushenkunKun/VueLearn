<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      name: "beida",
      address: "beijing",
    };
  },
  /* 给全局事件总线绑定事件, 尽量在这个组件被销毁前解绑当前组件使用到的自定义事件 */
  mounted() {
    this.$bus.$on("acceptStudentName", (value) => {
      console.log("学生的名字是: ", value);
    });
  },
  beforeDestroy() {
    this.$bus.$off("acceptStudentName");
  },
};
</script>
<style scoped></style>
