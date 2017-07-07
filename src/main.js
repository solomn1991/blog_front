// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// jquery
import $ from 'jquery'

import 'vue-resource/dist/vue-resource.js'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// adminlte
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/dist/js/app.js'


// import 'font-awesome-webpack/'

require("font-awesome-webpack");

import Vuex from 'vuex'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created:function () {
    // document.body.removeAttribute("style");
    // document.body.setAttribute("style","min-height:100% !important")
  }
})
