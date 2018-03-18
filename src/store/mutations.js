import { STORAGE_KEY } from './state';

export const UPDATE_AUTH = (state, auth) => {
  state.auth = auth;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ auth: state.auth }));
};

/**
 * Clear each property, one by one, so reactivity still works.
 *
 * (ie. clear out state.auth.isLoggedIn so Navbar component automatically reacts to logged out state,
 * and the Navbar menu adjusts accordingly)
 *
 * TODO: use a common import of default state to reset these values with.
 */
export const CLEAR_ALL_DATA = (state) => {
  // Auth
  state.auth.isLoggedIn = false;
  state.auth.accessToken = null;
  state.auth.refreshToken = null;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('vuex');
};

export const SET_LOADING = (state, loading) => {
  state.loading = loading;
};

export const CHANGE_TIMEZONE = (state, timezone) => {
  state.timezone = timezone;
};

export const SET_PATH = (state, path) => {
  state.path = path;
};
