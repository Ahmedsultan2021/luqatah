<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
import { Carousel, Slide } from "vue-carousel";
import { VueTyper } from "vue-typer";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Team from "@/components/team";

/**
 * Index-job component
 */
export default {
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
    };
  },
  components: {
    Navbar,
    Switcher,
    Carousel,
    Slide,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    ArrowUpIcon,
    MailIcon,
    Team,
    "vue-typer": VueTyper,
  },
  mounted() {
    
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half-170 pb-0 bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="title-heading text-center mt-4 mt-md-5 pt-md-5">
              <div class="alert alert-light alert-pills" role="alert">
                <span class="badge badge-pill badge-success mr-1">Start</span>
                <span class="content">
                  Fill job
                  <router-link to="/page-job-apply" class="text-primary"
                    >application</router-link
                  >
                  now !</span
                >
                </div>
              <h1 class="heading mb-3">
                Job Vacancies for
                <vue-typer
                  :text="[
                    'Freelancer',
                    'Developer',
                    'Designer',
                    'UX Developer',
                    'ios Developer',
                  ]"
                ></vue-typer>
              </h1>
              
              <p class="para-desc mx-auto text-muted">
                Huge community of designers and developers ready for your project.
              </p>
              <form class="rounded p-4 mt-4 bg-white">
                <div class="row text-left">
                  <div class="col-lg-5 col-md-4">
                    <div class="form-group mb-0">
                      <input
                        type="text"
                        class="form-control"
                        required
                        placeholder="Keywords"
                      />
                    </div>
                  </div>
                  <!--end col-->

                  <div class="col-lg-7 col-md-8">
                    <div class="row align-items-center">
                      <div class="col-md-4 mt-4 mt-sm-0">
                        <div class="form-group mb-0">
                          <select class="form-control custom-select">
                            <option selected="">Location</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">&Aring;land Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-md-4 mt-4 mt-sm-0">
                        <div class="form-group mb-0">
                          <select class="form-control custom-select">
                            <option selected="">Job Types</option>
                            <option value="4">Accounting</option>
                            <option value="1">IT & Software</option>
                            <option value="3">Marketing</option>
                            <option value="5">Banking</option>
                          </select>
                        </div>
                      </div>
                      <!--end col-->

                      <div class="col-md-4 mt-4 mt-sm-0">
                        <input
                          type="submit"
                          id="search"
                          name="search"
                          class="searchbtn btn btn-primary btn-block p"
                          value="Search"
                        />
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!---end col-->
                </div>
                <!--end row-->
              </form>
              <p class="text-muted mb-0 mt-4">
                <span class="text-dark">Keywords :</span> Web Developer, Web Designer, Php
                Developer, IOS Developer, etc...
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-12 mt-4 pt-3">
            <img src="images/job/home.png" class="img-fluid" alt="" />
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
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Popular Catagories</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/1.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark"
                      >Communications</a
                    >
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/2.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark">Accounting</a>
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/3.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark">Restaurant</a>
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/4.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark">Health</a>
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/5.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark">Finance</a>
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/6.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark">Facilities</a>
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/7.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li><a href="javascript:void(0)" class="title h6 text-dark">HR</a></li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
            <div class="card catagories overflow-hidden rounded shadow border-0">
              <img src="images/work/8.jpg" class="img-fluid" alt="" />
              <div class="card-body">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li>
                    <a href="javascript:void(0)" class="title h6 text-dark"
                      >Construction</a
                    >
                  </li>
                  <li class="h6 mb-0 jobs">125 Jobs</li>
                </ul>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <!-- Companies Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Featured Jobs</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Circleci.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Senior Web Developer</h4>
                  <p class="text-muted mb-0">London, UK</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Codepen.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Front-End Developer</h4>
                  <p class="text-muted mb-0">Brasilia, Brazil</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Discord.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Back-End Developer</h4>
                  <p class="text-muted mb-0">Ottawa, Canada</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Eslint.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">UI Designer</h4>
                  <p class="text-muted mb-0">Beijing, China</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Gitlab.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">UX Designer</h4>
                  <p class="text-muted mb-0">Bogota, Colombia</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Mg.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Php Developer</h4>
                  <p class="text-muted mb-0">Havana, Cuba</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Sketch.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">IOS Developer</h4>
                  <p class="text-muted mb-0">Nicosia, Cyprus</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Twilio.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Graphics Designer</h4>
                  <p class="text-muted mb-0">Cairo, Egypt</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Udemy.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Data Entry</h4>
                  <p class="text-muted mb-0">Suva, Fiji</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Webhooks.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Sketch Designer</h4>
                  <p class="text-muted mb-0">Helsinki, Finland</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img
                  src="images/job/Appdynamics.svg"
                  class="avatar avatar-ex-sm"
                  alt=""
                />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Web Developer</h4>
                  <p class="text-muted mb-0">Berlin, Germany</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
            <router-link to="/page-job-detail">
              <div class="media key-feature align-items-center p-3 rounded shadow">
                <img src="images/job/Gradle.svg" class="avatar avatar-ex-sm" alt="" />
                <div class="media-body ml-3">
                  <h4 class="title mb-0 text-dark">Game Developer</h4>
                  <p class="text-muted mb-0">Ahmedabad, India</p>
                </div>
              </div>
            </router-link>
          </div>
          <!--end col-->

          <div class="col-12 text-center mt-4 pt-2">
            <router-link to="/page-jobs" class="btn btn-primary"
              >See All Jobs <i class="mdi mdi-chevron-right"></i
            ></router-link>
          </div>
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Companies End -->

      <!-- Candidates Start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Expert Candidates</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <Team :team-data="teamData" />
      </div>
      <!--end container-->
      <!-- Candidates End -->

      <!-- Testi start -->
      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">Candidates Review</h4>
              <p class="text-muted para-desc mx-auto mb-0">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that can
                provide everything you need to generate awareness, drive traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-12 mt-4 pt-2">
            <carousel
              id="customer-testi"
              class="owl-carousel owl-theme"
              dir="ltr"
              :per-page="3"
              :loop="true"
            >
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/01.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " It seems that only fragments of the original text remain in the
                      Lorem Ipsum texts used today. "
                    </p>
                    <h6 class="text-primary">- Thomas Israel</h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/02.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " The most well-known dummy text is the 'Lorem Ipsum', which is said
                      to have originated in the 16th century. "
                    </p>
                    <h6 class="text-primary">- Carl Oliver</h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/03.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " One disadvantage of Lorum Ipsum is that in Latin certain letters
                      appear more frequently than others. "
                    </p>
                    <h6 class="text-primary">- Barbara McIntosh</h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/04.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " Thus, Lorem Ipsum has only limited suitability as a visual filler
                      for German texts. "
                    </p>
                    <h6 class="text-primary">- Jill Webb</h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/05.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " There is now an abundance of readable dummy texts. These are
                      usually used when a text is required. "
                    </p>
                    <h6 class="text-primary">- Dean Tolle</h6>
                  </div>
                </div>
              </Slide>
              <Slide>
                <div class="card customer-testi border-0 text-center">
                  <div class="card-body">
                    <img
                      src="images/client/06.jpg"
                      class="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                      alt=""
                    />
                    <p class="text-muted mt-4">
                      " According to most sources, Lorum Ipsum can be traced back to a
                      text composed by Cicero. "
                    </p>
                    <h6 class="text-primary">- Christa Smith</h6>
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
      <div class="container pt-5">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img src="images/client/amazon.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center">
            <img src="images/client/google.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src="images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src="images/client/paypal.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src="images/client/shopify.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
            <img src="images/client/spotify.svg" class="avatar avatar-ex-sm" alt="" />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
      <!-- Testi end -->
    </section>
    <!--end section-->
    <!-- End -->

    <!-- Shape Start -->
    <div class="position-relative">
      <div class="shape overflow-hidden text-light">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
    <!--Shape End-->
    <!-- Footer Start -->
    <footer class="footer bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <a href="#" class="logo-footer">
              <img src="images/logo-dark.png" height="24" alt="" />
            </a>
            <p class="mt-4 text-muted">
              Start working with Landrick that can provide everything you need to generate
              awareness, drive traffic, connect.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <ul class="list-unstyled social-icon social mb-0 mt-4">
                <li class="list-inline-item">
                  <a href="javascript:void(0)" class="rounded">
                    <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <instagram-icon class="fea icon-sm fea-social"></instagram-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                  </a>
                </li>
                <li class="list-inline-item ml-1">
                  <a href="javascript:void(0)" class="rounded">
                    <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                  </a>
                </li>
              </ul>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Company</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-aboutus" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> About us</router-link
                >
              </li>
              <li>
                <router-link to="/page-services" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-team" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Team</router-link
                >
              </li>
              <li>
                <router-link to="/page-pricing" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Pricing</router-link
                >
              </li>
              <li>
                <router-link to="/page-work-modern" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Project</router-link
                >
              </li>
              <li>
                <router-link to="/page-jobs" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Careers</router-link
                >
              </li>
              <li>
                <router-link to="/page-blog-grid" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Blog</router-link
                >
              </li>
              <li>
                <router-link to="/auth-cover-login" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Login</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Usefull Links</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <router-link to="/page-terms" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Terms of
                  Services</router-link
                >
              </li>
              <li>
                <router-link to="/page-privacy" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Privacy Policy</router-link
                >
              </li>
              <li>
                <router-link to="/documentation" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Documentation</router-link
                >
              </li>
              <li>
                <router-link to="/changelog" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Changelog</router-link
                >
              </li>
              <li>
                <router-link to="/components" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Components</router-link
                >
              </li>
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-dark footer-head">Newsletter</h5>
            <p class="mt-4 text-muted">Sign up and receive the latest tips via email.</p>
            <form>
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe foot-white form-group">
                    <label class="text-muted"
                      >Write your email <span class="text-danger">*</span></label
                    >
                    <div class="position-relative">
                      <mail-icon class="fea icon-sm icons"></mail-icon>
                      <input
                        type="email"
                        name="email"
                        id="emailsubscribe"
                        class="form-control bg-light border pl-5 rounded"
                        placeholder="Your email : "
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <input
                    type="submit"
                    id="submitsubscribe"
                    name="send"
                    class="btn btn-primary btn-block"
                    value="Subscribe"
                  />
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <p class="mb-0">
                © {{ new Date().getFullYear() }} Landrick. Design with
                <i class="mdi mdi-heart text-danger"></i> by
                <a href="https://themesbrand.com/" target="_blank" class="text-reset"
                  >Themesbrand</a
                >.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <ul class="list-unstyled text-sm-right mb-0">
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/american-ex.png"
                    class="avatar avatar-ex-sm"
                    title="American Express"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/discover.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Discover"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/master-card.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Master Card"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/paypal.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Paypal"
                    alt=""
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)"
                  ><img
                    src="images/payments/visa.png"
                    class="avatar avatar-ex-sm ml-1"
                    title="Visa"
                    alt=""
                /></a>
              </li>
            </ul>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
       
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
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
</style>
