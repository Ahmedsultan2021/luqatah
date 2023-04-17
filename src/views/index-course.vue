<script>
import {
  ArrowUpIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
  ChevronRightIcon,
  PlayIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import countTo from "vue-count-to";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";

/**
 * Index-course component
 */
export default {
  data() {
    return {
      slide: 0,
      teamData: [
        {
          image: "images/client/01.jpg",
          name: "Ronny Jofra",
          designation: "C.E.O",
        },
        {
          image: "images/client/04.jpg",
          name: "Micheal Carlo",
          designation: "Director",
        },
        {
          image: "images/client/02.jpg",
          name: "Aliana Rosy",
          designation: "Manager",
        },
        {
          image: "images/client/03.jpg",
          name: "Sofia Razaq",
          designation: "Developer",
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
    Team,
    Carousel,
    Slide,
    ArrowUpIcon,
    countTo,
    MailIcon,
    PhoneIcon,
    UserIcon,
    ChevronRightIcon,
    PlayIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    Testimonial
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section class="main-slider">
      <b-carousel fade id="carousel-1" v-model="slide" class="slides">
        <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/course/bg01.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <h1 class="display-4 title-dark font-weight-bold mb-3">
                    You Can Learn Anything With Us
                  </h1>
                  <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div class="mt-4">
                    <a href="#courses" class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-book-open-variant"></i> Find Courses</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/course/bg04.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <h1 class="display-4 title-dark font-weight-bold mb-3">
                    Better Education For A Better Future
                  </h1>
                  <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div class="mt-4">
                    <a href="#admission" class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-school"></i> Admission Now</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </b-carousel-slide>
        <b-carousel-slide
          class="bg-slider d-flex align-items-center"
          style="background-image: url('images/course/bg05.jpg')"
        >
          <div class="bg-overlay"></div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="title-heading text-white mt-4">
                  <h1 class="display-4 title-dark font-weight-bold mb-3">
                    Education Is The Key of Success
                  </h1>
                  <p class="para-desc para-dark mx-auto text-light">
                    Launch your campaign and benefit from our expertise on
                    designing and managing conversion centered bootstrap4 html
                    page.
                  </p>
                  <div class="mt-4">
                    <a
                      href="#instructors"
                      class="btn btn-primary mt-2 mouse-down"
                      ><i class="mdi mdi-account"></i> Instructors</a
                    >
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
        </b-carousel-slide>
      </b-carousel>
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- FEATURES START -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="features-absolute">
              <div class="row">
                <div class="col-md-4">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i class="uil uil-file d-block rounded h3 mb-0"></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Unlimited Access</a
                      >
                      <p class="text-muted mt-2">
                        It is a long established fact that a reader will be of a
                        page reader will be of a page when looking at its
                        layout.
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="text-primary read-more"
                        >Read More <i class="mdi mdi-chevron-right"></i
                      ></a>
                      <i class="uil uil-file text-primary full-img"></i>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i
                        class="uil uil-graduation-cap d-block rounded h3 mb-0"
                      ></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Our Courses</a
                      >
                      <p class="text-muted mt-2">
                        It is a long established fact that a reader will be of a
                        page when reader will be of a page looking at its
                        layout.
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="text-primary read-more"
                        >Read More <i class="mdi mdi-chevron-right"></i
                      ></a>
                      <i
                        class="uil uil-graduation-cap text-primary full-img"
                      ></i>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div
                    class="card border-0 text-center features feature-clean course-feature p-4 overflow-hidden shadow"
                  >
                    <div class="icons text-primary text-center mx-auto">
                      <i
                        class="uil uil-book-reader d-block rounded h3 mb-0"
                      ></i>
                    </div>
                    <div class="card-body p-0 mt-4">
                      <a href="javascript:void(0)" class="title h5 text-dark">
                        Expert Teachers</a
                      >
                      <p class="text-muted mt-2">
                        It is a long established fact that a reader will be of a
                        page when reader will be of a page looking at its
                        layout.
                      </p>
                      <a
                        href="javascript:void(0)"
                        class="text-primary read-more"
                        >Read More <i class="mdi mdi-chevron-right"></i
                      ></a>
                      <i class="uil uil-book-reader text-primary full-img"></i>
                    </div>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- FEATURES END -->

    <!-- About Start -->
    <section class="section pt-0">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12">
            <img
              src="images/course/about.jpg"
              class="img-fluid shadow rounded"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-4">
              <h4 class="title mb-4">
                Our Story : <span class="text-primary">Landrick Education</span>
              </h4>
              <p class="text-muted">
                Start Course with
                <span class="text-primary font-weight-bold"
                  >Landrick Education</span
                >
                that can provide everything you need to generate awareness,
                drive traffic, connect. Dummy text is text that is used in the
                publishing industry or by web designers to occupy the space
                which will later be filled with 'real' content. This is required
                when, for example, the final text is not yet available. Dummy
                texts have been in use by typesetters since the 16th century.
              </p>
              <ul class="list-unstyled mb-0 text-muted">
                <li>
                  <chevron-right-icon
                    class="fea icon-sm text-success mr-2"
                  ></chevron-right-icon
                  >Digital Marketing Solutions for Tomorrow
                </li>
                <li>
                  <chevron-right-icon
                    class="fea icon-sm text-success mr-2"
                  ></chevron-right-icon
                  >Our Talented & Experienced Marketing Agency
                </li>
                <li>
                  <chevron-right-icon
                    class="fea icon-sm text-success mr-2"
                  ></chevron-right-icon
                  >Create your own skin to match your brand
                </li>
              </ul>
              <a href="javascript:void(0)" class="btn btn-outline-primary mt-3"
                >Admission Now</a
              >
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--enc container-->
    </section>
    <!--end section-->
    <!-- About End -->

    <!-- Cta Start -->
    <section
      class="section bg-cta"
      style="background: url('images/course/bg02.jpg') center center"
      id="cta"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title title-dark text-white mb-4">
                We Bring New Online Courses
              </h4>
              <p class="text-light para-desc para-dark mx-auto">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
              <a
                href="javascript: void(0);"
                v-b-modal.modal-1
                class="play-btn border border-light mt-4 video-play-icon"
              >
                <play-icon
                  class="fea icon-ex-md text-white title-dark"
                ></play-icon>
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
                  :video-id="12022651"
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
    <!-- Cta End -->

    <!-- Courses Start -->
    <section class="section" id="courses">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Explore Popular Courses</h4>
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
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/1.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Program for Missionaries</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      5 Star (3<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>75</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/2.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Access to Higher Education</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star-outline h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      3.99 Star (11<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>150</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/3.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Course in TEFL Teacher Training</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star-half h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      4.7 Star (9<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>175</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/4.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Educational Communication</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      5 Star (3<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>22</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/5.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Introduction to Epidemiology</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      5 Star (3<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>100</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/6.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Good Clinical Practice</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star-outline h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      4 Star (2<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>110</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/7.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Advanced Diagnostic Research</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star-half h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      4.5 Star (8<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>149</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/8.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >Skills Development Facilitation</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      5 Star (3<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>135</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card courses-desc overflow-hidden rounded shadow border-0"
            >
              <div class="position-relative d-block overflow-hidden">
                <img
                  src="images/course/9.jpg"
                  class="img-fluid rounded-top mx-auto"
                  alt=""
                />
                <div class="overlay-work bg-dark"></div>
                <a href="javascript:void(0)" class="text-white h6 preview"
                  >Preview Now <i class="mdi mdi-chevron-right"></i
                ></a>
              </div>

              <div class="card-body">
                <h5>
                  <a href="javascript:void(0)" class="title text-dark"
                    >PGCE Primary</a
                  >
                </h5>
                <div class="rating">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      <i class="mdi mdi-star h5 mb-0 text-warning"></i>
                    </li>
                    <li class="list-inline-item">
                      5 Star (3<i class="mdi mdi-account text-muted"></i>)
                    </li>
                  </ul>
                </div>
                <div class="fees d-flex justify-content-between">
                  <ul class="list-unstyled mb-0 numbers">
                    <li>
                      <i class="mdi mdi-school text-muted"></i> 30 Students
                    </li>
                    <li><i class="mdi mdi-book text-muted"></i> 5 Lession</li>
                  </ul>
                  <h4><span class="h6">$</span>55</h4>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-12 mt-4 pt-2 text-center">
            <a href="javascript:void(0)" class="btn btn-primary"
              >See More Courses <i class="mdi mdi-chevron-right"></i
            ></a>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60" id="instructors">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Instructors</h4>
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

        <Team :team-data="teamData" />
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Courses End -->

    <!-- Cta Start -->
    <section
      class="section bg-cta"
      style="background: url('images/course/bg03.jpg') center center"
      id="admission"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-7 col-12">
            <div class="section-title">
              <h4 class="title title-dark text-white mb-4">Admission Now</h4>
              <p class="para-desc para-dark mb-0 text-light">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
            </div>
            <div class="row" id="counter">
              <div class="col-md-3 col-6 mt-4 pt-2">
                <div class="counter-box">
                  <i
                    class="mdi mdi-school-outline title-dark text-light h1"
                  ></i>
                  <h2 class="mb-0 text-white title-dark mt-2">
                    <countTo
                      :startVal="3"
                      :duration="4000"
                      :endVal="25"
                    ></countTo
                    >K
                  </h2>
                  <h6 class="counter-head title-dark text-light">Students</h6>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->

              <div class="col-md-3 col-6 mt-4 pt-2">
                <div class="counter-box">
                  <i
                    class="mdi mdi-book-open-variant title-dark text-light h1"
                  ></i>
                  <h2 class="mb-0 text-white title-dark mt-2">
                    <countTo
                      :startVal="1"
                      :duration="4000"
                      :endVal="70"
                    ></countTo
                    >+
                  </h2>
                  <h6 class="counter-head title-dark text-light">Courses</h6>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->

              <div class="col-md-3 col-6 mt-4 pt-2">
                <div class="counter-box">
                  <i class="mdi mdi-account title-dark text-light h1"></i>
                  <h2 class="mb-0 text-white title-dark mt-2">
                    <countTo
                      :startVal="0"
                      :duration="4000"
                      :endVal="55"
                    ></countTo
                    >+
                  </h2>
                  <h6 class="counter-head title-dark text-light">
                    Instructors
                  </h6>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->

              <div class="col-md-3 col-6 mt-4 pt-2">
                <div class="counter-box">
                  <i
                    class="mdi mdi-language-swift title-dark text-light h1"
                  ></i>
                  <h2 class="mb-0 text-white title-dark mt-2">
                    <countTo
                      :startVal="3"
                      :duration="4000"
                      :endVal="25"
                    ></countTo
                    >+
                  </h2>
                  <h6 class="counter-head title-dark text-light">Languages</h6>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-5 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="card border-0 rounded">
              <div class="card-body">
                <form>
                  <h4>7 Days Free Trial</h4>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Name : <span class="text-danger">*</span></label>
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
                          >Phone : <span class="text-danger">*</span></label
                        >
                        <div class="position-relative">
                          <phone-icon class="fea icon-sm icons"></phone-icon>
                          <input
                            type="number"
                            id="number"
                            class="form-control pl-5"
                            placeholder="phone"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-lg-12 mt-2 mb-0">
                      <button class="btn btn-primary btn-block">
                        Register Now
                      </button>
                    </div>
                    <!--end col-->
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
    </section>
    <!--end section-->
    <!-- Cta End -->

    <!-- Testi Subscribe Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What Students Say ?</h4>
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

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Sign up for our Newsletter</h4>
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

        <div class="row justify-content-center mt-4 pt-2">
          <div class="col-lg-7 col-md-10">
            <form>
              <div class="form-group">
                <div class="input-group mb-3">
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form-control"
                    placeholder="Your email :"
                    required
                    aria-describedby="newssubscribebtn"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary submitBnt"
                      type="submit"
                      id="newssubscribebtn"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
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
    <!-- Testi Subscribe End -->

    <!-- Partners Start -->
    <section class="py-4 bg-light">
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

<style scoped>
::v-deep .carousel-caption {
  display: contents;
}

::v-deep .modal-content {
  background-color: transparent;
}
</style>
