<template>
  <div class="detail">
    <h3>{{ $route.params.name }}</h3>
    <p>英雄 ID 为: {{ $route.params.id }}</p>
    <p>
      这是
      <span>{{ $route.params.name }}</span>
      的详细介绍
    </p>
  </div>
</template>
<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>
<style scoped>
span {
  color: green;
  font-size: 18px;
  font-weight: bolder;
}
</style>
