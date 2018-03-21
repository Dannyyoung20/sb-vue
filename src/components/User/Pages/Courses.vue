<template>
    <v-container>
        <v-layout row>
            <v-flex text-sm-center text-xs-center>
                <h2>All Courses</h2>
            </v-flex>
        </v-layout><br>
        <v-layout row wrap>
            <v-flex xs12 sm5 offset-sm1
                row v-for="course in courses" 
                :key="course.id" mb-2>
                <v-card :hover="true">
                    <v-card-media :src="course.image" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ course.title }}</h3>
                        <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
                    </div>
                    </v-card-title>
                    <v-card-actions text-sm-center text-xs-center>
                    <v-btn flat color="primary" :to="'course/'+ course.id">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

        </v-layout>
    </v-container>
  
</template>


<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'courses'
        ])
    },
    created () {
        this.getCourses()
    },
    methods: {
        getCourses () {
            this.$store.dispatch('getCourses')
        }
    }
  
}
</script>
