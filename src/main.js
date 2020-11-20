import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

// Install BootstrapVue

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.config.productionTip = true

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/quizApp/'
//     : '/'
// }
new Vue({
  render: h => h(App),
}).$mount('#app')
