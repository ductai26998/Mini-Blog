<template>
  <div class="sliderbar">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <h3 class="slider-title">Moose</h3>
              </div>
              <div class="row slide-control">
                  <ul class="list-control">
                      <li class="item-control">
                          <router-link to="/">
                          <i class="fas fa-columns"></i>
                          <h4 class="item-title">Dashboard</h4>
                          </router-link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Sliderbar"
}
</script>

<style lang="scss" scoped>
.sliderbar{
    width: 20vw;
    height: 100vh;
    background: pink;
    .slider-title{
        margin-top: 6vh;
        margin-bottom: 10vh;
        font-weight: 600;
    }
    .slide-control{
        background: red;
    }
}
</style>