<template>
<v-container>
    <v-slide-y-transition mode="out-in">
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card >
                    <v-card-text>
                        <v-container>
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
                                 <v-btn type="submit">Login</v-btn>
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
            name: '',
            password: '',
            nameRules: [
              v => !!v || 'Name is required',
              v => v.length <= 10 || 'Name must be less than 10 characters'
            ],
            email: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ]
        }
    },
    
    methods: {
        onLogin () {
            var data = {
                client_id: 2,
                client_secret: 'Uqzj7uKrCXxmKd7ssDnyDgAcxE8YKKN5b2t6ztag',
                grant_type: 'password',
                username: this.email,
                password: this.password
            }

            axios.post('http://localhost:8000/oauth/token', data)
            .then(response => {
                console.log(response)
            })
        }
    }
  
}
</script>
