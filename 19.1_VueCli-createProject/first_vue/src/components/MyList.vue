<template>
  <div class="my-list">
    <ul class="my-list-item">
      <MyListItem></MyListItem>
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
    return {};
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
