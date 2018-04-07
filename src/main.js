import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import VueClipboard from 'vue-clipboard2';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import router from './router';
import store from './store';
import base from './api/base';
import App from './App';
import messages from './locale/messages';

Vue.use(VueI18n);
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VueResource);
Vue.use(VueI18n);
Vue.use(VueClipboard);

base.install(Vue);

let v;
export const i18n = new VueI18n({
  locale: 'en',
  messages
});

const createVue = () => {
  /* eslint-disable no-new */
  v = new Vue({
    el: '#app',
    i18n,
    router,
    store,
    template: '<App/>',
    components: { App }
  });
  console.log('Vue created!!', v);
};

createVue();
