<template>
  <Demo gameName="lol" msg="你好啊你好啊" @hello="sayHello">
    <template v-slot:alk>
      <span>我是一个 slot 插槽中的内容</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: {
    Demo,
  },
  setup() {
    let sayHello = (value) => {
      console.log(`hello hello ${value}`);
    };
    return { sayHello };
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
