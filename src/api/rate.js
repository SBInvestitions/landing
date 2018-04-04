import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

const RATE_URL = API_PATH + '/v1/rates';

export default {
  rate () {
    store.dispatch('rate/SET_LOADING', true);
    return Vue.http.get(`${RATE_URL}`)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Get rate', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
