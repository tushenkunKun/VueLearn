<template>
  <div class="my-result">
    <label for="">
      <input type="checkbox" name="" id="" />
      <span>已完成0</span>
      <span>/</span>
      <span>全部0</span>
    </label>
    <button class="btn-delete">删除已完成目标</button>
  </div>
</template>
<script>
export default {
  name: "MyResult",
  data() {
    return {};
  },
};
</script>
<style scoped>
.my-result {
  width: 90%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 5px;
}
label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
label input {
  margin: 0 5px;
}
button {
  width: 120px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  color: red;
  font-size: 14px;
}
button:hover {
  background-color: red;
  color: skyblue;
}
</style>
