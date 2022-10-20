<template>
  <ul class="apex">
    <li v-for="person in personInfo" :key="person.id">
      <!-- 第一种写法, 模版字符串 -->
      <!-- <router-link :to="`/home/apex/detail/${person.id}/${person.name}`">{{ person.name }}</router-link> -->
      <!-- 第二种写法, 对象写法: 这种写法里params 必须和name 配合使用, 不能使用 path -->
      <!-- <router-link
        :to="{
          name: 'apexgame',
          params: {
            id: person.id,
            name: person.name,
          },
        }"
      >
        {{ person.name }}
      </router-link> -->
      <button @click="pushShow(person)">push展示</button>
      <button @click="replaceShow(person)">replace展示</button>
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
  methods: {
    pushShow(person) {
      this.$router.push({
        name: "apexgame",
        params: {
          id: person.id,
          name: person.name,
        },
      });
    },
    replaceShow(person) {
      this.$router.replace({
        name: "apexgame",
        params: {
          id: person.id,
          name: person.name,
        },
      });
    },
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
button {
  margin-right: 10px;
}
</style>
