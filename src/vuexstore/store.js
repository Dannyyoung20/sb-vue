import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
    state: {
        user: null,
        isAuth: !! localStorage.getItem('token'),
        categories: null,
        category: null
    },

    getters: {
        user: state => state.user,

        isAuth: state => state.isAuth,
        
        categories: state => state.categories,

        category: state => state.category
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
        },
        GET_CATEGORIES (state,payload) {
            state.categories = payload
        },
        
        GET_CATEGORY(state, payload) {
            state.category = payload
        }
    },

    actions: {
        onLogin ({commit}, user) {
            return new Promise ((resolve, reject) => {
                axios.post('oauth/token', user).then((response) => {
                    const data = {
                        'token': response.data.access_token,
                        'expiration': response.data.expires_in + Date.now()
                    }
                    // console.log(response)
                    commit('IS_AUTH', data)
                    resolve()

                }).catch(error => {
                    reject()
                    commit ('IS_AUTH', false)
                })
            })
        },

        onSignup ({commit}, user) {
          return new Promise ((resolve, reject) => {
            axios.post('/api/register', user).then((response) => {
              const data = {
                'token': response.data.access_token,
                'expiration': response.data.expires_in + Date.now()
            }
                // console.log(response)
                commit('IS_AUTH', data)
                resolve()
            }).catch(error => {
                reject()
                commit('IS_AUTH', false)
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
        },

        getCategories ({commit}) {
            axios.get('api/categories').then(categories => {
                commit('GET_CATEGORIES', categories.data)
                console.log(categories.data)
            }).catch(error => {
                console.log(error)
            })
        },

        getCategory({ commit }, id) {
            axios.get('api/categories/' + id + '/courses').then(category => {
                commit('GET_CATEGORY', category.data)
                console.log(category.data)
            }).catch(error => {
                console.log(error)
            })
        }

    }
})
