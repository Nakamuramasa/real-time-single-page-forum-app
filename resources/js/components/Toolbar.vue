<template>
    <v-card color="grey lighten-4" flat tile>
        <v-toolbar dense color="light-blue lighten-1" dark>
            <v-toolbar-title><strong>
                <router-link class="white--text" to="/">
                    LaraAnswers
                </router-link>
            </strong></v-toolbar-title>
            <v-spacer></v-spacer>

            <app-notification v-if="loggedIn"></app-notification>

            <div>
                <router-link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show">
                    <v-btn text>{{item.title}}</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
import AppNotification from './AppNotification'
export default {
    components:{
        AppNotification
    },
    data(){
        return {
            loggedIn: User.loggedIn(),
            items: [
                {
                    title: 'Forum',
                    to: '/forum',
                    show: true
                },
                {
                    title: 'Ask Question',
                    to: '/ask',
                    show: User.loggedIn()
                },
                {
                    title: 'Category',
                    to: '/category',
                    show: User.admin()
                },
                {
                    title: 'Login',
                    to: '/login',
                    show: !User.loggedIn()
                },
                {
                    title: 'Logout',
                    to: '/logout',
                    show: User.loggedIn()
                }
            ]
        }
    },
    created(){
        EventBus.$on('logout', () => {
            User.logout()
        })
    }
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}
.router-link-exact-active {
  color: white;
  text-decoration: none;
}
</style>
