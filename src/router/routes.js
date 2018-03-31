import Home from '@/components/User/Pages/Home'
import Login from '@/components/User/Auth/LoginComponent'
import Signup from '@/components/User/Auth/SignupComponent'
import Dashboard from '@/components/User/Pages/Dashboard'
import Category from '@/components/User/Pages/CategoryCourses'
import Courses from '@/components/User/Pages/Courses'
import Course from '@/components/User/Pages/Course'
import Tutor from '@/components/Tutor/Pages/Tutor'
import TutorLogin from '@/components/Tutor/Auth/TutorLogin'

// Meta Auth Imports
import { AuthAdmin,
         AuthTutor,
         AuthVisitors,
         AuthUser
        } from './auth'

// Routes

export default [
  // General Routes Stars Here
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: AuthVisitors
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: AuthVisitors
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: AuthVisitors
  },
  // General Routes Ends Here

  // Users Routes Starts Here
  {
    path: '/home',
    name: 'Dashboard',
    component: Dashboard,
    meta: AuthUser
  },
  {
    path: '/category/:id/courses',
    name: 'Category',
    component: Category,
    props:true,
    meta: AuthUser
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: AuthUser
  },
  {
    path: '/course/:course_id',
    name: 'Course',
    props: true,
    component: Course,
    meta: AuthUser
    // Users Rroutes Ends Here
  },

  /**
   * Tutors Routes Begins Here
   */
  {
    path: '/login/tutor',
    name: 'TutorLogin',
    component: TutorLogin,
    meta: AuthVisitors
  },
  {
    path: '/tutor',
    name: 'TutorDashboard',
    component: Tutor,
    meta: AuthTutor
  },
  {
    path: '/tutor/settings',
    name: 'TutorSettingsDashboard',
    component: Tutor,
    meta: AuthAdmin
  },




  /**
   * Admin Routes Begins Here
   */

  {
    path: '/tutor',
    name: 'AdminDashboard',
    component: Tutor,
    meta: AuthAdmin
  }
];


