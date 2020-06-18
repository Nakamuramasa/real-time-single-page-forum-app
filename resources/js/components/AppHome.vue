<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import AppFooter from './AppFooter'
import Login from './login/Login'
export default {
    name: 'app',
    components: {
        Toolbar,
        AppFooter,
        Login
    }
}
</script>
