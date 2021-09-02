<template>
  <div class="nav-admin">
    <router-link to="#" class="nav-res"
      ><i class="fas fa-bars"></i
    ></router-link>
    <div class="dashboard-container d-flex">
      <div class="navbar-item pull-left"><h3 class="title">Dashboard</h3></div>
      <ul class="nav navbar-nav pull-right list-item d-flex">
        <li class="nav-item search d-flex align-items-center">
          <router-link to="#" class="icon-funct"
            ><i class="fas fa-search"></i
          ></router-link>
          <div class="form-search mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search projects..."
            />
            <span class="input-group-btn"
              ><button type="submit" class="btn white b-a no-shadow">
                <i class="fa fa-search"></i></button
            ></span>
          </div>
        </li>
        <li class="nav-item d-flex align-items-center">
          <router-link to="#" class="icon-funct"
            ><i class="fas fa-bell"></i
          ></router-link>
        </li>
        <li class="nav-item">
          <router-link to="#">
            <div class="avatar w-32">
              <img
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/215077248_1749774878556646_4400053315969143099_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=fT4fVPeU9GQAX-v3SYm&tn=0JHcSNsMh4wEUipr&_nc_ht=scontent.fsgn2-2.fna&oh=96e0739985c3bec457039bd7257fd11a&oe=61097E38"
                alt=""
              />
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavAdmin",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";
.w-32 {
  width: 32px;
  height: 32px;
}
.nav-admin {
  width: 100%;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  .nav-res {
    padding: 0px 2em;
    display: none;
  }
  .dashboard-container {
    width: 100%;
    justify-content: space-between;
    .title {
      font-weight: 600;
      cursor: pointer;
      font-family: $font-1;
    }
    .nav-list {
      background: red;
    }
    .list-item {
      float: right;
      border: inherit;
      display: flex;
      flex-direction: row !important;
      .nav-item {
        margin-right: 20px;
        .icon-funct {
          padding: 0;
          line-height: 1rem;
          white-space: nowrap;
          color: #2c3e50 !important;
          font-size: 18px;
          font-size: 200;
        }
        .avatar {
          img {
            width: 100%;
            object-fit: contain;
            border-radius: 500px;
          }
        }
      }
      .search {
        position: relative;
        .form-search {
          padding: 20px;
          width: 240px;
          background: #fff;
          position: absolute;
          top: 40px;
          border: 1px solid #ced4da;
          border-radius: 5px;
          left: -200px;
          background: aqua;
          display: flex;
          display: none;
          input {
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 0px !important;
          }
          input:focus {
            box-shadow: none !important;
          }
          span {
            border-top-right-radius: 1px solid 0.25rem;
            border-bottom-right-radius: 1px solid 0.25rem;
            border: 1px solid #ced4da;
            border-top-right-radius: 0.25rem;
            border-bottom-right-radius: 0.25rem;
          }
        }
      }
    }
  }
}
</style>
