<script>
import {
  ArrowUpIcon,
  UserIcon,
  MailIcon,
  KeyIcon,
  VideoIcon,
  MonitorIcon,
  HeartIcon,
  EyeIcon,
  BoldIcon,
  FeatherIcon,
  CodeIcon,
  UserCheckIcon,
  GitMergeIcon,
  SettingsIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import News from "@/components/news";

/**
 * Index-landing-four component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    News,
    ArrowUpIcon,
    MailIcon,
    KeyIcon,
    VideoIcon,
    UserIcon,
    MonitorIcon,
    HeartIcon,
    EyeIcon,
    BoldIcon,
    FeatherIcon,
    CodeIcon,
    UserCheckIcon,
    GitMergeIcon,
    SettingsIcon,
    ArrowRightIcon,
    ChevronRightIcon,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Start Hero -->
    <section
      class="bg-half-170 bg-light d-table w-100"
      style="background: url('images/real/build.png') bottom no-repeat"
    >
      <div class="container">
        <div class="row align-items-center mt-5">
          <div class="col-lg-7 col-md-6">
            <div class="title-heading">
              <span class="badge badge-pill badge-soft-success"
                >Landing Four</span
              >
              <h4 class="heading my-3">
                Experience, <br />Expertise, Consulting
              </h4>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary m-1"
                  >Explore Now</a
                >
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="card shadow rounded border-0 ml-lg-4">
              <div class="card-body">
                <h5 class="card-title text-center">Get 30 days FREE Trial</h5>

                <form class="login-form mt-4">
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
                      <button class="btn btn-block btn-primary">
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--end section-->
    <!-- End Hero -->

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

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <span class="badge badge-pill badge-soft-primary">Features</span>
              <h4 class="title mt-3 mb-4">What we do ?</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-envelope-lock d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Fully Secured</h5>
                <p class="text-muted mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-edit d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Easy to Edit</h5>
                <p class="text-muted mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-circle-layer d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <h5>Design & Branding</h5>
                <p class="text-muted mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img src="images/company/about2.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
            <div class="ml-lg-5">
              <div class="section-title mb-3">
                <span class="badge badge-pill badge-soft-primary"
                  >Meet the future</span
                >
                <h4 class="title my-3">Introducing a new way</h4>
                <p class="text-muted para-desc">
                  Start working with
                  <span class="text-primary font-weight-bold">Landrick</span>
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <p class="text-muted para-desc mb-0">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin. It contains a series of real
                  Latin words.
                </p>
              </div>

              <ul class="list-unstyled text-muted">
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Fully Responsive
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Multiple Layouts
                </li>
                <li class="mb-0">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Suits Your Style
                </li>
              </ul>

              <div class="watch-video mt-3">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  class="btn btn-primary m-1"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal
                  class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  ><video-icon class="icons"></video-icon></a
                ><span
                  class="font-weight-bold text-uppercase small align-middle ml-1"
                  >Watch Now</span
                >
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
                    :player-vars="playerVars"
                  ></youtube>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Key Features</h4>
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
          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
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

          <div class="col-12 mt-4 pt-2 text-center">
            <a href="javascript:void(0)" class="btn btn-primary"
              >See More <i class="mdi mdi-arrow-right"></i
            ></a>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Start -->
    <section class="section bg-white pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div
              class="video-solution-cta position-relative"
              style="z-index: 1"
            >
              <div class="position-relative">
                <img
                  src="images/cta-bg.jpg"
                  class="img-fluid rounded-md shadow-lg"
                  alt=""
                />
                <div class="play-icon">
                  <a
                    href="javascript: void(0);"
                    v-b-modal.modal-2
                    class="play-btn video-play-icon"
                  >
                    <i
                      class="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"
                    ></i>
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
                    <youtube
                      video-id="jNTZpfXYJa4"
                      ref="youtube"
                      width="750"
                      height="450"
                      :player-vars="playerVars"
                    ></youtube>
                  </b-modal>
                </div>
              </div>
              <div class="content mt-md-4 pt-md-2">
                <div class="row justify-content-center">
                  <div class="col-lg-10 text-center">
                    <div class="row align-items-center">
                      <div class="col-md-6 mt-4 pt-2">
                        <div class="section-title text-md-left">
                          <h6 class="text-white-50">Team</h6>
                          <h4 class="title text-white title-dark mb-0">
                            Meet Experience <br />
                            Team Member
                          </h4>
                        </div>
                      </div>

                      <div class="col-md-6 col-12 mt-4 pt-md-2">
                        <div class="section-title text-md-left">
                          <p class="text-white-50 para-desc">
                            Start working with Landrick that can provide
                            everything you need to generate awareness, drive
                            traffic, connect.
                          </p>
                          <a
                            href="javascript:void(0)"
                            class="text-white title-dark"
                            >Read More
                            <arrow-right-icon
                              class="fea icon-sm"
                            ></arrow-right-icon
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row -->
        <div class="feature-posts-placeholder bg-primary"></div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Comfortable Rates</h4>
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
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate shadow bg-light border-0 rounded"
            >
              <div class="card-body">
                <h6
                  class="title font-weight-bold text-uppercase text-primary mb-4"
                >
                  Free
                </h6>
                <div class="d-flex mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">0</span>
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
                </ul>
                <a href="javascript:void(0)" class="btn btn-primary mt-4"
                  >Buy Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate shadow bg-white border-0 rounded"
            >
              <div class="ribbon ribbon-right ribbon-warning overflow-hidden">
                <span class="text-center d-block shadow small h6">Best</span>
              </div>
              <div class="card-body">
                <h6
                  class="title font-weight-bold text-uppercase text-primary mb-4"
                >
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
                </ul>
                <a href="javascript:void(0)" class="btn btn-primary mt-4"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate shadow bg-light border-0 rounded"
            >
              <div class="card-body">
                <h6
                  class="title font-weight-bold text-uppercase text-primary mb-4"
                >
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
                    >1 Domain Free
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Enhanced Security
                  </li>
                </ul>
                <a href="javascript:void(0)" class="btn btn-primary mt-4"
                  >Try It Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card pricing-rates business-rate shadow bg-light border-0 rounded"
            >
              <div class="card-body">
                <h6
                  class="title font-weight-bold text-uppercase text-primary mb-4"
                >
                  Ultimate
                </h6>
                <div class="d-flex mb-4">
                  <span class="h4 mb-0 mt-2">$</span>
                  <span class="price h1 mb-0">79</span>
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
                    >Enhanced Security
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Source Files
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >1 Domain Free
                  </li>
                  <li class="h6 text-muted mb-0">
                    <span class="text-primary h5 mr-2"
                      ><i class="uil uil-check-circle align-middle"></i></span
                    >Free Installment
                  </li>
                </ul>
                <a href="javascript:void(0)" class="btn btn-primary mt-4"
                  >Started Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center mb-4 pb-2">
          <div class="col-lg-6">
            <div class="section-title text-center text-lg-left">
              <h6 class="text-primary">Blog</h6>
              <h4 class="title mb-4 mb-lg-0">
                Reads Our Latest <br />
                News & Blog
              </h4>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6">
            <div class="section-title text-center text-lg-left">
              <p class="text-muted mb-0 mx-auto para-desc">
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

        <News />
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <div class="container-fluid px-0">
      <div class="py-5 bg-footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-8">
              <div class="section-title">
                <div class="media">
                  <i
                    class="uil uil-envelope-star display-4 text-white title-dark"
                  ></i>
                  <div class="media-body ml-md-4 ml-3">
                    <h4 class="font-weight-bold text-light title-dark mb-1">
                      Subscribe to our newsletters
                    </h4>
                    <p class="text-white-50 mb-0">
                      Sign up and receive the latest tips via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-4 mt-4 mt-sm-0">
              <div class="text-md-right ml-5 ml-sm-0">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >Subscribe Now</a
                >
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