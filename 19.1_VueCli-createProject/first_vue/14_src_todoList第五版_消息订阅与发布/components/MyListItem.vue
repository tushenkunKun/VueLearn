<template>
  <li>
    <label for="">
      <input type="checkbox" name="" id="" :checked="todo.done" @change="changeCheck(todo.id)"/>
      <!-- 这种写法不推荐, 因为props是不允许被修改的, 这种写法可以实现功能, 但违背初衷 -->
      <!-- <input type="checkbox" name="" id="" v-model="todo.done"/> -->
      <span>{{todo.title}}</span>
    </label>
    <button class="btn-delete" @click="deleteThis(todo.id)">删除</button>
  </li>
</template>
<script>
import pubsub from 'pubsub-js';
export default {
  name: "MyListItem",
  props:['todo'],
  data() {
    return {};
  },
  /* 4. 触发全局事件总线上绑定的事件 */
  methods: {
    changeCheck(id){
      this.$bus.$emit('changeDoneState',id)
    },
    deleteThis(id){
      if (confirm('确定删除吗')) {
        // this.$bus.$emit('deleteTodo',id)
        /* 改用消息订阅与发布的方式改写删除事件 */
        pubsub.publish('deleteTodo',id)
      }
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
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
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
  display: none;
}
button:hover {
  background-color: red;
  color: skyblue;
}
</style>
