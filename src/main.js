import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import { router } from './router'
import './axios'
import './form'
import store from "./store";
import './globalFilters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
