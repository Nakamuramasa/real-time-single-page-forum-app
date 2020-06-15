<template>
    <v-container fluid>
        <v-card>
            <v-form @submit.prevent="update">

                <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                ></v-text-field>

                <vue-simplemde v-model="form.body" ref="markdownEditor" />

                <v-card-actions>
                    <v-btn icon large type="submit">
                        <v-icon color="green accent-4">mdi-content-save</v-icon>
                    </v-btn>

                    <v-btn icon large @click="cancel">
                        <v-icon color="black">mdi-close-circle</v-icon>
                    </v-btn>
                </v-card-actions>

            </v-form>
        </v-card>
    </v-container>
</template>

<script>
export default {
    props: ['data'],
    data(){
        return {
            form: {
                title: null,
                body: null
            }
        }
    },
    created(){
        this.form = this.data
    },
    methods: {
        cancel(){
            EventBus.$emit('cancelEditing')
        },
        update(){
            axios.patch(`/api/question/${this.form.slug}`, this.form)
            .then(res => this.cancel())
        }
    }
}
</script>
