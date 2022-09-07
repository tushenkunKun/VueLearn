<template>
  <div class="root">
    <div class="app">
      <MyInput :addTodo="addTodo"></MyInput>
      <MyList :todos="todos" :changeDoneState="changeDoneState" :deleteTodo="deleteTodo"></MyList>
      <MyResult :todos="todos" :checkAllTodo="checkAllTodo" :deleteAllDoneTodo="deleteAllDoneTodo"></MyResult>
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
      todos: JSON.parse(localStorage.getItem("userTodo")) || [],
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
    deleteTodo(id) {
      this.todos = this.todos.filter((element) => {
        return element.id != id;
      });
    },
    checkAllTodo(done) {
      this.todos.forEach((element) => {
        element.done = done;
      });
    },
    deleteAllDoneTodo() {
      this.todos = this.todos.filter((element) => {
        return !element.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("userTodo", JSON.stringify(value));
      },
    },
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
