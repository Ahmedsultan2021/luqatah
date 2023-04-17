<script>
import {
  ArrowUpIcon,
  MonitorIcon,
  FeatherIcon,
  EyeIcon,
  UserCheckIcon,
  SmartphoneIcon,
  HeartIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing2";
import Testimonial from "@/components/testimonial";

/**
 * Index application component
 */
export default {
  data() {
    return {
      testimonialData: [
        {
          id: 1,
          profile: "images/client/01.jpg",
          message:
            "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
          name: "Thomas Israel",
          designation: "C.E.O",
        },
        {
          id: 2,
          profile: "images/client/02.jpg",
          message:
            "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
          name: "Barbara McIntosh",
          designation: "M.D",
        },
        {
          id: 3,
          profile: "images/client/03.jpg",
          message:
            "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
          name: "Carl Oliver",
          designation: "P.A",
        },
        {
          id: 4,
          profile: "images/client/04.jpg",
          message:
            "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
          name: "Christa Smith",
          designation: "Manager",
        },
        {
          id: 5,
          profile: "images/client/05.jpg",
          message:
            "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
          name: "Dean Tolle",
          designation: "Developer",
        },
        {
          id: 6,
          profile: "images/client/05.jpg",
          message:
            "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
          name: "Jill Webb",
          designation: "Designer",
        },
      ],
       pricingData: [
        {
          title: "Free",
          price: 0,
          feature: [
            "Full Access",
            "Enhanced Security",
            "Source Files",
            "1 Domain Free",
          ],
          button: "Buy Now",
        },
        {
          title: "Starter",
          price: 39,
          feature: [
            "Full Access",
            "Source Files",
            "Free Appointments",
            "Enhanced Security",
          ],
          button: "Get Started",
          isBest: true,
        },
        {
          title: "Professional",
          price: 59,
          feature: [
            "Full Access",
            "Enhanced Security",
            "Source Files",
            "1 Domain Free",
          ],
          button: "Try it Now",
        },
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Pricing,
    Testimonial,
    ArrowUpIcon,
    Carousel,
    Slide,
    MonitorIcon,
    FeatherIcon,
    EyeIcon,
    UserCheckIcon,
    SmartphoneIcon,
    HeartIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100" id="home">
      <div class="container">
        <div class="row mt-5 align-items-center">
          <div class="col-lg-6 col-md-7">
            <div class="title-heading">
              <h1 class="heading mb-3">
                Manage all of you stuff using
                <span class="text-primary">Landrick.</span> app
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2"
                  ><i class="mdi mdi-apple"></i> App Store</a
                >
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary mt-2"
                  ><i class="mdi mdi-google-play"></i> Play Store</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="text-md-right text-center ml-lg-4">
              <img src="images/app/home.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Features Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">App Features</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center align-items-center">
          <div class="col-lg-8 col-md-8">
            <div class="row mt-4 pt-2">
              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <monitor-icon
                      class="fea icon-ex-md text-primary"
                    ></monitor-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">Use On Any Device</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <feather-icon
                      class="fea icon-ex-md text-primary"
                    ></feather-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">Feather Icons</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <eye-icon class="fea icon-ex-md text-primary"></eye-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">Retina Ready</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <user-check-icon
                      class="fea icon-ex-md text-primary"
                    ></user-check-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">W3c Valid Code</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <smartphone-icon
                      class="fea icon-ex-md text-primary"
                    ></smartphone-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">Fully Responsive</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="media features pt-4 pb-4">
                  <div
                    class="icon text-center rounded-circle text-primary mr-3 mt-2"
                  >
                    <heart-icon
                      class="fea icon-ex-md text-primary"
                    ></heart-icon>
                  </div>
                  <div class="media-body">
                    <h4 class="title">Browser Compatibility</h4>
                    <p class="text-muted para mb-0">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin language corresponds.
                    </p>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->

          <div
            class="col-lg-4 col-md-4 col-12 mt-4 pt-2 text-center text-md-right"
          >
            <img src="images/app/feature.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Feature End -->

    <!-- Showcase Start -->
    <section class="section pt-0 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">How Can We Help You ?</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 mt-4 pt-2">
            <img
              src="images/app/1.png"
              class="img-fluid mx-auto d-block"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 pt-2">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Best <span class="text-primary">Landrick</span> App Partner For
                Your Life
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Create your own skin to match your brand
                </li>
              </ul>
              <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">
                <span class="text-primary">Landrick</span> App Showcase
              </h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center">
          <div class="col-12 mt-4 pt-2">
            <b-tabs
              pills
              justified
              content-class="mt-4 pt-2"
              nav-wrapper-class="col-lg-8 col-md-12 offset-md-2"
            >
              <b-tab>
                <template v-slot:title class="rounded">
                  <div class="text-center py-2">
                    <h6 class="mb-0">High Performance</h6>
                  </div>
                </template>
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <img
                      src="images/app/2.png"
                      class="img-fluid mx-auto d-block"
                      alt=""
                    />
                  </div>
                  <!--end col-->

                  <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title">
                      <h4 class="title mb-4">
                        <i
                          class="mdi mdi-chevron-double-right text-primary"
                        ></i>
                        High Performing Landing App
                      </h4>
                      <p class="text-muted">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul class="list-unstyled text-muted">
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Digital Marketing Solutions for Tomorrow
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Our Talented & Experienced Marketing Agency
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Create your own skin to match your brand
                        </li>
                      </ul>
                      <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                        >Find Out More <i class="mdi mdi-chevron-right"></i
                      ></a>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <div class="text-center py-2">
                    <h6 class="mb-0">Creative Design</h6>
                  </div>
                </template>
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <img
                      src="images/app/3.png"
                      class="img-fluid mx-auto d-block"
                      alt=""
                    />
                  </div>
                  <!--end col-->

                  <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title">
                      <h4 class="title mb-4">
                        <i
                          class="mdi mdi-chevron-double-right text-primary"
                        ></i>
                        Creative Design and Clean Code
                      </h4>
                      <p class="text-muted">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul class="list-unstyled text-muted">
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Digital Marketing Solutions for Tomorrow
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Our Talented & Experienced Marketing Agency
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Create your own skin to match your brand
                        </li>
                      </ul>
                      <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                        >Find Out More <i class="mdi mdi-chevron-right"></i
                      ></a>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </b-tab>
              <b-tab>
                <template v-slot:title>
                  <div class="text-center py-2">
                    <h6 class="mb-0">24 / 7 Support</h6>
                  </div>
                </template>
                <div class="row align-items-center">
                  <div class="col-md-6">
                    <img
                      src="images/app/4.png"
                      class="img-fluid mx-auto d-block"
                      alt=""
                    />
                  </div>
                  <!--end col-->

                  <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div class="section-title">
                      <h4 class="title mb-4">
                        <i
                          class="mdi mdi-chevron-double-right text-primary"
                        ></i>
                        24 / 7 App Supports and Responsive
                      </h4>
                      <p class="text-muted">
                        You can combine all the Landrick templates into a single
                        one, you can take a component from the Application theme
                        and use it in the Website.
                      </p>
                      <ul class="list-unstyled text-muted">
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Digital Marketing Solutions for Tomorrow
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Our Talented & Experienced Marketing Agency
                        </li>
                        <li class="mb-0">
                          <span class="text-primary h5 mr-2"
                            ><i
                              class="uil uil-check-circle align-middle"
                            ></i></span
                          >Create your own skin to match your brand
                        </li>
                      </ul>
                      <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                        >Find Out More <i class="mdi mdi-chevron-right"></i
                      ></a>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Showcase End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Price Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Choose The Pricing Plan</h4>
              <p class="text-muted para-desc mb-0 mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <Pricing :pricing-data="pricingData"/>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Price End -->

    <!-- Testi n Download cta start -->
    <section class="section pt-0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Testimonial :testimonialData="testimonialData" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div
          class="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center"
        >
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Get the App now !</h4>
              <p class="text-muted para-desc mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2"
                  ><i class="mdi mdi-apple"></i> App Store</a
                >
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary mt-2"
                  ><i class="mdi mdi-google-play"></i> Play Store</a
                >
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
    <!-- Testi n Download cta End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-footer">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Section End -->
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
