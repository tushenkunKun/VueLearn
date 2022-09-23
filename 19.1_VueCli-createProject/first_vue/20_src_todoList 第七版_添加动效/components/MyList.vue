<template>
  <div class="my-list">
    <ul class="my-list-item">
      <!-- 这里要用到 group, 因为这组件是好多个, 懂伐?? -->
      <transition-group name="todo" appear>
      <MyListItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      ></MyListItem>
      </transition-group>
    </ul>
  </div>
</template>
<script>
import MyListItem from "./MyListItem.vue";
export default {
  name: "MyList",
  components: {
    MyListItem,
  },
  props: ["todos"],
};
</script>
<style scoped>
.my-list {
  width: 90%;
}
ul {
  border-radius: 5px;
}

/* 进入的起点, 离开的终点 */
.todo-enter,
.todo-leave-to {
  /* transform: translateX(-100%); */
  opacity: 0;
}
/* 离开的起点, 进入的终点 */
.todo-leave,
.todo-enter-to {
  /* transform: translateX(0); */
  opacity: 1;
}
.todo-enter-active,
.todo-leave-active {
  transition: 1s ease-in-out;
}
</style>
