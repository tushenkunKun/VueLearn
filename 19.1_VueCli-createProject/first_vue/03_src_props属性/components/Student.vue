<template>
  <div class="student">
    <h1>{{ myself }}</h1>
    <h2>{{ name }}</h2>
    <h2>{{ myAge }}</h2>
    <h2>{{ sex }}</h2>
    <input type="text" placeholder="请输入您的账号" />
    <button @click="updataAge">年龄+1</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  data() {
    return {
      myself: "我是一个student",
      myAge:this.age,
    };
  },
  methods: {
    updataAge(){
      // this.age++ //这样写会报错, 要避免直接对props中的数据进行修改
      this.myAge++
    }
  },
  /* props中配置的数据会被绑定在组件实例对象(vc)上, 且props是只读的 */
  // 只接收数据
  props:['name','age','sex']

  // 接收数据并限制类型
  /* props:{
    name:String,
    age:Number,
    sex:String
  } */

  // 接收数据, 并对数据进行类型限制+必要性限制+规定默认值
  /* props: {
    name: {
      type: String, // 规定接收的类型
      required: true, // 规定是否为必需
    },
    age: {
      type: Number,
      default: 100, // 规定默认值
    },
    sex: {
      type: String,
    },
  }, */
};
</script>
<style scoped></style>
