import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Toast } from 'vant'

Vue.use(Button).use(Toast)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
