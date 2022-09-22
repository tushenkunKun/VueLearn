<template>
  <div class="root">
    <div class="app">
      <MyList></MyList>
    </div>
  </div>
</template>
<script>
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyList,
  },
  data() {
    return {
    };
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
