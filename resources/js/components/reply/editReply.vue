<template>
    <div>
        <vue-simplemde v-model="reply.reply" ref="markdownEditor" />
        <v-card-actions>
            <v-btn icon @click="update">
                <v-icon color="green accent-4">mdi-content-save</v-icon>
            </v-btn>

            <v-btn icon @click="cancel">
                <v-icon color="black">mdi-close-circle</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
    props:['reply'],
    methods:{
        update(){
            axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body:this.reply.reply})
            .then(res => this.cancel())
        },
        cancel(){
            EventBus.$emit('cancelEditing');
        }
    }
}
</script>
