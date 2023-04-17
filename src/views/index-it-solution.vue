<script>
import {
  ArrowUpIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  VideoIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import countTo from "vue-count-to";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Team from "@/components/team";
import News from "@/components/news";

/**
 * Index-it-solution component
 */
export default {
  data() {
    return {
      features: [
        {
          icon: "uil uil-chart-line",
          title: "Hign Performance",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-crosshairs",
          title: "Best Securities",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-airplay",
          title: "Trusted Service",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-rocket",
          title: "Info Technology",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-clock",
          title: "24/7 Support",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-users-alt",
          title: "IT Management",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-file-alt",
          title: "Certified Company",
          subtext: "It is a long established fact that a reader.",
        },
        {
          icon: "uil uil-search",
          title: "Data Analytics",
          subtext: "It is a long established fact that a reader.",
        },
      ],
      teamData: [
          {
                image: 'images/client/01.jpg',
                name: 'Ronny Jofra',
                designation: 'C.E.O'
          },
          {
                image: 'images/client/04.jpg',
                name: 'Micheal Carlo',
                designation: 'Director'
          },
          {
                image: 'images/client/02.jpg',
                name: 'Aliana Rosy',
                designation: 'Manager'
          },{
                image: 'images/client/03.jpg',
                name: 'Sofia Razaq',
                designation: 'Developer'
          }
      ]
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    Carousel,
    Slide,
    ChevronRightIcon,
    ArrowRightIcon,
    countTo,
    VideoIcon,
    Team,
    News
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="bg-half-170 pb-0 bg-primary d-table w-100"
      style="background: url('images/bg2.png') center center"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 col-md-6">
            <div class="title-heading">
              <h4 class="text-white-50">We are creative</h4>
              <h4 class="heading text-white mb-3 title-dark">
                Best IT Solution <br />
                Company
              </h4>
              <p class="para-desc text-white-50">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0);" class="btn btn-light"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 mt-5 mt-sm-0">
            <img src="images/hero1.png" class="img-fluid" alt="" />
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Partners start -->
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

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What we do ?</h4>
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

        <div class="row">
          <div
            class="col-lg-3 col-md-4 mt-4 pt-2"
            v-for="(item, index) of features"
            :key="index"
          >
            <div
              class="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0"
            >
              <span class="h1 icon2 text-primary">
                <i :class="`${item.icon}`"></i>
              </span>
              <div class="card-body p-0 content">
                <h5>{{ item.title }}</h5>
                <p class="para text-muted mb-0">{{ item.subtext }}</p>
              </div>
              <span class="big-icon text-center">
                <i class="uil uil-chart-line"></i>
              </span>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-12 text-center col-md-4 mt-4 pt-2">
            <a href="javascript:void(0);" class="btn btn-primary"
              >See more <arrow-right-icon class="fea icon-sm"></arrow-right-icon
            ></a>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <!-- About Start -->
      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="row align-items-center">
              <div class="col-lg-6 col-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div
                  class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
                >
                  <div class="card-body p-0">
                    <img
                      src="images/course/online/ab01.jpg"
                      class="img-fluid"
                      alt="work-image"
                    />
                    <div class="overlay-work bg-dark"></div>
                    <div class="content">
                      <a
                        href="javascript:void(0);"
                        class="title text-white d-block font-weight-bold"
                        >Web Development</a
                      >
                      <small class="text-light">IT & Software</small>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-lg-6 col-6">
                <div class="row">
                  <div class="col-lg-12 col-md-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div
                      class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
                    >
                      <div class="card-body p-0">
                        <img
                          src="images/course/online/ab02.jpg"
                          class="img-fluid"
                          alt="work-image"
                        />
                        <div class="overlay-work bg-dark"></div>
                        <div class="content">
                          <a
                            href="javascript:void(0);"
                            class="title text-white d-block font-weight-bold"
                            >Michanical Engineer</a
                          >
                          <small class="text-light">Engineering</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-12 col-md-12 mt-4 pt-2">
                    <div
                      class="card work-container work-modern overflow-hidden rounded border-0 shadow-md"
                    >
                      <div class="card-body p-0">
                        <img
                          src="images/course/online/ab03.jpg"
                          class="img-fluid"
                          alt="work-image"
                        />
                        <div class="overlay-work bg-dark"></div>
                        <div class="content">
                          <a
                            href="javascript:void(0);"
                            class="title text-white d-block font-weight-bold"
                            >Chartered Accountant</a
                          >
                          <small class="text-light">C.A.</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 mt-lg-0 pt- pt-lg-0">
            <div class="ml-lg-4">
              <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">About Our Story</h4>
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
                  <span class="text-primary h4 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Fully Responsive
                </li>
                <li class="mb-0">
                  <span class="text-primary h4 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Multiple Layouts
                </li>
                <li class="mb-0">
                  <span class="text-primary h4 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Suits Your Style
                </li>
              </ul>

              <div class="watch-video mt-4 pt-2">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  class="btn btn-primary mb-2"
                  >Read More
                  <chevron-right-icon class="fea icon-sm"></chevron-right-icon
                ></a>
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
                <youtube
                  video-id="jNTZpfXYJa4"
                  ref="youtube"
                  width="750"
                  height="450"
                ></youtube>
              </b-modal>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Start -->
    <section class="section pt-0">
      <div class="container">
        <div
          class="p-4 rounded shadow bg-primary position-relative"
          style="z-index: 1"
        >
          <div class="row">
            <div class="col-md-6 col-12">
              <div class="progress-box">
                <h6 class="title text-light title-dark">Web Designing</h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 84%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      84%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-light title-dark">Web Development</h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 75%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-light title-dark">Game Development</h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 79%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      79%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
            </div>
            <!--end col-->

            <div class="col-md-6 col-12">
              <div class="progress-box mt-4 mt-sm-0">
                <h6 class="title text-light title-dark">App Development</h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 84%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      84%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-light title-dark">Digital Marketing</h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 75%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
              <div class="progress-box mt-4">
                <h6 class="title text-light title-dark">
                  Full stack Development
                </h6>
                <div
                  class="progress title-bg-dark"
                  style="height: 10px; padding: 3px"
                >
                  <div
                    class="progress-bar position-relative bg-black"
                    style="width: 79%"
                  >
                    <div
                      class="progress-value d-block text-light title-dark h6"
                    >
                      79%
                    </div>
                  </div>
                </div>
              </div>
              <!--end process box-->
            </div>
            <!--end col-->
          </div>
          <!--end row -->
        </div>

        <div
          class="row mt-4 pt-2 position-relative"
          id="counter"
          style="z-index: 1"
        >
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
                <countTo :startVal="1" :endVal="15"></countTo>+
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
                <countTo :startVal="0" :endVal="2"></countTo>K
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
                <countTo :startVal="3" :endVal="98"></countTo>%
              </h2>
              <h6 class="counter-head text-muted">Project Complete</h6>
            </div>
            <!--end counter box-->
          </div>
        </div>
        <!--end row-->
        <div class="feature-posts-placeholder bg-light"></div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h6 class="text-primary">Work Process</h6>
              <h4 class="title mb-4">How do we works ?</h4>
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
          <div class="col-md-4 mt-4 pt-2">
            <div
              class="card features work-process bg-transparent process-arrow border-0 text-center"
            >
              <div class="icons rounded h1 text-center text-primary px-3">
                <i class="uil uil-presentation-edit"></i>
              </div>

              <div class="card-body">
                <h4 class="title text-dark">Discussion</h4>
                <p class="text-muted mb-0">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-md-5 pt-md-3 mt-4 pt-2">
            <div
              class="card features work-process bg-transparent process-arrow border-0 text-center"
            >
              <div class="icons rounded h1 text-center text-primary px-3">
                <i class="uil uil-airplay"></i>
              </div>

              <div class="card-body">
                <h4 class="title text-dark">Strategy & Testing</h4>
                <p class="text-muted mb-0">
                  Generators convallis odio, vel pharetra quam malesuada vel.
                  Nam porttitor malesuada.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-md-5 pt-md-5 mt-4 pt-2">
            <div
              class="card features work-process bg-transparent d-none-arrow border-0 text-center"
            >
              <div class="icons rounded h1 text-center text-primary px-3">
                <i class="uil uil-image-check"></i>
              </div>

              <div class="card-body">
                <h4 class="title text-dark">Reporting</h4>
                <p class="text-muted mb-0">
                  Internet Proin tempus odio, vel pharetra quam malesuada vel.
                  Nam porttitor malesuada.
                </p>
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
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Our Mind Power</h4>
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
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <section class="section bg-light">
      <div class="container">
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
        <!--end row-->
      </div>
      <!--end container-->
    </section>
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

<style>
.modal-content {
  background-color: transparent;
}
</style>
