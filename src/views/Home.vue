<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{ msg }}</div>
    <div>{{ count?.name }} - {{ count.age }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
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
    return {
      msg,
      count,
    }
  }
})
</script>
