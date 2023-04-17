<script>
import { ArrowUpIcon ,ArrowRightIcon} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Testimonial from "@/components/testimonial";
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
    Testimonial,
    Team,
  },
  data() {
    return {
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
      teamData: [
        {
          image: "images/medical/01.jpg",
          name: "Ronny Jofra",
          designation: "Cardiologist",
        },
        {
          image: "images/medical/04.jpg",
          name: "Micheal Carlo",
          designation: "Surgeon",
        },
        {
          image: "images/medical/02.jpg",
          name: "Aliana Rosy",
          designation: "Physician",
        },
        {
          image: "images/medical/03.jpg",
          name: "Sofia Razaq",
          designation: "Chemist",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Navbar />

    <!-- Hero Start -->
    <section class="bg-half-170 d-table w-100 home-wrapper overflow-hidden">
      <div class="container">
        <div class="row mt-5 align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="title-heading">
              <span class="badge badge-pill badge-soft-primary"
                ><b>Medical</b></span
              >
              <h4 class="heading my-3">
                We Take Care <br />
                of Your <span class="text-primary">Health</span>
              </h4>
              <p class="para-desc text-muted mb-0">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>

              <div class="mt-3">
                <a href="javascript:void(0)" class="btn btn-primary mr-2 mt-2"
                  >Find Doctors</a
                >
                <a href="javascript:void(0)" class="btn btn-soft-primary mt-2"
                  >Book an Appointment</a
                >
              </div>

              <p class="text-muted mb-0 mt-3">
                Don't have an account yet?
                <a href="javascript:void(0)" class="text-primary ml-2 h6 mb-0"
                  >Signup  <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div class="ml-lg-4">
              <img
                src="images/illustrator/doctors-cuate.svg"
                class="img-fluid"
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
    <section class="section bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div
              class="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
            >
              <span class="h1 icon2 text-primary">
                <i class="uil uil-newspaper"></i>
              </span>
              <div class="card-body p-0 content">
                <h5>Appointment</h5>
                <p class="para text-muted mb-0">
                  It is a long established fact that a reader layout.
                </p>

                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-soft-success mt-4"
                  data-toggle="modal"
                  data-target="#productview"
                  >Request</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
            <div
              class="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
            >
              <span class="h1 icon2 text-primary">
                <i class="uil uil-clock"></i>
              </span>
              <div class="card-body p-0 content">
                <h5>Opening Hour</h5>

                <h6 class="mb-0">Monday - Friday</h6>
                <p class="para text-muted">7AM to 11 PM</p>

                <h6 class="mb-0">Address:</h6>
                <p class="para text-muted mb-0">C/54 Northwest Freeway</p>
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div
              class="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
            >
              <span class="h1 icon2 text-primary">
                <i class="uil uil-user-md"></i>
              </span>
              <div class="card-body p-0 content">
                <h5>Find Doctors</h5>
                <p class="para text-muted mb-0">
                  It is a long established fact that a reader layout.
                </p>

                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-soft-success mt-4"
                  >Doctors</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
            <div
              class="card features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
            >
              <span class="h1 icon2 text-primary">
                <i class="uil uil-map-marker"></i>
              </span>
              <div class="card-body p-0 content">
                <h5>Find Locations</h5>
                <p class="para text-muted mb-0">
                  It is a long established fact that a reader layout.
                </p>

                <a
                  href="javascript:void(0)"
                  class="btn btn-pills btn-soft-success mt-4"
                  >Locations</a
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
    <!-- End -->

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 col-md-6">
            <div class="position-relative">
              <img
                src="images/medical/about.jpg"
                class="rounded img-fluid mx-auto d-block shadow rounded"
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

          <div class="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="section-title ml-lg-5">
              <span class="badge badge-pill badge-soft-primary">About us</span>
              <h4 class="title mt-3 mb-4">A great place to receive care</h4>
              <p class="text-muted para-desc">
                If the distribution of letters and 'words' is random, the reader
                will not be distracted from making a neutral judgement on the
                visual impact and readability of the typefaces (typography), or
                the distribution of text on the page (layout or type area).
              </p>
              <p class="text-muted para-desc mb-0">
                For this reason, dummy text usually consists of a more or less
                random series of words or syllables.
              </p>

              <div class="mt-4">
                <a href="javascript:void(0)" class="btn btn-primary"
                  >More Services</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row align-items-end mb-4 pb-2">
          <div class="col-md-8">
            <div class="section-title text-center text-md-left">
              <h6 class="text-primary">Services</h6>
              <h4 class="title mb-4">Our Medical Services</h4>
              <p class="text-muted mb-0 para-desc">
                Start working with
                <span class="text-primary font-weight-bold">Landrick</span> that
                can provide everything you need to generate awareness, drive
                traffic, connect.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 mt-sm-0 d-none d-md-block">
            <div class="text-center text-md-right">
              <a href="javascript:void(0)" class="text-primary h6"
                >See More  <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 mt-4 pt-2">
            <ul
              class="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="nav-link rounded active"
                  id="dentalcare"
                  data-toggle="pill"
                  href="#dental"
                  role="tab"
                  aria-controls="dental"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">Dental Service</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->

              <li class="nav-item mt-2">
                <a
                  class="nav-link rounded"
                  id="cardeography"
                  data-toggle="pill"
                  href="#cardeo"
                  role="tab"
                  aria-controls="cardeo"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">Cardiography Service</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->

              <li class="nav-item mt-2">
                <a
                  class="nav-link rounded"
                  id="eyecare"
                  data-toggle="pill"
                  href="#eye"
                  role="tab"
                  aria-controls="eye"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">Eye Care Service</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->

              <li class="nav-item mt-2">
                <a
                  class="nav-link rounded"
                  id="general-serve"
                  data-toggle="pill"
                  href="#general"
                  role="tab"
                  aria-controls="general"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">General Checkup</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->

              <li class="nav-item mt-2">
                <a
                  class="nav-link rounded"
                  id="medicine"
                  data-toggle="pill"
                  href="#medical"
                  role="tab"
                  aria-controls="medical"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">Medicine Service</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->

              <li class="nav-item mt-2">
                <a
                  class="nav-link rounded"
                  id="orthopadic"
                  data-toggle="pill"
                  href="#ortho"
                  role="tab"
                  aria-controls="ortho"
                  aria-selected="false"
                >
                  <div class="text-center py-1">
                    <h6 class="mb-0">Orthopadic</h6>
                  </div> </a
                ><!--end nav link-->
              </li>
              <!--end nav item-->
            </ul>
            <!--end nav pills-->
          </div>
          <!--end col-->

          <div class="col-md-8 col-12 mt-4 pt-2">
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade bg-white show active p-4 rounded shadow"
                id="dental"
                role="tabpanel"
                aria-labelledby="dentalcare"
              >
                <img
                  src="images/medical/dental.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>Dental Service</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->

              <div
                class="tab-pane fade bg-white p-4 rounded shadow"
                id="cardeo"
                role="tabpanel"
                aria-labelledby="cardeography"
              >
                <img
                  src="images/medical/cardio.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>Cardiography Service</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                     <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->

              <div
                class="tab-pane fade bg-white p-4 rounded shadow"
                id="eye"
                role="tabpanel"
                aria-labelledby="eyecare"
              >
                <img
                  src="images/medical/eyecare.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>Eye Care</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                     <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->

              <div
                class="tab-pane fade bg-white p-4 rounded shadow"
                id="general"
                role="tabpanel"
                aria-labelledby="general-serve"
              >
                <img
                  src="images/medical/general.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>General Body Checkup</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->

              <div
                class="tab-pane fade bg-white p-4 rounded shadow"
                id="medical"
                role="tabpanel"
                aria-labelledby="medicine"
              >
                <img
                  src="images/medical/medicine.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>Medicine Services</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->

              <div
                class="tab-pane fade bg-white p-4 rounded shadow"
                id="ortho"
                role="tabpanel"
                aria-labelledby="orthopadic"
              >
                <img
                  src="images/medical/orthopedic.jpg"
                  class="img-fluid rounded shadow"
                  alt=""
                />
                <div class="mt-4">
                  <h5>Orthopadic Service</h5>
                  <p class="text-muted my-3">
                    This is required when, for example, the final text is not
                    yet available. Dummy text is also known as 'fill text'. It
                    is said that song composers of the past used dummy texts as
                    lyrics.
                  </p>
                  <a href="javascript:void(0)" class="text-primary"
                    >Learn More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon></a>
                </div>
              </div>
              <!--end teb pane-->
            </div>
            <!--end tab content-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <!-- Start -->
    <section class="section pt-0">
      <div class="container">
        <div class="position-relative" style="z-index: 1">
          <div class="rounded shadow bg-white p-4">
            <div class="row" id="counter">
              <div class="col-md-4">
                <div class="counter-box text-center">
                  <h1 class="mb-0 mt-3">
                    <span class="counter-value" data-count="99">21</span>.00%
                  </h1>
                  <h5 class="counter-head mb-1">Positive feedback</h5>
                  <p class="text-muted mb-0">From Doctors</p>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->

              <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="counter-box text-center">
                  <h1 class="mb-0 mt-3">
                    <span class="counter-value" data-count="25">2</span>+
                  </h1>
                  <h5 class="counter-head mb-1">Experienced Clinics</h5>
                  <p class="text-muted mb-0">High Qualified</p>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->

              <div class="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div class="counter-box text-center">
                  <h1 class="mb-0 mt-3">
                    <span class="counter-value" data-count="1100">321</span>+
                  </h1>
                  <h5 class="counter-head mb-1">Questions & Answers</h5>
                  <p class="text-muted mb-0">Your Questions</p>
                </div>
                <!--end counter box-->
              </div>
              <!--end col-->
            </div>
            <!--end row-->
          </div>

          <div class="row justify-content-center pt-4">
            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
              <img
                src="images/client/amazon.svg"
                class="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            <!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
              <img
                src="images/client/google.svg"
                class="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            <!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
              <img
                src="images/client/lenovo.svg"
                class="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            <!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
              <img
                src="images/client/paypal.svg"
                class="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            <!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
              <img
                src="images/client/shopify.svg"
                class="avatar avatar-ex-sm"
                alt=""
              />
            </div>
            <!--end col-->

            <div class="col-lg-2 col-md-2 col-6 text-center py-4 pb-md-0">
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
        <div class="feature-posts-placeholder bg-primary"></div>
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- End -->

    <!-- Start -->
    <section class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="section-title text-center mb-4 pb-2">
              <h4 class="title mb-4">Our Qualified Doctors</h4>
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
        <Team :teamData="teamData" />
      </div>
      <!--end container-->

      <div class="container mt-100 mt-60">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
              <h4 class="title mb-4">What Our Patients Says</h4>
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
    <!-- End -->

    <!-- Start -->
    <div class="container-fluid px-0">
      <div class="py-5 bg-footer">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7">
              <div class="section-title">
                <div class="media">
                  <i
                    class="uil uil-stethoscope-alt display-4 text-white title-dark"
                  ></i>
                  <div class="media-body ml-md-4 ml-3">
                    <h4 class="font-weight-bold text-light title-dark mb-1">
                      Get a free medical
                    </h4>
                    <p class="text-white-50 mb-0">
                      Build modern looking websites fast and easy using
                      Landflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-md-5 mt-4 mt-sm-0">
              <div class="text-md-right ml-5 ml-sm-0">
                <a
                  href="javascript:void(0)"
                  class="btn btn-primary mr-2 mr-lg-2 mr-md-0 my-2"
                  data-toggle="modal"
                  data-target="#productview"
                  ><i class="uil uil-file-alt"></i> Book An Appointment</a
                >
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
        </div>
        <!--end container-->
      </div>
      <!--end div-->
    </div>
    <!--end container-->
    <!-- End -->

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
