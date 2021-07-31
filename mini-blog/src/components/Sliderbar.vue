<template>
  <div class="sliderbar">
    <div class="container slider-container slider-res">
      <div class="row">
        <div class="col-12">
          <h3 class="slider-brand" @click="$router.push('/')">Moose</h3>
        </div>
        <div class="col-12">
          <div class="row">
            <ul class="list-control">
              <li class="item-control active">
                <router-link to="/" class="item-icon"
                  ><i class="fas fa-columns"></i
                ></router-link>
                <router-link to="/" class="item-title">Dashboard</router-link>
              </li>
              <li class="item-control">
                <router-link to="/" class="item-icon"
                  ><i class="fab fa-shopify"></i
                ></router-link>
                <router-link to="/" class="item-title">Articles</router-link>
              </li>
              <li class="item-control">
                <router-link to="/" class="item-icon"
                  ><i class="fas fa-bus-alt"></i
                ></router-link>
                <router-link to="/" class="item-title">Tour</router-link>
              </li>
              <li class="item-control item-setting">
                <router-link to="/" class="item-icon"
                  ><i class="fas fa-cog"></i
                ></router-link>
                <router-link to="/" class="item-title">Tour</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button
      id="btn-setting-color"
      data-left="-230px"
      onclick="settingColorFunction(event)"
    >
      <i class="fas fa-cog"></i>
    </button>
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
  width: 20vw;
  background: red;
  display: flex;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1200px) {
    transform: translateX(-80%);
  }
  .slider-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100vh;
    background: pink;
    overflow: hidden;
    position: relative;
    margin: inherit;

    .slider-brand {
      margin-top: 3vh;
      margin-bottom: 5vh;
      font-weight: 600;
      font-family: $font-1;
      cursor: pointer;
    }
    .list-control {
      padding-top: 3vh;
      padding-bottom: 3vh;
      .item-control {
        display: flex;
        align-items: center;
        margin-top: 2vh;
        margin-bottom: 2vh;
        padding: 1.5vh 0vh;
        border-radius: 30px;
        overflow: hidden;
        .item-icon {
          padding-left: 3vh;
          margin-right: 10px;
          color: #929fa0 !important;
          @media screen and (max-width: 1200px) {
            padding-left: 3vh;
          }
        }
        .item-title {
          font-size: 1.2em;
          font-weight: 500;
          text-decoration: none !important;
          color: #929fa0 !important;
          @media screen and(max-width: 1200px) {
            font-size: 0.8em;
          }
        }
      }
      .item-control:hover {
        opacity: 0.8;
      }
      .active {
        background: #00dba1;
      }
      .item-setting {
        margin-top: 48vh;
        background: transparent !important;
      }
    }
  }
  button {
    padding: 1.5em 1.2em;
    border: none;
    width: 20%;
    background-color: #fff;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    text-align: center;
    outline: none;
    cursor: pointer;
    visibility: hidden;
    @media screen and (max-width: 1200px) {
      visibility: visible;
    }
  }
}
</style>
