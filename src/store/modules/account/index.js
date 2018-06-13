import * as cTypes from './mutation-types';
import * as types from './../mutation-types';
import account from '../../../api/account';
import { getBalance } from './../../../samples/web3Lib';

const state = {
  loading: false,
  wallet: {}
};

const mutations = {
  [cTypes.GET_WALLET] (state, data) {
    state.wallet = {
      address: data.walletAddress,
      balance: data.balance / 10000
    };
    console.log('data', data, 'state.wallet', state.wallet);
  },
  [cTypes.CREATE_WALLET] (state, data) {
    state.wallet = data;
  },
  [cTypes.DELETE_WALLET] (state) {
    state.wallet = {};
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.wallet = {};
  }
};

const actions = {
  [cTypes.GET_WALLET] ({ commit, state }) {
    if (!state.id) {
      commit(types.SET_LOADING, true);
      account.getWallet().then((data) => {
        const walletAddress = data.walletData.address;
        getBalance(walletAddress).then((balance) => {
          commit(types.SET_LOADING, false);
          commit(cTypes.GET_WALLET, { walletAddress, balance });
        });
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    }
  },
  [cTypes.CREATE_WALLET] ({ commit, state, dispatch }, address) {
    commit(types.SET_LOADING, true);
    if (!state.wallet.address) {
      account.postWallet({ address }).then((data) => {
        commit(types.SET_LOADING, false);
        commit(cTypes.CREATE_WALLET, { address });
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    } else {
      account.putWallet({ address }).then((data) => {
        commit(types.SET_LOADING, false);
        commit(cTypes.CREATE_WALLET, { address });
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    }
  },
  [cTypes.CREATE_WALLET] ({ commit, state }, address) {
    commit(types.SET_LOADING, true);
    if (!state.wallet.address) {
      account.postWallet({ address }).then((data) => {
        commit(types.SET_LOADING, false);
        commit(cTypes.CREATE_WALLET, { address });
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    } else {
      account.putWallet({ address }).then((data) => {
        commit(types.SET_LOADING, false);
        commit(cTypes.CREATE_WALLET, { address });
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    }
  },
  [cTypes.DELETE_WALLET] ({ commit, state }) {
    commit(types.SET_LOADING, true);
    account.deleteWallet({ address: state.wallet.address }).then((data) => {
      commit(types.SET_LOADING, false);
      commit(cTypes.DELETE_WALLET);
    }).catch((errorResponse) => {
      commit(types.SET_LOADING, false);
    });
  },
  [types.SET_LOADING] ({ commit }, loading) {
    commit(types.SET_LOADING, loading);
  }
};

const getters = {
  wallet: (state) => {
    return { ...state.wallet };
  },
  loading: state => state.loading
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
