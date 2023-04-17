<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  VideoIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index ebook component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    VideoIcon,
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100 bg-light">
      <div class="container">
        <div class="row mt-5 mt-sm-0 align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="title-heading mr-lg-4">
              <h4 class="display-4 font-weight-bold mb-3">
                The Most <br />
                Comprehensive <br />
                Book!
              </h4>
              <p class="text-muted para-desc mb-0">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
              <div class="watch-video mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-soft-primary mb-2"
                  >Buy Now @ $18</a
                >
                <a
                  href="javascript: void(0);"
                  v-b-modal.modal-1
                  class="btn btn-icon btn-pills video-play-icon btn-soft-primary m-1 ml-2"
                >
                  <video-icon class="icons"></video-icon>
                </a>

                <span
                  class="font-weight-bold text-uppercase small align-middle ml-1"
                  >Watch Now</span
                >
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
                  :video-id="99025203"
                />
              </b-modal>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="bg-white p-5 rounded-md">
              <img
                src="images/book/book.png"
                class="img-fluid mx-auto d-block"
                alt=""
              />
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

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="bg-light p-5 rounded-md shadow mr-lg-5">
              <img
                src="images/book/about.png"
                class="img-fluid mx-auto d-block"
                alt=""
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title">
              <h4 class="title mb-4">About the Book</h4>
              <p class="text-muted para-desc">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>
              <ul class="list-unstyled text-muted my-4">
                <li class="list-inline-item mr-lg-5 mr-4">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Organize your data
                </li>
                <li class="list-inline-item mr-lg-5 mr-4">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Work with any team
                </li>
                <li class="list-inline-item mr-lg-5 mr-4">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Business analytics
                </li>
                <li class="list-inline-item mr-lg-5 mr-4">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Always in sync
                </li>
                <li class="list-inline-item mr-lg-5 mr-4">
                  <span class="text-primary h5 mr-2"
                    ><i class="uil uil-check-circle align-middle"></i></span
                  >Embedded analytics
                </li>
              </ul>
              <img src="images/book/sign.png" class="img-fluid" alt="" />
              <div class="media align-items-center mt-4">
                <img
                  src="images/client/05.jpg"
                  class="avatar avatar-md-md rounded-circle shadow-lg"
                  alt=""
                />
                <div class="content ml-3">
                  <h5 class="mb-0">Cristina Murphy</h5>
                  <p class="text-muted mb-0">Auther</p>
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
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <div class="media features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-user d-block rounded h3 mb-0"></i>
              </div>
              <div class="content ml-3">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark"
                    >Experienced Author</a
                  >
                </h5>
                <p class="text-muted mb-0">
                  This is required when, for text is not yet available.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="media features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-usd-circle d-block rounded h3 mb-0"></i>
              </div>
              <div class="content ml-3">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark">Money Back</a>
                </h5>
                <p class="text-muted mb-0">
                  This is required when, for text is not yet available.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2 mt-lg-0 pt-lg-0">
            <div class="media features feature-clean">
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-star d-block rounded h3 mb-0"></i>
              </div>
              <div class="content ml-3">
                <h5 class="mb-1">
                  <a href="javascript:void(0)" class="text-dark"
                    >Innovative Content</a
                  >
                </h5>
                <p class="text-muted mb-0">
                  This is required when, for text is not yet available.
                </p>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <div class="container-fluid mt-100 mt-60">
        <div class="rounded py-5 bg-light shadow">
          <div class="container my-lg-5">
            <div class="row justify-content-center">
              <div class="col-12 text-center">
                <div class="section-title mb-4 pb-2">
                  <h4 class="title mb-4">Book Pricing</h4>
                  <p class="text-muted para-desc mx-auto mb-0">
                    Start working with
                    <span class="text-primary font-weight-bold">Landrick</span>
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->

            <div class="row justify-content-center">
              <div class="col-lg-9">
                <div class="row">
                  <div class="col-md-4 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate text-center shadow bg-white border-0 rounded"
                    >
                      <div
                        class="ribbon ribbon-right ribbon-warning overflow-hidden"
                      >
                        <span class="text-center d-block shadow small h6"
                          >Best</span
                        >
                      </div>
                      <div class="card-body">
                        <h5 class="title mb-4">eBook</h5>
                        <h2 class="font-weight-bold">$ 4.99</h2>

                        <p class="text-muted mb-0">
                          Explore everything from machine learning and global
                          payments to scaling your team.
                        </p>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-block btn-soft-primary mt-4"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-md-4 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate starter-plan text-center shadow border-0 rounded"
                    >
                      <div class="card-body">
                        <h5 class="title text-primary mb-4">Print</h5>
                        <h2 class="font-weight-bold">$ 14.99</h2>

                        <p class="text-muted mb-0">
                          Explore everything from machine learning and global
                          payments to scaling your team.
                        </p>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-block btn-primary mt-4"
                          >Buy Now</a
                        >
                      </div>
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-md-4 col-12 mt-4 pt-2">
                    <div
                      class="card pricing-rates business-rate text-center shadow bg-white border-0 rounded"
                    >
                      <div class="card-body">
                        <h5 class="title mb-4">PDF</h5>
                        <h2 class="font-weight-bold">$ 9.99</h2>

                        <p class="text-muted mb-0">
                          Explore everything from machine learning and global
                          payments to scaling your team.
                        </p>
                        <a
                          href="javascript:void(0)"
                          class="btn btn-block btn-soft-primary mt-4"
                          >Buy Now</a
                        >
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
          <!--end container-->
        </div>
        <!--end div-->
      </div>
      <!--end container fluid-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Other Books</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary">Landrick</span> that can provide
                everything you need to generate awareness, drive traffic,
                connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 mt-4 pt-2">
            <carousel
              id="six-slide"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="6"
              :loop="true"
            >
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/1.jpg"
                      title=""
                    >
                      <img
                        src="images/book/1.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/2.jpg"
                      title=""
                    >
                      <img
                        src="images/book/2.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/3.jpg"
                      title=""
                    >
                      <img
                        src="images/book/3.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/4.jpg"
                      title=""
                    >
                      <img
                        src="images/book/4.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/5.jpg"
                      title=""
                    >
                      <img
                        src="images/book/5.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/6.jpg"
                      title=""
                    >
                      <img
                        src="images/book/6.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div
                  class="card border-0 work-container work-grid position-relative d-block overflow-hidden mx-3"
                >
                  <div class="card-body p-0">
                    <a
                      class="mfp-image d-inline-block"
                      href="images/book/7.jpg"
                      title=""
                    >
                      <img
                        src="images/book/7.jpg"
                        class="img-fluid shadow rounded"
                        alt="work-image"
                      />
                    </a>
                    <div class="content bg-white p-3">
                      <h5 class="mb-0">
                        <a href="javascript:void(0)" class="text-dark title"
                          >Iphone mockup</a
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">$ 16</h6>
                    </div>
                  </div>
                </div>
              </Slide>
            </carousel>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <!-- Subscribe Start -->
    <section class="section bg-primary">
      <!-- <div class="bg-overlay bg-overlay-white"></div> -->
      <div class="container position-relative">
        <div class="row">
          <div class="col-lg-5 col-md-6">
            <div class="app-subscribe text-center text-md-left">
              <img
                src="images/book/6.jpg"
                class="img-fluid rounded-md shadow-md"
                alt=""
              />
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="section-title text-center text-md-left">
              <h1 class="font-weight-bold text-white title-dark mb-3">
                Upcoming Book
              </h1>
              <p class="text-white-50 para-dark">
                Start working with Landrick that can provide everything you need
                to generate awareness, drive traffic, connect.
              </p>

              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-warning"
                  >Pre-order Now</a
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
    <!-- Subscribe End -->
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
