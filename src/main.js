import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import { router } from './router'
import './axios'
import './form'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
