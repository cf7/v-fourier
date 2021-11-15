/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import { BContainer } from 'bootstrap-vue';
import { BRow } from 'bootstrap-vue';
import { BCol } from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.config.runtimeCompiler = true;

Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);


// import 'vue' imports lighter dist that doesn't have compiler for
// template string elements, must use render() option
new Vue({ 
  render: h => h(App)
}).$mount('#app');
