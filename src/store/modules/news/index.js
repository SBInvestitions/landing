import * as types from './mutation-types';
import news from '../../../api/news';

const state = {
  loading: false,
  article: null,
  news: []
};

const mutations = {
  [types.LOAD_NEWS] (state, data) {
    state.news = data.news || null;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.news = null;
    state.article = null;
    state.loading = false;
  }

};

const actions = {
  [types.LOAD_NEWS] ({ commit, state }, limit, offset) {
    if (!state.id) {
      commit(types.SET_LOADING, true);
      news.getArticles(limit, offset).then((data) => {
        commit(types.SET_LOADING, false);
        commit(types.LOAD_NEWS, data);
      }).catch((errorResponse) => {
        commit(types.SET_LOADING, false);
      });
    }
  },
  [types.SET_LOADING] ({ commit }, loading) {
    commit(types.SET_LOADING, loading);
  },
  [types.CLEAR_ALL_DATA] ({ commit }) {
    commit(types.CLEAR_ALL_DATA);
  },
  [types.LOAD_ARTICLE] ({ commit }, articleId) {
    commit(types.SET_LOADING, true);
    news.getSingleArticle(articleId).then(() => {
      commit(types.SET_LOADING, false);
      commit(types.LOAD_ARTICLE, 'success');
    }).catch(() => {
      commit(types.SET_LOADING, false);
      commit(types.LOAD_ARTICLE, 'error');
    });
  }
};

const getters = {
  news: state => state.news,
  article: state => state.article,
  loading: state => state.loading
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
