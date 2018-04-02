import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

export default {
  getWallet () {
    return Vue.http.get(`${API_PATH}/v1/wallet`)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Get wallet', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  postWallet (params) {
    return Vue.http.post(`${API_PATH}/v1/wallet`, params)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Create wallet', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  putWallet (params) {
    return Vue.http.put(`${API_PATH}/v1/wallet`, params)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Update wallet', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  deleteWallet (params) {
    return Vue.http.delete(`${API_PATH}/v1/wallet`, { params })
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Delete wallet', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
