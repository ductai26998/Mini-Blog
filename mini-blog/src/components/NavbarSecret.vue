<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco-navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">moose</router-link>
      <button
        class="navbar-toggler"
        @click="choice = !choice"
        type="button"
        data-toggle="collapse"
        data-target="#ftco-nav"
        aria-controls="ftco-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="oi oi-menu"></span> Menu
      </button>
      <div class="collapse navbar-collapse" :class="choice ? 'show' : ''">
        <ul class="navbar-nav ml-auto">
          <li class="m-1">
            <router-link
              class="nav-item"
              :class="currentPage == 'home' ? 'active' : ''"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="m-1">
            <router-link
              class="nav-item"
              :class="currentPage == 'about' ? 'active' : ''"
              to="/about"
              >About</router-link
            >
          </li>
          <li class="m-1">
            <router-link
              class="nav-item"
              :class="currentPage == 'contact' ? 'active' : ''"
              to="/contact"
              >Contact</router-link
            >
          </li>
          <li class="m-1">
            <router-link
              class="nav-item"
              :class="currentPage == 'blogs' ? 'active' : ''"
              to="/blogs"
              >Blogs</router-link
            >
          </li>
          <li class="info-user d-flex m-1">
            <router-link class="nav-item" to="/blogs">
              <img
                src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xteam3.png.pagespeed.ic.ZjKltUw-pd.webp"
                alt=""
              />
            </router-link>
            <p>{{ user.username }}</p>
          </li>
          <li class="manager-user">
            <div
              class="showControl"
              @click="btnControlVisible = !btnControlVisible"
            >
              <i class="fas fa-sort-down"></i>
            </div>
            <div
              class="manager-show"
              :style="btnControlVisible ? 'display: block' : 'display: none'"
            >
              <ul class="manager" style="padding-left: 0px">
                <li class="infor d-flex">
                  <img
                    src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xteam3.png.pagespeed.ic.ZjKltUw-pd.webp"
                    alt=""
                  />
                  <div class="show-infor">
                    <span class="name">{{ user.fullName }}</span>
                    <span class="personalPage"
                      ><router-link to="/personal/1"
                        >Show your profile</router-link
                      ></span
                    >
                  </div>
                </li>
                <hr v-if="user.role == 'admin'" />
                <li v-if="user.role == 'admin'" class="dashboard">
                  <i class="fas fa-columns"></i>
                  <span>Dashboard</span>
                </li>
                <hr />
                <li class="infor d-flex post">
                  <i class="fas fa-info-circle"></i>
                  <div class="show-infor" @click="addNew">
                    <span class="name">Post new blog</span>
                    <span class="personalPage"
                      >Contributing to improve the quality of Moose</span
                    >
                  </div>
                </li>
                <hr />
                <li class="infor d-flex logout">
                  <i class="fas fa-sign-out-alt"></i>
                  <div class="show-infor">
                    <span class="name" @click="logout">Logout</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <button class="btn-close" @click="showModal = false"></button>
        <PostBlog />
      </div>
    </transition>
  </nav>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import PostBlog from "../views/PostBlog.vue";
import { mapState } from "vuex";

export default {
  name: "Navbar",
  components: { PostBlog },
  data() {
    return {
      choice: false,
      btnControlVisible: false,
      isAdding: false,
      showModal: false,
    };
  },
  computed: mapState({
    user: (state) => state.user,
    currentPage: (state) => state.currentPage,
  }),
  methods: {
    logout() {
      firebase.auth().signOut();
      this.$cookies.remove("userId");
      this.$router.replace({ path: "auth/login" });
    },
    addNew() {
      this.showModal = true;
      this.btnControlVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar .container {
  width: 800px;
}
.ftco-navbar-light {
  background: #000000 !important;
}
.ftco-navbar-light .navbar-brand {
  color: #fff !important;
}
.ftco-navbar-light .scroll .navbar-brand {
  color: #000000;
}
.ftco-navbar-light .navbar-nav .nav-item {
  color: #fff;
  border-left: none;
}
.ftco-navbar-light .navbar-toggler {
  color: rgba(255, 255, 255, 0.5) !important;
}
.navbar-brand {
  color: #000000 !important;
  padding: 1.5rem 0rem;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 0;
  display: inline-block;
  margin-right: 1rem;
}
.navbar-collapse {
  display: flex;
  justify-content: flex-end;
}

.nav-item {
  font-size: 15px;
  padding: 0 20px;
  color: #000000;
  text-decoration: none;
  font-weight: 500;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}
.logout {
  cursor: pointer;
}
.active {
  color: #588da8 !important;
}
.navbar-toggler {
  border: none;
  color: rgba(0, 0, 0, 0.5) !important;
  border-color: rgba(0, 0, 0, 0.5) !important;
  cursor: pointer;
  margin-right: 15px !important;
  text-transform: uppercase;
  font-size: 16px;
  letter-spacing: 0.1rem;
}
.navbar-toggler:focus {
  box-shadow: none !important;
}
.show {
  justify-content: center;
}
.navbar-nav {
  li {
    margin: auto;
  }
  .info-user {
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 5px;
    border-radius: 25px;

    margin-right: 20px;
    a {
      padding: 0px;
      img {
        width: 30px;
        border-radius: 50%;
        object-fit: contain;
        margin-right: 0.5rem;
      }
    }
    p {
      color: #fff;
      margin: 0;
    }
  }
  .manager-user {
    position: relative;
    .manager {
      li {
        cursor: pointer;
      }
      .dashboard {
        padding: 10px 20px;
        color: #e4e6eb;
        text-align: left;
        // display: flex;
        i {
          padding: 10px;
          border-radius: 50%;
          background: rgb(68, 68, 68);
        }
        span {
          margin-left: 10px;
          font-size: 1.0625rem;
          font-weight: 600;
        }
      }
    }
    .showControl {
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      .fa-sort-down {
        color: #fff;
      }
    }
    a {
      padding: 8px 16px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
    }
    .manager-show {
      margin-top: 2vh;
      position: absolute;
      background: #171819;
      padding: 10px 0px !important;
      right: 50%;
      width: 300px;
      display: none;
      .manager {
        .infor {
          padding: 10px 20px;
          background: #171819;
          justify-content: center;
          align-items: center;
          img {
            width: 60px;
            object-fit: contain;
            border-radius: 50%;
          }
          .show-infor {
            display: flex;
            flex-direction: column;
            text-align: left;
            padding-left: 10px;
            .name {
              font-size: 1.0625rem;
              font-weight: 600;
              color: #e4e6eb;
              line-height: 1.1765;
            }
            .personalPage {
              font-size: 0.7375rem;
              font-weight: 400;
              line-height: 1.3333;
              color: #b0b3b8;
              a {
                background-color: transparent;
                color: inherit !important;
                text-decoration: none;
                padding: 0px;
              }
            }
          }
        }
        .post {
          i {
            color: #fff;
            background: rgb(68, 68, 68);
            padding: 10px;
            border-radius: 50%;
          }
        }
        .logout {
          justify-content: end;
          align-items: center;
          i {
            color: #fff;
            background: rgb(68, 68, 68);
            padding: 10px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.527);
}

.modal {
  position: fixed;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  height: 90%;

  width: 100%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

  .btn-close {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
