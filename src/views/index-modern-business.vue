<script>
import {
  ArrowUpIcon,
  PlayIcon,
  SettingsIcon,
  GitMergeIcon,
  UserCheckIcon,
  CodeIcon,
  FeatherIcon,
  BoldIcon,
  EyeIcon,
  HeartIcon,
  MonitorIcon,
  UserIcon,
  MailIcon,
  KeyIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  GitlabIcon,
  VideoIcon,
} from "vue-feather-icons";
import countTo from "vue-count-to";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Features from "@/components/features";
import Pricing from "@/components/pricing";

/**
 * Index-modern Business component
 */
export default {
  data() {
    return {
      featuresData: [
        {
          icon: "uil uil-edit-alt",
          title: "Design & Development",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          icon: "uil uil-vector-square",
          title: "Management & Marketing",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          icon: "uil uil-file-search-alt",
          title: "Stratagy & Research",
          description:
            "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        },
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Features,
    Pricing,
    ArrowUpIcon,
    PlayIcon,
    SettingsIcon,
    GitMergeIcon,
    UserCheckIcon,
    VideoIcon,
    CodeIcon,
    FeatherIcon,
    BoldIcon,
    EyeIcon,
    HeartIcon,
    MonitorIcon,
    UserIcon,
    MailIcon,
    InstagramIcon,
    LinkedinIcon,
    KeyIcon,
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    GitlabIcon,
    countTo,
    Carousel,
    Slide,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="bg-half-170 d-table w-100"
      style="background: url('images/modern01.jpg') center center"
      id="home"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row align-items-center mt-md-5">
          <div
            class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1"
          >
            <div class="card shadow rounded border-0 mr-lg-3">
              <div class="card-body">
                <h5 class="card-title">Register Now</h5>

                <form class="login-form">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >First name <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            type="text"
                            class="form-control pl-5"
                            placeholder="First Name"
                            name="s"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Your Email <span class="text-danger">*</span></label
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
                    <div class="col-md-12">
                      <div class="form-group">
                        <label
                          >Password <span class="text-danger">*</span></label
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
                    <div class="col-md-12">
                      <div class="form-group">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                          />
                          <label class="custom-control-label" for="customCheck1"
                            >I Accept
                            <a href="#" class="text-primary"
                              >Terms And Condition</a
                            ></label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button class="btn btn-success w-100">Register</button>
                    </div>
                    <div class="col-lg-12 mt-4 text-center">
                      <h6>Or Signup With</h6>
                      <div class="row">
                        <div class="col-lg-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-facebook text-primary"></i>
                            Facebook</a
                          >
                        </div>
                        <!--end col-->

                        <div class="col-lg-6 mt-3">
                          <a
                            href="javascript:void(0)"
                            class="btn btn-block btn-light"
                            ><i class="mdi mdi-google text-danger"></i>
                            Google</a
                          >
                        </div>
                        <!--end col-->
                      </div>
                      <!--end icon-->
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 order-1 order-md-2">
            <div class="title-heading mt-4 ml-lg-4">
              <h1 class="heading title-dark text-white mb-3">
                Powerful Solution For Your Startup Business
              </h1>
              <p class="para-desc para-dark text-light">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="watch-video mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary mb-2 mr-2"
                  >Get Started
                  <i class="mdi mdi-chevron-right"></i>
                </a>
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal
                  class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  ><video-icon class="icons"></video-icon> </a
                ><span
                  class="font-weight-bold text-uppercase small text-light title-dark align-middle ml-1"
                  >Watch Now</span
                >
              </div>
              <b-modal
                id="modal"
                hide-footer
                size="lg"
                header-close-variant="white"
                header-class="border-0"
                content-class="border-0"
                centered
              >
                <youtube
                  video-id="jNTZpfXYJa4"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
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

    <!-- Partners start -->
    <section class="py-4 border-bottom">
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

    <!-- Feature Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Beautiful & Creative Interfaces</h4>
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
        <div class="mt-5">
          <Features :featuresData="featuresData" />
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-5">
            <div class="position-relative">
              <img
                src="images/company/about.jpg"
                class="rounded img-fluid mx-auto d-block"
                alt=""
              />
              <div class="play-icon">
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal-1
                  class="play-btn video-play-icon"
                >
                  <i
                    class="mdi mdi-play text-primary rounded-circle bg-white shadow"
                  ></i>
                </a>
                <b-modal
                  id="modal-1"
                  hide-footer
                  size="lg"
                  header-close-variant="white"
                  header-class="border-0"
                  content-class="border-0"
                  centered
                >
                  <vimeo-player
                    ref="player"
                    :player-width="750"
                    :player-height="450"
                    :video-id="287684225"
                  />
                </b-modal>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title ml-lg-4">
              <h4 class="title mb-4">Startup Business Solution</h4>
              <p class="text-muted">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
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
              <a href="javascript:void(0)" class="btn btn-primary mt-3"
                >Buy Now <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <monitor-icon
                  class="fea icon-ex-md text-primary"
                ></monitor-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Fully Responsive</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <heart-icon class="fea icon-ex-md text-primary"></heart-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Browser Compatibility</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <eye-icon class="fea icon-ex-md text-primary"></eye-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Retina Ready</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <bold-icon class="fea icon-ex-md text-primary"></bold-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Based On Bootstrap 4</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <feather-icon
                  class="fea icon-ex-md text-primary"
                ></feather-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Feather Icons</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <code-icon class="fea icon-ex-md text-primary"></code-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Built With SASS</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <user-check-icon
                  class="fea icon-ex-md text-primary"
                ></user-check-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">W3c Valid Code</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <git-merge-icon
                  class="fea icon-ex-md text-primary"
                ></git-merge-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Flaticon Icons</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mb-4 pb-2">
            <div
              class="media key-feature align-items-center p-3 rounded shadow"
            >
              <div class="icon text-center rounded-circle mr-3">
                <settings-icon
                  class="fea icon-ex-md text-primary"
                ></settings-icon>
              </div>
              <div class="media-body">
                <h4 class="title mb-0">Easy to customize</h4>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-12 text-center">
            <a href="javascript:void(0)" class="btn btn-primary"
              >See More <i class="mdi mdi-arrow-right"></i
            ></a>
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
                See everything about your
                <span class="text-primary">Landrick</span>
              </h4>
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

        <div class="row" id="counter">
          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/illustrator/Asset190.svg"
                class="avatar avatar-small"
                alt=""
              />
              <h2 class="mb-0 mt-4">
                <countTo
                  :startVal="11000"
                  :endVal="45000"
                  :duration="4000"
                ></countTo
                >$
              </h2>
              <h6 class="counter-head text-muted">Investment</h6>
            </div>
            <!--end counter box-->
          </div>

          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/illustrator/Asset189.svg"
                class="avatar avatar-small"
                alt=""
              />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="1" :endVal="9" :duration="4000"></countTo>+
              </h2>
              <h6 class="counter-head text-muted">Awards</h6>
            </div>
            <!--end counter box-->
          </div>

          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/illustrator/Asset186.svg"
                class="avatar avatar-small"
                alt=""
              />

              <h2 class="mb-0 mt-4">
                <countTo
                  :startVal="12050"
                  :endVal="48002"
                  :duration="4000"
                ></countTo
                >$
              </h2>
              <h6 class="counter-head text-muted">Profitability</h6>
            </div>
            <!--end counter box-->
          </div>

          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/illustrator/Asset187.svg"
                class="avatar avatar-small"
                alt=""
              />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="3" :endVal="11" :duration="4000"></countTo>%
              </h2>
              <h6 class="counter-head text-muted">Growth</h6>
            </div>
            <!--end counter box-->
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- About End -->

    <!-- CTA Start -->
    <section
      class="section bg-cta"
      style="background: url('images/2.jpg') center center"
      id="cta"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title title-dark text-white mb-4">
                We Are Creative Dreamers and Innovators
              </h4>
              <p class="text-light para-dark para-desc mx-auto">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
              <a
                 href="javascript: void(0);"
                  v-b-modal.modal-2
                class="play-btn border border-light mt-4 video-play-icon"
              >
                <play-icon
                  class="fea icon-ex-md text-white title-dark"
                ></play-icon>
              </a>
              <b-modal
                id="modal-2"
                hide-footer
                size="lg"
                header-close-variant="white"
                header-class="border-0"
                content-class="border-0"
                centered
              >
                <vimeo-player
                  ref="player"
                  :player-width="750"
                  :player-height="450"
                  :video-id="287684225"
                />
              </b-modal>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- CTA End -->

    <!-- Price Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Charge your creative inspiration</h4>
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

        <Pricing />
      </div>
      <!--end container-->
      <!-- Price End -->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img
              src="images/illustrator/Startup_SVG.svg"
              class="img-fluid"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                A better compose with landrick marketing
              </h4>
              <p class="text-muted">
                You can combine all the Landrick templates into a single one,
                you can take a component from the Application theme and use it
                in the Website.
              </p>
              <ul class="list-unstyled mb-0 text-muted">
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
              <h4 class="title mb-4">Important Clients Review</h4>
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
          <div class="col-lg-9 mt-4 pt-2 text-center">
            <carousel
              id="owl-fade"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="1"
              :loop="true"
            >
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
                  <img
                    src="images/client/01.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Thomas Israel <small class="text-muted">C.E.O</small>
                  </h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout. "
                  </p>
                  <img
                    src="images/client/02.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Carl Oliver <small class="text-muted">P.A</small>
                  </h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " There is now an abundance of readable dummy texts. These
                    are usually used when a text is required purely to fill a
                    space. These alternatives to the classic Lorem Ipsum texts
                    are often amusing and tell short, funny or nonsensical
                    stories. "
                  </p>
                  <img
                    src="images/client/03.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Barbara McIntosh <small class="text-muted">M.D</small>
                  </h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " According to most sources, Lorum Ipsum can be traced back
                    to a text composed by Cicero in 45 BC. Allegedly, a Latin
                    scholar established the origin of the text by compiling all
                    the instances of the unusual word 'consectetur' he could
                    find "
                  </p>
                  <img
                    src="images/client/04.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Christa Smith <small class="text-muted">Manager</small>
                  </h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
                  <img
                    src="images/client/05.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Dean Tolle <small class="text-muted">Developer</small>
                  </h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center">
                  <p class="text-muted h6 font-italic">
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text. "
                  </p>
                  <img
                    src="images/client/06.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <ul class="list-unstyled mb-0 mt-3">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star text-warning"></i>
                    </li>
                  </ul>
                  <h6 class="text-primary">
                    - Jill Webb <small class="text-muted">Designer</small>
                  </h6>
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
    </section>
    <!--end section-->
    <!--end Price-->

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
    <!-- Footer Start -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="images/logo-dark.png" height="24" alt="" />
            </a>
            <p class="mt-4 text-muted">
              Start working with Landrick that can provide everything you need
              to generate awareness, drive traffic, connect.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <ul class="list-unstyled social-icon social mb-0 mt-4">
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded">
                    <facebook-icon
                      class="fea icon-sm fea-social"
                    ></facebook-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <instagram-icon
                      class="fea icon-sm fea-social"
                    ></instagram-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <linkedin-icon
                      class="fea icon-sm fea-social"
                    ></linkedin-icon>
                  </a>
                </li>
              </ul>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Company</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> About
                  us</router-link
                >
              </li>
              <li>
                <router-link to="/page-services" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-team" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Team</router-link
                >
              </li>
              <li>
                <router-link to="/page-pricing" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Pricing</router-link
                >
              </li>
              <li>
                <router-link to="/page-work-modern" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Project</router-link
                >
              </li>
              <li>
                <router-link to="/page-jobs" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Careers</router-link
                >
              </li>
              <li>
                <router-link to="/page-blog-grid" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Blog</router-link
                >
              </li>
              <li>
                <router-link to="/auth-cover-login" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Login</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Usefull Links</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-terms" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Terms of
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Privacy
                  Policy</router-link
                >
              </li>
              <li>
                <router-link to="/documentation" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Documentation</router-link
                >
              </li>
              <li>
                <router-link to="/changelog" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Changelog</router-link
                >
              </li>
              <li>
                <router-link to="/components" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Components</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Newsletter</h5>
            <p class="mt-4 text-muted">
              Sign up and receive the latest tips via email.
            </p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe foot-white form-group">
                    <label class="text-muted"
                      >Write your email
                      <span class="text-danger">*</span></label
                    >
                    <div class="position-relative">
                      <mail-icon class="fea icon-sm icons"></mail-icon>
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        class="form-control bg-light border pl-5 rounded"
                        placeholder="Your email : "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    class="btn btn-primary btn-block"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © {{ new Date().getFullYear() }} Landrick. Design with
                <i class="mdi mdi-heart text-danger"></i> by
                <a
                  href="https://themesbrand.com/"
                  target="_blank"
                  class="text-reset"
                  >Themesbrand</a
                >.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled text-sm-right mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/american-ex.png"
                    class="avatar avatar-ex-sm"
                    title="American Express"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/discover.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Discover"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/master-card.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Master Card"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/paypal.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Paypal"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/visa.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Visa"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
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

<style>
.modal-content {
  background-color: transparent;
}
</style>
