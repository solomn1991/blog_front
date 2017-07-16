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




import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    is_login:false,
    user:{id:null,username:null}
  },
  mutations:{
    login(state,user){
      state.is_login=true;
      state.user = user;
    },
    logout(state){
      state.is_login=false;
      state.user = {id:null,username:null}
    },

  }

})



Vue.config.devtools=true




/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  created:function () {
    // document.body.removeAttribute("style");
    // document.body.setAttribute("style","min-height:100% !important")
  }
})
