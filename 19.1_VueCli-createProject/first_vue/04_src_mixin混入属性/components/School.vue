<template>
  <div class="student">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
    <button @click="showName">输出名字</button>
    <Student></Student>
  </div>
</template>
<script>
import Student from "./Student.vue";
import { hunhe1 } from "../mixin";
export default {
  name: "School",
  components: { Student },
  data() {
    return {
      name: "beijingdaxue",
      address: "beijing",
    };
  },
  // 组件本身有的methods和minxins混入中的methods重复时, 以本身的methods为主
  methods: {
    showName(){
      console.log('本身的methods',this.name);
    }
  },
  mixins: [hunhe1],
  mounted() {
    console.log('School组件里的mounted');
  },
};
</script>
<style scoped></style>
