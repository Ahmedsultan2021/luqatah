<script>
import { ArrowUpIcon, ShieldIcon, CpuIcon, VideoIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import countTo from "vue-count-to";

import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Switcher from "@/components/switcher";
import Features from "@/components/features";
import Footer from "@/components/footer";

/**
 * Index-classic-saas component
 */
export default {
  data() {
    return {
      playerVars: {
        autoplay: 1,
      },
      featuresData: [
        {
          icon: "uil uil-airplay",
          title: "Easy To Use",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.",
        },
        {
          icon: "uil uil-calendar-alt",
          title: "Daily Reports",
          description:
            "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word.",
        },
        {
          icon: "uil uil-clock",
          title: "Real Time Zone",
          description:
            "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today.",
        },
      ],
    };
  },
  components: {
    Navbar,
    Pricing,
    Switcher,
    Footer,
    Features,
    ArrowUpIcon,
    Carousel,
    Slide,
    countTo,
    ShieldIcon,
    CpuIcon,
    VideoIcon
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100 overflow-hidden" id="home">
      <div class="container">
        <div class="row align-items-center pt-5">
          <div class="col-lg-7 col-md-6">
            <div class="title-heading">
              <h1 class="heading mb-3">
                Everything you <br />
                need to do <br />
                better work
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a
                  href="https://1.envato.market/4n73n"
                  target="_blank"
                  class="btn btn-primary"
                  >Buy Now<span class="badge badge-pill badge-danger ml-2"
                    >v2.5</span
                  ></a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="classic-saas-image position-relative">
              <div class="bg-saas-shape position-relative">
                <img
                  src="images/saas/classic01.png"
                  class="mx-auto d-block"
                  alt=""
                />
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
    <!-- Hero End -->

    <!-- Partners start -->
    <section class="pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img
              src="images/client/amazon.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img
              src="images/client/google.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/lenovo.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/paypal.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img
              src="images/client/shopify.svg"
              class="avatar avatar-ex-sm"
              alt=""
            />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
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

    <!-- Section Start -->
    <section class="section overflow-hidden">
      <div class="container pb-5 mb-md-5">
        <Features :featuresData="featuresData" />
      </div>
      <!--end container-->

      <div class="container pb-5 mb-md-5 mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="saas-feature-shape-left position-relative">
              <img
                src="images/saas/classic02.png"
                class="img-fluid mx-auto d-block rounded shadow"
                alt=""
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div class="section-title ml-lg-4">
              <h1 class="title mb-3">Build your site for using this app</h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <carousel
                id="owl-fade"
                class="owl-carousel owl-theme"
                dir="ltr"
                :per-page="1"
                :autoplay="true"
                :loop="true"
              >
                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/01.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " It seems that only fragments of the original text remain
                      in the Lorem Ipsum texts used today. "
                    </p>
                    <h6 class="text-primary">- Thomas Israel</h6>
                  </div>
                </Slide>
                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/02.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " The most well-known dummy text is the 'Lorem Ipsum',
                      which is said to have originated in the 16th century. "
                    </p>
                    <h6 class="text-primary">- Carl Oliver</h6>
                  </div>
                </Slide>

                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/03.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " One disadvantage of Lorum Ipsum is that in Latin certain
                      letters appear more frequently than others. "
                    </p>
                    <h6 class="text-primary">- Barbara McIntosh</h6>
                  </div>
                </Slide>

                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/04.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " Thus, Lorem Ipsum has only limited suitability as a
                      visual filler for German texts. "
                    </p>
                    <h6 class="text-primary">- Jill Webb</h6>
                  </div>
                </Slide>
                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/05.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " There is now an abundance of readable dummy texts. These
                      are usually used when a text is required. "
                    </p>
                    <h6 class="text-primary">- Dean Tolle</h6>
                  </div>
                </Slide>
                <Slide>
                  <div class="customer-testi py-3">
                    <img
                      src="images/client/06.jpg"
                      class="img-fluid avatar avatar-small rounded-circle shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " According to most sources, Lorum Ipsum can be traced
                      back to a text composed by Cicero. "
                    </p>
                    <h6 class="text-primary">- Christa Smith</h6>
                  </div>
                </Slide>
              </carousel>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div class="section-title mr-lg-4">
              <h1 class="title mb-3">Why Choose us ?</h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div class="row">
                <div class="col-12">
                  <div class="d-flex align-items-center pt-4">
                    <h2>
                      <shield-icon
                        class="fea icon-m-md text-primary"
                      ></shield-icon>
                    </h2>
                    <div class="ml-3">
                      <h5>Fully Secured</h5>
                      <p class="text-muted mb-0">
                        Moreover, in Latin only words at the beginning of
                        sentences are capitalized.
                      </p>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12">
                  <div class="d-flex align-items-center pt-4">
                    <h2>
                      <cpu-icon class="fea icon-m-md text-primary"></cpu-icon>
                    </h2>
                    <div class="ml-3">
                      <h5>Best Performance</h5>
                      <p class="text-muted mb-0">
                        If the fill text is intended to illustrate the
                        characteristics of sometimes.
                      </p>
                    </div>
                  </div>
                </div>
                <!--end col-->

                <div class="col-12 pt-4">
                  <a href="javascript:void(0)" class="btn btn-outline-primary"
                    >Install Now <i class="mdi mdi-chevron-right"></i
                  ></a>
                </div>
                <!--end col-->
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 order-1 order-lg-2">
            <div class="saas-feature-shape-right position-relative">
              <img
                src="images/saas/classic02.png"
                class="img-fluid mx-auto d-block rounded shadow"
                alt=""
              />
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container pt-4 mt-100 mt-60">
        <div class="row justify-content-center" id="counter">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                Overall
                <span class="text-primary">
                  <countTo
                    :startVal="1"
                    :endVal="333"
                    :duration="4000"
                  ></countTo
                  >k+
                </span>
                client are using, Get Started
              </h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Build responsive, mobile-first projects on the web with the
                world's most popular front-end component library.
              </p>

              <div class="watch-video mt-4">
                <a href="javascript:void(0)" class="btn btn-primary mb-2 mr-2"
                  >Get Started <i class="mdi mdi-chevron-right"></i
                ></a>
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal
                  class="btn btn-icon btn-pills video-play-icon btn-primary m-1"
                  >
                  <video-icon class="icons"></video-icon>
                  </a
                >
                <span class="font-weight-bold text-uppercase small align-middle ml-1">Watch Now</span>
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
                  :player-vars="playerVars"
                ></youtube>
              </b-modal>
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
              <h4 class="title mb-4">Our Pricing Rates</h4>
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

      <div class="container mt-100 mt-60">
        <div class="rounded bg-primary p-lg-5 p-4">
          <div class="row align-items-end">
            <div class="col-md-8">
              <div class="section-title text-md-left text-center">
                <h4 class="title mb-3 text-white title-dark">
                  Start your free 2 week trial today
                </h4>
                <p class="text-white-50 mb-0">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
            <!--end col-->

            <div class="col-md-4 mt-4 mt-sm-0">
              <div class="text-md-right text-center">
                <a href="javascript:void(0)" class="btn btn-light"
                  >Get Started</a
                >
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
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

<style>
.modal-content {
  background-color: transparent;
}
</style>
