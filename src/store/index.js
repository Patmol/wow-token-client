import Vue from 'vue';
import Vuex from 'vuex';

import wowToken from './modules/wow-token';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wowToken,
  },
  strict: debug,
});
