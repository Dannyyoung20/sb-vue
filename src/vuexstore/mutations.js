const mutations = {
    SET_USER(state, payload) {
        state.user = payload
    },
    SET_USER_ROLE(state, payload) {
        var user_role
        if(payload == 3) {
          user_role = 'Admin'
        }else if(payload == 2) {
          user_role = 'Tutor'
        }else{
          user_role = 'User'
        }
        state.user_role = user_role
    },
    LOGOUT(state) {
        localStorage.removeItem('token')
        localStorage.removeItem('expiration')
        state.user = null
        state.user_role = null
        state.isAuth = false
        state.categories = null
    },
    IS_AUTH(state, payload) {
        localStorage.setItem('token', payload.token)
        localStorage.setItem('expiration', payload.expiration)
        state.isAuth = true
    },
    GET_CATEGORIES(state, payload) {
        state.categories = payload
    },

    GET_CATEGORY(state, payload) {
        state.category = payload
    },

    GET_COURSES(state, courses) {
        state.courses = courses
    },
    GET_COURSE(state, course) {
        state.course = course
    },
    AUTH_ERROR(state, payload) {
        state.error = payload
    },
    CLEAR_ERROR(state, payload) {
        state.error = null
    }
}

export default mutations
