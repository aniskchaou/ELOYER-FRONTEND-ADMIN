import Vue from 'vue'
import VueRouter from 'vue-router'
import patient from '../components/patient.vue'
import medecin from '../components/medecin.vue'
import Dashboard from '../components/Dashboard.vue'
import analyse from '../components/analyse.vue'
import payment from '../components/payment.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/patient',
    name: 'patient',
    component: patient
  },{
    path: '/medecin',
    name: 'medecin',
    component: medecin,
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment,
  },
  {
    path: '/analyse',
    name: 'analyse',
    component: analyse,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router