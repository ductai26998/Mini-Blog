<template>
  <div class="nav-admin">
  </div>
</template>

<script>
export default {
  name: "NavAdmin",
};
</script>

<style lang="scss" scoped>
.nav-admin {
  width: 100%;
  background: yellow;
  padding: 1em 0em;
  display: flex;
  align-items: center;
  .input-item {
    position: relative;
    margin-right: 20px;
    .form-control {
      width: fit-content;
      border-radius: 20px;
      padding-left: 15px;
      position: relative;
    }
  }
  .icon-setting i {
    padding: 8px 15px;
    border-radius: 50%;
    margin-right: 5px;
    background: #fff;
    color: #abb4b7;
  }
  .info-area {
    .icon-control {
      margin-right: 20px;
      position: relative;
      padding-right: 10px;
      border-right: 2px solid #eff4fb;
    }
    .info {
      img {
        width: 50px;
        object-fit: contain;
        border-radius: 50%;
      }
    }
  }
}
</style>
