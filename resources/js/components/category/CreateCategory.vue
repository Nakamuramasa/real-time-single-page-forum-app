<template>
    <v-container>
        <v-alert v-if="errors" type="error" :value="true">
            Categoryを入力してください
        </v-alert>
        <v-form @submit.prevent="submit">

            <v-text-field
            v-model="form.name"
            label="Category"
            required
            ></v-text-field>

            <v-btn
            color="teal lighten-1"
            dark
            class="mr-4"
            type="submit"
            :disabled="disabled"
            v-if="editSlug"
            >Update</v-btn>

            <v-btn
            color="secondary"
            class="mr-4"
            type="submit"
            :disabled="disabled"
            v-else
            >Create</v-btn>

        </v-form>

        <v-card class="mt-4">
            <v-toolbar color="blue lighten-2" dark>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>

                <div v-for="(category, index) in categories" :key="index">
                    <v-list-item>

                        <v-list-item-action>
                            <v-btn icon @click="edit(index)">
                                <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{category.name}}
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn icon @click="destroy(category.slug, index)">
                                <v-icon color="red accent-4">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-action>

                    </v-list-item>
                    <v-divider></v-divider>
                </div>

            </v-list>
        </v-card>

    </v-container>
</template>

<script>
export default {
    data(){
        return {
            form: {
                name: null
            },
            categories: {},
            editSlug: null,
            errors: null
        }
    },
    created(){
        if(!User.admin()){
            this.$router.push('/forum')
        }
        axios.get('/api/category')
        .then(res => this.categories = res.data.data);
    },
    computed:{
        disabled(){
            return !this.form.name
        }
    },
    methods: {
        submit(){
            this.editSlug ? this.update() : this.create();
        },
        update(){
            axios.patch(`/api/category/${this.editSlug}`, this.form)
            .then(res => {
                this.categories.unshift(res.data);
                this.form.name = null;
            });
        },
        create(){
            axios.post('/api/category', this.form)
            .then(res => {
                this.categories.unshift(res.data);
                this.form.name = null;
            })
            .catch(error => this.errors = error.response.data.errors)
        },
        edit(index){
            this.form.name = this.categories[index].name;
            this.editSlug = this.categories[index].slug;
            this.categories.splice(index, 1);
        },
        destroy(slug, index){
            axios.delete(`/api/category/${slug}`)
            .then(res => this.categories.splice(index, 1));
        }
    }
}
</script>
