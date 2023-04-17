<script>
import { ArrowUpIcon, SearchIcon, ArrowRightIcon } from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Team from "@/components/team";

/**
 * Index-developer component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    SearchIcon,
    Team,
    Carousel,
    Slide,
  },
  mounted() {
    let i = 1;
    setInterval(() => {
      if (i === 1) {
        document.getElementById("isSlideImage").style.background =
          "../../public/images/real/1.jpg";
      } else if (i === 2) {
        document.getElementById("isSlideImage").style.background =
           "../../public/images/real/2.jpg";
      } else {
        document.getElementById("isSlideImage").style.background =
           "../../public/images/real/3.jpg";
      }
      if (i >= 3) {
        i = 0;
      }
      i++;
    }, 3000);
  },
  data() {
    return {
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
      testimonial: [
        {
          message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "`,
          name: "Ronald Kinsey",
          designation: "User",
          profile: "images/client/01.jpg",
        },
        {
          message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "`,
          name: "Raquel Service",
          designation: "App User",
          profile: "images/client/02.jpg",
        },
        {
          message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "`,
          name: "Leona Moore",
          designation: "Client",
          profile: "images/client/03.jpg",
        },
        {
          message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "`,
          name: "Mark Rose",
          designation: "CEO",
          profile: "images/client/04.jpg",
        },
        {
          message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. It contains a series of real Latin words. "`,
          name: "Marsha Donoho",
          designation: "User",
          profile: "images/client/05.jpg",
        },
      ],
      propertyList: [
        {
          image: "images/real/p1.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
        {
          image: "images/real/p2.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
        {
          image: "images/real/p3.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
        {
          image: "images/real/p4.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
        {
          image: "images/real/p5.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
        {
          image: "images/real/p6.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
         {
          image: "images/real/p7.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
         {
          image: "images/real/p8.jpg",
          name: "Luxury Apartment In chelsea",
          bed: 1,
          bath: 1,
          price: "$ 44000",
          size: "$ 850 / sqft",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-half-260 d-table w-100"
      id="isSlideImage"
      :style="{
        background:
          'url(' +
          require('../../public/images/real/1.jpg') +
          ') center center',
      }"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-12">
            <div class="title-heading text-center">
              <h4 class="display-4 font-weight-bold text-white title-dark mb-3">
                Find your perfect property
              </h4>
              <p class="para-desc text-white-50 mb-0 mx-auto">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Start -->
    <section class="section bg-white">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mt-sm-0 pt-sm-0">
            <div class="text-center features-absolute ml-lg-5">
              <b-tabs
                pills
                active-nav-item-class="active"
                content-class="bg-white rounded-bottom shadow"
                nav-class="shadow border-bottom flex-column flex-sm-row d-md-inline-flex nav-justified mb-0 bg-white rounded-top position-relative overflow-hidden"
              >
                <b-tab active title-item-class="m-1">
                  <template #title>
                    <span class="nav-link py-2 px-5 rounded">
                      <div class="text-center">
                        <h6 class="mb-0">Buy</h6>
                      </div>
                    </span>
                  </template>
                  <form class="card-body text-left">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Search :</label>
                          <div class="position-relative">
                            <search-icon
                              class="fea icon-sm icons"
                            ></search-icon>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control pl-5"
                              placeholder="Search your home :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Select Categories:</label>
                          <select
                            class="form-control custom-select"
                            id="buy-properties"
                          >
                            <option>Houses</option>
                            <option>Apartment</option>
                            <option>Offices</option>
                            <option>Townhome</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Min Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-min-price"
                          >
                            <option>Min Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Max Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-max-price"
                          >
                            <option>Max Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-12">
                        <a href="javascript:void(0)" class="btn btn-primary"
                          >Search now</a
                        >
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form--></b-tab
                >
                <b-tab title-item-class="m-1">
                  <template #title>
                    <span class="nav-link py-2 px-5 rounded">
                      <div class="text-center">
                        <h6 class="mb-0">Sold</h6>
                      </div>
                    </span>
                  </template>
                  <form class="card-body text-left">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Search :</label>
                          <div class="position-relative">
                            <search-icon
                              class="fea icon-sm icons"
                            ></search-icon>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control pl-5"
                              placeholder="Search your home :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Select Categories:</label>
                          <select
                            class="form-control custom-select"
                            id="buy-properties"
                          >
                            <option>Houses</option>
                            <option>Apartment</option>
                            <option>Offices</option>
                            <option>Townhome</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Min Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-min-price"
                          >
                            <option>Min Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Max Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-max-price"
                          >
                            <option>Max Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-12">
                        <a href="javascript:void(0)" class="btn btn-primary"
                          >Search now</a
                        >
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form>
                  <!--end form--></b-tab
                >
                <b-tab title-item-class="m-1">
                  <template #title>
                    <span class="nav-link py-2 px-5 rounded">
                      <div class="text-center">
                        <h6 class="mb-0">Rent</h6>
                      </div>
                    </span>
                  </template>
                  <form class="card-body text-left">
                    <div class="row">
                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Search :</label>
                          <div class="position-relative">
                            <search-icon
                              class="fea icon-sm icons"
                            ></search-icon>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              class="form-control pl-5"
                              placeholder="Search your home :"
                            />
                          </div>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Select Categories:</label>
                          <select
                            class="form-control custom-select"
                            id="buy-properties"
                          >
                            <option>Houses</option>
                            <option>Apartment</option>
                            <option>Offices</option>
                            <option>Townhome</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Min Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-min-price"
                          >
                            <option>Min Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-lg-3 col-md-6 col-12">
                        <div class="form-group">
                          <label>Max Price :</label>
                          <select
                            class="form-control custom-select"
                            id="buy-max-price"
                          >
                            <option>Max Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-12">
                        <a href="javascript:void(0)" class="btn btn-primary"
                          >Search now</a
                        >
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </form></b-tab
                >
              </b-tabs>
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
            <div class="section-title mb-4 pb-2 text-center">
              <span class="badge badge-pill badge-soft-primary">Process</span>
              <h4 class="title mt-3 mb-4">How it work</h4>
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
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-map-marker-plus d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Map Search</a
                >
                <p class="text-muted mt-3 mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                     <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-estate d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Property Lookup</a
                >
                <p class="text-muted mt-3 mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <div
              class="card border-0 text-center features feature-clean rounded"
            >
              <div class="icons text-primary text-center mx-auto">
                <i class="uil uil-house-user d-block rounded h3 mb-0"></i>
              </div>

              <div class="card-body p-0 mt-4">
                <a href="javascript:void(0)" class="title h5 text-dark"
                  >Buy / Sell Property</a
                >
                <p class="text-muted mt-3 mb-0">
                  Composed in a pseudo-Latin language which more or less
                  pseudo-Latin language corresponds.
                </p>
                <div class="mt-2">
                  <a href="javascript:void(0)" class="text-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
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
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="section-title text-center text-lg-left mb-4 mb-lg-0">
              <span class="badge badge-pill badge-soft-primary"
                >Featured Items</span
              >
              <h4 class="title mt-3 mb-4">Latest Property</h4>
              <p class="text-muted mx-auto mx-lg-left para-desc mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="mt-4 d-none d-lg-block">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >See More</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <carousel
              id="two-testi"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="2"
              :loop="true"
            >
              <Slide
                v-for="(item, index) of propertyList"
                :key="index"
                class="card shop-list border-0 shadow position-relative overflow-hidden m-3"
              >
                <div
                  class="shop-image position-relative overflow-hidden shadow"
                >
                  <router-link to="/shop-product-detail"
                    ><img :src="`${item.image}`" class="img-fluid" alt=""
                  /></router-link>
                  <ul class="list-unstyled shop-icons">
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-pills btn-primary"
                        ><i class="uil uil-estate icons"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-pills btn-primary"
                        ><i class="uil uil-heart icons"></i
                      ></a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-icon btn-pills btn-primary"
                        ><i class="uil uil-camera icons"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <div class="card-body content p-4">
                  <a
                    href="javascript:void(0)"
                    class="text-dark product-name h6"
                    >{{ item.name }}</a
                  >
                  <ul class="list-unstyled text-muted mt-2 mb-0">
                    <li class="list-inline-item mr-3">
                      <i class="uil uil-bed"></i>{{ item.bed }} Bed
                    </li>
                    <li class="list-inline-item">
                      <i class="uil uil-bath"></i>{{ item.bath }} Bath
                    </li>
                  </ul>
                  <ul
                    class="list-unstyled d-flex justify-content-between mt-2 mb-0"
                  >
                    <li class="list-inline-item">
                      <b>{{ item.price }}</b>
                    </li>
                    <li class="list-inline-item text-muted">{{ item.size }}</li>
                  </ul>
                </div>
              </Slide>
            </carousel>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container-fluid mt-100 mt-60">
        <div
          class="rounded shadow py-5"
          style="background: url('images/real/1.jpg') center center"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="rounded p-4 bg-light">
                  <carousel
                    :per-page="1"
                    dir="ltr"
                    :autoplay="true"
                    id="single-owl"
                    class="owl-carousel owl-theme"
                    :loop="true"
                  >
                    <Slide
                      class="testi text-center"
                      v-for="(item, index) of testimonial"
                      :key="index"
                    >
                      <p class="h6 text-muted font-italic font-weight-normal">
                        {{ item.message }}
                      </p>
                      <div class="commenter mt-4">
                        <img
                          :src="`${item.profile}`"
                          class="avatar avatar-small rounded-circle d-block mx-auto shadow-lg"
                          alt=""
                        />
                        <div class="content mt-4">
                          <ul class="list-unstyled h6 text-warning mb-0">
                            <li class="list-inline-item">
                              <i class="mdi mdi-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="mdi mdi-star"></i>
                            </li>
                          </ul>
                          <h5 class="text-primary mb-0">{{ item.name }}</h5>
                          <small class="text-muted">{{
                            item.designation
                          }}</small>
                        </div>
                      </div>
                    </Slide>
                    <!--end review content-->
                  </carousel>
                  <!--end owl carousel-->
                </div>
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>
          <!--end container-->
        </div>
      </div>
      <!--end container fluid-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <h4 class="title mb-4">Our Experts</h4>
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

        <Team :team-data="teamData" />
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <section
      class="section bg-white pt-0"
      :style="{
        background:
          'url(' +
          require('../../public/images/real/build.png') +
          ') bottom no-repeat',
      }"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Latest Blog & News</h4>
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
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/real/p1.jpg"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="overlay rounded-top bg-dark"></div>
              </div>
              <div class="card-body content">
                <h5>
                  <a
                    href="javascript:void(0)"
                    class="card-title title text-dark"
                    >Design your apps in your own way</a
                  >
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
                      <a href="javascript:void(0)" class="text-muted like"
                        ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="text-muted comments"
                        ><i class="mdi mdi-comment-outline mr-1"></i>08</a
                      >
                    </li>
                  </ul>
                  <router-link to="/page-blog-detail" tag="a" class="text-muted readmore"
                    >Read More <i class="mdi mdi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
              <div class="author">
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
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/real/p2.jpg"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="overlay rounded-top bg-dark"></div>
              </div>
              <div class="card-body content">
                <h5>
                  <a
                    href="javascript:void(0)"
                    class="card-title title text-dark"
                    >How apps is changing the IT world</a
                  >
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
                      <a href="javascript:void(0)" class="text-muted like"
                        ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="text-muted comments"
                        ><i class="mdi mdi-comment-outline mr-1"></i>08</a
                      >
                    </li>
                  </ul>
                  <router-link to="/page-blog-detail" tag="a" class="text-muted readmore"
                    >Read More <i class="mdi mdi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
              <div class="author">
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
          <!--end col-->

          <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="card blog rounded border-0 shadow">
              <div class="position-relative">
                <img
                  src="images/real/p3.jpg"
                  class="card-img-top rounded-top"
                  alt="..."
                />
                <div class="overlay rounded-top bg-dark"></div>
              </div>
              <div class="card-body content">
                <h5>
                  <a
                    href="javascript:void(0)"
                    class="card-title title text-dark"
                    >Smartest Applications for Business</a
                  >
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
                      <a href="javascript:void(0)" class="text-muted like"
                        ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                      >
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0)" class="text-muted comments"
                        ><i class="mdi mdi-comment-outline mr-1"></i>08</a
                      >
                    </li>
                  </ul>
                  <router-link to="/page-blog-detail" tag="a" class="text-muted readmore"
                    >Read More <i class="mdi mdi-chevron-right"></i
                  ></router-link>
                </div>
              </div>
              <div class="author">
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
          <!--end col-->
        </div>
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