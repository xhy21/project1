// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'
//import router from './router'
import Layout from './components/Layout'
import Router from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
//Vue.config.productionTip = false
Vue.use(Router)
Vue.use(VueResource)
let router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: IndexPage
      }
    ]
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//  template: '<App/>',
//  components: { App }
template: '<Layout/>',
components: { Layout }
})
