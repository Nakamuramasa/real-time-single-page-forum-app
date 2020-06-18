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
                :disabled="disabled"
            >Login</v-btn>

            <router-link to="/signup">
                <v-btn color="blue-grey lighten-3">Register</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null,
            },
            errorstest: {}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name:'forum'})
        }
    },
    computed:{
        disabled(){
            return !(this.form.email && this.form.password)
        }
    },
    methods:{
        login(){
            User.login(this.form)
        }
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
