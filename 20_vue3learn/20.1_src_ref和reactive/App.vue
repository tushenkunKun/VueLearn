<template>
  <div>户主名: {{ name }}</div>
  <div>租户名: {{ person.name }}</div>
  <div v-show="person.age">年龄: {{ person.age }}</div>
  <div v-show="person.sex">性别: {{ person.sex }}</div>
  <div v-show="test.name">学校名称: {{ test.name }}</div>
  <div v-show="test.age">学校校龄: {{ test.age }}</div>
  <div v-show="test.teacherName">学校老师名: {{ test.teacherName }}</div>
  <button @click="changeInfo()">按钮</button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App",
  setup() {
    let name = ref("zhangsan");
    let person = reactive({
      name: "alkalk",
      age: 18,
    });
    let test = reactive({
      name: "qinghua",
      age: 20,
    });
    function changeInfo() {
      /* ref处理过的基本数据类型    修改 */
      name.value = "alkalk";
      /* ref处理过的引用数据类型    修改 */
      test.age = 30
      /* ref处理过的引用数据类型    添加 */
      test.teacherName = 'lisi'
      /* ref处理过的引用数据类型    删除 */
      delete test.name
      /* reactive处理过的引用数据类型    修改 */
      person.name = "laoan";
      person.age = 20;
      /* reactive处理过的引用数据类型    添加 */
      person.sex = "male";
      /* reactive处理过的引用数据类型    删除 */
      delete person.age;
    }
    return {
      name,
      person,
      test,
      changeInfo,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
