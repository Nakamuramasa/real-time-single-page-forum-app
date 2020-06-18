import Vue from 'vue'
import Router from 'vue-router'
import Parallex from '../components/parallex'
import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Logout from '../components/login/logout'
import Forum from '../components/forum/forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'
import CreateCategory from '../components/category/CreateCategory'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Parallex
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/forum',
            name: 'forum',
            component: Forum
        },
        {
            path: '/question/:slug',
            name: 'read',
            component: Read
        },
        {
            path: '/ask',
            name: 'ask',
            component: Create
        },
        {
            path: '/category',
            name: 'category',
            component: CreateCategory
        }
    ]
})
