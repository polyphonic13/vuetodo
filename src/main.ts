// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'

import moment from 'moment';

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if(value) {
    return moment(String(value)).format('YYYY.MM.DD - hh:mm');
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  components: { App }
})
