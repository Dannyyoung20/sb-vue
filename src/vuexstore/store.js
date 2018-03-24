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
        courses: null,
        course: null,
        error: null,
        user_role: null
    },

    getters: {
        user: state => state.user,

        isAuth: state => state.isAuth,

        categories: state => state.categories,

        courses: state => state.courses,

        course: state => state.course,

        category: state => state.category,

        error: state => state.error,

        user_role: state => state.user_role
    },
})
