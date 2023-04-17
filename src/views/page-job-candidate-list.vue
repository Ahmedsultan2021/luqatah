<script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

export default {
  data() {
    return {
      candidateList: [
        {
          profile: "/images/client/01.jpg",
          name: "Calvin Carlo",
          designation: "Front-end Developer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/02.jpg",
          name: "Martha Griffin",
          designation: "WordPress Developer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/03.jpg",
          name: "Ashley Jen",
          designation: "Back-end Developer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/04.jpg",
          name: "Nicole Alan",
          designation: "UX Designer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/05.jpg",
          name: "Jennifer Pham",
          designation: "Web Designer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/06.jpg",
          name: "Alex Tom",
          designation: "UI Designer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },{
          profile: "/images/client/07.jpg",
          name: "Cristino Murphy",
          designation: "PHP Developer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
        {
          profile: "/images/client/08.jpg",
          name: "Arlo Sons",
          designation: "React Developer",
          experience: "3+ years",
          skills: ["PHP", "Wordpress", "Web Design", "CSS", "JS"],
        },
      ],
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon
  },
};
</script>

<template>
  <div>
    <Navbar />
    <!-- Navbar End -->

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              <h4 class="title">Candidates</h4>
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link tag="a" to="/">Landrick</router-link>
                    </li>
                    <li class="breadcrumb-item"><a href="#">Page</a></li>
                    <li class="breadcrumb-item"><a href="#">Careers</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Candidates
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
    <!-- Hero End -->

    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-9 col-md-8">
            <div class="section-title">
              <h6 class="mb-0">Showing 1 – 8 of 10 results</h6>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div class="form custom-form">
              <div class="form-group mb-0">
                <select class="form-control custom-select" id="Sortbylist-job">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Random</option>
                </select>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2" v-for="(data, index) of candidateList" :key="index">
            <div class="candidate-list card rounded border-0 shadow">
              <div class="card-body">
                <ul class="list-unstyled align-items-center">
                  <li class="list-inline-item float-right">
                    <a href="javascript:void(0)" class="text-muted like"
                      ><i class="mdi mdi-heart h5 mb-0"></i
                    ></a>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge badge-pill badge-soft-success"
                      >Featured</span
                    >
                  </li>
                </ul>

                <div class="content text-center">
                  <img
                    :src="data.profile"
                    class="avatar avatar-md-md shadow-md rounded-circle"
                    alt=""
                  />
                  <ul class="list-unstyled mb-1 mt-2">
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
                  <router-link tag="a" to="/page-job-candidate" class="text-dark h5 name"
                    >{{data.name}}</router-link
                  >
                  <p class="text-muted my-1">{{data.designation}}</p>

                  <span class="text-muted"
                    ><i
                      class="uil uil-graduation-cap h4 mb-0 mr-2 text-primary"
                    ></i
                    >Experience <span class="text-success">{{data.experience}}</span></span
                  >

                  <ul class="list-unstyled mt-3">
                    <li class="list-inline-item m-1" v-for="(item, index) of data.skills" :key="index">
                      <a
                        href="jvascript:void(0)"
                        class="rounded bg-light py-1 px-2 text-muted small"
                        >{{item}}</a
                      >
                    </li>
                   
                  </ul>

                  <router-link
                  tag="a"
                    to="/page-job-candidate"
                    class="btn btn-block btn-soft-primary"
                    >Read More
                    <arrow-right-icon class="fea icon-sm"></arrow-right-icon
                  ></router-link>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <!-- PAGINATION START -->
          <div class="col-12 mt-4 pt-2">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item">
                <a
                  class="page-link"
                  href="javascript:void(0)"
                  aria-label="Previous"
                  >Prev</a
                >
              </li>
              <li class="page-item active">
                <a class="page-link" href="javascript:void(0)">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">2</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)">3</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="javascript:void(0)" aria-label="Next"
                  >Next</a
                >
              </li>
            </ul>
          </div>
          <!--end col-->
          <!-- PAGINATION END -->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
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