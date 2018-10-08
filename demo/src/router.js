import Vue from 'vue'
import VueRouter from 'vue-router'
import MoveLayer from './move-layer/MoveLayer'
import MultiMap from './multi-map/MultiMap'

Vue.use(VueRouter);

const routes = [
  {path:'/',component: MoveLayer},
  {path: '/movelayer', component: MoveLayer },
  {path: '/multimap', component: MultiMap },
];

export const router  = new VueRouter({
  routes,
});
