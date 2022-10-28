<template>
  <div>
    姓:
    <input type="text" v-model="lastName" />
  </div>
  <div>
    名:
    <input type="text" v-model="firstName" />
  </div>
  <div>
    全名:
    <input type="text" v-model="fullName" />
  </div>
</template>

<script>
import { reactive, ref, computed } from "vue";
export default {
  name: "Demo",
  setup(props, context) {
    let firstName = ref("");
    let lastName = ref("");
    /* computed 的简写形式 */
    /* let fullName = computed(() => {
      return lastName.value + "-" + firstName.value;
    }); */
    /* computed 的完全形式 */
    let fullName = computed({
      get: () => {
        return lastName.value + "-" + firstName.value;
      },
      set:(value)=>{
        let nameArr = value.split('-');
        lastName.value = nameArr[0];
        firstName.value = nameArr[1];
      }
    });
    return { firstName, lastName, fullName };
  },
};
</script>

<style></style>
