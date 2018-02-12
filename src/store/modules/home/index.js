import * as types from '../mutation-types';

const state = {
  loading: false,
  data: []
};

const mutations = {
  [types.LOAD] (state, data) {
    state.data = data;
  }
};

const actions = {
  [types.LOAD] () {
  }
};

const getters = {
  data: (state) => {
    return state.data;
  },
  loading: (state) => {
    return state.loading;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
