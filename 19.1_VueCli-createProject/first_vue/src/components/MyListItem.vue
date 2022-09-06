<template>
  <li>
    <label for="">
      <input type="checkbox" name="" id="" :checked="todo.done" @change="changeCheck(todo.id)"/>
      <!-- 这种写法不推荐, 因为props是不允许被修改的, 这种写法可以实现功能, 但违背初衷 -->
      <!-- <input type="checkbox" name="" id="" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn-delete">删除</button>
  </li>
</template>
<script>
export default {
  name: "MyListItem",
  props:['todo','changeDoneState'],
  data() {
    return {};
  },
  methods: {
    changeCheck(id){
      this.changeDoneState(id)
    }
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
