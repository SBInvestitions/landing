import * as types from './mutation-types';

const state = {
  loading: null,
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  role: null
};

const mutations = {
  [types.LOAD] (state, data) {
    console.log('auth.user:', data);
    state.id = data.id;
    state.firstName = data.firstName;
    state.lastName = data.lastName;
    state.email = data.email;
    state.role = data.role;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
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
  [types.SET_LOADING] ({ commit }, loading) {
    commit(types.SET_LOADING, loading);
  }
};

const getters = {
  user: state => state.user,
  role: state => state.role,
  loading: state => state.loading,
  attributes: (state) => (path) => {
    const attrs = {
      readonly: false
    };
    const components = path.split('/');
    const component = components[0];

    state.rules.map((item) => {
      if (components.length > 0 && item.name === component && item.children) {
        let found = false;
        item.children.map((child) => {
          if (child.name === components[1]) {
            found = true;
            attrs.readonly = child.readonly;
            return true;
          }
        });

        if (found) return true;
      }

      if (item.name === component) {
        attrs.readonly = item.readonly;
        return true;
      }
    });
    return attrs;
  },
  ruleAvailability: (state) => (routeName, path) => {
    let check = false;
    const rules = state.rules;
    const arr = path.split('/');
    let topItem = [];

    if (routeName === 'login' || routeName === 'dashboard' || routeName === 'register') {
      check = true;

      return check;
    }

    rules.map((item) => {
      if (item.name === arr[1]) {
        if (item.children && arr[2]) topItem = item.children;
        else check = true;
        return check;
      }
    });

    if (arr.length >= 3 && arr[2].indexOf(':') < 0) {
      topItem.map((item) => {
        if (item.name === arr[2]) {
          check = true;
          return check;
        }
      });
    } else if (arr[2] && arr[2].indexOf(':') === 0) {
      const secondArr = (topItem.length) ? topItem : rules;
      secondArr.map((item) => {
        if (item.name === arr[1]) {
          check = true;
          return check;
        }
      });
    }

    return check;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
