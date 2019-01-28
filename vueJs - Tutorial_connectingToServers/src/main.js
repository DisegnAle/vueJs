import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-7e6dc.firebaseio.com';
Vue.http.interceptors.push((request, callback) => {
  console.log(request);
  if(request.method === 'POST'){
    request.method = 'PUT';
  }
  callback(response => {
    response.json = () => {
      return {messages: response.body}
    }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
