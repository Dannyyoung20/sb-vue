require('dotenv').config()
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import AuthAlert from '@/components/Errors/AuthAlert'
import VueAxios from 'axios'
import { store } from './vuexstore/store'
import { interceptor } from './ReqInterceptor'
/* Auth token pkg */
import Auth from './AuthPackage'

window.Auth = Auth

Vue.use(Vuetify)
Vue.component('auth-alert', AuthAlert)

const axios = window.axios = VueAxios
axios.defaults.baseURL = 'http://localhost:8000/'


Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
