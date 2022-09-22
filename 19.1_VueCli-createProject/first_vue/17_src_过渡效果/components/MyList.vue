<template>
  <div>
    <button @click="showText">显示/隐藏</button>
    <transition appear="" name="alk">
      <h1 v-show="isShow">这是一段文字</h1>
    </transition>
  </div>
</template>
<script>
export default {
  name: "MyList",
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    showText() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<style scoped>
button {
  margin-bottom: 20px;
}
h1 {
  background-color: skyblue;
  margin-bottom: 20px;
}

/* 进入的起点, 离开的终点 */
.alk-enter,
.alk-leave-to {
  /* transform: translateX(-100%); */
  opacity: 0;
}
/* 离开的起点, 进入的终点 */
.alk-leave,
.alk-enter-to {
  /* transform: translateX(0); */
  opacity: 1;
}
.alk-enter-active,
.alk-leave-active {
  transition: 1s ease-in-out;
}
</style>
