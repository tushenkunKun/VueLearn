<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ number }}</h2>
    <button @click="add">点击增加数字</button>
    <button @click="showStudentName">点击输出学生名字</button>
    <button @click="unbind">点击解绑事件</button>
    <button @click="destroyVc">点击销毁Student组件实例</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "zhangsan",
      age: 20,
      number: 0,
    };
  },
  methods: {
    add() {
      console.log("add函数被调用");
      this.number++;
    },
    showStudentName() {
      /* 可传多个参数给父组件 */
      this.$emit("alkEvent", this.name, 1, 2, { myname: "alk", age: 20 });
      this.$emit("alkEvent2");
    },
    unbind() {
      /* 只解绑一个 组件的自定义事件 */
      // this.$off('alkEvent')
      /* 同时解绑多个 组件的自定义事件 */
      // this.$off(['alkEvent','alkEvent2'])
      /* 解绑所有的 组件的自定义事件 */
      this.$off();
    },
    destroyVc() {
      // 销毁组件, 自定义事件会被销毁, 但不影响原生dom事件(上面的add事件, 但我这里也会影响, 为什么??????)
      this.$destroy();
    },
  },
};
</script>
<style scoped>
.student {
  background-color: pink;
}
</style>
