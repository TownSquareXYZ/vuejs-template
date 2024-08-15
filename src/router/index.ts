// src/navigation/routes.js
// import { createWebHistory, createRouter } from 'vue-router';
import IndexPage from '../views/IndexPage.vue';
import TONConnectPage from '../views/TONConnectPage.vue';
import InitDataPage from '../views/InitDataPage.vue';
import ThemeParamsPage from '../views/ThemeParamsPage.vue';
import LaunchParamsPage from '../views/LaunchParamsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: "/",
    name: "IndexPage",
    meta: {
      title: "首页",
    },
    component: IndexPage,
  },
  {
    path: "/ton-connect",
    name: "TON Connect",
    meta: {
      title: "TON Connect",
    },
    component: TONConnectPage,
  },
  {
    path: "/init-data",
    name: "Init Data",
    meta: {
      title: "Init Data",
    },
    component: InitDataPage,
  },
  {
    path: "/theme-params",
    name: "Theme Params",
    meta: {
      title: "Theme Params",
    },
    component: ThemeParamsPage,
  },
  {
    path: "/launch-params",
    name: "Launch Params",
    meta: {
      title: "Launch Params",
    },
    component: LaunchParamsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
