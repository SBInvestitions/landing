import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import router from './router';
import store from './store';
import App from './App';

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
let v;

const createVue = () => {
  /* eslint-disable no-new */
  v = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
  });
  console.log('Vue created!!', v);
};

createVue();
