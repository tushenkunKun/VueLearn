<template>
  <h3>{{ num }}</h3>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let num = ref(0);
    /* 1. 监视 ref 定义的一个响应式数据 */
    /* 2. 监视 ref 定义的多个响应式数据 */
    /* 3. 监视 reactive 定义的一个响应式数据(无法正确获取到 oldValue 的值) */
    /* 3. 监视 reactive 定义的一个响应式数据(无法正确获取到 oldValue 的值) */
    return { num };
  },
};
</script>

<style></style>
