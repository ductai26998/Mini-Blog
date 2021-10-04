<template>
  <div class="blogdetail container-fluid">
    <section data-v-df212a54="" class="hero-wrap m-80">
      <div data-v-df212a54="" class="container">
        <div
          data-v-df212a54=""
          class="row no-gutters align-items-center justify-content-center"
        >
          <div
            data-v-df212a54=""
            class="col-md-9 text-center ftco-animate pt-5"
          >
            <h1 data-v-df212a54="" class="mb-3 bread">Our Blog</h1>
            <p data-v-df212a54="" class="breadcrumbs">
              <span data-v-df212a54=""
                ><a data-v-df212a54="" href="/" class="router-link-active"
                  >Home
                  <i
                    data-v-df212a54=""
                    class="fa fa-chevron-right"
                  ></i></a></span
              ><span data-v-df212a54=""
                ><a data-v-df212a54="" href="/blogs" class="router-link-active"
                  >Blog
                  <i data-v-df212a54="" class="fa fa-chevron-right"></i></a
              ></span>
              <span data-v-df212a54=""
                ><a data-v-df212a54="" href="#" class="router-link-active"
                  >{{ blog.id }}
                  <i data-v-df212a54="" class="fa fa-chevron-right"></i></a
              ></span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="blogdetail-inner">
      <div class="container">
        <div class="row intro-blog">
          <div class="col-12 col-md-6">
            <div class="blog-img">
              <img id="img-blog" :src="blog.imgUrl" alt="" />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="blog-info p-md-5 py-5 px-4 text-start">
              <p class="meta">
                <router-link class="meta_subinfo" to="/">
                  <i data-v-e28aca72="" class="far fa-calendar-alt"></i>
                  {{ blog.release_date }}
                </router-link>
                <router-link class="meta_subinfo" to="/"
                  ><i data-v-e28aca72="" class="fas fa-user"></i
                  ><span data-v-e28aca72="">{{
                    blog.author
                  }}</span></router-link
                >
                <router-link class="meta_subinfo" to="/"
                  ><i data-v-e28aca72="" class="fas fa-comment"></i
                  ><span data-v-e28aca72="">3</span></router-link
                >
              </p>
              <h2 class="mb-4">
                <router-link to="/">{{ blog.title }}</router-link>
              </h2>
              <div class="icon d-flex align-items-center">
                <div class="img-author">
                  <img
                    src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                    alt=""
                  />
                </div>
                <div class="position pl-3">
                  <h4 class="mb-0">{{ blog.author }}</h4>
                  <span>CEO, Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row text-blog justify-content-center align-items-center">
          <div class="col-md-7 text-start">
            <div class="py-4">
              <!-- p: nornal text, strong: strong, h3: subtitle -->
              {{ blog.content }}
            </div>
            <div class="action" v-if="blog.author_id == $store.state.user.id">
              <router-link class="btn btn-warning m-3" to="#" role="button"
                >Update</router-link
              >
              <button class="btn btn-danger m-3" @click="deleteBlog(blog.id)">Delete</button>
            </div>
            <div class="tag-widget post-tag-container mt-5 mb-5">
              <div class="tagcloud">
                <router-link to="/" class="tag-cloud-link">Life</router-link>
                <router-link to="/" class="tag-cloud-link">Sport</router-link>
                <router-link to="/" class="tag-cloud-link">Tech</router-link>
                <router-link to="/" class="tag-cloud-link">Work</router-link>
              </div>
            </div>

            <div class="comment-post py-5">
              <h3 class="mb-5">6 comments</h3>
              <ul class="comment-list">
                <!-- 1 -->
                <li class="comment">
                  <div class="comment-img">
                    <img
                      src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                      alt=""
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">September 28, 2020 at 3:03pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>
                <!-- 2 -->
                <li class="comment">
                  <div class="comment-img">
                    <img
                      src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                      alt=""
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">September 28, 2020 at 3:03pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>
                <!-- 3 -->
                <li class="comment">
                  <div class="comment-img">
                    <img
                      src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                      alt=""
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">September 28, 2020 at 3:03pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                  <div class="children">
                    <li class="comment">
                      <div class="comment-img">
                        <img
                          src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                          alt=""
                        />
                      </div>
                      <div class="comment-body">
                        <h3>John Doe</h3>
                        <div class="meta">September 28, 2020 at 3:03pm</div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Pariatur quidem laborum necessitatibus, ipsam
                          impedit vitae autem, eum officia, fugiat saepe enim
                          sapiente iste iure! Quam voluptas earum impedit
                          necessitatibus, nihil?
                        </p>
                        <p><a href="#" class="reply">Reply</a></p>
                      </div>
                      <div class="children">
                        <li class="comment">
                          <div class="comment-img">
                            <img
                              src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                              alt=""
                            />
                          </div>
                          <div class="comment-body">
                            <h3>John Doe</h3>
                            <div class="meta">September 28, 2020 at 3:03pm</div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Pariatur quidem laborum
                              necessitatibus, ipsam impedit vitae autem, eum
                              officia, fugiat saepe enim sapiente iste iure!
                              Quam voluptas earum impedit necessitatibus, nihil?
                            </p>
                            <p><a href="#" class="reply">Reply</a></p>
                          </div>
                        </li>
                      </div>
                    </li>
                  </div>
                </li>
                <!-- 4 -->
                <li class="comment">
                  <div class="comment-img">
                    <img
                      src="https://preview.colorlib.com/theme/moose/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                      alt=""
                    />
                  </div>
                  <div class="comment-body">
                    <h3>John Doe</h3>
                    <div class="meta">September 28, 2020 at 3:03pm</div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Pariatur quidem laborum necessitatibus, ipsam impedit
                      vitae autem, eum officia, fugiat saepe enim sapiente iste
                      iure! Quam voluptas earum impedit necessitatibus, nihil?
                    </p>
                    <p><a href="#" class="reply">Reply</a></p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="comment-form-wrap pt-5">
              <h3 class="mb-5">Leave a comment</h3>
              <form action="" class="p-5 comment-form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name *</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="nam" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group">
                      <label for="">Name</label>
                      <textarea
                        name=""
                        id="message"
                        cols="30"
                        rows="10"
                        class="form-control"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12 mt-4">
                    <div class="form-group">
                      <input
                        type="submit"
                        value="Post Comment"
                        class="btn py-3 px-4 btn-primary"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from "firebase";
