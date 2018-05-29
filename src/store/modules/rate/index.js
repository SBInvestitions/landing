import * as types from './mutation-types';
import rate from '../../../api/rate';
import { getSBIRate } from './../../../samples/web3Lib';

const state = {
  loading: null,
  rate: {
    sbiRate: 0,
    rubRate: 0,
    ethRate: 0,
    rubCount: 1,
    ethCount: 1,
    sbiRubCount: 0,
    sbiEthCount: 0
  }
};

const mutations = {
  [types.LOAD] (state, data) {
    const rate = getters.rate(state);
    state.rate.rubRate = data.rub;
    state.rate.ethRate = data.eth;
    state.rate.sbiRate = data.rate;
    state.sbiRubCount = rate.rubCount;
    state.sbiEthCount = parseInt(rate.ethCount * Number(data.rub) * Number(data.eth));
    // console.log('state.sbiEthCount', state.sbiEthCount);
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.rubRate = 0;
    state.ethRate = 0;
    state.rubCount = 0;
    state.ethCount = 0;
    state.sbiRubCount = 0;
    state.sbiEthCount = 0;
  },
  [types.SET_SBI_RUB] (state, value) {
    const rubCount = value || getters.rate(state).rubCount;
    state.rate = { ...state.rate, sbiRubCount: rubCount };
  },
  [types.SET_SBI_ETH] (state, value) {
    const rate = getters.rate(state);
    rate.sbiEthCount = parseInt(value * Number(rate.rubRate) * Number(rate.ethRate));
    state.rate = { ...state.rate, sbiEthCount: rate.sbiEthCount };
  }
};

const actions = {
  [types.LOAD] ({ commit, state }) {
    if (!state.rate.rub || !state.rate.eth) {
      commit(types.SET_LOADING, true);
      rate.rate().then((data) => {
        getSBIRate().then((rate) => {
          commit(types.SET_LOADING, false);
          commit(types.LOAD, { ...data, rate });
        });
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
