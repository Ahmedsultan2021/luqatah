<script>
import {
  ArrowUpIcon,
  MonitorIcon,
  HeartIcon,
  EyeIcon,
  BoldIcon,
  FeatherIcon,
  CodeIcon,
  UserCheckIcon,
  GitMergeIcon,
  SettingsIcon,
  VideoIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
import countTo from "vue-count-to";

import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Testimonial from "@/components/testimonial";

/**
 * Index-marketing component
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
    };
  },
  components: {
    Navbar,
    Switcher,
    Testimonial,
    Carousel,
    Slide,
    ArrowUpIcon,
    MonitorIcon,
    HeartIcon,
    EyeIcon,
    BoldIcon,
    FeatherIcon,
    CodeIcon,
    UserCheckIcon,
    VideoIcon,
    GitMergeIcon,
    SettingsIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
    countTo,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section
      class="bg-marketing d-table w-100"
      style="background: url('images/marketing/marketing-shape.png')"
      id="home"
    >
      <div class="container">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-7 col-md-7 text-center">
            <img
              src="images/marketing/marketing.png"
              class="img-fluid"
              style="max-height: 400px"
              alt=""
            />

            <div class="title-heading mt-0 mt-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
              <h1 class="heading mb-3">
                Social Media Marketing is the Best Ever
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2"
                  >Get Started</a
                >
                <router-link
                  to="/page-contact-one"
                  class="btn btn-outline-primary mt-2"
                  ><i class="mdi mdi-phone"></i> Contact us</router-link
                >
              </div>
            </div>
          </div>
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

    <!-- Feature Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Sample Features</h4>
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

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img src="images/illustrator/youtube-media.svg" alt="" />
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
              <h4 class="title mb-4">Our Valuable Clients</h4>
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
    <!-- Feature End -->

    <!-- Faq Start -->
    <section class="section">
      <div class="container">
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
                <countTo :startVal="3" :endVal="97" :duration="4000"></countTo>%
              </h2>
              <h6 class="counter-head text-muted">Happy Client</h6>
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
                <countTo :startVal="1" :endVal="15" :duration="4000"></countTo>+
              </h2>
              <h6 class="counter-head text-muted">Awards</h6>
            </div>
            <!--end counter box-->
          </div>

          <div class="col-md-3 col-6 mt-4 pt-2">
            <div class="counter-box text-center">
              <img
                src="images/illustrator/Asset192.svg"
                class="avatar avatar-small"
                alt=""
              />
              <h2 class="mb-0 mt-4">
                <countTo :startVal="0" :endVal="2" :duration="4000"></countTo>K
              </h2>
              <h6 class="counter-head text-muted">Job Placement</h6>
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
                <countTo :startVal="3" :endVal="98" :duration="4000"></countTo>%
              </h2>
              <h6 class="counter-head text-muted">Project Complete</h6>
            </div>
            <!--end counter box-->
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="faq-content mr-lg-5">
              <div class="accordion" id="accordionExampleone">
                <b-card no-body class="mb-2 border-0 rounded">
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle.accordion-1
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">
                        How our <span class="text-primary">Landrick</span> work
                        ?
                      </h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-2 border-0 rounded">
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle.accordion-2
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">
                        What is the main process open account ?
                      </h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>
                <b-card no-body class="mb-2 border-0 rounded">
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle.accordion-3
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">
                        How to make unlimited data entry ?
                      </h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-2 border-0 rounded">
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle.accordion-4
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">
                        Is <span class="text-primary">Landrick</span> safer to
                        use with my account ?
                      </h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-4"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-2 border-0 rounded">
                  <b-card-header class="border-0 bg-light p-3 pr-5">
                    <a
                      class="faq position-relative text-dark"
                      v-b-toggle.accordion-5
                      href="javascript: void(0);"
                    >
                      <h6 class="title mb-0">
                        How can i contact your technical team ?
                      </h6>
                    </a>
                  </b-card-header>
                  <b-collapse
                    id="accordion-5"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body class="px-2 py-4">
                      <p class="text-muted mb-0 faq-ans">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form.
                      </p>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <img src="images/illustrator/faq.svg" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">Get Started !</h4>
              <p class="text-muted para-desc mx-auto">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="watch-video mt-4 pt-2">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  class="btn btn-primary mb-2"
                  >Buy Now
                  <span class="badge badge-pill badge-danger ml-2"
                    >v2.5</span
                  ></a
                >
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal
                  class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                >
                  <video-icon class="icons"></video-icon>
                </a>
                <span
                  class="font-weight-bold text-uppercase small align-middle ml-1"
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
                <vimeo-player
                  ref="player"
                  :player-width="750"
                  :player-height="450"
                  :video-id="99025203"
                />
              </b-modal>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
    </section>
    <!--end section-->
    <!-- Faq End -->

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
