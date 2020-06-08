import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// CSS files
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles/common.scss';
import i18n from './i18n';

// JavaScript files
import './scripts/navbar';

Vue.config.productionTip = false;

i18n.locale = 'en';

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
