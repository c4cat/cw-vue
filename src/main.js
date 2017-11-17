// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    console.log(this.$route.params.id)
  }
}).$mount('#app')

// router.beforeEach((to, from, next) => {
// 	console.log(to)
// 	console.log(from)
// 	next(false)
// })

// router.afterEach((to, from) => {
// 	console.log('after jump...')
// })
