<template>
  <div class="person">
    <input type="text" placeholder="请输入要添加的姓名" v-model="newPersonName" />
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加姓王的人</button>
    <!-- 这是用来测试用 mapMutations 的方式写逻辑用的 -->
    <!-- <button @click="ADDPERSON({ id: 123, name: newPersonName })">利用 map 添加</button> -->
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h1>Person组件中显示当前的求和为: {{ sum }}</h1>
    <h1>展示第一个人的名字: {{ showFirstName }}</h1>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      newPersonName: "",
    };
  },
  computed: {
    sum() {
      return this.$store.state.countAbout.sum;
    },
    ...mapState("personAbout", ["personList"]),
    showFirstName() {
      return this.$store.getters["personAbout/showFirstName"];
    },
  },
  methods: {
    // ...mapMutations("personAbout", ["ADDPERSON"]),
    addPerson() {
      const newPerson = { id: nanoid(), name: this.newPersonName };
      this.$store.commit("personAbout/ADDPERSON", newPerson);
      this.newPersonName = "";
    },
    addPersonWang() {
      const newPerson = { id: nanoid(), name: this.newPersonName };
      this.$store.dispatch("personAbout/addPersonWang", newPerson);
      this.newPersonName = "";
    },
  },
};
</script>
<style scoped>
input {
  margin-right: 10px;
}
button {
  width: 100px;
  height: 30px;
}
ul {
  padding-left: 20px;
  list-style-type: disc;
}
</style>
