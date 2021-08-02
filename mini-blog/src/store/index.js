import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
  },
  mutations: {
    changeState(state) {
      firebase.auth().onAuthStateChanged((user) => {
        state.loggedIn = !!user;
      });
    },
    logout() {
      firebase.auth().signOut();
      this.$router.push("auth/login");
    },
  },
  actions: {},
  modules: {},
});
