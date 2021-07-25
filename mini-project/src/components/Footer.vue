<template>
    <footer class="ftco-footer">
        <div class="container">
            <div class="row mb-5 justify-content-between">
                <div class="col-sm-12 col-md-4">
                    <div class="ftco-footer-widget mb-4">
                    <h2 class="ftco-heading-2 logo"><router-link to="/">Moose</router-link></h2>
                    <p>Far far away, behind the word mountains, far from the countries.</p>
                    <ul class="ftco-footer-social list-unstyled mt-2">
                        <li class="ftco-animate fadeInUp ftco-animated">
                            <router-link to="/">
                                <i class="fab fa-facebook-f"></i>
                            </router-link>
                        </li>
                    </ul>
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
}
</style>