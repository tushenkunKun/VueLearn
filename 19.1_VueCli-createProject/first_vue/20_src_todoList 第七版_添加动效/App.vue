<template>
  <div class="root">
    <div class="app">
      <MyInput @addTodo="addTodo"></MyInput>
      <MyList :todos="todos"></MyList>
      <MyResult :todos="todos" @checkAllTodo="checkAllTodo" @deleteAllDoneTodo="deleteAllDoneTodo"></MyResult>
    </div>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
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
    /* 这里括号的第一个参数表示占位, 不用但是必须要有, 这样才能让第二个参数收到正确的 */
    deleteTodo(_, id) {
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
    updateTodo(id, value) {
      this.todos.forEach((element) => {
        if (element.id == id) {
          element.title = value;
        }
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
  /* 2. 给全局事件总线绑定事件 */
  mounted() {
    this.$bus.$on("changeDoneState", this.changeDoneState);
    this.$bus.$on("updateTodo", this.updateTodo);
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    /* 改用消息订阅和发布的方式改写删除功能 */
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  /* 3. 给全局事件总线解绑事件 */
  beforeDestroy() {
    this.$bus.$off("changeDoneState");
    this.$bus.$off("updateTodo");
    // this.$bus.$off('deleteTodo')
    pubsub.unsubscribe(this.pubId);
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
.btn {
  width: 50px;
  margin: 0 10px 0 0;
  background-color: orange;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  display: inline-block;
}
.btn-delete {
  background-color: skyblue;
  color: red;
}
.btn-edit:hover {
  background-color: rgb(139, 117, 75);
  color: rgb(238, 173, 173);
}
.btn-delete:hover {
  background-color: red;
  color: skyblue;
}
</style>
