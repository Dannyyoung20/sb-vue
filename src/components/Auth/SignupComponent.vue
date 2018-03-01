<template>
    <v-container>
        <v-slide-y-transition mode="out-in">
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card >
                        <v-card-text>
                            <v-container>
                                <v-layout>
                                    <v-flex text-sm-center text-xs-center>
                                        <p>Already have an account,
                                            <router-link to="/login">login </router-link>
                                            here
                                        </p>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex>
                                        <h1>Signup</h1>
                                    </v-flex>
                                </v-layout>
                                <v-form v-model="valid" @submit.prevent="onSignup">
                                    <v-text-field
                                    label="Firstname"
                                    type="text"
                                    :rules="nameRules"
                                    v-model="firstname"
                                    required
                                    ></v-text-field>
                                    <v-text-field
                                    label="Lastname"
                                    type="text"
                                    :rules="nameRules"
                                    v-model="lastname"
                                    required
                                    ></v-text-field>

                                    <v-text-field
                                    label="E-mail"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                                    required
                                    ></v-text-field>

                                    <v-text-field
                                    label="Password"
                                    type="password"
                                    v-model="password"
                                    required
                                    ></v-text-field>
                                    <v-btn type="submit" color="primary">Signup</v-btn>
                                </v-form>
                            </v-container>
                        </v-card-text>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </v-container>

</template>

<script>
export default {
    data () {
        return {
            valid: false,
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            nameRules: [
              v => !!v || 'Name is required'
            ],
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }
    },

    methods: {
        onSignup () {
            const data = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            }
            /* Dispatch an action to the store */
            this.$store.dispatch('onSignup', data).then(res => {
                this.$router.push('/dashboard')
            })
        }
    }

}
</script>
