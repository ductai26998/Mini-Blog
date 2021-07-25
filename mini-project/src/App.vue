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
import defaultLayout from "./layout/default.vue"
import unauthLayout from "./layout/unauth.vue"
import secretLayout from "./layout/secret.vue"
export default {
  components:{
    defaultLayout,
    unauthLayout,
    secretLayout
  },
  computed:{
    layout(){
      if (this.$route.meta.layout === "unauth") return "unauthLayout";
      else if (this.$route.meta.layout === "secret") return "secretLayout";
      else return "defaultLayout";
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

</style>
