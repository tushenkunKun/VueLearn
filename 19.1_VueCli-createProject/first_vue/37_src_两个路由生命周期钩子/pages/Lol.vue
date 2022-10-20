<template>
  <ul class="lol">
    <li :style="{ opacity }">这是一段计时器控制显隐的文字</li>
    <li v-for="person in personInfo" :key="person.id">
      <router-link :to="`/home/lol/detail/${person.id}/${person.name}`">{{ person.name }}</router-link>
      <input type="text" />
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
      opacity: 1,
      personInfo: [
        { id: nanoid(), name: "EZ" },
        { id: nanoid(), name: "女警" },
        { id: nanoid(), name: "希维尔" },
      ],
    };
  },
  activated() {
    console.log("Lol组件被激活");
    this.timer = setInterval(() => {
      console.log('@@');
      this.opacity-=0.01
      if (this.opacity<=0) {
        this.opacity = 1
      }
    }, 16);
  },
  deactivated() {
    console.log("Lol组件失活");
    clearInterval(this.timer)
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
