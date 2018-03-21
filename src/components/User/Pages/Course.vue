<template>
    <v-container v-if="course">
        <v-layout row>
            <v-flex text-sm-center text-xs-center>
                <h2> Course Title: {{ course.title }}</h2>
            </v-flex>
        </v-layout><br>
        <v-layout row wrap mb-4>
            <v-flex xs12 sm8 mr-5>
                <v-card :hover="true">
                    <v-card-media :src="course.image" height="300px"></v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ course.title }}</h3>
                        </div>
                            <v-spacer></v-spacer>
                        <div>
                            <h3 class="price">#15k</h3>
                        </div>
                        <div>{{ course.description }} </div>
                    </v-card-title>
                    <v-divider></v-divider>

                    <!-- Dialog Layout-->
                        <confirm-dialog :course="course" @bookCourse="bookCourse" />
                    <!-- Dialog -->
                </v-card>
            </v-flex>

            <!-- Tutor details-->
                <tutor-details :course="course" />               
            <!-- Tutor details-->

        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ConfirmDialog from '@/components/User/Pages/ConfirmDialog'
import TutorDetails from '@/components/User/Pages/TutorDetails'

export default {
    components: { ConfirmDialog, TutorDetails },
    
    props:['course_id'],

    created () {
        this.getCourse()
    },

    computed: {
        ...mapGetters([
            'course'
        ])
    },

    methods: {
        getCourse () {
            this.$store.dispatch('getCourse', this.course_id)
        },
        bookCourse (course) {
            this.$store.dispatch('bookCourse', course)
        } 
    } 
}
</script>

<style scoped>
.price {
    color:white;
    background: rgb(29, 28, 28);
    padding: 5px;
}
</style>

