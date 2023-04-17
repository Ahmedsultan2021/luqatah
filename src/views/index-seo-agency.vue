<script>
import { ArrowUpIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Features from "@/components/features";
import Testimonial from "@/components/testimonial";

/**
 * Index-seo-agency component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    Features,
    Testimonial,
  },
  data() {
    return {
      list: [
        {
          image: "images/seo/8.png",
          category: "spacing",
        },
        {
          image: "images/seo/6.png",
          category: "spacing",
        },
        {
          image: "images/seo/4.png",
          category: "spacing",
        },
        {
          image: "images/seo/5.png",
          category: "spacing",
        },
        {
          image: "images/seo/7.png",
          category: "spacing",
        },
        {
          image: "images/seo/3.png",
          category: "spacing",
        },
        {
          image: "images/seo/1.png",
          category: "spacing",
        },
        {
          image: "images/seo/2.png",
          category: "spacing",
        },
      ],
      featuresData: [
        {
          icon: "uil uil-chart-line",
          title: "Grow your traffic",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          icon: "uil uil-adjust-circle",
          title: "Get quality leads",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          icon: "uil uil-award",
          title: "Drive more sell",
          description:
            "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        },
      ],
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
    };
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section
      class="bg-half-260 bg-light d-table w-100"
      style="background: url('images/seo/bg.png') center center"
    >
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="title-heading">
              <span class="badge badge-pill badge-soft-primary"
                ><b>Best SEO Service</b></span
              >
              <h4 class="heading mt-2 mb-4">
                An expert search engine optimization
              </h4>
              <p class="para-desc mx-auto text-muted mb-0">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div class="mt-4 pt-2">
                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-primary m-1"
                  >Get Started</a
                >
                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-soft-primary m-1"
                  >Learn More</a
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
    <!-- Hero End -->

    <!-- FEATURES START -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-11">
            <div class="features-absolute">
              <div class="row projects-wrapper">
                <masonry
                  :cols="{ default: 3, 1000: 3, 700: 2, 400: 1 }"
                >
                <div v-for="(item, index) of list"
                  :key="index" class="p-2 item">
                  <img
                    :src="`${item.image}`"
                    class="img-fluid shadow seo-hero-widget rounded-md"
                    alt=""
                  />
                  </div>
                </masonry>
                <!--end col-->
              </div>
            </div>
            <!--end div-->
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
              <span class="badge badge-pill badge-soft-primary"
                >Work Process</span
              >
              <h4 class="title mt-3 mb-4">How it works ?</h4>
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

        <Features :featuresData="featuresData" />
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="mr-lg-5">
              <img
                src="images/illustrator/big-launch.svg"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title">
              <h4 class="title mb-4">
                We help you increase <br />
                sales by improving SEO
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
                >See more solutions <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-md-6 order-1 order-md-2">
            <div class="ml-lg-5">
              <img
                src="images/illustrator/maintenance.svg"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title">
              <h4 class="title mb-4">
                Advantages of SEO & <br />
                Marketing strategy
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <p class="text-muted">
                Using Landrick to build your site means never worrying about
                designing another page or cross browser compatibility. Our
                ever-growing library of components and pre-designed layouts will
                make your life easier.
              </p>
              <div class="mt-4">
                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-soft-primary"
                  >Know more</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container-fluid mt-100 mt-60">
        <div
          class="bg-primary rounded shadow py-5"
          style="background: url('images/seo/cta.png') center center"
        >
          <div class="container my-md-5">
            <div class="row">
              <div class="col-12 text-center">
                <div class="section-title">
                  <h4 class="title text-white title-dark mb-4">
                    Check your website SEO
                  </h4>
                  <p class="text-white-50 para-desc mb-0 mx-auto">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                  <div class="subcribe-form mt-4 pt-2">
                    <form>
                      <div class="form-group mb-0">
                        <input
                          type="url"
                          id="url"
                          class="border bg-white rounded-lg"
                          style="opacity: 0.85"
                          required
                          placeholder="https://themesbrand.com"
                        />
                        <button type="submit" class="btn btn-pills btn-primary">
                          Get Started
                        </button>
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
        </div>
        <!--end div-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row mt-lg-4 align-items-center">
          <div class="col-lg-5 col-md-12 text-center text-lg-left">
            <div class="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
              <h4 class="title mb-4">Our Comfortable Rates</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <ul
                class="nav nav-pills rounded-pill justify-content-center d-inline-block border py-1 px-2 mt-4 bg-white"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item d-inline-block">
                  <a
                    class="nav-link px-3 rounded-pill active monthly"
                    id="Monthly"
                    data-toggle="pill"
                    href="#Month"
                    role="tab"
                    aria-controls="Month"
                    aria-selected="true"
                    >Monthly</a
                  >
                </li>
                <li class="nav-item d-inline-block">
                  <a
                    class="nav-link px-3 rounded-pill yearly"
                    id="Yearly"
                    data-toggle="pill"
                    href="#Year"
                    role="tab"
                    aria-controls="Year"
                    aria-selected="false"
                    >Yearly</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade active show"
                id="Month"
                role="tabpanel"
                aria-labelledby="Monthly"
              >
                <div class="row align-items-center">
                  <div class="col-md-6 col-12 px-md-0">
                    <div
                      class="card pricing-rates starter-plan shadow rounded border-0"
                    >
                      <div class="card-body py-5">
                        <h5 class="title font-weight-bold text-primary mb-4">
                          Basic
                        </h5>
                        <div class="d-flex mb-4">
                          <span class="h5 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">39</span>
                          <span class="h5 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Free Appointments
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Get Started</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div
                    class="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0"
                  >
                    <div
                      class="card pricing-rates bg-light shadow rounded border-0"
                    >
                      <div
                        class="ribbon ribbon-right ribbon-warning overflow-hidden"
                      >
                        <span class="text-center d-block shadow small h6"
                          >Best</span
                        >
                      </div>
                      <div class="card-body py-5">
                        <h5 class="title font-weight-bold text-primary mb-4">
                          Premium
                        </h5>
                        <div class="d-flex mb-4">
                          <span class="h5 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">59</span>
                          <span class="h5 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Free Appointments
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Try it now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>

              <div
                class="tab-pane fade"
                id="Year"
                role="tabpanel"
                aria-labelledby="Yearly"
              >
                <div class="row align-items-center">
                  <div class="col-md-6 col-12 px-md-0">
                    <div
                      class="card pricing-rates starter-plan shadow rounded border-0"
                    >
                      <div class="card-body py-5">
                        <h5 class="title font-weight-bold text-primary mb-4">
                          Basic
                        </h5>
                        <div class="d-flex mb-4">
                          <span class="h5 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">29</span>
                          <span class="h5 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Free Appointments
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Get Started</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div
                    class="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0"
                  >
                    <div
                      class="card pricing-rates bg-light shadow rounded border-0"
                    >
                      <div
                        class="ribbon ribbon-right ribbon-warning overflow-hidden"
                      >
                        <span class="text-center d-block shadow small h6"
                          >Popular</span
                        >
                      </div>
                      <div class="card-body py-5">
                        <h5 class="title font-weight-bold text-primary mb-4">
                          Premium
                        </h5>
                        <div class="d-flex mb-4">
                          <span class="h5 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">49</span>
                          <span class="h5 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Full Access
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Source Files
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Free Appointments
                          </li>
                          <li class="h6 text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Enhanced Security
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Try it now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
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
              <h4 class="title mb-4">Client's Review</h4>
              <p class="text-muted para-desc mx-auto mb-0">
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
          <div class="col-lg-12 mt-4">
            <Testimonial :testimonialData="testimonialData" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
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