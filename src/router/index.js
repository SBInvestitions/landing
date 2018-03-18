import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: function (resolve) {
        require(['@/components/Login/Login.vue'], resolve);
      }
    },
    {
      path: '/register',
      name: 'register',
      component: function (resolve) {
        require(['@/components/register/Register.vue'], resolve);
      }
    },
    {
      path: '/',
      name: 'home',
      component: function (resolve) {
        require(['@/components/Home/Home.vue'], resolve);
      }
    },
    {
      path: '/account',
      name: 'account',
      component: function (resolve) {
        require(['@/components/Home/Home.vue'], resolve);
      }
    }
  ]
});

export default router;
