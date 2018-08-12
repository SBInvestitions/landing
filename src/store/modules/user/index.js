import * as types from './mutation-types';
import users from '../../../api/users';

const state = {
  loading: null,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  role: null,
  confirmation: null
};

const mutations = {
  [types.LOAD] (state, data) {
    state.id = data._id;
    state.firstName = data.name;
    state.lastName = data.secondName;
    state.email = data.email;
    state.role = data.role;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CONFIRMED] (state, status) {
    state.confirmation = status;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.id = null;
    state.email = null;
    state.firstName = null;
    state.lastName = null;
    state.role = null;
  }

};

const actions = {
  [types.LOAD] ({ commit, state }) {
    if (!state.id) {
      commit(types.SET_LOADING, true);
      users.user().then((data) => {
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
  [types.CLEAR_ALL_DATA] ({ commit }) {
    commit(types.CLEAR_ALL_DATA);
  },
  [types.CONFIRM] ({ commit }, token) {
    commit(types.SET_LOADING, true);
    users.confirm(token).then(() => {
      commit(types.SET_LOADING, false);
      commit(types.CONFIRMED, 'success');
    }).catch(() => {
      commit(types.SET_LOADING, false);
      commit(types.CONFIRMED, 'error');
    });
  }
};

const getters = {
  user: state => {
    return {
      firstName: state.firstName,
      lastName: state.lastName,
      id: state.id,
      email: state.email,
      role: state.role
    };
  },
  confirmation: state => state.confirmation,
  role: state => state.role,
  loading: state => state.loading
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
