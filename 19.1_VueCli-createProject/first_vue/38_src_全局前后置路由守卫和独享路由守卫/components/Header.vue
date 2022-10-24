<template>
  <div class="header">
    <h1>This is my games</h1>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>
<style scoped>
button {
  width: 50px;
  margin-right: 10px;
}
</style>
