<template>
  <div class="personal-container">
    <div class="ava-container">
      <div class="ava-cover">
        <img src="../assets/images/anhbia.jpg" class="cover-img" alt="" />
        <div class="ava-img">
          <img
            src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xteam3.png.pagespeed.ic.ZjKltUw-pd.webp"
            alt=""
          />
        </div>
      </div>
      <div class="person-name">{{userInfo.fullName}}</div>
      <hr style="width: 60vw" class="m-auto" />
      <div class="manager">
        <ul class="manage-info">
          <li
            class="info"
            v-on:click="setActive('MyBlog')"
            :class="{ active: isActive('MyBlog') }"
          >
            <p>Bài viết</p>
          </li>
          <li
            class="info"
            v-on:click="setActive('MyInfor')"
            :class="{ active: isActive('MyInfor') }"
          >
            <p>Thông tin cá nhân</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <my-blog /> -->
    <component :userInfo="userInfo" :is="theSelectComponent" :blogs="blogs"></component>
  </div>
</template>
<script>
import MyInfor from "./MyInfor.vue";
import MyBlog from "./MyBlog.vue";

import firebase from "firebase";
import { app } from "../main";

export default {
  components: {
    MyInfor,
    MyBlog,
  },
  data() {
    return {
      activeItem: "MyBlog",
      theSelectComponent: "MyBlog",
      userInfo: {
        id: null,
        email: null,
        fullname: null,
        password: null,
        role: null,
        username: null,
      },
      blogs: [],
    };
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
      this.theSelectComponent = menuItem;
    },
  },
  async created() {
    let db = firebase.firestore(app);
    var userID = this.$route.params.id;

    await db
      .collection("users")
      .where("id", "==", userID)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.userInfo = doc.data();
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    await db
      .collection("blogs")
      .where("author_id", "==", userID)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var date = new Date(doc.data().release_date.seconds * 1000);
          let blogInfo = {
            id: doc.data().id,
            content: doc.data().content,
            release_date:
              date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),
            title: doc.data().title,
          };
          // this.getImageUrl(doc.data().id);
          this.blogs.push(blogInfo);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
@mixin font-cover {
  font-size: 15px;
  font-weight: 400;
  color: #1c1e21;
  line-height: 1.34;
  background-color: #18191a;
}
@mixin font-facebook {
  color: #1c1e21;
  line-height: 1.1875;
  text-align: center;
  background: #fff;
}
.personal-container {
  width: 100%;
  .ava-container {
    width: 100%;
    @include font-facebook();
    .ava-cover {
      padding-top: 20%;
      @include font-cover();
      width: 100%;
      height: 20px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      margin: auto;
      position: relative;
      .cover-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .ava-img {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 140px;
          object-fit: contain;
          border-radius: 50%;
        }
      }
    }
    .person-name {
      margin: 2% 0%;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .manager {
      width: 60vw;
      margin: auto;
      .manage-info {
        list-style: none;
        display: flex;
        margin-top: 10px;
        padding-left: 0px !important;
        li {
          padding-right: 16px;
          padding-left: 16px;
          min-height: 16px;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
          margin-right: 10px;
        }
        li.active {
          color: #2292ef;
          border-bottom: 2px solid #2292ef;
        }
      }
    }
  }
}
</style>
