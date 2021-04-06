import Vue from 'vue'
import VueRouter from 'vue-router'

const maintabbar = () => import('components/content/maintabbar/MainTabBar')
const home = () => import('views/home/Home')
const cart = () => import('views/cart/Cart')
const category = () => import('views/category/Category')
const profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'tabbar',
    component: maintabbar
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopcart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
