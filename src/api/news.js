import Vue from 'vue';
import store from './../store';
import { API_PATH } from './../config';

export default {
  getArticles () {
    return Vue.http.get(`${API_PATH}/v1/news`)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Get articles', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  getSingleArticle (articleId) {
    if (!articleId) {
      const err = {
        status: {
          msg: 'input error'
        }
      };
      store.dispatch('errors/add', { title: 'getSingleArticle error', msg: err.status.msg });
      return err;
    }
    return Vue.http.get(`${API_PATH}/v1/news/${articleId}`)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'getSingleArticle error', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  postArticle (article) {
    return Vue.http.post(`${API_PATH}/v1/news`, article)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Create article', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  putArticle (article) {
    return Vue.http.put(`${API_PATH}/v1/news/${article._id}`, article)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Update article', msg: errorResponse.status.msg });
        return errorResponse;
      });
  },
  deleteArticle (articleId) {
    return Vue.http.delete(`${API_PATH}/v1/news/${articleId}`)
      .then((response) => {
        return response.body;
      })
      .catch((errorResponse) => {
        store.dispatch('errors/add', { title: 'Delete article', msg: errorResponse.status.msg });
        return errorResponse;
      });
  }
};
