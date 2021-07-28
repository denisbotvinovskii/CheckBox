import { createRouter, createWebHistory } from 'vue-router'
import Submit from '../components/Submit.vue'
import Home from '../components/Home.vue'


const routes = [
  {
    path: '/submit',
    name: 'Submit',
    component: Submit,
    meta: { auth: true }

  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
