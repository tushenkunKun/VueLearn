<template>
  <div class="my-list">
    <ul class="my-list-item">
      <MyListItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></MyListItem>
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
  data() {
    return {
      todos:[
        {id:'001',title:'玩Apex',done:true},
        {id:'002',title:'玩LOL',done:false},
        {id:'003',title:'玩CSGO',done:false},
      ]
    };
  },
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
