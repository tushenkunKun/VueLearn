<template>
  <li>
    <label for="">
      <input type="checkbox" name="" id="" :checked="todo.done"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn-delete">删除</button>
  </li>
</template>
<script>
export default {
  name: "MyListItem",
  props:['todo'],
  data() {
    return {};
  },
};
</script>
<style scoped>
li {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  background-color: pink;
  border-radius: 5px;
}
label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
label input {
  margin: 0 5px;
}
button {
  width: 50px;
  margin: 0 10px 0 0;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  color: red;
  font-size: 14px;
}
button:hover {
  background-color: red;
  color: skyblue;
}
</style>
