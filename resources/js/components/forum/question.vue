<template>
    <router-link :to="data.path">
        <v-card class="mt-4">
            <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">
                            {{data.title}}
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
    </router-link>
</template>

<script>
export default {
    props: [
        'data'
    ]
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
.headline a{
    color:black;
}
.router-link-exact-active {
  color: black;
  text-decoration: none;
}
</style>
