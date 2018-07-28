import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

export default {
  postEmail (email) {
    console.log('email', email);
    return Vue.http.post(`${API_PATH}/v1/subscribe`, { email })
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Subscribe', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
