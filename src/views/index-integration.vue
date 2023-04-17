<script>
import { ArrowUpIcon,ArrowRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-developer component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div>
    <Navbar :nav-light="true"/>

        <!-- Hero Start -->
        <section class="bg-home bg-primary d-flex align-items-center" style="background: url('images/integration/bg.png') center center; height: auto;" id="home">
            <div class="container">
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <div class="title-heading">
                            <span class="badge badge-pill badge-success">Integration</span>
                            <h4 class="heading text-white title-dark my-3">The future is too <br> <b>Interesting</b> and to be <b>Predictable</b>.</h4>
                            <p class="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                            <div class="subcribe-form mt-4 pt-2">
                                <form>
                                    <div class="form-group">
                                        <input type="url" id="url" class="border bg-white rounded-lg" style="opacity: 0.85;" required placeholder="https://themesbrand.com/">
                                        <button type="submit" class="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-md-10">
                                <div class="home-dashboard">
                                    <img src="images/integration/hero.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container--> 
        </section><!--end section-->
        <div class="position-relative">
            <div class="shape integration-hero overflow-hidden text-light"></div>
        </div>
        <!-- Hero End -->

        <!-- Partners start -->
        <section class="mt-5 pt-md-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/google.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                    
                    <div class="col-lg-2 col-md-2 col-6 text-center py-4 py-sm-0">
                        <img src="images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Partners End -->
        
        <!-- Start -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="media features feature-clean core-feature rounded shadow p-4">
                                    <div class="icons text-primary text-center mx-auto">
                                        <i class="uil uil-shield d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div class="media-body ml-4">
                                        <a href="javascript:void(0)" class="title text-dark h5">Security</a>
                                        <p class="text-muted mt-2 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div><!--end col-->

                            <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div class="media features feature-clean core-feature rounded shadow p-4">
                                    <div class="icons text-primary text-center mx-auto">
                                        <i class="uil uil-atom d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div class="media-body ml-4">
                                        <a href="javascript:void(0)" class="title text-dark h5">Reliability</a>
                                        <p class="text-muted mt-2 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div><!--end col-->

                            <div class="col-md-6 mt-4 pt-2">
                                <div class="media features feature-clean core-feature rounded shadow p-4">
                                    <div class="icons text-primary text-center mx-auto">
                                        <i class="uil uil-medal d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div class="media-body ml-4">
                                        <a href="javascript:void(0)" class="title text-dark h5">Compliance</a>
                                        <p class="text-muted mt-2 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div><!--end col-->

                            <div class="col-md-6 mt-4 pt-2">
                                <div class="media features feature-clean core-feature rounded shadow p-4">
                                    <div class="icons text-primary text-center mx-auto">
                                        <i class="uil uil-padlock d-block rounded h3 mb-0"></i>
                                    </div>
                                    <div class="media-body ml-4">
                                        <a href="javascript:void(0)" class="title text-dark h5">Privacy</a>
                                        <p class="text-muted mt-2 mb-0">Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.</p>
                                    </div>
                                </div>
                            </div><!--end col-->

                            <div class="col-12 mt-4 pt-2 text-center">
                                <a href="javascript:void(0)" class="text-primary h6">Explore features  <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                            </div>
                        </div><!--end row-->
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
            
            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6">
                        <img src="images/integration/interactiondesign-amico.svg" class="img-fluid" alt="">
                    </div><!--end col-->

                    <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title ml-lg-5">
                            <h4 class="title mb-4">Integrate with monitoring & alerting tools</h4>
                            
                            <h5><i class="uil uil-arrow-circle-right text-primary mr-1"></i> Monitoring tool integrations</h5>
                            <p class="text-muted para-desc ml-4 pl-2">Integrate Statuspage with DataDog, New Relic, Librato or Pingdom to update your page as soon as an issue is detected.</p>
                            <h5><i class="uil uil-arrow-circle-right text-primary mr-1"></i> Alerting tool integrations</h5>
                            <p class="text-muted para-desc ml-4 pl-2">Integrate Statuspage with Opsgenie, PagerDuty, VictorOps, or xMatters to update status directly from your alerting app.</p>
                            <h5><i class="uil uil-arrow-circle-right text-primary mr-1"></i> Automation via API or email</h5>
                            <p class="text-muted para-desc ml-4 pl-2">Use our REST API to programmatically update your status page by writing your own integration, or automatically update the status of components by triggering en email with a subject line containing the words “UP” or “DOWN”.</p>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-12">
                        <a href="javascript:void(0)">
                            <div class="media key-feature align-items-center p-3 rounded shadow">
                                <img src="images/job/Circleci.svg" class="avatar avatar-ex-sm" alt="">
                                <div class="media-body ml-3">
                                    <h4 class="title mb-0 text-dark">CircleCi</h4>
                                    <p class="text-muted mb-0">Api Integration</p>    
                                </div>
                            </div>
                        </a>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <a href="javascript:void(0)">
                            <div class="media key-feature align-items-center p-3 rounded shadow">
                                <img src="images/job/Codepen.svg" class="avatar avatar-ex-sm" alt="">
                                <div class="media-body ml-3">
                                    <h4 class="title mb-0 text-dark">Codepen</h4>
                                    <p class="text-muted mb-0">Api Integration</p>    
                                </div>
                            </div>
                        </a>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <a href="javascript:void(0)">
                            <div class="media key-feature align-items-center p-3 rounded shadow">
                                <img src="images/job/Discord.svg" class="avatar avatar-ex-sm" alt="">
                                <div class="media-body ml-3">
                                    <h4 class="title mb-0 text-dark">Discard</h4>
                                    <p class="text-muted mb-0">Api Integration</p>    
                                </div>
                            </div>
                        </a>
                    </div><!--end col-->
                    
                    <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                        <a href="javascript:void(0)">
                            <div class="media key-feature align-items-center p-3 rounded shadow">
                                <img src="images/job/Eslint.svg" class="avatar avatar-ex-sm" alt="">
                                <div class="media-body ml-3">
                                    <h4 class="title mb-0 text-dark">Eslint</h4>
                                    <p class="text-muted mb-0">Api Integration</p>    
                                </div>
                            </div>
                        </a>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <div class="row align-items-center">
                    <div class="col-lg-5 col-md-6 order-1 order-md-2">
                        <img src="images/integration/1.png" class="img-fluid" alt="">
                    </div><!--end col-->

                    <div class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div class="section-title mr-lg-5">
                            <h4 class="title mb-4">Deliver your websites <br> faster, and better.</h4>
                            <p class="text-muted">You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.</p>
                            <ul class="list-unstyled text-muted">
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Digital Marketing Solutions for Tomorrow</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Our Talented & Experienced Marketing Agency</li>
                                <li class="mb-0"><span class="text-primary h5 mr-2"><i class="uil uil-check-circle align-middle"></i></span>Create your own skin to match your brand</li>
                            </ul>
                            <div class="mt-4">
                                <a href="javascript:void(0)" class="btn btn-primary">Read More  <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->

        <!-- Start -->
        <div class="container-fluid px-0">
            <div class="py-5 bg-footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-7">
                            <div class="section-title">
                                <div class="media">
                                    <i class="uil uil-mobile-android display-4 text-white title-dark"></i>
                                    <div class="media-body ml-md-4 ml-3">
                                        <h4 class="font-weight-bold text-light title-dark mb-1">Download our app now !</h4>
                                        <p class="text-white-50 mb-0">Build modern looking websites fast and easy using Landflow.</p>
                                    </div>
                                </div>
                            </div>
                        </div><!--end col-->

                        <div class="col-md-5 mt-4 mt-sm-0">
                            <div class="text-md-right ml-5 ml-sm-0">
                                <a href="javascript:void(0)" class="btn btn-primary mr-2 mr-lg-2 mr-md-0 my-2"><i class="uil uil-apple"></i> App Store</a>
                                <a href="javascript:void(0)" class="btn btn-soft-primary my-2"><i class="uil uil-google-play"></i> Play Store</a>
                            </div>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end container-->
            </div><!--end div-->
        </div><!--end container-->
        <!-- End -->

    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>