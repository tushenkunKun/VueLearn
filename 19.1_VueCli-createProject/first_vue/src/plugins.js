export default {
  // 自定义插件, 第一个参数为Vue原型对象, 第二个以后的参数是插件使用者传递的数据
  /* install(Vue,option){
    console.log(Vue,option);
  } */
  install(Vue){
    Vue.filter('mySlice',function (value) {
      return value.slice(0,4)
    }),
    Vue.directive('fbind',{
      bind(element, binding) {
        console.log('bind');
        element.value = binding.value
      },
      inserted(element, binding) {
        console.log('inserted');
        element.focus()
      },
      update(element, binding) {
        console.log('update');
        element.value = binding.value
      }
    }),
    Vue.mixin({
      data() {
        return {
          sex:'male'
        }
      },
    }),
    Vue.prototype.hello = ()=>{
      return '你好'
    }
  }
}