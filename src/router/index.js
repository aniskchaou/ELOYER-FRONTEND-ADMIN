import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from '../components/Contact.vue'
import Affair from '../components/Affair.vue'
import Rendezvous from '../components/Rendezvous.vue'
import Study from '../components/Study.vue'
import Task from '../components/Task.vue'
import Dashboard from '../components/Dashboard.vue'
import Document from '../components/Document.vue'
import Login from '../components/Login.vue'
import Configuration from '../components/Configuration.vue'
import FavouriteAffair from '../components/FavouriteAffair.vue'
import ArchivedAffair from '../components/ArchivedAffair.vue'
import Court from '../components/Court.vue'
import Act from '../components/Act.vue'
import Client from '../components/Client.vue'
import CategoryAffair from '../components/CategoryAffair.vue'
import CategoryCourt from '../components/CategoryCourt.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },{
    path: '/configuration',
    name: 'configuration',
    component: Configuration
  },{
    path: '/dashboard',
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
  },
  {
    path: '/favouriteaffair',
    name: 'favouriteaffair',
    component: FavouriteAffair,
  },
  {
    path: '/archivedaffair',
    name: 'archivedaffair',
    component: ArchivedAffair,
  }
  ,
  {
    path: '/court',
    name: 'court',
    component: Court,
  },
  {
    path: '/categorycourt',
    name: 'categorycourt',
    component: CategoryCourt,
  },
  {
    path: '/categoryaffair',
    name: 'categoryaffair',
    component: CategoryAffair,
  },
  {
    path: '/client',
    name: 'client',
    component: Client,
  },
  {
    path: '/act',
    name: 'act',
    component: Act,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router