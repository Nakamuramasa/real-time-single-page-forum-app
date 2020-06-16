<template>
    <v-container fluid grid-list-md>
        <v-row>
            <v-flex xs7 class="mx-6">
                <question
                v-for="question in questions"
                :key="question.index"
                :data=question
                ></question>
            </v-flex>

            <v-flex xs4 class="mx-4">
                <app-sidebar></app-sidebar>
            </v-flex>

        </v-row>
    </v-container>
</template>

<script>
import question from './question'
import AppSidebar from './AppSidebar'
export default {
    components: {
        question,
        AppSidebar
    },
    data(){
        return{
            questions: {}
        }
    },
    created(){
        axios.get('/api/question')
        .then(res => this.questions = res.data.data)
        .catch(error => console.log(error.response.data))
    }
}
</script>
