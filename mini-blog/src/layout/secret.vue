<template>
    <div class="default-inner">
        <NavbarSecret/>
        <slot/>
        <Subcribe/>
        <Footer/>
    </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import Subcribe from "../components/Subcribe.vue"
import NavbarSecret from "../components/NavbarSecret.vue"

export default {
    components:{
        Subcribe,
        Footer,
        NavbarSecret,
    },
}
</script>

<style>

</style>
