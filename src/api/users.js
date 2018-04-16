import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';
import router from '../router';
import { i18n } from './../main';

const USER_URL = API_PATH + '/v1/user';

const AUTH_BASIC_HEADERS = {
  headers: {
    // 'Authorization': 'Bearer ' // Base64(client_id:client_secret) "demoapp:demopass"
  },
  emulateJSON: true
};
const CONFIRM_URL = API_PATH + '/v1/confirmed';

export default {
  user () {
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.get(`${USER_URL}`)
      .then((response) => {
        return response.body.result;
      })
      .catch((errorResponse) => {
        const path = router.app._route.path;
        const title = i18n.locale === 'en' ? 'Get user' : 'Данные пользователя';
        if (path !== '/') store.dispatch('errors/add', { title: title, msg: errorResponse.status.msg });
        return errorResponse;
      });
  },

  /**
   * Confirm registration
   *
   * @param {Object.<string>} confirmationString The key to confirm registration.
   * @param {Object.<string>} email The email to restore.
   * @return {Promise}
   */

  confirm (confirmationString) {
    const params = { 'confirmationString': confirmationString };
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.post(CONFIRM_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        store.dispatch('user/SET_LOADING', false);
        return response;
      })
      .catch((errorResponse) => {
        const title = i18n.locale === 'en' ? 'Confirmation registration' : 'Подтверждение регистрации';
        store.dispatch('user/SET_LOADING', false);
        store.dispatch('errors/add', {title: title, msg: errorResponse.body.message});
        return errorResponse;
      });
  }
};
