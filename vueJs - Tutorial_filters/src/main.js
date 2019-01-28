import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

Vue.filter('word-counter', (value)=>{
  return value.split('').length
});

new Vue({
  el: '#app',
  render: h => h(App)
})
