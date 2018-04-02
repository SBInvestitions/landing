import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import * as mutations from './mutations';
import home from './modules/home/';
import user from './modules/user/';
import account from './modules/account/';
import errors from './modules/errors/';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    errors,
    user,
    account,
    home
  },
  state,
  mutations
});

export default store;
