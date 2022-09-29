<template>
  <div class="list-wrap">
    <el-empty v-show="!isExist" description="plz enter something to search"></el-empty>
    <ul v-show="isExist">
      <li v-for="user in users" :key="user.login">
        <span class="img-wrap">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" alt="" />
          </a>
        </span>
        <span class="username">XXXXX</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      isExist: false,
      users: [],
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (users) => {
      this.users = users;
      if (this.users.length > 0) {
        this.isExist = true;
      } else {
        this.isExist = false;
      }
    });
    this.$bus.$on("getError", (errorCode) => {
      if (errorCode =="422") {
        this.isExist = false;
      } else {
        this.isExist = true;
      }
    });
  },
};
</script>
<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  box-sizing: border-box;
  border: 2px solid #efefef;
  padding: 10px;
  margin: 0 5px 5px 0;
}
.img-wrap {
  width: 150px;
  height: 150px;
}
.img-wrap img {
  width: 100%;
}
</style>
