<template>
  <div class="student">
    <h2>{{ name | mySlice }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showName">输出名字</button>
    <Student></Student>
  </div>
</template>
<script>
import Student from "./Student.vue";
export default {
  name: "School",
  components: { Student },
  data() {
    return {
      name: "beijingdaxue",
      address: "beijing",
    };
  },
  methods: {
    showName(){
      console.log(this.name);
    }
  },
};
</script>
<style scoped></style>
