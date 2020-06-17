<template>
    <v-card>
        <v-container fluid>

            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">
                        {{ data.title}}
                    </h3>
                    <p class="body-2 grey--text">
                        {{data.user}} said {{data.created_at}}
                    </p>
                </div>
                <v-spacer></v-spacer>
                <v-btn color="light-blue darken-2" dark>{{data.reply_count}} Replies</v-btn>
            </v-card-title>

            <v-card-text class="subtitle-1" v-html="body"></v-card-text>
            <v-card-actions v-if="own">

                <v-btn icon large @click="edit">
                    <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                </v-btn>

                <v-btn icon large @click="destroy">
                    <v-icon color="red accent-4">mdi-delete</v-icon>
                </v-btn>

            </v-card-actions>
        </v-container>
    </v-card>
</template>

<script>
import User from '../../Helpers/User'
export default {
    props: ['data'],
    data(){
        return {
            own : User.own(this.data.user_id)
        }
    },
    computed: {
        body(){
            return md.parse(this.data.body)
        }
    },
    methods: {
        destroy(){
            axios.delete(`/api/question/${this.data.slug}`)
            .then(res => this.$router.push('/forum'))
            .catch(error => console.log(error.response.data))
        },
        edit(){
            EventBus.$emit('startEditing')
        }
    }
}
</script>
