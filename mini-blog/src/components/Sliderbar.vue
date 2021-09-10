<template>
  <div class="sliderbar" :class="isResponsive ? 'sliderbar-mobile' : ''">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="title">Moose</h3>
        </div>
        <ul class="list-control">
          <li class="item-control active">
            <router-link to="/">
              <i class="fab fa-facebook-f"></i>
              <div class="item-hover">Facebook</div>
            </router-link>
          </li>
          <li class="item-control">
            <router-link to="/">
              <i class="fas fa-newspaper"></i>
            </router-link>
            <div class="item-hover">Article</div>
          </li>
          <li class="item-control">
            <router-link to="/">
              <i class="fas fa-user"></i>
              <div class="item-hover">User</div>
            </router-link>
          </li>
        </ul>
        <div class="setting">
          <router-link to="/">
            <i class="fas fa-cog"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="sliderbar-res"
      :style="isResponsive ? 'display: block' : 'display: none'"
      @click="isResponsive = !isResponsive"
    >
      <router-link to="">
        <i class="fas fa-cog"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sliderbar",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    isResponsive() {
      return this.windowWidth <= 996;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.m-auto {
  margin: auto;
}
.sliderbar {
  width: 5rem;
  background: #16202f;
  display: flex;
  overflow: visible;
  transition: 0.4s ease-in-out;
  display: flex;
  color: #fff;
  height: 100vh;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  .title {
    margin-top: 6vh;
    margin-bottom: 6vh;
    font-weight: 600;
    font-family: $font-1;
    font-size: 1em;
    color: #fff !important;
    text-decoration: none !important;
  }
  .list-control {
    list-style: none;
    padding-top: 1em;
    .item-control {
      padding: 8px 0px;
      margin-bottom: 10px;
      background: #ef193c;
      width: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      a {
        color: #fff !important;
      }
      .item-hover {
        position: absolute;
        top: 15%;
        left: 120%;
        background: rgb(219, 203, 206);
        z-index: 5;
        padding: 0.5vh 0.5vw;
        border-radius: 5px;
        display: none;
        transition: 1s ease-in-out;
      }
      .item-hover:after {
        position: absolute;
        content: "";
        width: 15px;
        height: 15px;
        background: rgb(219, 203, 206);
        top: 25%;
        left: -5%;
        transform: rotate(45deg);
        z-index: -1;
      }
    }
    .item-control:hover .item-hover {
      display: block;
    }
  }
  .setting {
    margin: 0 auto;
    margin-top: 52vh;
    padding: 8px 0px;
    background: #354255;
    width: 2.5rem;
    border-radius: 50%;
    a {
      color: rgba(225, 235, 245, 0.87) !important;
    }
  }
  // @media screen and (max-width: 996px) {
  //   transform: translateX(-5rem);
  // }
  .sliderbar-res {
    margin-top: 8vh;
    padding: 12px 15px;
    background: #16202f;
    width: fit-content;
    height: fit-content;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    a {
      color: #fff;
    }
  }
}
.sliderbar-mobile {
  transform: translateX(-5rem);
}
</style>
