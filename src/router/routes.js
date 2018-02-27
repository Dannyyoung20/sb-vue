import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Auth/LoginComponent'

// Routes

export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];
