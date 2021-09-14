<template>
  <div class="blogs container-fluid">
    <div class="blogs__up">
      <h1 class="blogs__up__title m-80">Our Blog</h1>
      <p class="blogs__up__breadcrumbs">
        <span>
          <router-link to="/"
            >Home <i class="fa fa-chevron-right"></i
          ></router-link>
        </span>
        <span> Blog <i class="fa fa-chevron-right"></i> </span>
      </p>
    </div>
    <div class="blogs__main">
      <div
        class="blog-item col-md-6 col-lg-4"
        v-for="blog in blogs"
        :key="blog.id"
        @click="$router.push('/blogs/' + blog.id)"
      >
        <router-link :to="{ path: 'blogs/' + blog.id }">
          <div :id="blog.id" class="blog-item__img"></div>
        </router-link>
        <div class="blog-item__info">
          <p class="blog-item__info-1">
            <a href="#" class="date">
              <i class="far fa-calendar-alt"></i>
              <span>{{ blog.release_date }}</span>
            </a>
            <a href="#" class="role">
              <i class="fas fa-user"></i>
              <span>ADMIN</span>
            </a>
            <a href="#" class="nums-comment">
              <i class="fas fa-comment"></i>
              <span>3</span>
            </a>
          </p>
          <h2 class="blog-item__info__title">
            {{ blog.title }}
          </h2>
          <div class="blog-item__info__author">
            <div class="author__avatar"></div>
            <div class="position pl-3 author__infor">
              <h4 class="mb-0">Jamie Jonson</h4>
              <span>CEO, Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blogs__down"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import { app } from "../main";

export default {
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async getBlog() {
      try {
        // get all blog from Firestore Database
        let db = await firebase.firestore(app);

        const blogsRef = db.collection("blogs");
        const snapshot = await blogsRef.get();
        if (snapshot.empty) {
          console.log("No matching documents.");
          return;
        }

        snapshot.forEach((doc) => {
          var date = new Date(doc.data().release_date.seconds * 1000);
          let blogInfo = {
            id: doc.data().id,
            content: doc.data().content,
            release_date:
              date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear(),
            title: doc.data().title,
          };
          this.getImageUrl(doc.data().id);
          this.blogs.push(blogInfo);
        });

        // sort all blog from nearest
        this.blogs.sort((firstEl, secondEl) => {
          return secondEl.id - firstEl.id;
        });

        // this.blogs.forEach(async (blog) => {
        //   let imgUrl = await this.getImageUrl(blog.id);
        //   var imgElement = document.getElementById(blog.id);
        //   imgElement.style.backgroundImage = `url(${imgUrl})`;
        //   blog.imgUrl = imgUrl;
        // })
      } catch (err) {
        alert(err);
      }
    },
    async getImageUrl(id) {
      // Ref to firebase storage
      const imgRef = firebase.storage().ref();

      await imgRef
        .child("images/blogs/" + id + ".png")
        .getDownloadURL()
        .then((url) => {
          let imgElement = document.getElementById(id);
          imgElement.style.backgroundImage = `url(${url})`;
        })
        .catch((error) => {
          console.log(error);
        });

      // return imgUrl;
    },
  },
  created() {
    this.getBlog();
  },
};
</script>

<style lang="scss" scoped>
.m-80 {
  margin-top: 80px;
  margin-bottom: 80px;
}
a {
  text-decoration: none;
  color: #588da8;
}

.blogs {
  .blogs__up {
  }
  .blogs__main {
    display: flex;
    flex-wrap: wrap;
  }
  .blogs__down {
  }
}
.blogs__up__title {
  font-weight: 600;
  font-size: 48px;
  color: #313b44;
}
.blogs__up__breadcrumbs {
  font-size: 13px;
  margin-bottom: 10px;
  font-weight: 400;
  text-transform: uppercase;
  span {
    color: rgba(0, 0, 0, 0.4);
    margin-right: 8px;
    a {
      color: rgba(0, 0, 0, 0.4) !important;
      text-decoration: none !important;
      i {
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
}
.blog-item {
  margin-bottom: 60px;
  padding: 0 48px;
  text-align: left;
  .blog-item__img {
    width: 100%;
    height: 400px;
    background-image: url(../assets/images/login-cover.jpg);
    background-size: cover;
  }
  .blog-item__info-1 {
    font-size: 14px;
    font-weight: 500;
    padding-top: 20px;
    span {
      margin-left: 5px;
    }
    .date {
      margin-right: 10px;
    }
    .role {
      margin-right: 10px;
    }
    .nums-comment {
      margin-right: 10px;
    }
  }
  .blog-item__info__title {
    font-weight: 500;
    cursor: pointer;
  }
  .blog-item__info__author {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .author__avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-image: url(../assets/images/login-cover.jpg);
      cursor: pointer;
    }
    .author__infor {
      padding-left: 1rem !important;
      h4 {
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 700;
      }
      span {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 500;
        color: #588da8;
      }
    }
  }
}
</style>
