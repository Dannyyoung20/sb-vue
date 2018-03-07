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
                                        <p>Create an account, ITS FREE
                                            <router-link to="/signup">here</router-link>
                                        </p>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex>
                                        <h1>Login</h1>
                                    </v-flex>
                                </v-layout>
                                <v-form v-model="valid" @submit.prevent="onLogin">
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
                                    <v-btn type="submit" color="primary" >Login</v-btn>
                                </v-form>
                                <br>

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
            email: '',
            password: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }
    },

    methods: {
        onLogin () {
            var data = {
                client_id: 4,
                client_secret: 'SuTqPNkpQaWyVy9zFLQux9tDY2dZBR2JahZwFY6E',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }

            this.$store.dispatch('onLogin', data).then(res => {
                this.$router.push('/home')
            })
        }
    }

}
</script>
