require('./bootstrap');
import Vue from 'vue'
import Vuetify from 'vuetify'
import router from './Router/router.js'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'
import md from 'marked'
import axios from 'axios'
import User from './Helpers/User'
import Exception from './Helpers/Exception'

Vue.use(Vuetify)
Vue.component('app-home', require('./components/AppHome.vue').default);
Vue.component('vue-simplemde', VueSimplemde)

window.axios = axios;
window.md = md;
window.User = User;
window.Exception = Exception;
window.EventBus = new Vue();

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});
