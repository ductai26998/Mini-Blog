<template>
  <div class="wrapper">
    <div class="register-container">
      <div class="register-container__left">
        <h3 class="title">Moose</h3>
        <h5 class="welcome">Join our family</h5>
        <p>Sed us massa vehicula esta justo sit amet,ascummsan nisi</p>
        <button type="button" class="btn btn-login btn-primary">
          <i class="fab fa-facebook-f"></i> Login with Facebook
        </button>
        <p class="text-center">Or</p>
        <form action="">
          <label for="username">Full name</label>
          <input type="text" name="" id="" placeholder="Duyen" />
          <label for="username">Email address</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="truongduyen@gmail.com"
          />
          <label for="username">Username</label>
          <input type="text" name="" id="" placeholder="Duyen ku te" />
          <label for="password">Password</label>
          <input type="password" name="" id="" placeholder="sdsdsdsd" />
          <div class="policy">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <p>
              I don not wish to receive news and promotions from Moose. Company
              by email.
            </p>
          </div>
          <div class="submit">
            <button type="submit" class="btn btn-submit btn-primary">
              Get Start
            </button>
          </div>
        </form>
        <div class="login-account text-center">
          Already have a account? <router-link to="/auth/login">Login</router-link>
        </div>
      </div>
      <div class="register-container__right"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scopred>
.wrapper {
  background-image: url("https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/31507603_1500327223411862_4638707908249387008_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=19026a&_nc_ohc=JXL0kLfRd50AX8wEAgN&_nc_ht=scontent.fsgn2-4.fna&oh=8948367be9e7214adb401be68d809feb&oe=61254A01");
  background-size: cover;
  position: relative;
  z-index: 1;
  .register-container {
    margin: 5vh 20vw;
    display: flex;
    flex-direction: row;
    background: #fff;
    border-radius: 20px;
    overflow: hidden;
  }
}
.wrapper * {
  z-index: 3;
}
.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.8;
  z-index: 2;
}
.register-container__left {
  width: 50%;
  height: 90vh;
  background: #fff;
  padding: 10px 30px;
  .title {
    font-weight: 600;
  }
  .welcome {
    font-weight: 400;
    line-height: 24px;
    color: black;
    margin-top: 10px;
  }
  p {
    font-size: 15px;
    margin: 0px!important;
  }
  .btn-login {
    margin-bottom: 10px;
    width: 100%;
    border-radius: 0% !important;
    background-color: #4065b4 !important;
    i {
      background: #fff;
      padding: 5px;
      color: #4065b4;
      margin-right: 3px;
    }
  }
  .btn-login:focus {
    box-shadow: none !important;
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      text-align: left;
      margin-top: 10px;
      color: black;
      font-weight: 600;
    }
    input {
      border: 1px solid rgb(172, 169, 169);
      outline: none;
      padding: 5px;
      padding-left: 10px;
    }
    .policy {
      margin-top: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      p {
        margin-left: 10px;
      }
    }
    .btn-submit{
      background: #fd6141;
      width: 100%;
      border:none;
      outline: none;
      border-radius: 0%;
    }
    .btn-submit:hover{
       opacity: 0.8;
    }
    .btn-submit:focus{
      box-shadow: none!important;
    }
  }
  .login-account{
    margin-top: 10px;
  }
  .login-account a{
    margin-left: 5px;
  }
}
.register-container__right {
  width: 50%;
  height: 80vh;
  background-image: url("https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/31318000_1497099090401342_867618865926897664_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=19026a&_nc_ohc=vM4LEEyCH3IAX987BjR&_nc_oc=AQlUdMr93DWyEjRYd_K9EdHSqfFLEbej4HCl-6sKLkvJY_AvrJ4ACcjxfVisHaF9aMs&_nc_ht=scontent.fsgn2-6.fna&oh=83d4867bc7c155d4abf608fc33a23bb2&oe=6124AC31");
  background-size: 100%;
}
</style>
