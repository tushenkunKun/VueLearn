<template>
  <div>
    <button @click="showText">显示/隐藏</button>
    
    <!-- 多个元素的过渡需要用到 transition-group 标签且在内部的元素都需要加上唯一的 key 值 -->
    <!-- 使用 animate.css 库来配置动画 -->
    <transition-group 
    appear 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__swing"
    leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">这是一段文字</h1>
      <h1 v-show="isShow" key="2">你好你好你好</h1>
    </transition-group>
  </div>
</template>
<script>
import 'animate.css'
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
