import Vue from 'vue';
import router from './../router';
import store from './../store';
import { API_PATH } from './../config';
import { i18n } from './../main';

/**
 * @var{string} LOGIN_URL The endpoint for logging in. This endpoint should be proxied by Webpack dev server
 *    and maybe nginx in production (cleaner calls and avoids CORS issues).
 */
const LOGIN_URL = API_PATH + '/v1/login';
const REGISTER_URL = API_PATH + '/v1/register';
const RESTORE_URL = API_PATH + '/v1/restore';

/**
 * @var{string} REFRESH_TOKEN_URL The endpoint for refreshing an access_token. This endpoint should be proxied
 *    by Webpack dev server and maybe nginx in production (cleaner calls and avoids CORS issues).
 */
const REFRESH_TOKEN_URL = '/auth';

/**
 * TODO: This is here to demonstrate what an OAuth server will want. Ultimately you don't want to
 * expose a client_secret here. You want your real project backend to take a username/password
 * request and add the client secret on the server-side and forward that request
 * onto an OAuth server. Your backend acts as a middle-man in the process, which is better, for
 * example in situations like DDoS attacks.
 *
 * @var{Object} AUTH_BASIC_HEADERS The options to pass into a Vue-resource http call. Includes
 *    the headers used for login and token refresh and emulateJSON flag since we are hitting an
 *    OAuth server directly that can't handle application/json.
 */
const AUTH_BASIC_HEADERS = {
  headers: {
    // 'Authorization': 'Bearer ' // Base64(client_id:client_secret) "demoapp:demopass"
  },
  emulateJSON: true
};

/**
* Auth Plugin
*
* (see https://vuejs.org/v2/guide/plugins.html for more info on Vue.js plugins)
*
* Handles login and token authentication using OAuth2.
*/
export default {
  /**
   * Login
   *
   * @param {Object.<string>} creds The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  login (creds, redirect) {
    const params = { 'email': creds.email, 'password': creds.password };
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.post(LOGIN_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        this._storeToken(response);

        if (redirect) {
          router.push({ name: redirect });
        }
        store.dispatch('user/SET_LOADING', false);
        return response;
      })
      .catch((errorResponse) => {
        const title = i18n.locale === 'en' ? 'Log in' : 'Авторизация';
        store.dispatch('user/SET_LOADING', false);
        store.dispatch('errors/add', { title: title, msg: errorResponse.body.message });
        return errorResponse;
      });
  },

  /**
   * Register
   *
   * @param {Object.<string>} creds The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  register (creds, redirect) {
    const params = { 'email': creds.email, 'password': creds.pass, 'name': creds.name, 'secondName': creds.secondName };
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.post(REGISTER_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        this._storeToken(response);

        if (redirect) {
          router.push({ name: redirect });
        }
        store.dispatch('user/SET_LOADING', false);
        return response;
      })
      .catch((errorResponse) => {
        const title = i18n.locale === 'en' ? 'User not created' : 'Пользователь не создан';
        store.dispatch('user/SET_LOADING', false);
        store.dispatch('errors/add', { title: title, msg: errorResponse.body.message });
        return errorResponse;
      });
  },

  /**
   * Restore
   *
   * @param {Object.<string>} emailToRestore The email to restore.
   * @return {Promise}
   */

  restore (emailToRestore) {
    const params = {'email': emailToRestore};
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.post(RESTORE_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        router.push({name: '/'});
        store.dispatch('user/SET_LOADING', false);
        return response;
      })
      .catch((errorResponse) => {
        const title = i18n.locale === 'en' ? 'We sent restore link to your email address' : 'На указанную вами почту отправлена ссылка для восстановления пароля';
        store.dispatch('user/SET_LOADING', false);
        store.dispatch('errors/add', {title: title, msg: errorResponse.body.message});
        return errorResponse;
      });
  },

  /**
   * Logout
   *
   * Clear all data in our Vuex store (which resets logged-in status) and redirect back
   * to login form.
   *
   * @return {void}
   */
  logout () {
    store.dispatch('CLEAR_ALL_DATA');
    router.push({ name: 'login' });
  },

  /**
   * Refresh the access token
   *
   * Make an ajax call to the OAuth2 server to refresh the access token (using our refresh token).
   *
   * @private
   * @param {Request} request Vue-resource Request instance, the original request that we'll retry.
   * @return {Promise}
   */
  _refreshToken (request) {
    const params = { 'grant_type': 'refresh_token', 'refresh_token': store.state.auth.refreshToken };

    return Vue.http.post(REFRESH_TOKEN_URL, params, AUTH_BASIC_HEADERS)
      .then((result) => {
        this._storeToken(result);
        return this._retry(request);
      })
      .catch((errorResponse) => {
        if (this._isInvalidToken(errorResponse)) {
          this.logout();
        }
        return errorResponse;
      });
  },

  /**
   * Store tokens
   *
   * Update the Vuex store with the access/refresh tokens received from the response from
   * the Oauth2 server.
   *
   * @private
   * @param {Response} response Vue-resource Response instance from an OAuth2 server.
   *      that contains our tokens.
   * @return {void}
   */
  _storeToken (response) {
    const auth = {};
    let user = null;

    auth.isLoggedIn = true;
    auth.accessToken = response.body.token;
    auth.refreshToken = response.body.refresh_token;
    user = response.body.user;
    // TODO: get user's name from response from server.

    store.commit('UPDATE_AUTH', auth);
    store.commit('user/LOAD', user);
  },

  updateToken (token) {
    const auth = {};

    auth.isLoggedIn = true;
    auth.accessToken = token;

    store.commit('UPDATE_AUTH', auth);
  },

  /**
   * Check if the Vue-resource Response is an invalid token response.
   *
   * @private
   * @param {Response} response The Vue-resource Response instance received from an http call.
   * @return {boolean}
   */
  _isInvalidToken (response) {
    const status = response.status;
    const error = response.data.error;

    return (status === 401 && (error === 'invalid_token' || error === 'expired_token'));
  }
};
