import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

export default {
  postEmail (params) {
    console.log('params', params);
    return Vue.http.post(`${API_PATH}/v1/subscribe`, params)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Subscribe', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
