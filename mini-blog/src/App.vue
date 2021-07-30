<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <component :is="layout">
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </component>
    </transition>
  </div>
</template>
<script>
import defaultLayout from "./layout/default.vue";
import unauthLayout from "./layout/unauth.vue";
import secretLayout from "./layout/secret.vue";
// import { mapState } from "vuex";

export default {
  components: {
    defaultLayout,
    unauthLayout,
    secretLayout,
  },
  computed: {
    // ...mapState(["loggedIn"]),
    layout() {
      if (this.$route.meta.layout === "unauth") return "unauthLayout";
      else if (this.$route.meta.layout === "secret") return "secretLayout";
      else return "defaultLayout";
    },
  },
  // created: {
  //   getLayout() {
  //     if (this.loggedIn) {
  //       this.$route.meta.layout = "secret";
  //     }
  //   },
  // },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
