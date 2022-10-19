<template>
  <ul class="lol">
    <li v-for="person in personInfo" :key="person.id">
      <router-link :to="`/home/lol/detail?id=${person.id}&name=${person.name}`">{{ person.name }}</router-link>
    </li>
    <router-view></router-view>
  </ul>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "Lol",
  data() {
    return {
      personInfo: [
        { id: nanoid(), name: "EZ" },
        { id: nanoid(), name: "女警" },
        { id: nanoid(), name: "希维尔" },
      ],
    };
  },
};
</script>
<style scoped>
.lol {
  margin: 20px 0 0 30px;
}
li {
  margin-bottom: 10px;
}
li a {
  text-decoration: none;
  color: skyblue;
}
</style>
