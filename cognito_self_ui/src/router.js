import Vue from 'vue';
import Router from 'vue-router';

import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';
import SignOut from './views/SignOut.vue';
import Sorry from './views/Sorry.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/pages/signin.html',
      name: 'signin',
      props: true,
      component: SignIn,
    },
    {
      path: '/pages/signup.html',
      name: 'signup',
      props: true,
      component: SignUp,
    },
    {
      path: '/pages/signout.html',
      name: 'signout',
      component: SignOut,
    },
    {
      path: '*',
      name: 'sorry',
      component: Sorry,
    }
  ],
});
