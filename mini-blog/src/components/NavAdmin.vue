<template>
  <div class="nav-admin">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-8 col-md-8">
          <div class="input-area d-flex">
            <div class="input-item">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
            <div
              class="
                icon-setting
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="fab fa-facebook-f"></i>
            </div>
            <div
              class="
                icon-setting
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="fab fa-facebook-f"></i>
            </div>
            <div
              class="
                icon-setting
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="fab fa-facebook-f"></i>
            </div>
            <div
              class="
                icon-setting
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <i class="fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4">
          <div class="info-area d-flex">
            <div class="icon-setting icon-control">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="icon-setting icon-control">
              <i class="fab fa-facebook-f"></i>
            </div>
            <div class="info d-flex align-items-center">
              <p class="name">Duyen Truong</p>
              <img
                src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/223465444_4349030935157786_6151070778028747504_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=a3ya97fxb6wAX9pwXbG&_nc_ht=scontent.fsgn2-3.fna&oh=287c1657752e959795b747579d96bf58&oe=612A2327"
                alt=""
              />
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
