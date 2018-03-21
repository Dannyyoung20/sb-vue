<template>
    <v-container>
        <v-layout row>
            <v-flex text-sm-center text-xs-center>
                <h1>{{ msg }}</h1>
            </v-flex>
        </v-layout>

        <course-search></course-search>

        <courses></courses>

    </v-container>
</template>

<script>
import Courses from '@/components/User/Pages/Courses'
import CourseSearch from '@/components/User/Pages/CourseSearch'

export default {
    components: { Courses, CourseSearch },
    data () {
        return {
          msg: 'What would you like to learn today?',
        }
    }
}
</script>

<style scoped>

</style>
