<template>
  <div class="about">
    <h1>这是 About 组件</h1>
    <p>
      你好可樱, 恭喜你又长大一岁, 这是我成为双尾猫以来陪你过的第一个生日. 不得不说哥们儿就一臭直男, 是既没有米又没有才艺, 所以就在这里简简单单 的祝你生日快乐, 希望你身体健健康康, 直播事业蒸蒸日上,
      能和双尾猫们一起度过更多的时光, 加油
    </p>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
  /* 通过路由规则进入组件前调用 */
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") == "alkalk") {
        next();
      } else {
        alert("name 不正确, 没有权限查看");
      }
    } else {
      next();
    }
  },
  /* 通过路由规则离开组件前调用 */
  beforeRouteLeave(to, from, next) {
    console.log('这是组件路由离开时时的输出');
    next()
  },
};
</script>
<style scoped></style>
