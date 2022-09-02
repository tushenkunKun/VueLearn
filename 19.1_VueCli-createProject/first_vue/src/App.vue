<template>
  <div class="root">
    <div class="app">
      <MyInput></MyInput>
      <MyList></MyList>
      <MyResult></MyResult>
    </div>
  </div>
</template>
<script>
import MyInput from "./components/MyInput.vue";
import MyList from "./components/MyList.vue";
import MyResult from "./components/MyResult.vue";

export default {
  name: "App",
  components: {
    MyInput,
    MyList,
    MyResult,
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
ul,
li {
  list-style: none;
}
.root {
  width: 100%;
}
.app {
  width: 90%;
  max-width: 600px;
  border: 2px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
</style>
