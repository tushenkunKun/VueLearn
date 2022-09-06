<template>
  <div class="my-list">
    <ul class="my-list-item">
      <MyListItem 
      v-for="todoObj in todos" 
      :key="todoObj.id" 
      :todo="todoObj" 
      :changeDoneState="changeDoneState" 
      :deleteTodo="deleteTodo"
      ></MyListItem>
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
  props: ["todos", "changeDoneState" ,"deleteTodo"],
};
</script>
<style scoped>
.my-list {
  width: 90%;
}
ul {
  border-radius: 5px;
}
</style>
