import Vue from 'vue';
import App from './App.vue';
import '!style-loader!css-loader!tachyons';

new Vue({
  el: '#app',
  render: h => h( App )
});
