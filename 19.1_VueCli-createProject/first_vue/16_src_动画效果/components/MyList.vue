<template>
  <div>
    <button @click="showText">显示/隐藏</button>
    <!-- 添加 appear 属性使页面刚渲染后就执行动画 -->
    <transition appear="">
      <h1 v-show="isShow">这是一段文字</h1>
    </transition>
    <!-- 添加 name 属性, css 中类名的方式需要做出相应的改变 -->
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

/* transition 没有指定 name 时的命名方式 */
.v-enter-active {
  animation: move 1s ease-in-out;
}
.v-leave-active {
  animation: move 1s ease-in-out reverse;
}
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* transition 有指定 name 时的命名方式 */
.alk-enter-active {
  animation: alkmove 1s ease-in-out;
}
.alk-leave-active {
  animation: alkmove 1s ease-in-out reverse;
}
@keyframes alkmove {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
