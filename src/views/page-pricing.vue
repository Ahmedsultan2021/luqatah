<script>
import { ArrowUpIcon, HelpCircleIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
import Pricing from "@/components/pricing";
import Pricing1 from "@/components/pricing2";

/**
 * Page-pricing component
 */
export default {
  data() {
    return {
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
    Carousel,
    Slide,
    Pricing,
    Pricing1,
    ArrowUpIcon,
    HelpCircleIcon,
    Testimonial,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title">Pricing</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Pricing
                    </li>
                  </ul>
                </nav>
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

    <!-- Price Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Pricing #1</h4>
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
        <Pricing1 :pricingData="pricingData" />
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Pricing #2</h4>
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
          <div class="col-12 mt-4 pt-2">
            <div class="text-center">
              <b-tabs
                pills
                justified
                nav-class="justify-content-center d-inline-block border py-1 px-2 rounded-pill"
              >
                <b-tab
                  title-item-class="d-inline-block"
                  title-link-class="px-3 rounded-pill"
                >
                  <template v-slot:title> Monthly </template>
                  <Pricing />
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
                  <Pricing />
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
      <!-- Price End -->

      <!-- Testi Start -->
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
            <Testimonial :testimonialData="testimonialData" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Testi End -->

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
          class="row mt-md-5 pt-md-3 mt-4 pt-2 mt-sm-0 pt-sm-0 justify-content-center"
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
              <div class="mt-4 pt-2">
                <router-link to="/page-contact-two" class="btn btn-primary"
                  >Contact us <i class="mdi mdi-arrow-right"></i
                ></router-link>
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
    <!-- FAQ n Contact End -->

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
