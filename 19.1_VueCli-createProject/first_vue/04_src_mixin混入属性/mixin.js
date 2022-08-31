export const hunhe1 = {
  // 组件本身有的methods或者data和minxins混入中的methods重复时, 以本身的methods为主
  data() {
    return {
      name:'fcjfcjfcj'
    }
  },
  methods: {
    showName() {
      console.log(this.name);
    },
  },
  // 组件本身和混入中都有mounted时, 会全部保留, 先执行混入中的mounted
  mounted() {
    console.log('局部mixins混入的mounted周期函数');
  },
};
