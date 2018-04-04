import * as types from './mutation-types';
import rate from '../../../api/rate';

const state = {
  loading: null,
  rate: {
    rub: 1,
    eth: 1
  },
  sbiRubCount: null,
  sbiEthCount: null
};

const mutations = {
  [types.LOAD] (state, data) {
    state.rate.rub = data.rub;
    state.rate.eth = data.eth;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.rate.rub = null;
    state.rate.eth = null;
    state.sbiRubCount = null;
    state.sbiEthCount = null;
  },
  [types.SET_SBI_RUB] (state) {
    state.sbiRubCount = 10;
  },
  [types.SET_SBI_ETH] (state) {
    state.sbiEthCount = 20;
  }
};

const actions = {
  [types.LOAD] ({ commit, state }) {
    if (!state.rate.rub || !state.rate.eth) {
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
  },
  [types.SET_SBI_RUB] ({ commit }) {
    commit(types.SET_SBI_RUB);
  },
  [types.SET_SBI_ETH] ({ commit }) {
    commit(types.SET_SBI_ETH);
  }
};

const getters = {
  loading: state => state.loading,
  rate: (state) => {
    return { ...state.rate };
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
