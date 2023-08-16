import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import RandomJokeView from '../views/RandomJokeView.vue'
import JokeDetailView from '../views/JokeDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomJokeView
  },
  {
    path: '/joke-details/:id',
    name: 'details',
    component: JokeDetailView,
    props: true
  },
]

// process.env.BASE_URL refers to the publicPath option in vue.config.js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
