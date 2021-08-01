<template>
  <div class="post-container">
    <div class="post-container__header">
      <div class="page-logo"><span class="logo-text">moose</span></div>
      <h3 class="post-title">Post to blogs</h3>
    </div>
    <form class="post-container__form">
      <div class="blog-title">
        <label for="">Title: </label>
        <input class="input-title" type="text" placeholder="Your blog title" />
      </div>
      <div class="post-option">
        <button class="post-option__content"></button>
        <button class="post-option__image"></button>
      </div>
      <div class="post-box">
        <textarea
          name=""
          id=""
          class="post-box__text"
          cols="30"
          rows="13"
        ></textarea>
        <div class="post-box__send">
          <button type="submit" class="btn-send"></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.post-container {
  display: flex;
  flex-direction: column;
}
.post-container__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  .post-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    padding-left: 10px;
    font-family: $font-1;
  }
  .page-logo {
    height: 40px;
    width: 40px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-text {
      font-size: 12px;
      font-weight: 600;
      font-family: $font-1;
    }
  }
}
.post-container__form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  .blog-title {
    label {
      font-family: $font-1;
      margin-right: 10px;
    }
    .input-title {
      background-color: rgb(224, 224, 224);
      border: none;
      outline: none;
      padding: 5px;
      color: rgb(107, 107, 107);
      border-bottom: solid 1px #fff;
      border-radius: 8px;
    }
    ::placeholder {
      color: rgb(155, 153, 153);
      opacity: 0.7;
    }
    .input-title:focus {
      border-bottom: solid 1px rgb(3, 211, 3);
      border-radius: 0;
      background-color: #fff;
    }
  }
  .post-option {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 16px;
  }
}
.post-option__content {
  border: none;
  padding: 5px;
  height: 35px;
  width: 35px;
  background-size: 100%;
  background-image: url(../assets/icon/pencil.svg);
}
.post-option__image {
  border: none;
  padding: 5px;
  height: 35px;
  width: 35px;
  margin-left: 20px;
  background-size: 100%;
  background-image: url(../assets/icon/picture.svg);
}
.post-box {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
}
.post-box::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 20px;

  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;

  border-bottom: 15px solid rgb(224, 224, 224);
}
.post-box__text {
  background-color: rgb(224, 224, 224);
  border: none;
  outline: none;
  padding: 10px;
  color: rgb(71, 71, 71);
  border-radius: 8px;
}
.post-box__send {
  display: flex;
  justify-content: flex-end;
  .btn-send {
    border: none;
    padding: 5px;

    height: 30px;
    width: 30px;
    margin: 5px 20px;
    background-size: 100%;
    background-image: url(../assets/icon/send.svg);
  }
}
</style>
