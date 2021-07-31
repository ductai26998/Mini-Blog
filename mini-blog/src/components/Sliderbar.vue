<template>
  <div class="sliderbar">
    <div class="navbar no-radius">
      <router-link to="/"><h3 class="title">Moose</h3></router-link>
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
  width: 20vw;
  background: red;
  display: flex;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  display: flex;
  justify-content: flex-start;
  .title {
    margin-top: 6vh;
    margin-bottom: 6vh;
    font-weight: 600;
    font-family: $font-1;
    color: #000000!important;
    text-decoration: none!important;
  }
}
</style>
