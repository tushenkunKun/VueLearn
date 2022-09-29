<template>
  <div class="search-wrap">
    <h1 class="title">Search BiliBili Users</h1>
    <div class="search-area">
      <el-input v-model="inputName" placeholder="enter the name you search"></el-input>
      <el-button type="primary" @click="searchUsers">Search</el-button>
    </div>
  </div>
</template>
<script>
// https://api.github.com/search/users?q=xxx
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      inputName: "",
    };
  },
  methods: {
    searchUsers() {
      axios
        .get(`https://api.github.com/search/users?q=${this.inputName}`)
        .then((response) => {
          this.$bus.$emit("getUsers", response.data.items);
        })
        .catch((error) => {
          console.log("请求失败", error.response.status);
          this.$bus.$emit("getError", error.response.status);
        });
    },
  },
};
</script>
<style scoped>
.search-wrap {
  box-sizing: border-box;
  background-color: rgb(247, 225, 229);
  height: 150px;
  padding: 20px 0 0px 50px;
}
.search-area {
  display: flex;
}
.el-input {
  width: 300px;
  margin-right: 10px;
}
.title {
  margin-bottom: 10px;
}
</style>
