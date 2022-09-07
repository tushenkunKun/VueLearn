<template>
  <div class="my-result" v-show="todos.length">
    <label for="">
      <!-- 配合methods的写法, 比较繁琐, checkbox既要展示初始值, 又要完成交互, 应该考虑两者合一的方式 -->
      <!-- <input type="checkbox" name="" id="" :checked="allDone" @change="allCheck"/> -->

      <!-- 以下就是两者合一的方式 -->
      <input type="checkbox" name="" id="" v-model="allDone" />
      <span>已完成{{ doneTotal }}</span>
      <span>/</span>
      <span>全部{{ todos.length }}</span>
    </label>
    <button class="btn-delete" @click="deleteAll">删除已完成目标</button>
  </div>
</template>
<script>
export default {
  name: "MyResult",
  props: ["todos", "checkAllTodo", "deleteAllDoneTodo"],
  data() {
    return {};
  },
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done == true ? 1 : 0);
      }, 0);
    },
    // 这里的计算属性可以仔细研究一下思路, 为什么要写成完整模式, 写成普通模式会显示什么报错信息
    allDone: {
      get() {
        return this.doneTotal === this.todos.length && this.todos.length > 0;
      },
      set(value) {
        this.checkAllTodo(value);
      },
    },
  },

  // 配合上面的checkbox的写法
  /* methods: {
    allCheck(e){
      this.checkAllTodo(e.target.checked)
    }
  }, */
  methods: {
    deleteAll(){
      this.deleteAllDoneTodo()
    }
  },
};
</script>
<style scoped>
.my-result {
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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
  width: 120px;
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
