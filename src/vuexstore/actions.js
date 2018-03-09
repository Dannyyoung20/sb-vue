const actions = {
    onLogin({ commit }, user) {
        commit('CLEAR_ERROR')
        return new Promise((resolve, reject) => {
            axios.post('api/login', user).then((response) => {
                const data = {
                    'token': response.data.access_token,
                    'expiration': response.data.expires_in + Date.now()
                }
                if (!data.token)
                    return
                else
                    commit('IS_AUTH', data)

                resolve(response)

            }).catch(({ response }) => {
                reject(response)
                commit('AUTH_ERROR', response.data.error)
            })
        })
    },

    onSignup({ commit }, user) {
        return new Promise((resolve, reject) => {
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

    getUser({ commit }) {
        axios.get('api/user').then(response => {
            commit('SET_USER', null)
            commit('SET_USER', response.data)
            console.log(response.data)

        }).catch(error => {
            commit('SET_USER', null)
            console.log(error)
        })
    },

    logout({ commit }) {
        commit('LOGOUT')
        commit('CLEAR_ERROR')
    },

    getCategories({ commit }) {
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

    clearError({ commit }) {
        commit('CLEAR_ERROR')
    }

}

export default actions
