import Vue from "vue";
import store from "../store";
import firebase from "firebase";
import { app } from "../main";

let validate = (to, from, next) => {
  store.state.currentPage = to.name;
  const userId = Vue.$cookies.get("userId");
  if (userId && to.name != "login") {
    setUser(userId);
    // if (!store.state.user) {
    //   next({
    //     name: "login",
    //   });
    // }
    store.commit("setLoggedIn");
  }

  if (!to.meta.requiresAuth) {
    next();
  } else {
    if (userId) {
      next();
    } else {
      next({
        name: "login",
      });
    }
  }
};

async function setUser(userId) {
  let db = await firebase.firestore(app);
  db.collection("users")
    .where("id", "==", userId)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        store.commit("setUser", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

export default validate;
