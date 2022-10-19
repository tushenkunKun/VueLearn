<template>
  <ul class="apex">
    <li v-for="person in personInfo" :key="person.id">
      <!-- 第一种写法, 模版字符串 -->
      <!-- <router-link :to="`/home/apex/detail?id=${person.id}&name=${person.name}`">{{ person.name }}</router-link> -->
      <!-- 第一种写法, 对象写法 -->
      <!-- <router-link
        :to="{
          path: '/home/apex/detail',
          query: {
            id: person.id,
            name: person.name,
          },
        }"
      >
        {{ person.name }}
      </router-link> -->

      <!-- 命名路由的写法, 要配合 router 文件夹里 index.js 中的配置使用 -->
      <router-link
        :to="{
          name:'apexgame',
          query: {
            id: person.id,
            name: person.name,
          },
        }"
      >
        {{ person.name }}
      </router-link>
    </li>
    <router-view></router-view>
  </ul>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "Apex",
  data() {
    return {
      personInfo: [
        { id: nanoid(), name: "密客" },
        { id: nanoid(), name: "希尔" },
        { id: nanoid(), name: "命脉" },
      ],
    };
  },
};
</script>
<style scoped>
.apex {
  margin: 20px 0 0 30px;
}
li {
  margin-bottom: 10px;
}
li a {
  text-decoration: none;
  color: olivedrab;
}
</style>
