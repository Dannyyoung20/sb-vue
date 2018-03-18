<template>
    <v-layout row>
        <v-flex xs10 offset-xs1>
            <v-text-field
            v-model="search"
            name="input-1"
            label="Search for courses"
            id="testing"
            class="input-group--focused"
            :box="true"
            ></v-text-field>
        </v-flex>
    </v-layout>
    
</template>

<script>
export default {
    data () {
        return {
            search: ''
        }
    }
}
</script>
