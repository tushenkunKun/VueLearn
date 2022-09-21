<template>
  <div class="my-input">
    <input type="text" placeholder="请输入想要添加的todoList内容" v-model="title" @keyup.enter="confirmAdd" />
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "MyInput",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    confirmAdd() {
      // 校验数据
      if (!this.title.trim()) return alert('输入不能为空')
      // 包装输入的数据
      const todoObj = { id: nanoid(), title: this.title, done: false };
      // 将数据传给父组件
      this.$emit('addTodo',todoObj)
      // 清空input框中的内容
      this.title = "";
    },
  },
};
</script>
<style scoped>
.my-input {
  margin-bottom: 10px;
  width: 90%;
}
.my-input input {
  width: 100%;
  height: 30px;
  border: 1px solid skyblue;
  border-radius: 5px;
  padding: 2px 7px;
  box-sizing: border-box;
  color: #000;
}
.my-input input:focus {
  outline: none;
  border: 3px solid skyblue;
}
</style>
