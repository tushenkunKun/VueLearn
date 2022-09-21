<template>
  <div class="demo">
    <h2>{{ name }}</h2>
    <h2>{{ address }}</h2>
  </div>
</template>
<script>
import pubsub from "pubsub-js";
export default {
  name: "School",
  data() {
    return {
      name: "beida",
      address: "beijing",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("studentName", function (msgName, data) {
      console.log("有人发布了studentName消息,回调被执行,返回:", msgName, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId)
  },
};
</script>
<style scoped></style>
