<template>
  <div class="root">
    <div class="app">
      <MyInput :addTodo="addTodo"></MyInput>
      <MyList :todos="todos" :changeDoneState="changeDoneState" :deleteTodo="deleteTodo"></MyList>
      <MyResult :todos="todos" :checkAllTodo="checkAllTodo"></MyResult>
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
    addTodo(value) {
      this.todos.unshift(value);
    },
    changeDoneState(id) {
      this.todos.forEach((element) => {
        if (element.id == id) {
          element.done = !element.done;
        }
      });
    },
    deleteTodo(id){
      this.todos = this.todos.filter((element)=>{
        return element.id!=id
      })
    },
    checkAllTodo(done) {
      this.todos.forEach(element => {
        element.done = done
      });
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
