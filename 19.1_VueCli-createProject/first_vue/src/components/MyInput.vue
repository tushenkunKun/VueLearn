<template>
  <div class="my-input">
    <input type="text" placeholder="请输入想要添加的todoList内容" />
  </div>
</template>
<script>
export default {
  name: "MyInput",
  data() {
    return {};
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
