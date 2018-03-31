import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

const USER_URL = API_PATH + '/v1/user';

export default {
  user () {
    store.dispatch('user/SET_LOADING', true);
    return Vue.http.get(`${USER_URL}`)
      .then((response) => {
        return response.body.result;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Get user', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
