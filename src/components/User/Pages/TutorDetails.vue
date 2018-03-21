<template>
    <v-flex xs12 sm3>
        <v-card>
            <v-card-title>
                <div>
                    <v-layout row mb-3>
                        <v-flex sm4 xs12>
                            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y" 
                                alt="avatar" />
                        </v-flex>
                        <v-flex sm8 xs10 offset-xs2>
                            <h3>{{course.tutor.firstname}} {{course.tutor.lastname}}</h3>
                        </v-flex>
                    </v-layout>
                    
                    <h3>Bio</h3>
                    <p>{{ course.tutor.bio}}</p>

                    <h3>Contact</h3>
                    <p>{{ course.tutor.phone }}</p>
                </div>
            </v-card-title>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  props: ['course']
}
</script>
