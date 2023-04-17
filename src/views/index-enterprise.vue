<script>
import { ArrowUpIcon, UserIcon, MailIcon, KeyIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import News from "@/components/news";

/**
 * index-enterprise component
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
      ],

      featuresData2: [
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
    Switcher,
    Footer,
    Pricing,
    News,
    ArrowUpIcon,
    UserIcon,
    MailIcon,
    KeyIcon,
    Carousel,
    Slide,
    Features,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />
    <!-- Hero Start -->
    <section
      class="bg-half-260 bg-primary d-table w-100"
      style="background: url('images/enterprise.png') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="title-heading text-center mt-4">
              <h1 class="display-4 title-dark font-weight-bold text-white mb-3">
                Starting in Strong Way
              </h1>
              <p class="para-desc mx-auto text-white-50">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript: void(0);" class="btn btn-primary"
                  ><i class="mdi mdi-email"></i> Get Started</a
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
        <div class="mt-5">
          <Features :featuresData="featuresData" />
        </div>
        <div class="mt-5">
          <Features :featuresData="featuresData2" />
        </div>
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-center">
          <div
            class="col-lg-7 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0"
          >
            <div class="section-title">
              <h4 class="title mb-4">
                Speed up your development <br />
                with <span class="text-primary">Landrick.</span>
              </h4>
              <p class="text-muted">
                Using Landrick to build your site means never worrying about
                designing another page or cross browser compatibility. Our
                ever-growing library of components and pre-designed layouts will
                make your life easier.
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
              <a href="javascript: void(0);" class="mt-3 h6 text-primary"
                >Find Out More <i class="mdi mdi-chevron-right"></i
              ></a>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-5 col-md-6 order-1 order-md-2">
            <div class="card rounded border-0 shadow ml-lg-5">
              <div class="card-body">
                <img
                  src="images/illustrator/Mobile_notification_SVG.svg"
                  alt=""
                />

                <div class="content mt-4 pt-2">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group">
                          <label
                            >Name : <span class="text-danger">*</span></label
                          >
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
                            >Password :
                            <span class="text-danger">*</span></label
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
                      <!--end col-->

                      <div class="col-lg-12 mt-2 mb-0">
                        <button class="btn btn-primary btn-block">
                          Download
                        </button>
                      </div>
                      <!--end col-->
                    </div>
                  </form>
                </div>
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
    <!-- Feature End -->

    <!-- Testi Start -->
    <section
      class="section"
      style="background: url('images/3.jpg') center center"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row py-5 justify-content-center">
          <div class="col-lg-8 text-center">
            <carousel
              id="owl-fade"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="1"
              :loop="true"
            >
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/01.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
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
                  <h6 class="text-light title-dark">Thomas Israel</h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/02.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout. "
                  </p>
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
                  <h6 class="text-light title-dark">Carl Oliver</h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/03.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " There is now an abundance of readable dummy texts. These
                    are usually used when a text is required purely to fill a
                    space. These alternatives to the classic Lorem Ipsum texts
                    are often amusing and tell short, funny or nonsensical
                    stories. "
                  </p>
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
                  <h6 class="text-light title-dark">Barbara McIntosh</h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/04.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " According to most sources, Lorum Ipsum can be traced back
                    to a text composed by Cicero in 45 BC. Allegedly, a Latin
                    scholar established the origin of the text by compiling all
                    the instances of the unusual word 'consectetur' he could
                    find "
                  </p>
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
                  <h6 class="text-light title-dark">Christa Smith</h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/05.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. The most well-known
                    dummy text is the 'Lorem Ipsum', which is said to have
                    originated in the 16th century. "
                  </p>
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
                  <h6 class="text-light title-dark">Dean Tolle</h6>
                </div>
                <!--end customer testi-->
              </Slide>
              <Slide>
                <div class="customer-testi text-center mx-4">
                  <img
                    src="images/client/06.jpg"
                    class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                    alt=""
                  />
                  <p
                    class="text-light para-dark h5 font-weight-normal font-italic mt-4"
                  >
                    " It seems that only fragments of the original text remain
                    in the Lorem Ipsum texts used today. One may speculate that
                    over the course of time certain letters were added or
                    deleted at various positions within the text. "
                  </p>
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
                  <h6 class="text-light title-dark">Jill Webb</h6>
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
    <!-- Testi End -->

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

    <!-- Price start -->
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

      <div class="container mt-100 mt-60">
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
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Schedule a demo with us</h4>
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

        <div class="row justify-content-center mt-4">
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
                    required=""
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
    <!-- Price End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-footer">
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
    <!--Shape End-->
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
