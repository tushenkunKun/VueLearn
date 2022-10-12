<template>
  <div class="person">
    <input type="text" placeholder="请输入要添加的姓名" v-model="newPersonName" />
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h1>Person组件中显示当前的求和为:{{ sum }}</h1>
  </div>
</template>
<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      newPersonName: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    addPerson() {
      const newPerson = { id: nanoid(), name: this.newPersonName };
      this.$store.commit("ADDPERSON", newPerson);
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
