import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import * as mutations from './mutations';
import * as actions from './actions';
import home from './modules/home/';
import user from './modules/user/';
import rate from './modules/rate/';
import account from './modules/account/';
import errors from './modules/errors/';
import news from './modules/news/';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  modules: {
    errors,
    user,
    account,
    home,
    rate,
    news
  },
  state,
  actions,
  mutations
});

export default store;
