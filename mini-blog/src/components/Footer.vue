<template>
    <footer class="ftco-footer">
        <div class="container">
            <div class="row mb-5 gy-4 justify-content-between">
                <div class="col-sm-12 col-md-4">
                    <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2 logo"><router-link to="/">Moose</router-link></h2>
                    <p class="header-text">Far far away, behind the word mountains, far from the countries.</p>
                    <ul class="ftco-footer-social list-unstyled mt-2">
                        <li class="ftco-animate fadeInUp ftco-animated">
                            <router-link to="/">
                               <i class="fab fa-twitter"></i>
                            </router-link>
                        </li>
                        <li class="ftco-animate fadeInUp ftco-animated">
                            <router-link to="/">
                                <i class="fab fa-facebook-f"></i>
                            </router-link>
                        </li>
                        <li class="ftco-animate fadeInUp ftco-animated">
                            <router-link to="/">
                               <i class="fab fa-instagram"></i>
                            </router-link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div class="col-sm-12 col-md-2">
                    <div class="ftco-footer-widget mb-4 ml-md-4">
                        <h2 class="ftco-heading-2">Info</h2>
                        <ul class="list-unstyled list-info">
                            <li><router-link to="/"><i class="fas fa-chevron-right"></i>Blog</router-link></li>
                            <li><router-link to="/"><i class="fas fa-chevron-right"></i>Carrer</router-link></li>
                            <li><router-link to="/"><i class="fas fa-chevron-right"></i>Team</router-link></li>
                            <li><router-link to="/"><i class="fas fa-chevron-right"></i>Team</router-link></li>
                        </ul>
                    </div>
                </div>
                 <div class="col-sm-12 col-md-4">
                    <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2 logo"><router-link to="/">Have a Questions ?</router-link></h2>
                    <ul class="list-info list-question list-unstyled">
                        <li><router-link to="/"><i class="fas fa-map"></i><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></router-link></li>
                        <li><router-link to="/"><i class="fas fa-phone-alt"></i><span class="text">+2 392 3929 210</span></router-link></li>
                        <li><router-link to="/"><i class="fas fa-paper-plane"></i><span class="text">info@yourdomain.com</span></router-link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid px-0 py-5 bg-black">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="mb-0 text-coppy">
                            Copyright ©2021 All rights reserved | This template is made with <i class="fas fa-heart"></i>  by Colorlib
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
.ftco-footer{
    font-size: 16px;
    padding: 6em 0 0 0 ;
    background: #141b25;
    color: rgba(255,255,255,0.9);
    text-align: left;
}
.ftco-footer p{
    color: rgba(255,255,255,0.9);
    font-size: 16px;
    line-height: 25px;
}
.ftco-footer-widget h2{
    color: #fff;
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 600;
}
.ftco-footer-widget h2 a{
    color: #fff;
}
.header-text{
    margin-bottom: 1rem;
}
a{
    text-decoration: none;    
}
.ftco-footer-social li{
    list-style: none;
    margin: 0 10px 0 0;
    display: inline-block;
}
.ftco-footer-social li a {
    background: #588da8;
    padding: 12px 15px;
    border-radius: 50%;
    
}
.ftco-footer-social li a i{
    color: #fff!important;
}
.list-info li{
    margin-bottom: 15px;
}
.list-info li a{
    color: rgba(255,255,255,0.7)!important;
    display: flex;
}
.list-info li i{
    font-size: 14px;
    color: rgba(255,255,255,0.7);
    margin-right: 0.5rem!important;
}
.list-question li a i{
    padding-right: 20px;
    font-size: 18px;
    padding-top: 2px;
    color: #588da8!important;
}
.list-question li a .text{
    font-size: 14px;
}
.text-coppy{
    color: rgba(255,255,255,0.5)!important;
}
</style>