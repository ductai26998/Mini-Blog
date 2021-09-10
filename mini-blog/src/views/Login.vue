<template>
  <div class="wrapper">
    <div class="login-container">
      <div class="login-container__left"></div>
      <div class="login-container__right">
        <h3 class="title">Moose</h3>
        <h5 class="welcome">Welcome to Moose</h5>
        <form @submit.prevent="submit">
          <label for="username">Email</label>
          <input type="text" v-model="email" placeholder="Email" />
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="Password" />
          <span>Forgot password?</span>
          <div class="submit">
            <button type="submit">Sign in</button>
          </div>
        </form>
        <h6 class="or">or</h6>
        <p class="new-user">
          New Mooser?
          <span
            ><router-link to="/auth/register">Create Account</router-link></span
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { app } from "../main";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: mapState({
    loggedIn: (state) => state.loggedIn,
    user: (state) => state.user,
  }),
  methods: {
    ...mapMutations(["changeState", "setUser"]),
    async submit() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.changeState();
        this.login();
        this.$router.push({ path: "/" });
      } catch (err) {
        alert(err);
      }
    },
    async login() {
      let db = await firebase.firestore(app);
      db.collection("users")
        .where("email", "==", this.email)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            //  Set cookies
            this.setUser(doc.data());
            this.$cookies.set("userId", doc.data().id);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

@mixin font-style-1 {
  font-size: 15px;
  font-weight: 400;
  color: rgb(75, 75, 75);
}

// @mixin font-style($fs, $fw, $color) {
//   font-size: $fs;
//   font-weight: $fw;
//   color: $color;
// }

.wrapper {
  background-image: url(../assets/images/login-cover.jpg);
  background-size: cover;
  position: relative;
  z-index: 1;
  .login-container {
    padding: 10vh 0vw;
    margin: 0vh 20vw;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 1280px) {
      margin: 10vh 15vw;
    }

    @media screen and (max-width: 898px) {
      justify-content: center;
      .login-container__left {
        display: none;
      }
      .login-container__right {
        width: 70%;
      }
    }

    @media screen and (max-width: 420px) {
      margin: 0;
      .login-container__right {
        width: 100% !important;
        height: 100vh !important;
      }
    }
  }
}

.wrapper * {
  z-index: 3;
}

.wrapper::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: gray;
  opacity: 0.8;
  z-index: 2;
}

.login-container__left {
  width: 50%;
  height: 80vh;
  background-image: url(../assets/images/login-cover.jpg);
  background-size: 100%;
}
.login-container__right {
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #fff !important;

  .title {
    margin-top: 6vh;
    margin-bottom: 6vh;
    font-weight: 600;
    font-family: $font-1;
  }

  .welcome {
    font-weight: 400;
    line-height: 24px;
    color: grey;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    label {
      text-align: left;
      @include font-style-1();
      margin-top: 8px;
    }
    input {
      border: 0;
      outline: none;
      padding: 5px;
      border-radius: 5px;
      background-color: rgb(228, 227, 227);
      box-shadow: 1px;
      padding-left: 10px;
    }

    span {
      text-align: end;
      margin: 5px 0;
      font-size: 14px;
      color: rgba(6, 90, 6, 0.829);
    }

    .submit {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      margin-bottom: 4vh;
      button {
        width: 40%;
        height: 35px;
        background-color: #696969;
        color: #fff;
        border-radius: 20px;
        border: none;
      }
      button:hover {
        opacity: 0.8;
      }
    }
  }

  .or {
    margin-bottom: 4vh;
    font-weight: 400;
    cursor: pointer;
  }

  .new-user {
    @include font-style-1();

    a {
      color: rgba(6, 90, 6, 0.829);
    }
  }
}
</style>
