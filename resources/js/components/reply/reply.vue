<template>
    <div class="mt-4 mx-12">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2 body-2">said {{data.created_at}}</div>
            </v-card-title>
            <v-divider></v-divider>

            <edit-reply
            v-if="editing"
            :reply=data></edit-reply>

            <v-card-text v-html="reply" v-else></v-card-text>
            <v-divider></v-divider>

            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn icon @click="edit">
                        <v-icon color="grey lighten-1">mdi-pencil</v-icon>
                    </v-btn>

                    <v-btn icon @click="destroy">
                        <v-icon color="red accent-4">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
import User from '../../Helpers/User'
import EditReply from './editReply'
export default {
    props: ['data', 'index'],
    components:{
        EditReply
    },
    data(){
        return {
            editing: false
        }
    },
    computed:{
        own(){
            return User.own(this.data.user_id)
        },
        reply(){
            return md.parse(this.data.reply)
        }
    },
    created(){
        this.listen()
    },
    methods:{
        destroy(){
            EventBus.$emit('deleteReply', this.index)
        },
        edit(){
            this.editing = true
        },
        listen(){
            EventBus.$on('cancelEditing',() => {
                this.editing = false;
            })
        }
    }
}
</script>
