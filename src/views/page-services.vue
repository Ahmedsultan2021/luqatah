<script>
import { ArrowUpIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";

/**
 * Page-services component
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
    Testimonial,
    Slide,
    ArrowUpIcon,
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
              <h4 class="title">Services</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Services
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

    <!-- Feature Start -->
    <section class="section">
      <div class="container">
        <div class="row">
          <div
            class="col-md-4 col-12"
            v-for="(data, index) of featuresData"
            :key="index"
          >
            <div class="features mt-5">
              <div class="image position-relative d-inline-block">
                <i :class="`${data.icon} h1 text-primary`"></i>
              </div>

              <div class="content mt-4">
                <h5>{{ data.title }}</h5>
                <p class="text-muted mb-0">{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end container-->

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
    <!-- Feature Start -->

    <!-- Project Start -->
    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Our Latest Projects</h4>
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
          <div class="col-md-6 col-12 mt-4 pt-2">
            <div
              class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0"
            >
              <div class="card-body p-0">
                <img
                  src="images/work/1.jpg"
                  class="img-fluid rounded"
                  alt="work-image"
                />
                <div class="overlay-work bg-dark"></div>
                <div class="content">
                  <router-link
                    to="/page-work-detail"
                    class="title text-white d-block font-weight-bold"
                    >Shifting Perspective</router-link
                  >
                  <small class="text-light">Studio</small>
                </div>
                <div class="client">
                  <small class="text-light user d-block"
                    ><i class="mdi mdi-account"></i> Calvin Carlo</small
                  >
                  <small class="text-light date"
                    ><i class="mdi mdi-calendar-check"></i> 13th August,
                    2019</small
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div
              class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0"
            >
              <div class="card-body p-0">
                <img
                  src="images/work/2.jpg"
                  class="img-fluid rounded"
                  alt="work-image"
                />
                <div class="overlay-work bg-dark"></div>
                <div class="content">
                  <router-link
                    to="/page-work-detail"
                    class="title text-white d-block font-weight-bold"
                    >Colors Magazine</router-link
                  >
                  <small class="text-light">Web Design</small>
                </div>
                <div class="client">
                  <small class="text-light user d-block"
                    ><i class="mdi mdi-account"></i> Calvin Carlo</small
                  >
                  <small class="text-light date"
                    ><i class="mdi mdi-calendar-check"></i> 13th August,
                    2019</small
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div
              class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0"
            >
              <div class="card-body p-0">
                <img
                  src="images/work/3.jpg"
                  class="img-fluid rounded"
                  alt="work-image"
                />
                <div class="overlay-work bg-dark"></div>
                <div class="content">
                  <router-link
                    to="/page-work-detail"
                    class="title text-white d-block font-weight-bold"
                    >Spa Cosmetics</router-link
                  >
                  <small class="text-light">Developing</small>
                </div>
                <div class="client">
                  <small class="text-light user d-block"
                    ><i class="mdi mdi-account"></i> Calvin Carlo</small
                  >
                  <small class="text-light date"
                    ><i class="mdi mdi-calendar-check"></i> 13th August,
                    2019</small
                  >
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 col-12 mt-4 pt-2">
            <div
              class="card work-container work-modern position-relative overflow-hidden shadow rounded border-0"
            >
              <div class="card-body p-0">
                <img
                  src="images/work/4.jpg"
                  class="img-fluid rounded"
                  alt="work-image"
                />
                <div class="overlay-work bg-dark"></div>
                <div class="content">
                  <router-link
                    to="/page-work-detail"
                    class="title text-white d-block font-weight-bold"
                    >Riser Coffee</router-link
                  >
                  <small class="text-light">Branding</small>
                </div>
                <div class="client">
                  <small class="text-light user d-block"
                    ><i class="mdi mdi-account"></i> Calvin Carlo</small
                  >
                  <small class="text-light date"
                    ><i class="mdi mdi-calendar-check"></i> 13th August,
                    2019</small
                  >
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
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title">
              <h4 class="title mb-4">
                See everything about your employee at one place.
              </h4>
              <p class="text-muted para-desc mx-auto">
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
    <!-- Project End -->
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
