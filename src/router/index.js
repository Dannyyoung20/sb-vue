import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)


const router =  new Router({
  mode: 'history',
  routes
})

const role = window.localStorage.getItem('user_role')

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.forVisitors)) {

    if (Auth.isAuthenticated()) {
      next({
        path: '/home                                                                                                                                                                                                                                                                                                                                                                                                                                  '
      })

    } else next()
  }

  else if (to.matched.some(record => record.meta.forAuth)) {
    if (! Auth.isAuthenticated()) {
      next({
        path: '/login'
      })
    }else if(to.matched.some(record => record.meta.forUser)){
      if(role == 'User') {
        next()
      } else if(role == 'Admin') {
        next({name: 'AdminDashboard'})
      }else if(role == 'Tutor') {
        next({name: 'TutorDashboard'})
      }
    }else if(to.matched.some(record => record.meta.forTutor)){
      if(role == 'Tutor') {
        next()
      } else if(role == 'Admin') {
        next({name: 'AdminDashboard'})
      }else if(role == 'User') {
        next({name: 'Dashboard'})
      }
    } else if(to.matched.some(record => record.meta.forAdmin)){
      if(role == 'Admin') {
        next()
      } else if(role == 'User') {
        next({name: 'Dashboard'})
      }else if(role == 'Tutor') {
        next({name: 'TutorDashboard'})
      }
    }else next()
  } else next()

})

export default router
