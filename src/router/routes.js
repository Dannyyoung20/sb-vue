import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Auth/LoginComponent'
import Signup from '@/components/Auth/SignupComponent'
import Dashboard from '@/components/Pages/Dashboard'

// Routes

export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      forVisitors: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      forAuth: true
    }
  }
];


