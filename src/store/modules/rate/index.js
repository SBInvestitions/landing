import * as types from './mutation-types';
import rate from '../../../api/rate';

const state = {
  loading: null,
  rate: {
    rubRate: null,
    ethRate: null,
    rubCount: 1,
    ethCount: 1,
    sbiRubCount: null,
    sbiEthCount: null
  }
};

const mutations = {
  [types.LOAD] (state, data) {
    state.rate.rubRate = data.rub;
    state.rate.ethRate = data.eth;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.rubRate = null;
    state.ethRate = null;
    state.rubCount = null;
    state.ethCount = null;
    state.sbiRubCount = null;
    state.sbiEthCount = null;
  },
  [types.SET_SBI_RUB] (state, value) {
    const rubCount = value || getters.rate(state).rubCount;
    state.rate = { ...state.rate, sbiRubCount: rubCount };
  },
  [types.SET_SBI_ETH] (state, value) {
    const rate = getters.rate(state);
    const ethCount = value * Number(rate.rubRate) * Number(rate.ethRate);
    console.log('ethCount', ethCount);
    state.rate = { ...state.rate, sbiEthCount: ethCount };
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
  },
  [types.SET_SBI_RUB] ({ commit }, value) {
    commit(types.SET_SBI_RUB, value);
  },
  [types.SET_SBI_ETH] ({ commit }, value) {
    commit(types.SET_SBI_ETH, value);
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
