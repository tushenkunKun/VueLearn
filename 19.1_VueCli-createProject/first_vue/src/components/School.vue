<template>
  <div class="school">
    <h2 ref="schoolName">学校名称:{{name}}</h2>
    <button ref="myBtn" @click="showSchoolName('alk',$event)">输出学校名称</button>
    <Student ref="student"></Student>
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
    showSchoolName(value,event){
      console.log(this.name+'@@@@@'+value,event.target);
      console.log(this.$refs.schoolName);
      console.log(this.$refs.myBtn);
      console.log(this.$refs.student);
    }
  },
}
</script>
<style scoped>

</style>