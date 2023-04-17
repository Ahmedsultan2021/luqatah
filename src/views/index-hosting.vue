<script>
import { ArrowUpIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";

/**
 * Index-hosting component
 */
export default {
  data() {
    return {
      hostingService: [
        {
          icon: "uil uil-browser",
          title: "Domain Name",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          icon: "uil uil-cloud-computing",
          title: "Cloud Hosting",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          icon: "uil uil-server",
          title: "Shared Hosting",
          description:
            "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        },
        {
          icon: "uil uil-server-network",
          title: "VPS Hosting",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          icon: "uil uil-database-alt",
          title: "Reseller Hosting",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          icon: "uil uil-code-branch",
          title: "Web Hosting",
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
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    Testimonial,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-half-260 bg-primary d-table w-100"
      style="background: url('images/hosting/bg.png') center center"
      id="home"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-12">
            <div class="title-heading text-center">
              <h1 class="heading title-dark text-white mb-3">
                Cloud Services & Web Hosting Solution
              </h1>
              <p class="para-desc para-dark mx-auto text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0);" class="btn btn-primary"
                  >Get Started</a
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
    <!-- Hero End -->

    <!-- Search Start -->
    <section class="section-two bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <form class="p-4 shadow bg-white rounded">
              <h4 class="mb-3">Search Your Domain Now</h4>
              <div class="row">
                <div class="col-12">
                  <div class="input-group form-group mb-0">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control rounded-left"
                      placeholder="Your domain name :"
                    />
                    <div class="input-group-append" id="button-addon4">
                      <select class="form-control rounded-0" id="domain_list">
                        <option>.in</option>
                        <option>.com</option>
                        <option>.org</option>
                        <option>.net</option>
                        <option>.info</option>
                        <option>.me</option>
                      </select>
                      <input
                        type="submit"
                        id="search"
                        name="search"
                        class="searchbtn btn btn-primary btn-block"
                        value="Search"
                      />
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->

              <div class="row">
                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .in <br /><span class="text-primary">$4.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->

                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .com <br /><span class="text-primary">$5.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->

                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .org <br /><span class="text-primary">$6.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->

                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .net <br /><span class="text-primary">$7.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->

                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .info <br /><span class="text-primary">$3.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->

                <div class="col-lg-2 col-md-4 col-6 mt-4">
                  <a href="javascript:void(0);" class="text-dark">
                    <div class="rounded shadow bg-white p-1 text-center">
                      <h6 class="mb-0">
                        .me <br /><span class="text-primary">$2.99</span>/year
                      </h6>
                    </div>
                  </a>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </form>
            <!--end form-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Search End -->

    <!-- Start Services -->
    <section class="section">
      <div class="container pb-lg-4 mb-md-5 mb-4">
        <div class="row align-items-center mb-4">
          <div class="col-lg-9 col-md-8 text-sm-left">
            <div class="section-title">
              <h4 class="title mb-4">Cloud Hosting Services</h4>
              <p class="text-muted para-desc mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->

          <div
            class="col-lg-3 col-md-4 mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0"
          >
            <a href="javascript:void(0);" class="btn btn-outline-primary"
              >Read more <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12 mt-5 pt-3"
            v-for="(item, index) of hostingService"
            :key="index"
          >
            <div class="features">
              <div class="image position-relative d-inline-block">
                <i :class="`${item.icon} h1 text-primary`"></i>
              </div>

              <div class="content mt-4">
                <h5>{{ item.title }}</h5>
                <p class="text-muted">{{ item.description }}</p>
                <a href="javascript:void(0)" class="text-success"
                  >Read more <i class="mdi mdi-chevron-right"></i
                ></a>
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
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- End Services -->

    <!-- How It Work Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img src="images/hosting/1.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Get best plan for more power with cloud Hosting
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
              <a href="javascript:void(0);" class="btn btn-primary mt-3"
                >Get Started <i class="mdi mdi-chevron-right"></i
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
          <div
            class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title">
              <h4 class="title mb-4">
                Don't Compromise with the best web hosting solutions
              </h4>
              <p class="text-muted">
                Using Landrick to build your site means never worrying about
                designing another page or cross browser compatibility. Our
                ever-growing library of components and pre-designed layouts will
                make your life easier.
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
              <a href="javascript:void(0);" class="btn btn-primary mt-3"
                >Get Started <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 order-1 order-md-2">
            <img src="images/hosting/deal-hend.svg" class="img-fluid" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img src="images/hosting/2.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Powerful Server & Web Hosting Plateform
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
              <a href="javascript:void(0);" class="btn btn-primary mt-3"
                >Get Started <i class="mdi mdi-chevron-right"></i
              ></a>
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
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- How It Work End -->

    <!-- Price Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Our Hosting Rates</h4>
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

        <div class="row align-items-center">
          <div class="col-12 mt-4 pt-2">
            <div class="">
              <b-tabs
                pills
                justified
                nav-class="d-inline-block border py-1 px-2 rounded-pill"
                nav-wrapper-class="text-center"
                align="center"
              >
                <b-tab
                  title-item-class="d-inline-block"
                  title-link-class="px-3 rounded-pill"
                >
                  <template v-slot:title> Monthly </template>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="pricing-rates bg-light py-5 p-4 rounded">
                        <h6 class="title text-uppercase font-weight-bold mb-4">
                          Cloud Hosting
                        </h6>
                        <div class="d-flex mb-4">
                          <span class="h4 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h4 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >2 GB Memory
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >10 Free Optimization
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >24/7 support
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Content Optimization
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div
                        class="card pricing-rates starter-plan bg-white shadow rounded border-0"
                      >
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold text-primary mb-4"
                          >
                            Dedicated Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">39</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >4 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Get Started</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="card pricing-rates bg-light rounded border-0">
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold mb-4"
                          >
                            VPS Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">59</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >8 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Buy Now</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="card pricing-rates bg-light rounded border-0">
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold mb-4"
                          >
                            Shared Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">79</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >16 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Buy Now</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </b-tab>
                <b-tab
                  title-item-class="d-inline-block"
                  title-link-class="px-3 rounded-pill"
                >
                  <template v-slot:title>
                    Yearly
                    <span class="badge badge-pill badge-success">15% Off </span>
                  </template>
                  <div class="row">
                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="pricing-rates bg-light py-5 p-4 rounded">
                        <h6 class="title text-uppercase font-weight-bold mb-4">
                          Cloud Hosting
                        </h6>
                        <div class="d-flex mb-4">
                          <span class="h4 mb-0 mt-2">$</span>
                          <span class="price h1 mb-0">0</span>
                          <span class="h4 align-self-end mb-1">/mo</span>
                        </div>

                        <ul class="list-unstyled mb-0 pl-0">
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >2 GB Memory
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >10 Free Optimization
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >24/7 support
                          </li>
                          <li class="text-muted mb-0">
                            <span class="text-primary h5 mr-2"
                              ><i
                                class="uil uil-check-circle align-middle"
                              ></i></span
                            >Content Optimization
                          </li>
                        </ul>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-primary mt-4"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div
                        class="card pricing-rates starter-plan bg-white shadow rounded border-0"
                      >
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold text-primary mb-4"
                          >
                            Dedicated Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">29</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >4 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Get Started</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="card pricing-rates bg-light rounded border-0">
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold mb-4"
                          >
                            VPS Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">39</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >8 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Buy Now</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                      <div class="card pricing-rates bg-light rounded border-0">
                        <div class="card-body py-5">
                          <h6
                            class="title text-uppercase font-weight-bold mb-4"
                          >
                            Shared Hosting
                          </h6>
                          <div class="d-flex mb-4">
                            <span class="h4 mb-0 mt-2">$</span>
                            <span class="price h1 mb-0">49</span>
                            <span class="h4 align-self-end mb-1">/mo</span>
                          </div>

                          <ul class="list-unstyled mb-0 pl-0">
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >16 GB Memory
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >10 Free Optimization
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >24/7 support
                            </li>
                            <li class="text-muted mb-0">
                              <span class="text-primary h5 mr-2"
                                ><i
                                  class="uil uil-check-circle align-middle"
                                ></i></span
                              >Content Optimization
                            </li>
                          </ul>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-primary mt-4"
                            >Buy Now</a
                          >
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </b-tab>
              </b-tabs>
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
      <div class="shape overflow-hidden text-light">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Price End -->

    <!-- Testi Start -->
    <section class="section pt-md-4 pt-5 pt-sm-0 bg-light">
      <div class="container pb-lg-4 mb-md-5 mb-4">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Client Reviews</h4>
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
    <div class="position-relative">
      <div class="shape overflow-hidden text-footer">
        <svg
          viewBox="0 0 2880 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M720 125L2160 0H2880V250H0V125H720Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!-- Testi End -->
    <!--end section-->
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
