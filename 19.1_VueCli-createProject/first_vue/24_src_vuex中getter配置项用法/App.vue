<template>
  <div class="root">
    <Count></Count>
  </div>
</template>
<script>
import Count from "./components/Count.vue";
export default {
  name: "App",
  components: {
    Count,
  },
  data() {
    return {};
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
