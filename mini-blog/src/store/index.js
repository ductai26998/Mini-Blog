import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase";
import "firebase/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    layoutState: "default",
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
    updateStateLayout(state, payload) {
      return (state.layoutState = payload);
    },
  },
  actions: {},
  modules: {},
});
