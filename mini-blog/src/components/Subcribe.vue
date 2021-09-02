<template>
    <div class="ftco-into ftco-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                    <h2>Subscribe to our Newsletter</h2>
                    <div class="row justify-content-center">
                        <div class="col-md-5">
                            <form action="#" class="subscribe-form">
                                <div class="form-group d-flex">
                                <input type="text" class="form-control" placeholder="Enter email address">
                                <input type="submit" value="Subscribe" class="submit px-3">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Subcribe",

}
</script>

<style scoped>
.ftco-section{
    padding: 7em 0;
    width: 100%;
    background-color: #f9faff !important;
    overflow: hidden;
}
h2{
    font-weight: 600;
    color: #313b44;
    margin-bottom: 20px;
}
.form-group input{
    background: transparent!important;
    border: 1px solid #313b44;
    color: #588da8!important;
    font-size: 16px;
    height: 50px;
    border-radius: 5px 0px 0px 5px;
}
.form-group .submit{
   color: #fff!important;
   background: #313b44!important;
   border-radius: 0px 5px 5px 0px;
   font-size: 16px;
}
.form-group input:focus{
    box-shadow: none!important;
}
</style>