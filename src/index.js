import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

import Main from './app/Main.vue';
import './index.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view'),
  data: {
    name: 'Kenneth'
  }
});
