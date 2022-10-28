<template>
  <h3>{{ num }}</h3>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let num = ref(0);
    return { num };
  },
};
</script>

<style></style>
