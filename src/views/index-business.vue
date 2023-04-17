<script>
import { VueTyper } from "vue-typer";
import { ArrowUpIcon, PlayIcon } from "vue-feather-icons";
import countTo from "vue-count-to";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing2";
import News from "@/components/news";

/**
 * Index-business component
 */
export default {
  data() {
    return {
      featuresData: [
        {
          icon: "uil uil-edit-alt",
          title: "Design & Development",
          description:
            "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam aenean elementum semper.",
        },
        {
          icon: "uil uil-vector-square",
          title: "Management & Marketing",
          description:
            "Allegedly, a Latin scholar established the origin of the text by established compiling unusual word.",
        },
        {
          icon: "uil uil-file-search-alt",
          title: "Stratagy & Research",
          description:
            "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.",
        },
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
      pricingData: [
        {
          title: "Free",
          price: 0,
          feature: [
            "Full Access",
            "Enhanced Security",
            "Source Files",
            "1 Domain Free",
          ],
          button: "Buy Now",
        },
        {
          title: "Starter",
          price: 39,
          feature: [
            "Full Access",
            "Source Files",
            "Free Appointments",
            "Free Installment",
            "Enhanced Security",
          ],
          button: "Get Started",
          isBest: true,
        },
        {
          title: "Professional",
          price: 59,
          feature: [
            "Full Access",
            "Enhanced Security",
            "Source Files",
            "1 Domain Free",
          ],
          button: "Try it Now",
        },
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    PlayIcon,
    "vue-typer": VueTyper,
    countTo,
    Pricing,
    News,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 border-bottom d-table w-100" id="home">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-7">
            <div class="title-heading mt-4">
              <div class="alert alert-light alert-pills shadow" role="alert">
                <span class="badge badge-pill badge-danger mr-1">v2.5</span>
                <span class="content">
                  Build <span class="text-primary">anything</span> you want -
                  Landrick.</span
                >
              </div>
              <h1 class="heading mb-3">
                Leading Digital Business For
                <span class="element text-primary">
                  <vue-typer
                    :text="[
                      'Agency',
                      'Software',
                      'Technology',
                      'Studio',
                      'Webapps',
                    ]"
                  ></vue-typer>
                </span>
                Solution
              </h1>
              <p class="para-desc text-muted">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4">
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary rounded"
                  ><i class="mdi mdi-google-my-business"></i> Make Your Shop</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="position-relative">
              <img
                src="images/busi01.jpg"
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
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Feature Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What We Do ?</h4>
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
          <div
            class="col-md-4 col-12"
            v-for="(item, index) of featuresData"
            :key="index"
          >
            <div class="features mt-5">
              <div class="image position-relative d-inline-block">
                <i :class="`${item.icon} h1 text-primary`"></i>
              </div>

              <div class="content mt-4">
                <h5>{{ item.title }}</h5>
                <p class="text-muted mb-0">{{ item.description }}</p>
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
    <!-- End feature -->

    <!-- CTA Start -->
    <section
      class="section bg-cta"
      data-jarallax='{"speed": 0.5}'
      style="background: url('images/2.jpg')"
      id="cta"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title title-dark text-white mb-4">
                Stop leaving money on the table.
              </h4>
              <p class="text-light para-dark para-desc mx-auto">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
              <a
                href="javascript: void(0);"
                v-b-modal.modal
                class="play-btn border border-light mt-4 video-play-icon"
              >
                <play-icon
                  class="fea icon-ex-md text-white title-dark"
                ></play-icon>
              </a>
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
    <!-- CTA End -->

    <!-- Price Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Choose Simple Pricing</h4>
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
        <Pricing :pricingData="pricingData" />
      </div>
      <!--end container-->
      <!-- Price End -->

      <!-- Counter End -->
      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="section-title">
              <h4 class="title mb-4">
                See everything about your
                <span class="text-primary">Landrick</span> Business
              </h4>
              <p class="text-muted para-desc">
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
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6">
            <div class="row ml-lg-5" id="counter">
              <div class="col-md-6 col-12">
                <div class="row">
                  <div class="col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div
                      class="card counter-box border-0 bg-light shadow text-center rounded"
                    >
                      <div class="card-body py-5">
                        <h2 class="mb-0">
                          <countTo
                            :startVal="3"
                            :endVal="97"
                            :duration="4000"
                          ></countTo
                          >%
                        </h2>
                        <h5 class="counter-head mb-0">Happy Client</h5>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-12 mt-4 pt-2">
                    <div
                      class="card counter-box border-0 bg-primary shadow text-center rounded"
                    >
                      <div class="card-body py-5">
                        <h2 class="text-light title-dark mb-0">
                          <countTo
                            :startVal="1"
                            :endVal="15"
                            :duration="4000"
                          ></countTo
                          >+
                        </h2>
                        <h5 class="counter-head mb-0 title-dark text-light">
                          Awards
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end Row-->
              </div>
              <!--end col-->

              <div class="col-md-6 col-12">
                <div class="row pt-lg-4 mt-lg-4">
                  <div class="col-12 mt-4 pt-2">
                    <div
                      class="card counter-box border-0 bg-success shadow text-center rounded"
                    >
                      <div class="card-body py-5">
                        <h2 class="text-light title-dark mb-0">
                          <countTo :startVal="0" :endVal="2" :duration="4000">
                          </countTo
                          >K
                        </h2>
                        <h5 class="counter-head mb-0 title-dark text-light">
                          Job Placement
                        </h5>
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-12 mt-4 pt-2">
                    <div
                      class="card counter-box border-0 bg-light shadow text-center rounded"
                    >
                      <div class="card-body py-5">
                        <h2 class="mb-0">
                          <countTo
                            :startVal="3"
                            :endVal="98"
                            :duration="4000"
                          ></countTo
                          >%
                        </h2>
                        <h5 class="counter-head mb-0">Project Complete</h5>
                      </div>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end Row-->
              </div>
              <!--end col-->
            </div>
            <!--end Row-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Counter End -->

    <!-- News Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Latest News</h4>
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

        <News />
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
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

              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary mt-2 mr-2"
                  >Get Started Now</a
                >
                <a
                  href="javascript:void(0)"
                  class="btn btn-outline-primary mt-2"
                  >Free Trial</a
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
    <!-- News End -->
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
.vue-typer .custom.char.typed {
  color: #2f55d4;
}

.modal-content {
  background-color: transparent;
}
</style>
