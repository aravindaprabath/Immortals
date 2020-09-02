import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/Table.vue'
import Header from '../views/Header.vue'
import Accordion from '../views/Accordion.vue'
import Navigation from '../views/Navigation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/accordion',
  },
  {
    path: '/accordion',
    name: 'Accordion',
    component: Accordion,
  },
  {
    path: '/header',
    name: 'Header',
    component: Header,
  },
  {
    path: '/navigation',
    name: 'Navigation',
    component: Navigation,
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
