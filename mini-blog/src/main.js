import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import * as VueGoogleMaps from "vue2-google-maps";
import VueClosable from "vue-closable";

import firebase from "firebase";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueClosable);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDMPNfjWScT7zrzMQ1XvMaEe5aWra12c7o",
    libraries: "places",
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyBc7TJhIpkmV8dIC5WPdvYL8Ufo01CtEak",
  authDomain: "mini-blog-2k.firebaseapp.com",
  projectId: "mini-blog-2k",
  storageBucket: "mini-blog-2k.appspot.com",
  messagingSenderId: "77004920085",
  appId: "1:77004920085:web:70e7849c4e5c359ba9851c",
  measurementId: "G-QKBT57D8QV",
};
// Initialize Firebase
export var app = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => my_vue);

let my_vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
