<template>
  <div>户主名: {{ name }}</div>
  <div>租户名: {{ person.name }}</div>
  <!-- props 接收到的数据 -->
  <div>props 接收到的: {{ gameName }}</div>
  <div>props 接收到的: {{ msg }}</div>
  <div v-show="person.age">年龄: {{ person.age }}</div>
  <slot name="alk"></slot>
  <br />
  <button @click="sayHello">sayHello</button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Demo",
  props: ["gameName", "msg"],
  emits: ["hello"],
  setup(props, context) {
    console.log("@@@@ setup收到的context 参数", context);
    let name = ref("zhangsan");
    let person = reactive({
      name: "alkalk",
      age: 18,
    });
    function sayHello() {
      context.emit("hello", 666);
    }
    return {
      name,
      person,
      sayHello,
    };
  },
};
</script>

<style></style>
