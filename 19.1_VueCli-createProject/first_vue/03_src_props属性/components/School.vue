<template>
  <div class="school">
    <h2>学校名称:{{name}}</h2>
    <!-- age传入的是字符串 -->
    <!-- <Student name="alk" sex="male" age="20"></Student> -->
    <!-- age传入的是数字 -->
    <Student name="alk" sex="male" :age="20"></Student>
    <Student name="fcj" sex="female" :age="30"></Student>
  </div>
</template>
<script>
import Student from './Student.vue'
export default {
  name:'School',
  components:{
    Student
  },
  data(){
    return{
      name:'beida'
    }
  },
}
</script>
<style scoped>

</style>