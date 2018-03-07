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
        category: null
    },

    getters: {
        user: state => state.user,

        isAuth: state => state.isAuth,

        categories: state => state.categories,

        category: state => state.category
    }
})
