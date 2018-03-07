export const actions = {

  onLogin ({commit}, user) {
      return new Promise ((resolve, reject) => {
          axios.post('oauth/token', user).then((response) => {
            console.log(response);
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
