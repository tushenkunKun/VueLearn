<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showSchool">点击输出学校名字</button>
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
  methods: {
    showSchool() {
      console.log(this.name);
    },
  },
};
</script>
<style scoped></style>
