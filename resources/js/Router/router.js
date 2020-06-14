import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/AppHome'
import Login from '../components/login/Login'
import Signup from '../components/login/signup'
import Forum from '../components/forum/forum'
import Logout from '../components/login/logout'

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
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
})
