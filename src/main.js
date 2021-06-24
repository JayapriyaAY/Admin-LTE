import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard1 from './Dashboard1.vue'
import Dashboard2 from './Dashboard2.vue'
import Dashboard3 from './Dashboard3.vue'
// import Widgets from './Widgets.vue'
import TopNavigation from './TopNavigation.vue'
import Charts from './Charts.vue'
import FlotChart from './FlotChart.vue'
import InlineChart from './InlineChart.vue'
import UplotChart from './UplotChart.vue'
import General from './General'
import Icons from './Icons.vue'
import Buttons from './Buttons.vue'
import Sliders from './Sliders.vue'
import ModelsAlert from './ModelsAlert.vue'
import NavbarTabs from './Navbartabs.vue'
import Timeline from './Timeline.vue'
import Ribbons from './Ribbons.vue'
import GeneralForms from './GeneralForms.vue'
import AdvanceForms from './AdvanceForms.vue'

Vue.use(VueRouter)
const routes = [
{ path : '/dashboard' , component : Dashboard1},
{ path : '/dashboard2' , component : Dashboard2},
{ path : '/dashboard3' , components : Dashboard3},
// { path : '/widgets' , component : Widgets},
{ path : '/top-navigation' , component : TopNavigation},
{ path : '/charts' , component : Charts},
{ path : '/flot-chart' , component : FlotChart},
{ path : '/inline-chart' , component : InlineChart},
{ path : '/uplot-chart' , component : UplotChart},
{ path : '/general' , component : General},
{ path : '/icons' , component : Icons},
{ path : '/buttons' , component : Buttons},
{ path : '/sliders' , component : Sliders},
{ path : '/models-alert' , component : ModelsAlert},
{ path : '/navbars-tabs' , component : NavbarTabs},
{ path : '/timeline' , component : Timeline},
{ path : '/ribbons' , component : Ribbons},
{ path : '/general-forms' , component : GeneralForms},
{ path : '/advanace-forms' , component : AdvanceForms},
] 
const router = new VueRouter({
  routes,
  mode : 'history' 
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
