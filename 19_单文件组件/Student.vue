<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
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
  }
};
</script>
<style scoped></style>
