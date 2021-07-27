<template>
    <div class="default-inner">
        <Navbar/>
        <slot/>
        <Subcribe/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Subcribe from "../components/Subcribe.vue"
export default {
    components:{
        Navbar,
        Subcribe,
        Footer
    },
}
</script>

<style>

</style>
