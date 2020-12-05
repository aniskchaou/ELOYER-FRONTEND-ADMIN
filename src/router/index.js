import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '../components/Contact.vue'
import Affair from '../components/Affair.vue'
import Rendezvous from '../components/Rendezvous.vue'
import Study from '../components/Study.vue'
import Task from '../components/Task.vue'
import Dashboard from '../components/Dashboard.vue'
import Document from '../components/Document.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },{
    path: '/affair',
    name: 'affair',
    component: Affair,
  },
  {
    path: '/rendezvous',
    name: 'rendezvous',
    component: Rendezvous,
  },
  {
    path: '/study',
    name: 'study',
    component: Study,
  },
  {
    path: '/task',
    name: 'task',
    component: Task,
  },
  {
    path: '/document',
    name: 'document',
    component: Document,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router