// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Index from'./components/index'
import Department from'./components/Department'
import Activities from'./components/Activities'
import Partner from'./components/Partner'
import Contact from'./components/Contact'
import Salon3 from'./components/GameSalon3rd'
import axios from "axios";

Vue.prototype.$axios = axios;

Vue.config.productionTip = false
Vue.use(VueRouter)

const router=new VueRouter({
	routes:[
		{path:"/",component:Index},
		{path:"/Department",component:Department},
		{path:"/Activities",component:Activities},
		{path:"/Partner",component:Partner},
		{path:"/Contact",component:Contact},
		{path:"/GameSalon3rd",component:Salon3},
	],
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
