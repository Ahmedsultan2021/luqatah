<script>
import Switcher from "@/components/switcher";
import {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    HomeIcon,
    UserIcon,
    UserCheckIcon,
    MailIcon,
    KeyIcon
} from 'vue-feather-icons';
/**
 * Auth-signup component
 */
export default {
    data() {
        return {}
    },
    components: {
        Switcher,
        FacebookIcon,
        InstagramIcon,
        TwitterIcon,
        LinkedinIcon,
        HomeIcon,
        UserIcon,
        UserCheckIcon,
        MailIcon,
        KeyIcon
    }
}
</script>

<template>
<div>
    <!-- Loader -->
    <div class="back-to-home rounded d-none d-sm-block">
        <router-link to="/" class="btn btn-icon btn-soft-primary">
            <home-icon class="icons"></home-icon>
        </router-link>
    </div>

    <!-- Hero Start -->
    <section class="bg-auth-home d-table w-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-6">
                    <div class="mr-lg-5">
                        <img src="images/user/signup.svg" class="img-fluid d-block mx-auto" alt="">
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                    <div class="card shadow rounded border-0">
                        <div class="card-body">
                            <h4 class="card-title text-center">Signup</h4>
                            <form class="login-form mt-4">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group ">
                                            <label>First name <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                            <user-icon class="fea icon-sm icons"></user-icon>
                                            <input type="text" class="form-control pl-5" placeholder="First Name" name="s" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group ">
                                            <label>Last name <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                            <user-check-icon class="fea icon-sm icons"></user-check-icon>
                                            <input type="text" class="form-control pl-5" placeholder="Last Name" name="s" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group ">
                                            <label>Your Email <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                            <mail-icon class="fea icon-sm icons"></mail-icon>
                                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group ">
                                            <label>Password <span class="text-danger">*</span></label>
                                            <div class="position-relative">
                                            <key-icon class="fea icon-sm icons"></key-icon>
                                            <input type="password" class="form-control pl-5" placeholder="Password" required="">
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                <label class="custom-control-label" for="customCheck1">I Accept <a href="#" class="text-primary">Terms And Condition</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <button class="btn btn-primary btn-block">Register</button>
                                    </div>
                                      <div class="col-lg-12 mt-4 text-center">
                                            <h6>Or Signup With</h6>
                                            <div class="row">
                                                <div class="col-6 mt-3">
                                                    <a href="javascript:void(0)" class="btn btn-block btn-light"><i class="mdi mdi-facebook text-primary"></i> Facebook</a>
                                                </div><!--end col-->
                                                
                                                <div class="col-6 mt-3">
                                                    <a href="javascript:void(0)" class="btn btn-block btn-light"><i class="mdi mdi-google text-danger"></i> Google</a>
                                                </div><!--end col-->
                                            </div>
                                        </div><!--end col-->
                                    <div class="mx-auto">
                                        <p class="mb-0 mt-3"><small class="text-dark mr-2">Already have an account ?</small>
                                            <router-link to="/auth-login" class="text-dark font-weight-bold">Sign in</router-link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->
    <Switcher />
</div>
</template>
