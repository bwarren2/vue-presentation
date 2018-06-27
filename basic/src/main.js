import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  render: h => h(App)
})
