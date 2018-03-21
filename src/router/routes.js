import Home from '@/components/User/Pages/Home'
import Login from '@/components/User/Auth/LoginComponent'
import Signup from '@/components/User/Auth/SignupComponent'
import Dashboard from '@/components/User/Pages/Dashboard'
import Category from '@/components/User/Pages/CategoryCourses'
import Courses from '@/components/User/Pages/Courses'
import Course from '@/components/User/Pages/Course'

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
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: {
      forAuth: true
    }
  },
  {
    path: '/course/:course_id',
    name: 'Course',
    props: true,
    component: Course,
    meta: {
      forAuth: true
    }
  },
];


