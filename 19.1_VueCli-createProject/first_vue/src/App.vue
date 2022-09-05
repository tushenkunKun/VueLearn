<template>
  <div class="root">
    <div class="app">
      <MyInput :addTodo="addTodo"></MyInput>
      <MyList :todos="todos"></MyList>
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
    return {
      todos: [
        { id: "001", title: "玩Apex", done: true },
        { id: "002", title: "玩LOL", done: false },
        { id: "003", title: "玩CSGO", done: false },
      ],
    };
  },
  methods: {
    addTodo(value){
      this.todos.unshift(value);
    }
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
