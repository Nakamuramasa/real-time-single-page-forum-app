import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'

Vue.use(Vuetify)
Vue.component('app-home', require('./components/AppHome.vue').default);

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});
