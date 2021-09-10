<template>
  <div class="default-inner">
    <!-- <Navbar v-if="!loggedIn" />
    <NavbarSecret v-if="loggedIn" /> -->
    <Navbar v-if="1<0"/>
    <NavbarSecret v-else />
    <slot />
    <Subcribe />
    <Footer />
    <Navbar v-if="!loggedIn" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NavbarSecret from "../components/NavbarSecret.vue";
import Footer from "../components/Footer.vue";
import Subcribe from "../components/Subcribe.vue";
import { mapState } from "vuex";

export default {
  components: {
    Navbar,
    Subcribe,
    Footer,
    NavbarSecret,
  },
  computed: {
    ...mapState(["loggedIn"]),
  },
};
</script>

<style></style>
