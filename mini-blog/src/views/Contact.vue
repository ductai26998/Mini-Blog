<template>
  <div class="contact-container">
    <section class="hero-wrap mt-80 mb-80">
      <div class="container">
        <div class="row no-gutters align-items-center justify-content-center">
          <div class="col-md-9 text-center ftco-animate pt-5">
            <h1 class="mb-3 bread">Contact</h1>
            <p class="breadcrumbs">
              <span>
                <router-link to="/"
                  >Home <i class="fa fa-chevron-right"></i
                ></router-link>
              </span>
              <span>
                <router-link to="/"
                  >About <i class="fa fa-chevron-right"></i
                ></router-link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="ftco-contact mt-80 mb-40">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row mb-5 justify-content-center">
                <div class="col-md-10">
                  <div class="row">
                    <div class="col-md-3">
                      <div class="dbox w-100 text-center">
                        <div
                          class="
                            icon
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                        >
                          <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="text">
                          <p>
                            <span>Address:</span> 198 West 21th Street, Suite
                            721 New York NY 10016
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dbox w-100 text-center">
                        <div
                          class="
                            icon
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                        >
                          <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="text">
                          <p><span>Phone:</span> + 1235 2355 98</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dbox w-100 text-center">
                        <div
                          class="
                            icon
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                        >
                          <i class="far fa-paper-plane"></i>
                        </div>
                        <div class="text">
                          <p><span>Email:</span> truongduyen@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="dbox w-100 text-center">
                        <div
                          class="
                            icon
                            d-flex
                            align-items-center
                            justify-content-center
                          "
                        >
                          <i class="fas fa-globe-asia"></i>
                        </div>
                        <div class="text">
                          <p><span>Website:</span> yoursite.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row no-gutters mb-5">
                <div class="col-md-7 p-0">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Contact Us</h3>
                    <form action="" id="contactForm" class="contactForm">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="name" class="label">Full Name</label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="name" class="label">Full Name</label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="subject">Subject</label>
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="#">Message</label>
                            <textarea
                              name="message"
                              class="form-control text-area"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Messager"
                              class="btn btn-primary btn-submit"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 p-0">
                  <GoogleMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
export default {
  components: {
    GoogleMap,
  },
};
</script>

<style lang="scss" scoped>
.mt-80 {
  margin-top: 80px;
}
.mb-80 {
  margin-bottom: 80px;
}
.mb-40 {
  margin-bottom: 40px;
}
.p-0 {
  padding: 0px;
}
.hero-wrap {
  .bread {
    font-weight: 600;
    font-size: 48px;
    color: #313b44;
  }
  .breadcrumbs {
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: 400;
    text-transform: uppercase;
    span {
      color: rgba(0, 0, 0, 0.4);
      margin-right: 8px;
      a {
        color: rgba(0, 0, 0, 0.4) !important;
        text-decoration: none !important;
        i {
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
  }
}
.ftco-contact {
  .dbox {
    margin-bottom: 25px;
    width: 100%;
    .icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #588da8;
      margin: 0 auto;
      margin-bottom: 20px;
      i {
        font-size: 20px;
        color: #fff;
      }
    }
    .text {
      width: 100%;
      p {
        margin-bottom: 0px !important;
        span {
          font-weight: 500;
          color: #000000;
        }
      }
    }
  }
}
.wrapper {
  .contact-wrap {
    text-align: left;
    box-shadow: 0px 2px 25px -16px rgb(0 0 0 / 26%);
    h3 {
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 400;
    }
    form {
      #message {
        text-align: left;
        padding-left: 0px !important;
        height: 100px;
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .form-group {
        margin-bottom: 1rem;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
        label {
          color: #588da8;
          text-emphasis: uppercase;
          font-size: 12px;
          font-weight: 600;
        }
        .form-control {
          height: 45px;
          background: #fff;
          color: rgba(0, 0, 0, 0.8);
          font-size: 14px;
          border-radius: 2px;
          box-shadow: none !important;
        }
        .form-control:focus {
          border-color: #588da8 !important;
        }
        input {
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 10px 0px;
        }
        .btn-submit {
          background: #588da8 !important;
          border: 1px solid #588da8;
          color: #fff !important;
          padding: 6px 12px;
        }
      }
    }
  }
}
#map {
  width: 100%;
  height: 100%;
  background: red;
}
</style>
