import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import router from './router';

Axios.defaults.baseURL = 'https://clima-b4f66-default-rtdb.firebaseio.com/';

Axios.interceptors.request.use(
  function (config) {
    config.headers.common['interceptorheader'] = '';
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

Axios.interceptors.response.use(
  function (response) {
    response.data = { hai: 'hai' };
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

Vue.config.productionTip = false
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
