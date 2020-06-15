<template>
    <v-container fluid grid-list-md>
        <v-row>
            <v-flex xs8>
                <question
                v-for="question in questions"
                :key="question.index"
                :data=question
                ></question>
            </v-flex>
            sidebar
        </v-row>
    </v-container>
</template>

<script>
import question from './question'
export default {
    data(){
        return{
            questions: {}
        }
    },
    components: {
        question
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>
