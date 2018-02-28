<template>
    <v-container>
        <v-layout row>
            <v-flex >
                <h2>{{ msg }}</h2>
                <p>You are logged in...</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Dashboard',
        }
    },
    
    created () {
        this.getUser()
    },
    
    methods: {
        getUser () {
            this.$store.dispatch('getUser')
        }
    }

}
</script>

<style scoped>

</style>
