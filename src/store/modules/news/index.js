import * as types from './mutation-types';
import news from '../../../api/news';
import router from './../../../router';

const state = {
  loading: false,
  article: {
    _id: null,
    name: null,
    text: null,
    description: null,
    mainImg: null,
    mainImgAlt: null,
    mainImgSrc: null
  },
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
    state.article = data.data || null;
  },
  [types.POST_ARTICLE] (state, data) {
    state.loading = true;
  },
  [types.DELETE_ARTICLE] (state, data) {
    state.loading = true;
  },
  [types.DELETE_ARTICLE_SUCCESS] (state, data) {
    state.loading = false;
    if (data === 'success') {
      router.push({ path: '/news' });
    }
  },
  [types.DELETE_ARTICLE_ERROR] (state, data) {
    state.loading = false;
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
  },
  [types.DELETE_ARTICLE] ({ commit, dispatch }, articleId) {
    news.deleteArticle(articleId).then(() => {
      commit(types.DELETE_ARTICLE_SUCCESS, 'success');
      dispatch(types.LOAD_NEWS);
    }).catch(() => {
      commit(types.SET_LOADING, false);
      commit(types.DELETE_ARTICLE_ERROR, 'error');
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
