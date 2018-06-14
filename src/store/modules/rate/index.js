import * as types from './mutation-types';
import rate from '../../../api/rate';
import { getSBIRate } from './../../../samples/web3Lib';

const state = {
  loading: null,
  rate: {
    sbiRate: 0,
    sbiPreRate: 0,
    rubRate: 0,
    ethRate: 0,
    rubCount: 0,
    ethCount: 0,
    sbiRubCount: 0,
    sbiEthCount: 0
  }
};

const mutations = {
  [types.LOAD] (state, data) {
    // const rate = getters.rate(state);
    state.rate.rubRate = data.rub;
    state.rate.ethRate = data.eth;
    state.rate.sbiPreRate = data.rate.preicoTokenRate; // icoTokenRate
    state.rate.sbiRate = data.rate.icoTokenRate; // icoTokenRate
    // rubCount / data.rub = dollarCount, sbiCount = dollarCount / 0.02
    // state.sbiRubCount =  data.rub; // * data.eth * data.rate.preicoTokenRate;// parseInt(rate.rubCount / (Number(data.rub) * 0.02));
    // ethCount * data.eth = dollarCount, sbiEthCount = dollarCount / 0.02
    // state.sbiEthCount = parseInt(rate.ethCount * (Number(data.eth) / 0.02));
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
    const rate = getters.rate(state);
    state.rate.sbiRubCount = parseInt((value * Number(rate.sbiPreRate)) / (Number(rate.rubRate) * Number(rate.ethRate)));// value || getters.rate(state).rubCount;
    state.rate.sbiEthCount = 0;
  },
  [types.SET_SBI_ETH] (state, value) {
    const rate = getters.rate(state);
    state.rate.sbiEthCount = parseInt(value * (Number(rate.sbiPreRate)));
    state.rate.sbiRubCount = 0;
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
