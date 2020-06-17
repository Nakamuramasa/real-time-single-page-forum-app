<template>
    <div class="mx-12">

        <vue-simplemde v-model="body" ref="markdownEditor" class="mt-4" />

        <v-btn color="green accent-3" class="mb-6" dark @click="submit">
            Reply
        </v-btn>

    </div>
</template>

<script>
export default {
    props: ['questionSlug'],
    data(){
        return {
            body: null
        }
    },
    methods:{
        submit(){
            axios.post(`/api/question/${this.questionSlug}/reply`, {body:this.body})
            .then(res => {
                this.body = ''
                EventBus.$emit('newReply', res.data.reply)
                window.scrollTo(0,0)
            })
        }
    }
}
</script>
