<template>
  <div class="list-wrap">
    <!-- 展示 -->
    <el-empty v-show="!isExist" :description="tipMsg"></el-empty>
    <!-- 展示用户列表 -->
    <ul v-show="isExist">
      <li v-for="user in users" :key="user.login">
        <span class="img-wrap">
          <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" alt="" />
          </a>
        </span>
        <span class="username">{{ user.login }}</span>
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
      tipMsg: "请输入一些名字进行查询",
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (userObj) => {
      this.users = userObj.users;
      this.isExist = userObj.isExist;
      this.tipMsg = userObj.tipMsg;
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
