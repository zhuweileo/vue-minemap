import Vue from 'vue'
import VueRouter from 'vue-router'
import MoveLayer from './move-layer/MoveLayer'
import MultiMap from './multi-map/MultiMap'
import AddMarker from './add-marker/AddMarker'

Vue.use(VueRouter);

const routes = [
  // {path:'/',component: MoveLayer},
  {path:'/',component: AddMarker},
  {path: '/movelayer', component: MoveLayer },
  {path: '/multimap', component: MultiMap },
  {path: '/addmarker', component: AddMarker },
];

export const router  = new VueRouter({
  routes,
});
