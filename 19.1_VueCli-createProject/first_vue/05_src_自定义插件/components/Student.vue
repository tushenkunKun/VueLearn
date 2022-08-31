<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <input type="text" v-fbind:value="name">
    <h2>{{hello()}}</h2>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      name: "alk",
      age: 20,
    };
  },
};
</script>
<style scoped></style>
