<template>
    <v-card-actions>
        <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="400px">
            <v-btn color="primary" flat dark slot="activator">Book Course</v-btn>
            <v-card>
                <v-card-title class="headline">Proceed to confirm course</v-card-title>
                <v-card-text>
                    Dear learner, You have a period of three (3) lecture days from the start date of the course to make at least 50% of the pay. <br><br>
                    Your tutor would contact you shortly!
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat 
                        @click="$emit('bookCourse', course)" 
                        @click.native="dialog = false">
                        Confirm
                    </v-btn>
                    <v-btn color="red darken-1" flat @click.native="dialog = false">Cancel</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-layout>
    </v-card-actions>
</template>

<script>
export default {
    data () {
        return {
            dialog: false
        }
    },
    props: ['course']
}
</script>
