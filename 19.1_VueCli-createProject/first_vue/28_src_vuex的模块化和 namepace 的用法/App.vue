<template>
  <div class="root">
    <Count></Count>
    <Person></Person>
  </div>
</template>
<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Count,Person
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
