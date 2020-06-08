import axios from 'axios';

export default {
  getTokenInformation: async (region) => axios.get(`${process.env.VUE_APP_API_URL}/token?region=${region}`),
};
