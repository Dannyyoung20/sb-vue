require('dotenv').config()
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAxios from 'axios'



window.axios = VueAxios
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
