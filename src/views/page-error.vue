<script>
import Switcher from "@/components/switcher";
import {
    HomeIcon
} from 'vue-feather-icons';

/**
 * Page-error component
 */
export default {
    data() {
        return {}
    },
    components: {
        Switcher,
        HomeIcon
    }
}
</script>

<template>
<div>
    <div class=" back-to-home rounded d-none d-sm-block">
        <router-link to="/" class="btn btn-icon btn-soft-primary">
            <home-icon class="icons"></home-icon>
        </router-link>
    </div>

    <!-- ERROR PAGE -->
    <section class=" d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 text-center">
                    <img src="images/404logo.png" style="max-width:70%" class="img-fluid" alt="">
                   
                  
                    <div class="text-capitalize text-dark mb-2 error-page">Unauthorized Access Attempt <b class="text-danger mdi mdi-cancel"></b></div>
                    
                    
                    <p class="text-muted para-desc mx-auto">You are not authorized to view this page . To access this page please <router-link to="/login" class="text-primary font-weight-bold">Login</router-link> if you have an account or <router-link to="/signup" class="text-primary font-weight-bold">SignUp</router-link> to create new account .</p>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row mb-5">
                <div class="col-md-12 text-center">
                    
                    <router-link to="/" class="btn btn-secondary mt-4 ml-2">Go To Home Page</router-link>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- ERROR PAGE -->
   <!--  <Switcher /> -->
</div>
</template>
