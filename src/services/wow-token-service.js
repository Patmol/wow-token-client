import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import store from '../store/index';
import types from '../store/types';

export default {
  connect: () => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl(`${process.env.VUE_APP_API_URL}/tokenhub`)
        .configureLogging(LogLevel.Information)
        .build();

      connection.start();

      connection.on('UpdateTokenPrice', (data) => {
        store.commit(`${types.WOW_TOKEN_NAMESPACE}/${types.WOW_TOKEN_REFRESH}`, data);
      });
    } catch (e) {
      console.log(e);
    }
  },
};
