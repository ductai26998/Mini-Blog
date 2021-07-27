<template>
  <div class="about-container">
    <section class="hero-wrap mt-80 mb-80">
      <div class="container">
        <div class="row no-gutters align-items-center justify-content-center">
          <div class="col-md-9 text-center ftco-animate pt-5">
            <h1 class="mb-3 bread">About</h1>
            <p class="breadcrumbs">
              <span>
                <router-link to="/">Home <i class="fa fa-chevron-right"></i></router-link>
              </span>
              <span>
                <router-link to="/">About <i class="fa fa-chevron-right"></i></router-link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero-wrap mt-80 mb-80">
      <div class="container">
        <div class="row no-gutters justify-content-center align-items-center">
          <div class="col-md-10 py-5">
            <div class="row pb-md-5">
              <div class="col-md-4">
                <div class="author text-start">
                  <img src="https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.6435-9/215157669_2839741186278818_2112320654823048520_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7nZkq1MGXBEAX_rxjpa&_nc_ht=scontent.fpnh22-2.fna&oh=fc4b1fc1f51bfba358dcf4af24613355&oe=6125E0B4" alt="">
                  <div class="text">
                    <h3>Giller Moose</h3>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <ul class="ftco-footer-social list-unstyled mt-2">
                      <li class="ftco-animate">
                        <router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
                      </li>
                      <li class="ftco-animate">
                        <router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
                      </li>
                      <li class="ftco-animate">
                        <router-link to="/"><i class="fab fa-facebook-f"></i></router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-8 author-details text-start">
                <h2>Hello! I'm Giller Moose, I Provide Newest News Update About Digital </h2>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in <a href="#">Bookmarksgrove</a> right at the coast of the Semantics, a large language ocean.</p>
                <div class="mt-5">
                  <h3>How I Work</h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in <a href="#">Bookmarksgrove</a> right at the coast of the Semantics, a large language ocean.</p>
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
export default {
  name: "About",
}
</script>
<style scoped>
.mt-80{
  margin-top: 80px;
}
.mb-80{
  margin-bottom: 80px;
}
.hero-wrap .bread{
  font-weight: 600;
  font-size: 48px;
  color: #313b44;
}
.hero-wrap .breadcrumbs{
  font-size: 13px;
  margin-bottom: 10px;
  font-weight: 400;
  text-transform: uppercase;
}
.hero-wrap .breadcrumbs span{
  color:rgba(0,0,0,0.4);
  margin-right: 8px;
}
.hero-wrap .breadcrumbs span a{
  color: rgba(0,0,0,0.4)!important;
  text-decoration: none!important;
}
.hero-wrap .breadcrumbs span a i{
  font-size: 12px;
  margin-left: 5px;
}
.author img{
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.author .text h3{
  font-weight: 700;
  font-size: 18px;
  color: #313b44;
}
.author .text p{
  font-size: 16px;
  line-height: 1.5;
}
.author .ftco-footer-social li{
  margin: 0 10px 0 0;
  display: inline-block;
}
.author .ftco-footer-social li a{
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  color: #fff;
  border-radius: 50%;
  position: relative;
  background: #588da8;
}
.author-details h2{
  font-weight: 500;
  line-height: 1.5;
  color: rgba(0,0,0,0.8);
  margin-bottom: 20px;
}
.author-details p{
  font-size: 18px;
  line-height: 1.5;
}
.author-details a{
  color: #588da8!important;
}
</style>