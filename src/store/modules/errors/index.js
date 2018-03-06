import * as types from './mutation-types';
import { Notification } from 'element-ui';

const state = {
  error: {}
};

const mutations = {
  [types.ADD] (state, item) {
  },
  [types.REMOVE] (state, item) {
  }
};

const actions = {
  [types.ADD] ({ commit }, data) {
    console.error(data.title + ': ' + data.msg);
    Notification.error({
      title: data.title,
      message: data.msg,
      duration: 3000
    });
  },
  [types.REMOVE] ({ commit }, item) {
    commit(types.REMOVE, item);
  }
};

const getters = {
  [types.GET]: (state) => {
    return state.error;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
