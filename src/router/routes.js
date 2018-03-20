import Home from '@/components/Home'
import Login from '@/components/Auth/LoginComponent'
import Signup from '@/components/Auth/SignupComponent'
import Dashboard from '@/components/Pages/Dashboard'
import Category from '@/components/Pages/CategoryCourses'

// Routes

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/home',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      forAuth: true
    }
  },
  {
    path: '/category/:id/courses',
    name: 'Category',
    component: Category,
    props:true,
    meta: {
      forAuth: true
    }
  },
];


