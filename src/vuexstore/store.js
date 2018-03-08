import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export const store =  new Vuex.Store({
    mutations,
    actions,
    state: {
        user: null,
        isAuth: !! localStorage.getItem('token'),
        categories: null,
        category: null,
        error: null
    },

    getters: {
        user: state => state.user,

        isAuth: state => state.isAuth,

        categories: state => state.categories,

        category: state => state.category,

        error: state => state.error
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
            state.categories = null
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
        },
        AUTH_ERROR (state, payload) {
            state.error = payload
        },
        CLEAR_ERROR (state, payload) {
            state.error = null
        }
    },

    actions: {
        onLogin ({commit}, user) {
            commit ('CLEAR_ERROR')
            return new Promise ((resolve, reject) => {
                axios.post('api/login', user).then((response) => {
                    const data = {
                        'token': response.data.access_token,
                        'expiration': response.data.expires_in + Date.now()
                    }
                    if (! data.token) 
                        return 
                    else 
                        commit('IS_AUTH', data)

                        resolve(response)

                }).catch(({response}) => {
                    reject(response)
                    commit ('AUTH_ERROR', response.data.error)
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
                commit('IS_AUTH', data)
                resolve(response)

            }).catch(error => {
                reject(error)
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
            commit('CLEAR_ERROR')
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
        },
        
        clearError ({commit}) {
            commit('CLEAR_ERROR')
        }

        category: state => state.category
    }
})
