<template>
  <div class="sliderbar">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="title">Moose</h3>
        </div>
        <ul class="list-control">
          <li class="item-control active">
            <router-link to="/">
              <i class="fab fa-facebook-f"></i>
            </router-link>
          </li>
          <li class="item-control">
            <router-link to="/">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li class="item-control">
            <router-link to="/">
              <i class="fas fa-user"></i>
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
  </div>
</template>

<script>
export default {
  name: "Sliderbar",
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
  overflow: hidden;
  transition: 0.4s ease-in-out;
  display: flex;
  color: #fff;
  height: 100vh;
  justify-content: flex-start;
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
      padding: 6px 0px;
      margin-bottom: 10px;
      background: #ef193c;
      width: 2.5rem;
      border-radius: 50%;
      cursor: pointer;
      a {
        color: #fff !important;
      }
    }
  }
  .active {
  }
  .setting {
    margin: 0 auto;
    margin-top: 55vh;
    padding: 6px 0px;
    background: #ef193c;
    width: 2.5rem;
    border-radius: 50%;
    a{
      color: #fff!important;
    }
  }
}
</style>
