<template>
  <li>
    <label for="">
      <input type="checkbox" name="" id="" :checked="todo.done" @change="changeCheck(todo.id)" />
      <!-- 这种写法不推荐, 因为props是不允许被修改的, 这种写法可以实现功能, 但违背初衷 -->
      <!-- <input type="checkbox" name="" id="" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input ref="inputTitle" type="text" :value="todo.title" v-show="todo.isEdit" @blur="updateThis(todo,$event)"/>
    </label>
    <div class="handleModule">
      <button v-show="!todo.isEdit" class="btn btn-edit" @click="editThis(todo)">编辑</button>
      <button class="btn btn-delete" @click="deleteThis(todo.id)">删除</button>
    </div>
  </li>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "MyListItem",
  props: ["todo"],
  data() {
    return {};
  },
  /* 4. 触发全局事件总线上绑定的事件 */
  methods: {
    changeCheck(id) {
      this.$bus.$emit("changeDoneState", id);
    },
    deleteThis(id) {
      if (confirm("确定删除吗")) {
        // this.$bus.$emit('deleteTodo',id)
        /* 改用消息订阅与发布的方式改写删除事件 */
        pubsub.publish("deleteTodo", id);
      }
    },
    editThis(todo) {
      if (todo.hasOwnProperty('isEdit')) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      /* 实现在点击'编辑'后input 框自动获取焦点的功能, 直接写.focus()无效果, 因为 input 框使用了 v-show, 在
         代码执行到这里时, dom 中还没出现input 框, vue 会在这些代码全部执行完成后才会重新渲染组件, 所以这里需要
         利用$nextTick(回调函数), 括号里的回调函数会在下一次更新页面时执行
      */
     /* 官方话: 当改变数据后, 要基于更新厚的新 DOM进行某些操作时, 需要在nextTick所指定的回调函数中执行 */
      this.$nextTick(function () {
        this.$refs.inputTitle.focus()
      })
    },
    updateThis(todo,event){
      todo.isEdit = false;
      if (!event.target.value) return alert('输入不能为空!!');
      this.$bus.$emit('updateTodo',todo.id,event.target.value);
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
button {
  display: none;
}
label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
label input {
  margin: 0 5px;
}
.handleModule {
  display: flex;
}
</style>
