<script>
import { Carousel, Slide } from "vue-carousel";
import {
  UserIcon,
  MailIcon,
  KeyIcon,
  ArrowUpIcon,
  HelpCircleIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-1
 */
export default {
  components: {
    Navbar,
    Switcher,
    Carousel,
    Slide,
    UserIcon,
    MailIcon,
    KeyIcon,
    ArrowUpIcon,
    Footer,
    HelpCircleIcon,
  },
  methods: {},
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100" id="home">
      <div class="container">
        <div class="row mt-5 align-items-center">
          <div class="col-lg-7 col-md-7">
            <div class="title-heading">
              <h1 class="heading mb-3">
                Our Creativity Is Your <span class="text-primary">Success</span>
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4">
                <router-link
                  to="/page-contact-one"
                  class="btn btn-primary mt-2 mr-2"
                  ><i class="mdi mdi-email"></i> Get Started</router-link
                >
                <router-link
                  to="/documentation"
                  class="btn btn-outline-primary mt-2"
                  ><i class="mdi mdi-book-outline"></i>
                  Documentation</router-link
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <img src="images/illustrator/Startup_SVG.svg" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="py-4 border-bottom border-top">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center py-4">
            <img
              src="images/client/spotify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Partners End -->

    <!-- How It Work Start -->
    <section class="section bg-light border-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">How It Work ?</h4>
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
            <img src="images/illustrator/SEO_SVG.svg" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 pt-2">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">Change the way you build websites</h4>
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
        <div class="row align-items-center">
          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title">
              <h4 class="title mb-4">
                Speed up your development <br />
                with <span class="text-primary">Landrick.</span>
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
              <a href="javascript:void(0)" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <div class="card rounded border-0 shadow ml-lg-5">
              <div class="card-body">
                <img
                  src="images/illustrator/Mobile_notification_SVG.svg"
                  alt=""
                />

                <div class="content mt-4 pt-2">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            >Name : <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input
                              type="text"
                              class="form-control pl-5"
                              placeholder="Name"
                              name="name"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            >Email : <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <mail-icon class="fea icon-sm icons"></mail-icon>
                            <input
                              type="email"
                              class="form-control pl-5"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            >Password :
                            <span class="text-danger">*</span></label
                          >
                          <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input
                              type="password"
                              class="form-control pl-5"
                              placeholder="Password"
                              required=""
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-12 mt-2 mb-0">
                        <button class="btn btn-primary btn-block">
                          Download
                        </button>
                      </div>
                      <!--end col-->
                    </div>
                  </form>
                </div>
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
    <!-- How It Work End -->

    <!-- Testi Start -->
    <section class="section pb-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h6>We believe in building each other and hence</h6>
              <h4 class="title mb-4">Work with some amazing partners</h4>
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

        <div class="row">
          <div class="col-12 mt-4 pt-2">
            <carousel
              id="customer-testi"
              ref="carousel"
              dir="ltr"
              :per-page="3"
              class="owl-carousel owl-theme"
              :autoplay="true"
              :loop="true"
            >
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/amazon.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. "
                    </p>
                    <h6 class="text-primary">- Thomas Israel</h6>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/google.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " The most well-known dummy text is the 'Lorem Ipsum',
                      which is said to have originated in the 16th century. "
                    </p>
                    <h6 class="text-primary">- Carl Oliver</h6>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/lenovo.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <h6 class="text-primary">- Barbara McIntosh</h6>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/paypal.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <h6 class="text-primary">- Jill Webb</h6>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/shopify.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " There is now an abundance of readable dummy texts. These
                      are usually used when a text is required. "
                    </p>
                    <h6 class="text-primary">- Dean Tolle</h6>
                  </div>
                </div>
              </slide>
              <slide>
                <div
                  class="card customer-testi text-center border rounded mx-2"
                >
                  <div class="card-body">
                    <img
                      src="images/client/spotify.svg"
                      class="img-fluid avatar avatar-ex-sm mx-auto"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero. "
                    </p>
                    <h6 class="text-primary">- Christa Smith</h6>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Testi End -->

    <!-- Pricing Start -->
    <section class="section">
      <div class="container">
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
              <a
                href="https://1.envato.market/4n73n"
                target="_blank"
                class="btn btn-primary mt-4"
                >Buy Now
                <span class="badge badge-pill badge-danger ml-2">v2.5</span></a
              >
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div class="ml-lg-5">
            <div class="row align-items-center ml-lg-5">
              <div class="col-md-6 col-12 px-md-0">
                <div
                  class="card pricing-rates starter-plan shadow rounded border-0"
                >
                  <div class="card-body py-5">
                    <h6 class="title font-weight-bold text-uppercase text-primary mb-4">
                      Starter
                    </h6>
                    <div class="d-flex mb-4">
                      <span class="h4 mb-0 mt-2">$</span>
                      <span class="price h1 mb-0">39</span>
                      <span class="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul class="list-unstyled mb-0 pl-0">
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Full Access
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Source Files
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Free Appointments
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Enhanced Security
                      </li>
                    </ul>
                    <a href="javascript:void(0)" class="btn btn-primary mt-4"
                      >Get Started</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-md-6 col-12 mt-4 pt-2 pt-sm-0 mt-sm-0 px-md-0">
                <div
                  class="card pricing-rates bg-light shadow rounded border-0"
                >
                  <div class="card-body py-5">
                    <h6 class="title font-weight-bold text-uppercase text-primary mb-4">
                      Professional
                    </h6>
                    <div class="d-flex mb-4">
                      <span class="h4 mb-0 mt-2">$</span>
                      <span class="price h1 mb-0">59</span>
                      <span class="h4 align-self-end mb-1">/mo</span>
                    </div>

                    <ul class="list-unstyled mb-0 pl-0">
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Full Access
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Source Files
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Free Appointments
                      </li>
                      <li class="h6 text-muted mb-0">
                        <span class="text-primary h5 mr-2"
                          ><i class="uil uil-check-circle align-middle"></i></span
                        >Enhanced Security
                      </li>
                    </ul>
                    <a href="javascript:void(0)" class="btn btn-primary mt-4"
                      >Try it now</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            </div>
            <!--end row-->
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
    <!-- Pricing End -->
    <!-- FAQ n Contact Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="media">
              <help-circle-icon
                class="fea icon-ex-md text-primary mr-2 mt-1"
              ></help-circle-icon>
              <div class="media-body">
                <h5 class="mt-0">
                  How our <span class="text-primary">Landrick</span> work ?
                </h5>
                <p class="answer text-muted mb-0">
                  Due to its widespread use as filler text for layouts,
                  non-readability is of great importance: human perception is
                  tuned to recognize certain patterns and repetitions in texts.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="media">
              <help-circle-icon
                class="fea icon-ex-md text-primary mr-2 mt-1"
              ></help-circle-icon>
              <div class="media-body">
                <h5 class="mt-0">What is the main process open account ?</h5>
                <p class="answer text-muted mb-0">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making a neutral judgement
                  on the visual impact
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div class="media">
              <help-circle-icon
                class="fea icon-ex-md text-primary mr-2 mt-1"
              ></help-circle-icon>
              <div class="media-body">
                <h5 class="mt-0">How to make unlimited data entry ?</h5>
                <p class="answer text-muted mb-0">
                  Furthermore, it is advantageous when the dummy text is
                  relatively realistic so that the layout impression of the
                  final publication is not compromised.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div class="media">
              <help-circle-icon
                class="fea icon-ex-md text-primary mr-2 mt-1"
              ></help-circle-icon>
              <div class="media-body">
                <h5 class="mt-0">
                  Is <span class="text-primary">Landrick</span> safer to use
                  with my account ?
                </h5>
                <p class="answer text-muted mb-0">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div
          class="row my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center"
        >
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Have Question ? Get in touch!</h4>
              <p class="text-muted para-desc mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <router-link to="/page-contact-two" class="btn btn-primary mt-4"
                ><i class="mdi mdi-phone"></i> Contact us</router-link
              >
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
    <!-- FAQ n Contact End -->

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
