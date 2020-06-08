/* eslint-disable no-shadow */
import wowTokenApi from '../../api/wow-token-api';
import types from '../types';

// initial state
const state = {
  informations: null,
  isRequesting: true,
  hasFailed: false,
};

// getters
const getters = {
  informations: (state) => state.informations,
  isRequesting: (state) => state.isRequesting,
  hasFailed: (state) => state.hasFailed,
};

// actions
const actions = {
  async information({ commit }, region) {
    commit(types.WOW_TOKEN_REQUEST);

    try {
      const response = await wowTokenApi.getTokenInformation(region);
      commit(types.WOW_TOKEN_SUCCESS, response.data);
    } catch (error) {
      commit(types.WOW_TOKEN_FAILURE, error);
    }
  },
};

// mutations
const mutations = {
  async [types.WOW_TOKEN_INITIALIZATION](state, region) {
    if (state.informations === null || state.informations[region] === undefined) {
      this.dispatch('wowToken/information', region);
    }
  },
  [types.WOW_TOKEN_REQUEST](state) {
    state.isRequesting = true;
    state.hasFailed = false;
  },
  [types.WOW_TOKEN_SUCCESS](state, response) {
    state.informations = {
      ...state.informations,
      [response.region]: response,
    };
    state.isRequesting = false;
  },
  [types.WOW_TOKEN_FAILURE](state, error) {
    console.error(error);
    state.isRequesting = false;
    state.hasFailed = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
