<template>
  <div class="home">
    <img class="inline-block" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{ msg }}</div>
    <div>{{ count?.name }} - {{ count.age }}</div>
    <van-button type="primary" class="rounded-md" @click="testClick">Primary</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { Toast } from 'vant'
// export default Vue.extend({
//   name: 'Home',
//   components: {
//     HelloWorld
//   }

// })
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const msg = ref('Hello World!')
    let count = ref({ name: 'lll', age: 18 })
    const testClick = () => {
      console.log('test')
      Toast('test')
    }
    return {
      msg,
      count,
      testClick,
    }
  }
})
</script>
<style lang="less" scoped>
</style>
