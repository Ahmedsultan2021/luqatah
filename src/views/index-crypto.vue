<script>
import {
    ArrowUpIcon
} from 'vue-feather-icons';
import {
    Carousel,
    Slide
} from 'vue-carousel';
import countTo from 'vue-count-to';

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-crypto component
 */
export default {
    data() {
        return {}
    },
    components: {
        Navbar,
        Switcher,
        Footer,
        Carousel,
        Slide,
        ArrowUpIcon,
        countTo
    }
}
</script>

<template>
<div>
    <Navbar :nav-light="true" />
     <!-- Hero Start -->
        <section class="bg-half-260 bg-light bg-animation-left crypto-home d-table w-100">
            <div class="container position-relative" style="z-index: 1;">
                <div class="row mt-5 justify-content-center">
                    <div class="col-lg-10">
                        <div class="title-heading text-center">
                            <img src="images/crypto/crypto.svg" height="136" class="mover" alt="">
                            <h1 class="heading text-primary text-shadow-title mt-4 mb-3">Buy And Sale Cryptocurrency</h1>
                            <p class="para-desc mx-auto text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                            <div class="text-center subcribe-form mt-4 pt-2">
                                <form>
                                    <div class="form-group mb-0">
                                        <input type="email" id="email" name="email" class="border bg-white rounded-pill" required placeholder="Email Address">
                                        <button type="submit" class="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>                                
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container--> 
        </section><!--end section-->
        <!-- Hero End -->

    <!-- FEATURES START -->
    <section class="section border-top">
        <!-- Table Start -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                    <div class="table-responsive features-absolute bg-white shadow-md rounded-md">
                        <table class="table mb-0 table-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" style="min-width: 250px;">Name</th>
                                    <th scope="col" style="width: 150px;">Price</th>
                                    <th scope="col" style="width: 100px;">Change</th>
                                    <th scope="col" style="width: 100px;">Trade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">1</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/litecoin.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Litecoin <span class="text-muted h6">LTC</span></p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-success">+.264</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">2</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/bitcoin.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Bitcoin <span class="text-muted h6">BTC</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-danger">-2.5</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">3</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/auroracoin.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Auroracoin <span class="text-muted h6">ARC</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-danger">-1.9</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">4</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/coinye.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Coinye <span class="text-muted h6">CNY</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-success">+1.05</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">5</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/ethereum.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mt-2 font-weight-normal h5">Ethereum Coin <span class="text-muted h6">ETH</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-success">+1.705</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">6</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/potcoin.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Potcoin <span class="text-muted h6">PTC</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-danger">-3.2</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>

                                <tr>
                                    <td scope="row">7</td>
                                    <th>
                                        <div class="d-flex align-items-center">
                                            <img src="images/crypto/zcash.png" class="float-left mr-3" height="50" alt="">
                                            <p class="mb-0 font-weight-normal h5">Zcash Coin <span class="text-muted h6">ZCC</span> </p>
                                        </div>
                                    </th>
                                    <td>₹ 234754.68</td>
                                    <td class="text-success">+1.465</td>
                                    <td><a href="javascript:void(0)" class="btn btn-primary">Buy</a></td>
                                </tr>
                            </tbody>
                        </table>
                        <!--end table-->
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
        <!-- Table End -->

        <!-- Process Start -->
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">How it works ?</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="col-md-3 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <div class="rounded p-4 shadow">
                            <a href="javascript:void(0)"><img src="images/crypto/1.png" height="100" class="mx-auto d-block" alt=""></a>
                        </div>

                        <div class="mt-3">
                            <h5><a href="javascript:void(0)" class="text-primary">Create Account</a></h5>
                            <p class="text-muted mb-0">Earn upto 10%</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-3 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <div class="rounded p-4 shadow">
                            <a href="javascript:void(0)"><img src="images/crypto/2.png" height="100" class="mx-auto d-block" alt=""></a>
                        </div>

                        <div class="mt-3">
                            <h5><a href="javascript:void(0)" class="text-primary">Buy Coin</a></h5>
                            <p class="text-muted mb-0">Save upto $50/coin</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-3 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <div class="rounded p-4 shadow">
                            <a href="javascript:void(0)"><img src="images/crypto/3.png" height="100" class="mx-auto d-block" alt=""></a>
                        </div>

                        <div class="mt-3">
                            <h5><a href="javascript:void(0)" class="text-primary">Loans</a></h5>
                            <p class="text-muted mb-0">Use crypto as collateral</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-3 col-12 mt-4 pt-2">
                    <div class="text-center">
                        <div class="rounded p-4 shadow">
                            <a href="javascript:void(0)"><img src="images/crypto/4.png" height="100" class="mx-auto d-block" alt=""></a>
                        </div>

                        <div class="mt-3">
                            <h5><a href="javascript:void(0)" class="text-primary">Credit & Debit Cards</a></h5>
                            <p class="text-muted mb-0">Payments with cards</p>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
        <!-- Process End -->
    </section>
    <!--end section-->
    <!-- Section END -->

    <!-- Counter Start -->
    <section class="section-two bg-primary">
        <div class="container">
            <div class="row" id="counter">
                <div class="col-md-4">
                    <div class="counter-box text-center">
                        <h2 class="mb-0 mt-3 title-dark display-4 text-white">$ <countTo :startVal='56343' :endVal="9706873" :duration="4000"></countTo>
                        </h2>
                        <h5 class="counter-head title-dark text-light">Exchanged</h5>
                    </div>
                    <!--end counter box-->
                </div>

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="counter-box text-center">
                        <h2 class="mb-0 mt-3 title-dark display-4 text-white">
                            <countTo :startVal='23' :endVal="106" :duration="4000"></countTo>
                        </h2>
                        <h5 class="counter-head title-dark text-light">Countries</h5>
                    </div>
                    <!--end counter box-->
                </div>

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div class="counter-box text-center">
                        <h2 class="mb-0 mt-3 title-dark display-4 text-white">
                            <countTo :startVal='6483' :endVal="56043" :duration="4000"></countTo>
                        </h2>
                        <h5 class="counter-head title-dark text-light">Customers</h5>
                    </div>
                    <!--end counter box-->
                </div>
            </div>
            <!--end row-->
        </div>
        <!--end container-->
    </section>
    <!--end section-->
    <!-- Counter End -->

    <!-- Section start -->
    <section class="section">
        <!-- Crypto Portfolio end -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Create your cryptocurrency portfolio today</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row">
                <div class="col-12 mt-4 pt-2">
                    <img src="images/crypto/portfolio.png" class="img-fluid mx-auto d-block" alt="">
                </div>
                <!--end col-->

                <div class="col-md-4 col-12 mt-5 pt-md-3">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="images/icon/report.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">Manage your portfolio</h4>
                            <p class="text-muted">Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.</p>
                            <a href="javascript:void(0)" class="text-primary">Learn More <i class="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-4 col-12 mt-5 pt-md-3">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="images/icon/marketing.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">Recurring buys</h4>
                            <p class="text-muted">Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.</p>
                            <a href="javascript:void(0)" class="text-primary">Learn More <i class="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-md-4 col-12 mt-5 pt-md-3">
                    <div class="features text-center">
                        <div class="image position-relative d-inline-block">
                            <img src="images/icon/currency.svg" class="avatar avatar-small" alt="">
                        </div>

                        <div class="content mt-4">
                            <h4 class="title-2">Mobile apps</h4>
                            <p class="text-muted">It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.</p>
                            <a href="javascript:void(0)" class="text-primary">Learn More <i class="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
        <!-- Crypto Portfolio end -->

        <!-- Rate Start -->
        <div class="container mt-100 mt-60">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-6 col-12">
                    <div class="p-4 text-center rounded bg-light shadow">
                        <h4 class="mb-0"><span class="text-warning">1 BTC</span> = $ 8654.32</h4>
                    </div>

                    <div class="mt-4 pt-2 text-center">
                        <a href="javascript: void(0);"><img src="images/crypto/bitcoin.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Bitcoin" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/coinye.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Coinye" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/ethereum.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Ethereum" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/litecoin.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Litecoin" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/monero.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Monero" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/auroracoin.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Auroracoin" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/potcoin.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Potcoin" alt=""></a>
                        <a href="javascript: void(0);"><img src="images/crypto/zcash.png" class="img-fluid avatar avatar-small m-2 p-2 rounded-circle shadow" v-b-tooltip.hover title="Zcash" alt=""></a>
                    </div>

                    <div class="card mt-4 pt-2 rounded shadow border-0">
                        <div class="card-body">
                            <h5 class="card-title">Open Cryptocurrency</h5>
                            <div class="progress-box mt-4">
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped position-relative bg-primary" style="width:67%;">
                                    </div>
                                </div>
                            </div>
                            <!--end process box-->
                            <p class="text-muted mt-4 mb-0">Build on the Cryptocurrency platform for free and make use of an array of tools created by our community.</p>
                        </div>
                    </div>
                </div>
                <!--end col-->

                <div class="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="ml-lg-4">
                        <div class="section-title mb-4 pb-2">
                            <h4 class="title mb-4">Frequently asked questions</h4>
                            <p class="text-muted para-desc mb-0">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div class="faq-content mt-4">
                            <div class="accordion" id="accordionExampleone">
                                <b-card no-body class="mb-2 border-0 rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-1 href="javascript: void(0);">
                                            <h6 class="title mb-0"> How our <span class="text-primary">Landrick</span> work ? </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-2 border-0 rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-2 href="javascript: void(0);">
                                            <h6 class="title mb-0"> What is the main process open account ?</h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="mb-2 border-0 rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-3 href="javascript: void(0);">
                                            <h6 class="title mb-0"> How to make unlimited data entry ? </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-2 border-0 rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-4 href="javascript: void(0);">
                                            <h6 class="title mb-0"> Is <span class="text-primary">Landrick</span> safer to use with my account ? </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body class="mb-2 border-0 rounded">
                                    <b-card-header class="border-0 bg-light p-3 pr-5">
                                        <a class="faq position-relative text-dark" v-b-toggle.accordion-5 href="javascript: void(0);">
                                            <h6 class="title mb-0"> How can i contact your technical team ? </h6>
                                        </a>
                                    </b-card-header>
                                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                        <b-card-body class="px-2 py-4">
                                            <p class="text-muted mb-0 faq-ans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--end row-->
        </div>
        <!--end container-->
        <!-- Rate End -->

        <!-- Testi Start -->
        <div class="container mt-100 mt-60">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="section-title mb-4 pb-2">
                        <h4 class="title mb-4">Buyer's Review</h4>
                        <p class="text-muted para-desc mb-0 mx-auto">Start working with <span class="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                    </div>
                </div>
                <!--end col-->
            </div>
            <!--end row-->

            <div class="row justify-content-center">
                <div class="col-lg-9 mt-4 pt-2 text-center">
                    <carousel id="owl-fade" class="owl-carousel owl-theme" dir="ltr" :per-page="1" :loop="true">
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                <img src="images/client/01.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Thomas Israel <small class="text-muted">C.E.O</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. "</p>
                                <img src="images/client/02.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Carl Oliver <small class="text-muted">P.A</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. "</p>
                                <img src="images/client/03.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Barbara McIntosh <small class="text-muted">M.D</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find "</p>
                                <img src="images/client/04.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Christa Smith <small class="text-muted">Manager</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "</p>
                                <img src="images/client/05.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Dean Tolle <small class="text-muted">Developer</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                        <Slide>
                            <div class="customer-testi text-center">
                                <p class="text-muted h6 font-italic">" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. "</p>
                                <img src="images/client/06.jpg" class="img-fluid avatar avatar-small mt-3 rounded-circle mx-auto shadow" alt="">
                                <ul class="list-unstyled mb-0 mt-3">
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                    <li class="list-inline-item"><i class="mdi mdi-star text-warning"></i></li>
                                </ul>
                                <h6 class="text-primary">- Jill Webb <small class="text-muted">Designer</small></h6>
                            </div>
                            <!--end customer testi-->
                        </Slide>
                    </carousel>
                    <!--end owl carousel-->
                </div>
                <!--end col-->
            </div>
            <!--end row-->
        </div>
        <!--end container-->
        <!-- Testi End -->
    </section>
    <!--end section-->
    <!-- Section End -->
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
