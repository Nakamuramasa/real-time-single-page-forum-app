import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'
import axios from 'axios'

Vue.$http = axios;
Vue.use(Vuetify)
Vue.component('app-home', require('./components/AppHome.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});
