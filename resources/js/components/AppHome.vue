<template>
    <div>
        <toolbar></toolbar>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import AppFooter from './AppFooter'

export default {
    name: 'app',
    components: {
        Toolbar,
        AppFooter
    }
}
</script>
