<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
            ></v-text-field>

            <v-btn
                color="secondary"
                class="mr-4"
                type="submit"
            >
                submit
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.$http = axios;
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            }
        }
    },
    methods: {
        login(){
            axios.post('/api/auth/login', this.form)
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.data))
        }
    }
}
</script>
