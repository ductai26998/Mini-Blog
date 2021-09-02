<template>
  <div class="secret-inner">
    <Sliderbar />
    <slot />
  </div>
</template>

<script>
import Sliderbar from "../components/Sliderbar.vue";
export default {
  components: {
    Sliderbar,
  },
};
</script>

<style lang="scss" scoped>
.secret-inner {
}
</style>
