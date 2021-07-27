<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco-navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="/">moose</router-link>
            <button class="navbar-toggler" @click="choice=!choice" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" :class="choice?'show':''">
            <ul class="navbar-nav ml-auto">
                <li><router-link class="nav-item active" to="/">Home</router-link></li>
                <li><router-link class="nav-item" to="/about">About</router-link></li>
                <li><router-link class="nav-item" to="/blogs">Blogs</router-link></li>
                <li><router-link class="nav-item" to="/auth/login">Login</router-link></li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
            choice: false,
        }
    }
}
</script>

<style scoped>
.navbar .container{
    width: 800px;
}
.ftco-navbar-light{
    background: #000000!important;
}
.ftco-navbar-light .navbar-brand{
    color: #fff!important;
}
.ftco-navbar-light .scroll .navbar-brand{
    color: #000000;
}
.ftco-navbar-light .navbar-nav .nav-item{
    color: #fff;
    border-left: none;
}
.ftco-navbar-light .navbar-toggler{
    color: rgba(255,255,255,0.5)!important;
}
.navbar-brand{
    color: #000000!important;
    padding: 1.5rem 0rem;
    font-weight: 700;
    font-size: 24px;
    line-height: 1;
    margin-bottom: 0;
    display: inline-block;
    margin-right: 1rem;
}
.navbar-collapse{
    display: flex;
    justify-content: flex-end;
}
.nav-item{
    font-size: 15px;
    padding: 1.5rem 20px;
    color: #000000;
    text-decoration: none;
    font-weight: 500;
    border-left: 1px solid rgba(255,255,255,0.2);
}
.active{
    color: #588da8!important;
}
.navbar-toggler{
    border: none;
    color: rgba(0,0,0,0.5)!important;
    border-color: rgba(0,0,0,0.5)!important;
    cursor: pointer;
    margin-right: 15px!important;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 0.1rem;
}
.navbar-toggler:focus{
    box-shadow: none!important;
}
.show{
    justify-content: flex-start;
}
</style>