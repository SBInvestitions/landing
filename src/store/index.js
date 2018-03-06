import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home/';
import user from './modules/user/';
import errors from './modules/errors/';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    errors,
    user,
    home
  }
});

export default store;
