import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/AppHome'
import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Logout from '../components/login/logout'
import Forum from '../components/forum/forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
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
        }
    ]
})
