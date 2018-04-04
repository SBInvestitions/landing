import * as types from './mutation-types';
import rate from '../../../api/rate';

const state = {
  loading: null,
  rub: null,
  eth: null,
  sbiRubCount: null,
  sbiEthCount: null
};

const mutations = {
  [types.LOAD] (state, data) {
    state.rub = data.rub;
    state.eth = data.eth;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.rub = null;
    state.eth = null;
    state.sbiRubCount = null;
    state.sbiEthCount = null;
  },
  [types.SET_SBI_RUB] (state, data) {
    console.log('data =', data);
    state.sbiRubCount = 10;
  },
  [types.SET_SBI_ETH] (state, data) {
    console.log('data =', data);
    state.sbiEthCount = 20;
  }
};

const actions = {
  [types.LOAD] ({ commit, state }) {
    if (!state.rub || !state.eth) {
      commit(types.SET_LOADING, true);
      rate.rate().then((data) => {
        commit(types.SET_LOADING, false);
        commit(types.LOAD, data);
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    }
  },
  [types.SET_LOADING] ({ commit }, loading) {
    commit(types.SET_LOADING, loading);
  }
};

const getters = {
  loading: state => state.loading,
  rub: state => state.rate ? state.rate.rub : 0,
  eth: state => state.rate ? state.rate.eth : 0,
  sbiRubCount: state => state.rate ? state.rate.sbiRubCount : 0,
  sbiEthCount: state => state.rate ? state.rate.sbiEthCount : 0
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
