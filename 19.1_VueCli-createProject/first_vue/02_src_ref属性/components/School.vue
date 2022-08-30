<template>
  <div class="school">
    <h2 ref="schoolName">学校名称:{{name}}</h2>
    <button ref="myBtn" @click="showSchoolName('alk',$event)">输出学校名称</button>
    <Student ref="student" id="student"></Student>
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
  methods: {
    /* 在组件上加ref, 获取到的是对应的组件实例对象
       在html标签上加ref, 获取到的是真实DOM元素  
    */
    showSchoolName(value,event){
      console.log(this.name+'@@@@@'+value,event.target);
      console.log(this.$refs.schoolName);
      console.log(this.$refs.myBtn);
      console.log(this.$refs.student);
      console.log(document.getElementById('student'));
    }
  },
}
</script>
<style scoped>

</style>