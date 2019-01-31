// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from "axios";

import Index from'./components/Index'
import Department from'./components/Department'
import Activities from'./components/Activities'
import Partner from'./components/Partner'
import Contact from'./components/Contact'
import Salon3 from'./components/GameSalon3rd'
import RE2sale from'./components/RE2sale'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueRouter)


const router=new VueRouter({
	base:"/mobile",
	routes:[
		{path:"/index.html",component:Index},
		{path:"/Department",component:Department},
		{path:"/Activities",component:Activities},
		{path:"/Partner",component:Partner},
		{path:"/Contact",component:Contact},
		{path:"/GameSalon3rd",component:Salon3},
		{path:"/Sale",component:RE2sale},
	],
	scrollBehavior (to,from,savedPosition){
		return { x:0,y:0 }
	},
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
