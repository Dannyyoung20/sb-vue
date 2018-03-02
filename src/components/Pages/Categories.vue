<template>
    <v-container>
        <v-layout row>
            <v-flex text-sm-center text-xs-center>
                <h2>Course Categories</h2>
            </v-flex>
        </v-layout><br>
        <v-layout row wrap>
            <v-flex xs12 sm5 offset-sm1
                row v-for="category in categories" 
                :key="category.id" mb-2>
                <v-card :hover="true">
                    <v-card-media :src="category.image" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ category.title }}</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                    </v-card-title>
                    <v-card-actions text-sm-center text-xs-center>
                    <v-btn flat color="primary" :to="'/category/'+ category.id + '/courses'">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
  
</template>


<script>
export default {
    data () {
        return {

        }
    },
    computed: {
        categories () {
            return this.$store.getters.categories
        }
    },
    created () {
        this.getCategories()
    },
    methods: {
        getCategories () {
            this.$store.dispatch('getCategories')
        }
    }
  
}
</script>
