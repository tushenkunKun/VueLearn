<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="showName">输出名字</button>
  </div>
</template>
<script>
import { hunhe1 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "alk",
      age: 20,
    };
  },
  mixins: [hunhe1],
};
</script>
<style scoped></style>
