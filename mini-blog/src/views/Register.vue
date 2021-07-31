<template>
  <div class="wrapper">
    <div class="register-container">
      <div class="register-container__left">
        <h3 class="title">Moose</h3>
        <h5 class="welcome">Join our family</h5>
        <button type="button" class="btn btn-login btn-primary">
          <i class="fab fa-facebook-f"></i> Login with Facebook
        </button>
        <p class="text-center">Or</p>
        <!-- <p class="error" v-show="error">Please fill full fields!!!</p> -->
        <form @submit.prevent="submit">
          <label for="username">Full name</label>
          <input
            type="text"
            v-model="fullName"
            name=""
            id=""
            placeholder="Duyen"
            required
          />
          <label for="username">Email address</label>
          <input
            type="text"
            v-model="email"
            name=""
            id=""
            placeholder="truongduyen@gmail.com"
            required
          />
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            name=""
            id=""
            placeholder="Duyenkute"
            required
          />
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            name=""
            id=""
            placeholder="****"
            required
          />
          <div class="policy">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              required
            />
            <p>
              I don not wish to receive news and promotions from Moose. Company
              by email.
            </p>
          </div>
          <div class="submit">
            <button type="submit" class="btn btn-submit btn-primary">
              Get Start
            </button>
          </div>
        </form>
        <div class="login-account text-center">
          Already have a account?
          <router-link to="/auth/login">Login</router-link>
        </div>
      </div>
      <div class="register-container__right"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import { app } from "../main";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      password: "",
    };
  },
  computed: {
    error() {
      if (
        this.fullName == "" ||
        this.email == "" ||
        this.username == "" ||
        this.password == ""
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async submit() {
      if (!this.error) {
        try {
          const data = {
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            password: this.password,
          };

          const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          console.log(user);

          let db = await firebase.firestore(app);
          // Add a new document in collection "cities"
          db.collection("users")
            .add(data)
            .then(() => {
              console.log("Document successfully written!");
            });

          this.$router.push({ path: "login" });
        } catch (err) {
          alert(err);
        }
      }
    },
  },
};
</script>

<style lang="scss" scopred>
$font-1: "Pacifico", cursive;
$font-2: serif, cursive;
.wrapper {
  background-image: url("https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/31507603_1500327223411862_4638707908249387008_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=JXL0kLfRd50AX8wEAgN&_nc_ht=scontent.fsgn2-4.fna&oh=8948367be9e7214adb401be68d809feb&oe=61254A01");
  background-size: cover;
  position: relative;
  z-index: 1;
  .register-container {
    margin: 5vh 20vw;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    overflow: hidden;
    @media screen and(max-width: 1280px) {
      margin: 10vh 15vw;
    }
    @media screen and(max-width: 898px) {
      justify-content: center;
      .register-container__right {
        display: none;
      }
      .register-container__left {
        width: 70%;
      }
    }
    @media screen and(max-width: 567px) {
      .register-container__left {
        width: 70vw;
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.8;
  z-index: 2;
}
.register-container__left {
  width: 50%;
  height: 90vh;
  background: #fff;
  padding: 10px 30px;
  .title {
    font-weight: 600;
    font-family: "Pacifico", cursive;
    margin-top: 4vh;
    margin-bottom: 4vh;
  }
  .welcome {
    font-weight: 400;
    line-height: 24px;
    color: rgba(0,0,0,0.8);
    margin-top: 3vh;
    font-size: 18px;
    margin-bottom: 3vh;
  }
  p {
    font-size: 15px;
    margin: 0px !important;
  }
  .btn-login {
    margin-bottom: 10px;
    width: 100%;
    border-radius: 0% !important;
    background-color: #4065b4 !important;
    i {
      background: #fff;
      padding: 5px;
      color: #4065b4;
      margin-right: 3px;
    }
  }
  .btn-login:hover {
    opacity: 0.8;
  }
  .btn-login:focus {
    box-shadow: none !important;
  }

  .error {
    text-align: left;
    color: red;
    font-size: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
     label {
      text-align: left;
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
    .policy {
      margin-top: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      .form-check-input {
        margin-right: 10px;
      }
      .form-check-input:focus {
        box-shadow: none !important;
      }
      p {
        margin-left: 10px;
      }
    }

    .btn-submit {
      background: #fd6141;
      width: 100%;
      border: none;
      outline: none;
      border-radius: 0%;
    }
    .btn-submit:hover {
      opacity: 0.8;
    }
    .btn-submit:focus {
      box-shadow: none !important;
    }
  }
  .login-account {
    margin-top: 10px;
  }
  .login-account:focus {
    opacity: 0.8;
  }
  .login-account a {
    margin-left: 5px;
  }
}
.register-container__right {
  width: 50%;
  height: 90vh;
  background-image: url("https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/31318000_1497099090401342_867618865926897664_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=19026a&_nc_ohc=vM4LEEyCH3IAX987BjR&_nc_oc=AQlUdMr93DWyEjRYd_K9EdHSqfFLEbej4HCl-6sKLkvJY_AvrJ4ACcjxfVisHaF9aMs&_nc_ht=scontent.fsgn2-6.fna&oh=83d4867bc7c155d4abf608fc33a23bb2&oe=6124AC31");
  background-size: cover;
}
</style>
