<template>
    <v-card>
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">
                    <router-link :to="data.path">
                        {{ data.title}}
                    </router-link>
                </h3>
                <p class="body-2 grey--text">
                    {{data.user}} said {{data.created_at}}
                </p>
            </div>
        </v-card-title>
        <v-card-text class="subtitle-1">
            {{data.body}}
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: [
        'data'
    ]
}
</script>
