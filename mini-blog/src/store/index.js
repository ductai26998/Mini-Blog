import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "home",
    loggedIn: false,
    layoutState: "default",
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoggedIn(state) {
      state.loggedIn = true;
    },
    changeState(state) {
      firebase.auth().onAuthStateChanged((user) => {
        state.loggedIn = !!user;
      });
    },
    updateStateLayout(state, payload) {
      return (state.layoutState = payload);
    },
  },
  actions: {},
  modules: {},
});
