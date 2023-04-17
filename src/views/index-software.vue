<script>
import { ArrowUpIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";

/**
 * Index-software component
 */
export default {
  data() {
    return {
      solutionList: [
        {
          icon: 'uil uil-edit-alt',
          title: 'Seo Services',
          text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.'
        },
         {
          icon: 'uil uil-vector-square',
          title: 'Email Marketing',
          text: 'Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.'
        },
         {
          icon: 'uil uil-file-search-alt',
          title: 'Data Analysis',
          text: 'It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.'
        },
         {
          icon: 'uil uil-airplay',
          title: 'Digital Marketing',
          text: 'Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.'
        },
         {
          icon: 'uil uil-calendar-alt',
          title: 'Social Media Marketing',
          text: 'Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.'
        },
         {
          icon: 'uil uil-clock',
          title: 'Link Building',
          text: 'It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.'
        }
      ]
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Pricing,
    Slide,
    ArrowUpIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="bg-half-260 bg-primary d-table w-100"
      style="background: url('images/software/bg.png') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div
          class="row align-items-center position-relative mt-5"
          style="z-index: 1"
        >
          <div class="col-lg-6 col-md-12">
            <div class="title-heading mt-4 text-center text-lg-left">
              <h1 class="heading mb-3 title-dark text-white">
                Best Software For Your Work Monitor
              </h1>
              <p class="para-desc text-white-50">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-light"
                  ><i class="mdi mdi-download"></i> Download Now</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-12 mt-4 pt-2">
            <div class="position-relative">
              <div class="software_hero">
                <img
                  src="images/software/software.png"
                  class="img-fluid d-block"
                  alt=""
                />
              </div>
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
              </div>
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
    <!-- Hero End -->

    <!-- Section Start -->
    <section class="section pt-md-4 pt-5">
      <!-- Start Features -->
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Solutions</h4>
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
          <div class="col-md-4 col-12 mt-5" v-for="(item,index) of solutionList" :key="index">
            <div class="features text-center">
              <div class="image position-relative d-inline-block">
                <i :class="`${item.icon} h1 text-primary`"></i>
              </div>

              <div class="content mt-4">
                <h5>{{item.title}}</h5>
                <p class="text-muted mb-0">
                  {{item.text}}
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row justify-content-center mt-5 pt-4">
          <div class="col-lg-10 col-md-12">
            <img
              src="images/software/mobile-hori.png"
              class="img-fluid d-block mx-auto"
              alt=""
            />
          </div>
          <!--end col-->
          <div class="col-12 text-center pt-2">
            <div class="alert alert-light alert-pills shadow" role="alert">
              <span class="badge badge-pill badge-primary mr-1">Download</span>
              <span class="content">
                Trusted by the world's best <i class="mdi mdi-download"></i
              ></span>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- End Features -->

      <div class="container mt-100 mt-60">
        <div class="card rounded bg-light shadow border-0">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-7">
                <div class="text-sm-left">
                  <h5 class="mb-0">
                    Start building beautiful block-based websites.
                  </h5>
                </div>
              </div>
              <!--end col-->

              <div class="col-sm-5 mt-4 mt-sm-0">
                <div class="text-sm-right">
                  <a href="javascript:void(0)" class="btn btn-outline-primary"
                    ><i class="mdi mdi-file-document-outline"></i> Start Now
                  </a>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row -->
          </div>
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <img src="images/software/mobile01.png" class="img-fluid" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <h4 class="title mb-4">
                Carry out Marketing Initiatives : Landrick
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

      <!-- Price Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Choose your perfect Plan</h4>
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
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Price End -->

      <!-- Start Testimonial -->
      <div class="container mt-100 mt-60">
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
            <carousel
              id="customer-testi"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="3"
              :loop="true"
            >
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/01.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                    <p class="text-muted mt-2">
                      " It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. "
                    </p>
                    <h6 class="text-primary">
                      - Thomas Israel <small class="text-muted">C.E.O</small>
                    </h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/02.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                        <i class="mdi mdi-star-half text-warning"></i>
                      </li>
                    </ul>
                    <p class="text-muted mt-2">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <h6 class="text-primary">
                      - Barbara McIntosh <small class="text-muted">M.D</small>
                    </h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/03.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                    <p class="text-muted mt-2">
                      " The most well-known dummy text is the 'Lorem Ipsum',
                      which is said to have originated in the 16th century. "
                    </p>
                    <h6 class="text-primary">
                      - Carl Oliver <small class="text-muted">P.A</small>
                    </h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/04.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                    <p class="text-muted mt-2">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero. "
                    </p>
                    <h6 class="text-primary">
                      - Christa Smith <small class="text-muted">Manager</small>
                    </h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/05.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                    <p class="text-muted mt-2">
                      " There is now an abundance of readable dummy texts. These
                      are usually used when a text is required. "
                    </p>
                    <h6 class="text-primary">
                      - Dean Tolle <small class="text-muted">Developer</small>
                    </h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="media customer-testi m-2">
                  <img
                    src="images/client/06.jpg"
                    class="avatar avatar-small mr-3 rounded shadow"
                    alt=""
                  />
                  <div
                    class="media-body content p-3 shadow rounded bg-white position-relative"
                  >
                    <ul class="list-unstyled mb-0">
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
                    <p class="text-muted mt-2">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <h6 class="text-primary">
                      - Jill Webb <small class="text-muted">Designer</small>
                    </h6>
                  </div>
                </div>
              </Slide>
            </carousel>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- End Testimonial -->
    </section>
    <!--end section-->
    <!-- section End -->

    <!--  -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                See everything about your employee at one place.
              </h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>

              <div class="mt-4 pt-2">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  class="btn btn-primary"
                  >Get Started
                  <span class="badge badge-pill badge-danger ml-2"
                    >v2.5</span
                  ></a
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
    <!--  -->
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
