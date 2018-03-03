<template>
    <v-container>
        <v-layout row>
            <v-flex text-sm-center text-xs-center>
                <h1>{{ msg }}</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs10 offset-xs1>
                <v-text-field
                name="input-1"
                label="Search for courses"
                id="testing"
                class="input-group--focused"                
                :box="true"
                ></v-text-field>
            </v-flex>
        </v-layout>

        <categories></categories>

    </v-container>
</template>

<script>
import Categories from '@/components/Pages/Categories'

export default {
    components: { Categories },
    data () {
        return {
            msg: 'What would you like to learn today?',
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