import { app } from "../main";

export default {
  // props: ["blog"],
  data() {
    return {
      blog: {
        id: null,
        content: null,
        release_date: null,
        title: null,
        author: null,
      },
    };
  },
  methods: {
    async deleteBlog(blogId) {
      let db = firebase.firestore(app);
      await db.collection("blogs")
      .where("id", "==", blogId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          doc.ref.delete();
        });
        alert("This blog was deleted!!!");
        this.$router.replace('/personal/' + this.$store.state.user.id);
      })
    },
    async getImageUrl(id) {
      // Ref to firebase storage
      const imgRef = firebase.storage().ref();

      await imgRef
        .child("images/blogs/" + id + ".png")
        .getDownloadURL()
        .then((url) => {
          let imgElement = document.getElementById("img-blog");
          imgElement.style.backgroundImage = `url(${url})`;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async created() {
    let db = firebase.firestore(app);
    var blogId = this.$attrs.id;

    await db
      .collection("blogs")
      .where("id", "==", blogId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          //  Set cookies
          this.blog = doc.data();
          let date = new Date(doc.data().release_date.seconds * 1000);
          this.blog.release_date =
            date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

          await db
            .collection("users")
            .where("id", "==", doc.data().author_id)
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                this.blog.author = doc.data().username;
              });
            });
        });
        console.log("blog");
        console.log(this.blog);
        this.getImageUrl(blogId);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>

<style lang="scss" scoped>
.m-80 {
  margin-bottom: 80px;
  margin-top: 80px;
}
.blogdetail {
  .hero-wrap {
    .bread {
      font-weight: 600;
      font-size: 48px;
      color: #313b44;
    }
    .breadcrumbs {
      font-size: 13px;
      margin-bottom: 10px;
      font-weight: 400;
      text-transform: uppercase;
      span {
        margin-right: 8px;
        a {
          color: rgba(0, 0, 0, 0.4) !important;
          text-decoration: none !important;
        }
      }
    }
  }
}
.blogdetail-inner {
  .intro-blog {
    .blog-img {
      width: 100%;
      overflow: hidden;
      height: 573px;
      img {
        width: 100%;
        height: 573px;
        object-fit: contain;
      }
    }
    .blog-info {
      .meta {
        display: inline-block;
        margin-right: 5px;
        margin-bottom: 10px;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        a {
          color: #588da8 !important;
          font-size: 12px;
          text-decoration: none !important;
          i {
            margin-right: 0.5rem !important;
          }
        }
      }

      .meta_subinfo {
        margin-right: 16px;
      }

      h2 {
        font-size: 45px;
        font-weight: 800;
        line-height: 1.4;
        a {
          text-decoration: none !important;
          color: #313b44;
        }
      }
      .icon {
        .img-author {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .position {
          padding-left: 1rem;
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
  }
  .text-blog {
    .py-4 {
      text-align: justify;
      h3 {
        font-weight: 700;
      }
    }
    .tag-widget {
      .tagcloud a {
        text-transform: uppercase;
        display: inline-block;
        padding: 4px 10px;
        margin-bottom: 7px;
        margin-right: 4px;
        border-radius: 4px;
        color: #fff;
        font-size: 11px;
        background: #588da8;
        text-decoration: none !important;
      }
    }
    .comment-post {
      h3 {
        font-weight: 700;
      }
      .comment-list {
        padding: 0;
        margin: 0;
        .comment {
          padding: 0;
          margin: 0 0 30px 0;
          width: 100%;
          list-style: none;
          clear: both;
          .comment-img {
            width: 80px;
            margin-right: 20px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              object-fit: contain;
            }
          }
          .comment-body {
            width: fit-content;
            h3 {
              font-size: 16px;
              font-weight: 600;
            }
            .meta {
              text-transform: uppercase;
              font-size: 13px;
              letter-spacing: 0.1em;
              font-weight: 500;
              color: #588da8;
              display: block;
              margin-bottom: 10px;
            }
            p {
              .reply {
                padding: 5px 10px;
                color: #fff;
                text-transform: uppercase;
                font-size: 11px;
                letter-spacing: 0.1em;
                font-weight: 500;
                border-radius: 4px;
                background: #588da8;
                text-decoration: none;
              }
            }
          }
          .children {
            padding: 50px 0 0 40px;
          }
        }
      }
    }
    .comment-form-wrap {
      h3 {
        font-weight: 700;
      }
      form {
        background: #fff;
        box-shadow: 0px 2px 25px -16px rgb(0 0 0 / 26%);
        .form-group {
          label {
            font-size: 12px;
            text-transform: uppercase;
            color: #588da8;
            font-weight: 600;
          }
          input {
            height: 45px;
            background: transparent;
            color: rgba(0, 0, 0, 0.8);
            font-size: 14px;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: none;
          }
          textarea {
            box-shadow: none;
          }
          input[type="submit"] {
            background: #588da8 !important;
            border: 1px solid #588da8 !important;
            color: #fff !important;
          }
        }
      }
    }
  }
}
</style>
