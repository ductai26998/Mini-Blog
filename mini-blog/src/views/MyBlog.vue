<template>
  <div class="myblog-container">
    <div class="container" style="width: 65%">
      <div class="row justify-content-center mb-5">
        <div class="col-md-7 heading-section text-center">
          <span class="subheading">My Blog</span>
          <h2>Recent From Blog</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 d-flex"
          v-for="blog in blogs" :key="blog.id"
        >
          <div class="blog-entry justify-content-end">
            <router-link :to="{ path: '/blogs/' + blog.id }">
              <img src="../assets/images/ava.jpg" alt="" />
              <div class="text">
                <p class="meta">
                  <span><i class="fa fa-calendar me-1"></i>{{blog.release_date}}</span>
                  <span
                    ><a href="#"
                      ><i class="fa fa-comment me-1"></i> 3 Comments</a
                    ></span
                  >
                </p>
                <h3 class="heading mb-3">
                  <a href="#">{{blog.title}}</a>
                </h3>
                <p>
                  {{blog.content.slice(0, 100)}}...
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
};
</script>

<style lang="scss" scoped>
.myblog-container {
  width: 100%;
}
.heading-section {
  .subheading {
    font-size: 13px;
    display: block;
    margin-bottom: 5px;
    color: #0779e4;
    font-weight: 700;
    text-transform: uppercase;
  }
  h2 {
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4;
  }
}
.blog-entry {
  background: #e7e7e7;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    img {
      width: 100%;
      object-fit: contain;
    }
    .text {
      width: 100%;
      margin: 0 auto;
      z-index: 0;
      padding: 30px;
      text-align: left;
      .meta {
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
        span {
          margin-right: 10px;
          color: #999;
          i {
            color: #0779e4;
          }
          i.me-1 {
            margin-right: 0.25 !important;
          }
        }
      }
      .heading {
        font-size: 20px;
        font-weight: 500;
        a {
          color: #000;
        }
      }
      p {
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.8;
        color: #999;
      }
    }
  }
}
</style>
