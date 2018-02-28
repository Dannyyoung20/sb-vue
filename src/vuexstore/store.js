import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
    state: {
        user: null,
        isAuth: !! localStorage.getItem('token')
    },

    getters: {
        user: state => state.user,

        isAuth: state => state.isAuth

    },

    mutations: {
        SET_USER (state, payload) {
            state.user = payload
        },

        LOGOUT (state) {
            localStorage.removeItem('token')
            localStorage.removeItem('expiration')
            state.user = null
            state.isAuth = false
        },

        IS_AUTH (state, payload) {
            localStorage.setItem('token', payload.token)
            localStorage.setItem('expiration', payload.expiration)
            state.isAuth = true
        }
    },

    actions: {
        onLogin ({commit}, payload) {
            return new Promise ((resolve, reject) => {
                axios.post('oauth/token', payload).then((response) => {
                    const data = {
                        'token': response.data.access_token,
                        'expiration': response.data.expires_in + Date.now()
                    }
                    commit('IS_AUTH', data)
                    resolve()
                 
                }).catch(error => {
                    reject()
                    commit ('IS_AUTH', false)
                    console.log(error)
                })
            })
        },
        
        getUser ({commit}) {
            axios.get('api/user').then(response => {
                commit('SET_USER', null)
                commit('SET_USER', response.data)
                console.log(response.data)

            }).catch(error => {
                commit ('SET_USER', null)
                console.log(error)
            })
        },

        logout ({commit}) {
            commit('LOGOUT')
        }

    }
})