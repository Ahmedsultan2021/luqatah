<script>
import {
  ArrowUpIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Index-seo-agency component
 */
export default {
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
  },
  data() {
    return {
      list: [
        {
          image: "images/construction/o1.jpg",
          title: "Iphone mockup",
          type: "offices",
          category: "offices",
        },
        {
          image: "images/construction/b1.jpg",
          title: "Mockup Collection",
          type: "Mockup",
          category: "buildings",
        },
        {
          image: "images/construction/r1.jpg",
          title: "Abstract images",
          type: "Abstract",
          category: "roads",
        },
        {
          image: "images/construction/b2.jpg",
          title: "Yellow bg with Books",
          type: "Books",
          category: "buildings",
        },
        {
          image: "images/construction/r2.jpg",
          title: "Company V-card",
          type: "V-card",
          category: "roads",
        },
        {
          image: "images/construction/o2.jpg",
          title: "Mockup box with paints",
          type: "Photography",
          category: "offices",
        },
      ],
      filterCategory: "all",
      index: 0,
    };
  },
  mounted() {
    document
      .getElementById("color-opt")
      .setAttribute("href", "./css/colors/yellow.css");
  },
  destroyed() {
    document
      .getElementById("color-opt")
      .setAttribute("href", "./css/colors/default.css");
  },
  computed: {
    filteredData: function () {
      if (this.filterCategory === "all") {
        return this.list;
      } else {
        return this.list.filter((x) => x.category === this.filterCategory);
      }
    },
  },
  methods: {
    updateFilter(filterName) {
      this.filterCategory = filterName;
    },
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-half-260 d-table w-100"
      style="background: url('images/construction/bg.jpg') center center"
    >
      <div class="bg-overlay" style="opacity: 0.65"></div>
      <div class="container">
        <div class="row mt-5 mt-md-4">
          <div class="col-12">
            <div class="title-heading">
              <h4 class="display-4 mb-4 font-weight-bold text-white title-dark">
                Start building <br />
                your dream home
              </h4>
              <p class="para-desc text-white-50">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <div class="mt-4 pt-2">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >Get Started</a
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

    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="features-absolute rounded bg-white shadow">
              <div class="row">
                <div class="col-lg-8 col-md-12 my-4">
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="media features p-4">
                        <div
                          class="icon text-center rounded-circle text-primary mr-3 mt-2"
                        >
                          <i
                            class="uil uil-ruler-combined align-middle h4 mb-0"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h4 class="title">Project Planning</h4>
                          <p class="text-muted para mb-0">
                            Composed in a pseudo-Latin language which more
                            corresponds.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6 col-12">
                      <div class="media features p-4">
                        <div
                          class="icon text-center rounded-circle text-primary mr-3 mt-2"
                        >
                          <i
                            class="uil uil-constructor align-middle h4 mb-0"
                          ></i>
                        </div>
                        <div class="media-body">
                          <h4 class="title">Qualified Specialists</h4>
                          <p class="text-muted para mb-0">
                            Composed in a pseudo-Latin language which more
                            corresponds.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6 col-12">
                      <div class="media features p-4">
                        <div
                          class="icon text-center rounded-circle text-primary mr-3 mt-2"
                        >
                          <i class="uil uil-no-entry align-middle h4 mb-0"></i>
                        </div>
                        <div class="media-body">
                          <h4 class="title">Constant Maintenance</h4>
                          <p class="text-muted para mb-0">
                            Composed in a pseudo-Latin language which more
                            corresponds.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--end col-->

                    <div class="col-md-6 col-12">
                      <div class="media features p-4">
                        <div
                          class="icon text-center rounded-circle text-primary mr-3 mt-2"
                        >
                          <i class="uil uil-cog align-middle h4 mb-0"></i>
                        </div>
                        <div class="media-body">
                          <h4 class="title">Warranty Service</h4>
                          <p class="text-muted para mb-0">
                            Composed in a pseudo-Latin language which more
                            corresponds.
                          </p>
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!--end col-->

                <div class="col-lg-4 d-none d-lg-block position-relative">
                  <img
                    src="images/construction/serveices.png"
                    class="img-fluid mx-auto d-block construction-img"
                    alt=""
                  />
                </div>
                <!--end col-->
              </div>
              <!--end row-->
            </div>
          </div>
          <!--end col-->

          <div class="col-12 mt-4 pt-2 text-center">
            <p class="text-muted mb-0">
              Our list of services does not end here.
              <a href="javascript:void(0)" class="text-primary h6">Click here</a
              >, and We’ll come up with more solution for you!
            </p>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6 col-12">
            <div class="position-relative">
              <img
                src="images/construction/about.jpg"
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

          <div class="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="ml-lg-5 ml-md-4">
              <div class="section-title">
                <span class="badge badge-pill badge-soft-primary"
                  >About us</span
                >
                <h4 class="title mt-3 mb-4">
                  We are the leader <br />
                  in the <span class="text-primary">Landrick</span>
                </h4>
                <p class="text-muted para-desc mx-auto">
                  Start working with
                  <span class="text-primary font-weight-bold">Landrick</span>
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p>
                <p class="text-muted para-desc mx-auto mb-0">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin.
                </p>
                <div class="mt-4">
                  <a href="javascript:void(0)" class="btn btn-primary"
                    >Learn More</a
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
        <div class="row align-items-center">
          <div class="col-lg-4 col-md-3">
            <h6 class="text-muted mb-0">
              Trusted by over 2,000 of the world’s leading construction
              companies
            </h6>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-9 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="rounded shadow bg-light p-4">
              <div class="row justify-content-center">
                <div class="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src="images/client/amazon.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>
                <!--end col-->

                <div class="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src="images/client/google.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>
                <!--end col-->

                <div class="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src="images/client/lenovo.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
                </div>
                <!--end col-->

                <div class="col-lg-3 col-md-3 col-6 text-center py-4">
                  <img
                    src="images/client/paypal.svg"
                    class="avatar avatar-ex-sm"
                    alt=""
                  />
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

      <div class="container mt-100 mt-60">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="section-title sticky-bar position-sticky">
              <span class="badge badge-pill badge-soft-primary">Projects</span>
              <h4 class="title mt-3 mb-4">
                Our latest projects <br />
                check now dears
              </h4>
              <p class="text-muted para-desc mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
              <div class="mt-4 d-none d-md-block">
                <a href="javascript:void(0)" class="btn btn-soft-primary"
                  >See More
                  <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                ></a>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="row">
              <ul
                class="col container-filter list-unstyled categories-filter mb-0"
                id="filter"
              >
                <li class="list-inline-item">
                  <a
                    class="categories-name border d-block text-dark rounded"
                    @click="updateFilter('all')"
                    :class="{ active: filterCategory == 'all' }"
                    >All</a
                  >
                </li>
                <li class="list-inline-item">
                  <a
                    class="categories-name border d-block text-dark rounded"
                    data-filter=".offices"
                    @click="updateFilter('offices')"
                    :class="{ active: filterCategory == 'offices' }"
                    >Offices</a
                  >
                </li>
                <li class="list-inline-item">
                  <a
                    class="categories-name border d-block text-dark rounded"
                    data-filter=".buildings"
                    @click="updateFilter('buildings')"
                    :class="{ active: filterCategory == 'buildings' }"
                    >Buildings</a
                  >
                </li>
                <li class="list-inline-item">
                  <a
                    class="categories-name border d-block text-dark rounded"
                    data-filter=".roads"
                    @click="updateFilter('roads')"
                    :class="{ active: filterCategory == 'roads' }"
                    >Roads</a
                  >
                </li>
              </ul>
            </div>
            <!--end row-->

            <div class="row projects-wrapper">
              <div
                class="col-lg-6 col-12 mt-4 pt-2 offices"
                v-for="(item, index) in filteredData"
                :key="index"
              >
                <div
                  class="card border-0 work-container work-classic shadow overflow-hidden"
                >
                  <div class="card-body p-0">
                    <router-link to="/page-portfolio-detail"
                      ><img
                        :src="item.image"
                        class="img-fluid work-image"
                        alt=""
                    /></router-link>
                    <div class="content p-4">
                      <h5 class="mb-0">
                        <router-link
                          to="/page-portfolio-detail"
                          class="text-dark title"
                          >{{ item.title }}</router-link
                        >
                      </h5>
                      <h6 class="text-muted tag mb-0">{{ item.type }}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <!--end col-->

              <div class="col-12 mt-4 pt-2">
                <div class="d-block d-md-none">
                  <a href="javascript:void(0)" class="btn btn-soft-primary"
                    >See More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <h4 class="title mb-4">Expert Team Members</h4>
              <p class="text-muted mx-auto para-desc mb-0">
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
          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card team text-center border-0">
              <div class="position-relative">
                <img
                  src="images/construction/t1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon
                    ></a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <div class="card-body py-3 px-0 content">
                <h5 class="mb-0">
                  <a href="javascript:void(0)" class="name text-dark"
                    >Ronny Jofra</a
                  >
                </h5>
                <small class="designation text-muted">Architecture</small>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card team text-center border-0">
              <div class="position-relative">
                <img
                  src="images/construction/t3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon
                    ></a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <div class="card-body py-3 px-0 content">
                <h5 class="mb-0">
                  <a href="javascript:void(0)" class="name text-dark"
                    >Micheal Carlo</a
                  >
                </h5>
                <small class="designation text-muted">Project Manager</small>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card team text-center border-0">
              <div class="position-relative">
                <img
                  src="images/construction/t2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon
                    ></a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <div class="card-body py-3 px-0 content">
                <h5 class="mb-0">
                  <a href="javascript:void(0)" class="name text-dark"
                    >Aliana Rosy</a
                  >
                </h5>
                <small class="designation text-muted">Builder Advisor</small>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 mt-4 pt-2">
            <div class="card team text-center border-0">
              <div class="position-relative">
                <img
                  src="images/construction/t4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <ul class="list-unstyled social-icon team-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded"
                      ><linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon
                    ></a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
              <div class="card-body py-3 px-0 content">
                <h5 class="mb-0">
                  <a href="javascript:void(0)" class="name text-dark"
                    >Sofia Razaq</a
                  >
                </h5>
                <small class="designation text-muted">HR Manager</small>
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

    <section class="section bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title mb-4 pb-2 text-center">
              <span class="badge badge-pill badge-soft-primary"
                >Blogs & News</span
              >
              <h4 class="title mt-3 mb-4">Latest News & Articals</h4>
              <p class="text-muted mx-auto para-desc mb-0">
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
                  src="images/construction/o1.jpg"
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
                    >High quality work for demand our customer.</a
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
                  <router-link
                    tag="a"
                    to="/page-blog-detail"
                    class="text-muted readmore"
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
                  src="images/construction/b1.jpg"
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
                    >Building public support for a severige work bond</a
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
                  <router-link
                    tag="a"
                    to="/page-blog-detail"
                    class="text-muted readmore"
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
                  src="images/construction/r1.jpg"
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
                    >Satisfection for the customer our first parity.</a
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
                  <router-link
                    tag="a"
                    to="/page-blog-detail"
                    class="text-muted readmore"
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

<style>
.modal-content {
  background-color: transparent;
}
</style>