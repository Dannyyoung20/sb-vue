import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)


const router =  new Router({
  mode: 'history',
  routes
})

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
    } else next()
  } else next()

})

export default router
