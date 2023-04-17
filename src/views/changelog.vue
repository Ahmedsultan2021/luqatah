<script>
import {
    ArrowUpIcon,
    ArrowRightCircleIcon,
    CornerDownRightIcon
} from 'vue-feather-icons';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Changelog-list
 */
export default {
    data() {
        return {

        }
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        ArrowUpIcon,
        ArrowRightCircleIcon,
        CornerDownRightIcon
    }
}
</script>

<template>
<div>
    <Navbar />
 <!-- Hero Start -->
        <section class="bg-half bg-light d-table w-100">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 text-center">
                        <div class="page-next-level">
                            <h4 class="title"> Changelog </h4>
                            <div class="page-next">
                                <nav aria-label="breadcrumb" class="d-inline-block">
                                    <ul class="breadcrumb bg-white rounded shadow mb-0">
                                        <li class="breadcrumb-item"><router-link tag="a" to="/">Landrick</router-link></li>
                                        <li class="breadcrumb-item"><a href="#">Docs</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Changelog</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div> <!--end container-->
        </section><!--end section-->
        <!-- Hero End -->

  
        <!-- Shape Start -->
        <div class="position-relative">
            <div class="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <!--Shape End-->
        
        <!-- Changelog Start -->
        <section class="section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <div class="p-4 shadow rounded border">
                            <!-- v2.6.1 -->
                            <h5>Version <span class="text-success">2.6.1</span> - 10th February 2021 <span class="badge text-white badge-pill bg-danger ml-2">Latest Updated</span></h5>
                            <ul class="list-unstyled">
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Fixed some issues in shop pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Fixed some issues in shop pages (Menu)</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Update :</span> Update Latest Bootstrap v4.5.3</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Update :</span> Update Latest Material Design Icons v5.8.55</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Update :</span> Update Packages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Developer Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-developer"  target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> SEO Agency Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-seo-agency" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Construction Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-construction" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Real Estate Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-real-estate" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Hospital Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-hospital" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Integration Landing <router-link tag="a" to="//landrick.vue.themesbrand.com/index-integration" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">New :</span> Landing Four <router-link tag="a" to="//landrick.vue.themesbrand.com/index-landing-four" target="_blank" class="h6 text-danger">Live Preview</router-link></li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Added :</span> Product Listing page in Shop pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Added :</span> Company Listing page in Career pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Added :</span> Candidate Listing page in Career pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Added :</span> Thank you page in Spacial pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Fixed some issues in Auth page(like: Login, Signup, Forgot Password)</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Fixed some issues in Responsive</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Fixed some issues in Shop pages</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Data render using JSON object</li>
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon><span class="font-weight-bold">Fixed :</span> Make common component for Pricing, Testimonial, News, Team, Features</li>

                            </ul>
                            <!-- v2.6.1 -->

                            <!-- v2.6.0 -->
                            <h5 class="mt-5">Version <span class="text-success">2.6.0</span> - 29th August 2020</h5>
                            <ul class="list-unstyled">
                                <li class="text-muted my-2 ml-3"><arrow-right-circle-icon class="fea icon-sm mr-2"></arrow-right-circle-icon>Initial Released</li>
                            </ul>                        
                            <!-- v2.6.0 -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <!-- Changelog End -->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
        <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
</div>
</template>
