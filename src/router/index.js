import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
      path: '/confirm',
      name: 'confirm',
      component: function (resolve) {
        require(['@/components/confirm/Confirm.vue'], resolve);
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
      path: '/news',
      name: 'news',
      component: function (resolve) {
        require(['@/components/News/News.vue'], resolve);
      }
    },
    {
      path: '/news/:id',
      name: 'article',
      component: function (resolve) {
        require(['@/components/News/Article.vue'], resolve);
      }
    },
    {
      path: '/account',
      name: 'account',
      beforeEnter: guardRoute,
      component: function (resolve) {
        require(['@/components/Account/Account.vue'], resolve);
      }
    },
    { path: '*',
      component: function (resolve) {
        require(['@/components/NotFound/NotFound.vue'], resolve);
      }
    }
  ]
});

function guardRoute (to, from, next) {
  // work-around to get to the Vuex store (as of Vue 2.0)
  const auth = router.app.$options.store.state.auth;
  if (!auth.isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

export default router;
