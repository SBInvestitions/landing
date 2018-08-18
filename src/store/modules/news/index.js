import * as types from './mutation-types';
import news from '../../../api/news';

const state = {
  loading: false,
  article: null,
  news: []
};

const mutations = {
  [types.LOAD_NEWS] (state, data) {
    state.news = data.data ? data.data : null;
  },
  [types.SET_LOADING] (state, loading) {
    state.loading = loading;
  },
  [types.CLEAR_ALL_DATA] (state) {
    state.news = null;
    state.article = null;
    state.loading = false;
  },
  [types.LOAD_ARTICLE] (state, data) {
    state.article = data.article || null;
  },
  [types.POST_ARTICLE] (state, data) {
    state.loading = true;
  }
};

const actions = {
  [types.LOAD_NEWS] ({ commit, state }, limit, offset) {
    commit(types.SET_LOADING, true);
    news.getArticles(limit, offset).then((data) => {
      commit(types.SET_LOADING, false);
      commit(types.LOAD_NEWS, data);
    }).catch((errorResponse) => {
      commit(types.SET_LOADING, false);
    });
  },
  [types.SET_LOADING] ({ commit }, loading) {
    commit(types.SET_LOADING, loading);
  },
  [types.CLEAR_ALL_DATA] ({ commit }) {
    commit(types.CLEAR_ALL_DATA);
  },
  [types.LOAD_ARTICLE] ({ commit }, articleId) {
    commit(types.SET_LOADING, true);
    news.getSingleArticle(articleId).then((data) => {
      commit(types.SET_LOADING, false);
      commit(types.LOAD_ARTICLE, data);
    }).catch(() => {
      commit(types.SET_LOADING, false);
      commit(types.LOAD_ARTICLE, 'error');
    });
  },
  [types.POST_ARTICLE] ({ commit, dispatch }, article) {
    commit(types.SET_LOADING, true);
    if (article._id) {
      news.putArticle(article).then(() => {
        commit(types.SET_LOADING, false);
        commit(types.POST_ARTICLE, 'success');
      }).catch(() => {
        commit(types.SET_LOADING, false);
        commit(types.POST_ARTICLE, 'error');
      });
    } else {
      news.postArticle(article).then(() => {
        commit(types.SET_LOADING, false);
        commit(types.POST_ARTICLE, 'success');
        dispatch(types.LOAD_NEWS);
      }).catch(() => {
        commit(types.SET_LOADING, false);
        commit(types.POST_ARTICLE, 'error');
      });
    }
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
