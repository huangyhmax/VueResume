// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/reset.scss'

Vue.config.productionTip = false

Vue.component('huang-yh', {
  template:'<div>hello my name is {{name}}</div>',
  data(){
    return{
      name:'huangyh'
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
