<template>
  <div class="personal-container">
    <div class="ava-container">
      <div class="ava-cover">
        <div class="ava-img">
          <img
            src="https://preview.colorlib.com/theme/onlineedu/assets/img/gallery/xteam3.png.pagespeed.ic.ZjKltUw-pd.webp"
            alt=""
          />
        </div>
      </div>
      <div class="person-name">Trương Mỹ Duyên</div>
      <hr style="width: 60vw" class="m-auto" />
      <div class="manager">
        <ul class="manage-info">
          <li class="info active"><p>Bài viết</p></li>
          <li class="info"><p>Thông tin cá nhân</p></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/style.scss";
@mixin font-cover {
  font-size: 15px;
  font-weight: 400;
  color: #1c1e21;
  line-height: 1.34;
  background-color: #18191a;
}
@mixin font-facebook {
  color: #e4e6eb;
  line-height: 1.1875;
  text-align: center;
  background: #242526;
}
.personal-container {
  width: 100vw;
  .ava-container {
    width: 100%;
    height: 70vh;
    @include font-facebook();
    .ava-cover {
      padding-top: 20%;
      @include font-cover();
      width: 60vw;
      height: 20px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      margin: auto;
      position: relative;
      .ava-img {
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 140px;
          object-fit: contain;
          border-radius: 50%;
        }
      }
    }
    .person-name {
      margin: 2% 0%;
      font-size: 1.5rem;
      font-weight: 700;
    }
    hr {
    }
    .manager {
      width: 60vw;
      margin: auto;
      .manage-info {
        list-style: none;
        display: flex;
        margin-top: 10px;
        padding-left: 0px !important;
        li {
          padding-right: 16px;
          padding-left: 16px;
          min-height: 16px;
          font-size: 14px;
          text-align: center;
        }
        li.active {
          color: #2292ef;
          border-bottom: 2px solid #2292ef;
        }
      }
    }
  }
}
</style>
