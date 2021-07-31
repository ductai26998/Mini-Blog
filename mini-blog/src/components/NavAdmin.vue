<template>
  <div class="nav-admin">
    <div class="container">
      <div class="row">
        <div class="col-8 col-md-8">
          <div class="input-area d-flex">
            <div class="input-item">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <i class="fab fa-facebook-f"></i>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div class="admin-info d-flex">
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
            <div class="icon-control"><i class="fab fa-facebook-f"></i></div>
            <div class="infor">
              <h6 class="name">Duyen Truong</h6>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
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
  .input-item {
      
    .form-control {
      width: fit-content;
      border-radius: 20px;
      padding-left: 10px;
      position: relative;
    }
  }
}
</style>
