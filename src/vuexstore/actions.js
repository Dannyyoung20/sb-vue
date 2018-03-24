const actions = {
    onLogin({ commit }, user) {
        commit('CLEAR_ERROR')
        return new Promise((resolve, reject) => {
            axios.post('api/login', user).then((response) => {
                const data = {
                    'token': response.data.access_token,
                    'expiration': response.data.expires_in + Date.now(),
                }
                if (!data.token)
                    return
                else
                    commit('IS_AUTH', data)
                    commit('SET_USER_ROLE', response.data.user.role_id)
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
                commit('SET_USER_ROLE', response.data.user)
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

    getCourses({commit}) {
        axios.get('api/courses').then((courses) => {
            commit('GET_COURSES', courses.data)
            console.log(courses)
        }).catch(error => {
            console.log(error)
        })
    },
    getCourse({commit}, course_id) {
        axios.get('api/courses/' + course_id).then((course) => {
            commit('GET_COURSE', course.data)
            console.log(course.data)
        }).catch(error => {
            console.log(error)
        })
    },

    clearError({ commit }) {
        commit('CLEAR_ERROR')
    },

    bookCourse({ commit, getters }, course) {
        const user_id = getters.user.data.id
        axios.post('api/course/booked', {
            course_id: course.id,
            tutor_id: course.tutor_id,
            student_id: user_id
        }).then((response) => {
            console.log('Course booked')
        }).catch(error => {
            console.log(error)
        })
    }

}

export default actions
