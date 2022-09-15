<template>
  <div class="school">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showSchoolName">点击输出学校名字</button>
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
  props:['getSchoolName'],
  methods: {
    showSchoolName() {
      this.getSchoolName(this.name)
    },
  },
};
</script>
<style scoped>
.school {
  background-color: skyblue;
  margin-bottom: 10px;
}
</style>
