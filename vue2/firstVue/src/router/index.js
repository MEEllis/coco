import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import index from '@/views/index';

Vue.use(Router);

const routers = [
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  }, {
    path: '/',
    name: 'index',
    component: index
  }
];

export default routers;
