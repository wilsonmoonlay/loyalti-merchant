import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  CheckEmailPage,
} from './containers'

var routes = [
  {
    path: '/',
    name: 'HomePage',
    icon: 'ni ni-tv-2 text-primary',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'ni ni-planet text-blue',
    component: RegisterPage,
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'ni ni-pin-3 text-orange',
    component: LoginPage,
  },
  {
    path: '/reset',
    name: 'ForgotPasswordPage',
    icon: 'ni ni-single-02 text-yellow',
    component: ForgotPasswordPage,
  },
  {
    path: '/checkemail',
    name: 'CheckEmailPage',
    icon: 'ni ni-bullet-list-67 text-red',
    component: CheckEmailPage,
  },
]
export default routes
