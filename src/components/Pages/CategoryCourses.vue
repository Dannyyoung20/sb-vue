<template>
<v-container>
    <v-layout row>
        <v-flex text-sm-center text-xs-center>
            <h2>Courses </h2>
        </v-flex>
    </v-layout><br>
    <v-layout row wrap>
        <v-flex xs12 sm6
            row v-for="cat in category" 
            :key="cat.id">
            <v-card :hover="true">
                <v-card-media :src="cat.image" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ cat.title }}</h3>
                    <div>{{ cat.description || max_length }}</div>
                </div>
                </v-card-title>
                <v-card-actions>
                <v-btn flat color="primary">Preview Course</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
  
</template>


<script>
export default {
    props:['id'],

    created () {
        this.getCategory()
    },
    computed: {
        category () {
            return this.$store.getters.category
        }
    },

    methods: {
        getCategory () {
            this.$store.dispatch('getCategory', this.id)
        }
    }

  
}
</script>

