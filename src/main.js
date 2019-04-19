// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)

/* eslint-disable no-new */
let vm = new Vue({
  router, // 注入到根实例中
  el: '#app',
  render: h => h(App)

})

Vue.use({vm})
