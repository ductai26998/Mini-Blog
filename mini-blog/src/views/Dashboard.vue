<template>
  <div class="dashboard">
    <NavAdmin />
    <h1>This is dashboard</h1>
  </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue";
export default {
  components: {
    NavAdmin,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  width: 100%;
}
</style>
