<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="container">
              <div class="row justify-content-center">
                <b-container>
                  <b-row class="mt-3">
                    <b-col sm="12" class="text-left mt-2">
                      <div class="text-center py-3">
                        <a
                          href="/new-announcement"
                          class="btn btn-soft-primary mr-2 mb-4"
                        >Create Announcement</a>
                        <a
                          href="/search-announcement"
                          class="btn btn-soft-success mr-2 mb-4"
                        >Search Announcement</a>
                        <hr />
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
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
    </section>
    <div ref="myRef" class="text-center">
      <h4>
        <b>
          <u>My Announcements</u>
        </b>
      </h4>
    </div>
    <!--end section-->
    <div class="position-relative">
      <div class="shape overflow-hidden text-white">
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
        </svg>
      </div>
    </div>
    <!-- Hero End -->

    <section class="section">
      <div v-if="!loading" class="container">
        <!--end row-->
        <b-tabs card fill>
          <b-tab title="Lost">
            <b-row class="justify-content-end">
              <b-col class="text-right" sm="4">
                <div>
                  <b class="mdi mdi-sort mb-2">Sorting</b>
                  <v-select
                    @input="sortMyLost"
                    v-model="lostSelected"
                    :options="options"
                    placeholder="Sorting Options"
                    style="
                                --vs-controls-color: #202842; 
                                --vs-border-color: #202842;
                                --vs-dropdown-bg: white;
                                --vs-dropdown-color: #cc99cd;
                                --vs-dropdown-option-color: #202842;
                                --vs-selected-bg: rgba(90, 109, 144, 0.1);
                                --vs-selected-color: #202842;
                                --vs-search-input-placeholder-color: gray;
                                --vs-search-input-color: #202842;
                                --vs-dropdown-option--active-bg: #202842;
                                --vs-dropdown-option--active-color: #eeeeee;
                                --vs-dropdown-max-height: 210px;
                            "
                  ></v-select>
                </div>
              </b-col>
            </b-row>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-12 my-3 pt-2"
                v-for="(data, index) of myLost"
                :key="index"
              >
                <div class="company-list card border-0 rounded shadow bg-white">
                  <div class="p-4">
                    <ul class="list-unstyled mb-4">
                      <li class="h6">
                        <b class="mdi mdi-pound text-primary"></b>
                        <span class="text-dark">Announcement Number :</span>
                        <b class="text-primary float-right">{{data.id}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-bullhorn-outline text-primary"></b>
                        <span class="text-dark">Title :</span>
                        <b class="text-primary float-right">{{data.title}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-calendar-start text-primary"></b>
                        <span class="text-dark">Creation Date:</span>
                        <b class="text-primary float-right">{{data.start_date}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-calendar-start text-primary"></b>
                        <span class="text-dark">Date Range</span>
                        <b class="text-muted ml-4 float-right">
                          From :
                          <b class="text-primary">{{data.start_date}}</b>
                        </b>
                        <br />
                        <b class="text-muted ml-4 float-right">
                          To :
                          <b class="text-primary">{{data.end_data}}</b>
                        </b>
                        <br />
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-lock-question text-primary"></b>
                        <span class="text-muted">activation :</span>

                        <b-form-checkbox
                          @change="activateAnnouncement(data)"
                          class="float-right"
                          v-model="data.user_status"
                          switch
                          size="sm"
                        >
                          <b v-if="data.user_status">
                            <b-badge variant="success">Activated</b-badge>
                          </b>
                          <b v-else>
                            <b-badge variant="danger">De Activated</b-badge>
                          </b>
                        </b-form-checkbox>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <span class="text-muted">Matchings Email Notification</span>
                          <br />
                          <b-form-checkbox
                            @change="updateEmailMatching(data)"
                            class="mt-1"
                            v-model="data.matching_email"
                            switch
                            size="sm"
                          >
                            <b
                              v-if="data.matching_email"
                              class="mdi mdi-email-outline text-secondary"
                            ></b>
                            <b v-else class="mdi mdi-email-off-outline text-secondary"></b>
                          </b-form-checkbox>
                        </div>
                      </li>
                    </ul>
                    <b-button
                      class="mb-3"
                      size="sm"
                      @click="lostMatches(data.id)"
                      block
                      variant="soft-secondary"
                    >
                      View Matches
                      <arrow-right-icon class="fea icon-sm"></arrow-right-icon>
                    </b-button>
                    <b-button
                      size="sm"
                      @click="lostDetailsPage(data.id)"
                      block
                      variant="soft-primary"
                    >
                      View Announcement Details
                      <arrow-right-icon class="fea icon-sm"></arrow-right-icon>
                    </b-button>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <hr />
            <div class="text-center mt-3">
              <b-pagination-nav
                v-if="lostPagination"
                class="justify-content-center pagination"
                :number-of-pages="lostLastpage"
                :link-gen="lostLinkGen"
                :value="lostCurrentPage"
                :per-page="50"
                align="center"
                @change="(a)=>lostChangePage(a)"
              >
                <template v-slot:next-text>
                  <i class="mdi mdi-arrow-right" />
                </template>
                <template v-slot:prev-text>
                  <i class="mdi mdi-arrow-left" />
                </template>
                <template v-slot:first-text>
                  <i class="mdi mdi-page-first" />
                </template>
                <template v-slot:last-text>
                  <i class="mdi mdi-page-last" />
                </template>
              </b-pagination-nav>
            </div>
          </b-tab>
          <b-tab title="Found">
            <b-row class="justify-content-end">
              <b-col class="text-right" sm="4">
                <div>
                  <b class="mdi mdi-sort mb-2">Sorting</b>
                  <v-select
                    @input="sortMyFound"
                    v-model="foundSelected"
                    :options="options"
                    placeholder="Sorting Options"
                    style="
                                --vs-controls-color: #202842;   
                                --vs-border-color: #202842;
                                --vs-dropdown-bg: white;
                                --vs-dropdown-color: #cc99cd;
                                --vs-dropdown-option-color: #202842;
                                --vs-selected-bg: rgba(90, 109, 144, 0.1);
                                --vs-selected-color: #202842;
                                --vs-search-input-placeholder-color: gray;
                                --vs-search-input-color: #202842;
                                --vs-dropdown-option--active-bg: #202842;
                                --vs-dropdown-option--active-color: #eeeeee;
                                --vs-dropdown-max-height: 210px;  
                            "
                  ></v-select>
                </div>
              </b-col>
            </b-row>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-12 my-3 pt-2"
                v-for="(data, index) of myFound"
                :key="index"
              >
                <div class="company-list card border-0 rounded shadow bg-white">
                  <div class="p-4">
                    <ul class="list-unstyled mb-4">
                      <li class="h6">
                        <b class="mdi mdi-pound text-primary"></b>
                        <span class="text-dark">Announcement Number :</span>
                        <b class="text-primary float-right">{{data.id}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-bullhorn-outline text-primary"></b>
                        <span class="text-dark">Title :</span>
                        <b class="text-primary float-right">{{data.title}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-calendar-start text-primary"></b>
                        <span class="text-dark">Creation Date:</span>
                        <b class="text-primary float-right">{{data.start_date}}</b>
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-calendar-start text-primary"></b>
                        <span class="text-dark">Date Range</span>
                        <b class="text-muted ml-4 float-right">
                          From :
                          <b class="text-primary">{{data.start_date}}</b>
                        </b>
                        <br />
                        <b class="text-muted ml-4 float-right">
                          To :
                          <b class="text-primary">{{data.end_data}}</b>
                        </b>
                        <br />
                      </li>
                      <hr />
                      <li class="h6">
                        <b class="mdi mdi-lock-question text-primary"></b>
                        <span class="text-muted">activation :</span>

                        <b-form-checkbox
                          @change="foundActivateAnnouncement(data)"
                          class="float-right"
                          v-model="data.user_status"
                          switch
                          size="sm"
                        >
                          <b v-if="data.user_status">
                            <b-badge variant="success">Activated</b-badge>
                          </b>
                          <b v-else>
                            <b-badge variant="danger">De Activated</b-badge>
                          </b>
                        </b-form-checkbox>
                      </li>
                      <li>
                        <div class="d-flex justify-content-between">
                          <span class="text-muted">Matchings Email Notification</span>
                          <br />
                          <b-form-checkbox
                            @change="foundUpdateEmailMatching(data)"
                            class="mt-1"
                            v-model="data.matching_email"
                            switch
                            size="sm"
                          >
                            <b
                              v-if="data.matching_email"
                              class="mdi mdi-email-outline text-secondary"
                            ></b>
                            <b v-else class="mdi mdi-email-off-outline text-secondary"></b>
                          </b-form-checkbox>
                        </div>
                      </li>
                    </ul>
                    <b-button
                      class="mb-3"
                      size="sm"
                      @click="foundMatches(data.id)"
                      block
                      variant="soft-secondary"
                    >
                      View Matches
                      <arrow-right-icon class="fea icon-sm"></arrow-right-icon>
                    </b-button>
                    <b-button
                      size="sm"
                      @click="foundDetailsPage(data.id)"
                      block
                      variant="soft-primary"
                    >
                      View Announcement Details
                      <arrow-right-icon class="fea icon-sm"></arrow-right-icon>
                    </b-button>
                  </div>
                </div>
              </div>
              <!--end col-->
            </div>
            <hr />
            <div class="text-center mt-3">
              <b-pagination-nav
                v-if="foundPagination"
                class="justify-content-center pagination"
                :number-of-pages="foundLastpage"
                :link-gen="foundLinkGen"
                :value="foundCurrentPage"
                :per-page="50"
                align="center"
                @change="(a)=>foundChangePage(a)"
              >
                <template v-slot:next-text>
                  <i class="mdi mdi-arrow-right" />
                </template>
                <template v-slot:prev-text>
                  <i class="mdi mdi-arrow-left" />
                </template>
                <template v-slot:first-text>
                  <i class="mdi mdi-page-first" />
                </template>
                <template v-slot:last-text>
                  <i class="mdi mdi-page-last" />
                </template>
              </b-pagination-nav>
            </div>
          </b-tab>
        </b-tabs>
      </div>
      <div v-else class="text-center container bg-half">
        <span class="loader">
          <b class="mdi mdi-map-marker"></b>
        </span>
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
  <script>
import { ArrowUpIcon, ArrowRightIcon } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import axios from "../axios.config";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      loading: true,
      myLost: [],
      myFound: [],
      lostLastpage: 1,
      lostCurrentPage: 1,
      lostPagination: false,
      foundLastpage: 1,
      foundCurrentPage: 1,
      foundPagination: false,
      lost: true,
      found: false,
      lostSelected: null,
      foundSelected: null,
      immg:
        "https://luqatah.brunchenapp.com/public/lost_images/1680039051.apple_iphone_13_pro_max_review_-_01_0.webp",
      options: [
        { id: "a", label: "Announcement Number (Asc)" },
        { id: "b", label: "Announcement Number (Desc)" },
        { id: "c", label: "Creation Date (Asc)" },
        { id: "d", label: "Creation Date (Desc)" },
        { id: "e", label: "Title (Asc)" },
        { id: "f", label: "Title (Desc)" }
      ]
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    "v-select": vSelect
  },
  methods: {
    getLost() {
      /* this.loading=false */
      axios
        .get("user/my_lost?page=" + this.lostCurrentPage)
        .then(resp => {
          this.lostLastpage = resp.data.data.last_page;
          if (this.lostLastpage > 1) {
            this.lostPagination = true;
          }
          this.myLost = resp.data.data.lost.map(lost => {
            return {
              id: lost.id,
              title: lost.title,
              start_date: lost.start_date,
              end_data: lost.end_data,
              user_status: lost.user_status ? false : true,
              status: lost.status,
              matching_email: lost.matching_email
            };
          });
          /*  this.loading = true */
        })
        .catch(err => {
          console.log(err);
        });
    },
    lostLinkGen(pageNum) {
      return;
    },
    lostChangePage(pageNum) {
      this.lostCurrentPage = pageNum;
      this.getLost();
      const refElement = this.$refs.myRef;
      refElement.scrollIntoView({ behavior: "smooth" });
    },
    getFound() {
      /* this.loading=false */
      axios
        .get("user/my_found?page=" + this.foundCurrentPage)
        .then(resp => {
          this.foundLastpage = resp.data.data.last_page;
          if (this.foundLastpage > 1) {
            this.foundPagination = true;
          }
          this.myFound = resp.data.data.founds.map(lost => {
            return {
              id: lost.id,
              title: lost.title,
              start_date: lost.start_date,
              end_data: lost.end_data,
              user_status: lost.user_status,
              status: lost.status,
              matching_email: lost.matching_email
            };
          });
          /*  this.loading = true */
        })
        .catch(err => {
          console.log(err);
        });
    },
    foundLinkGen(pageNum) {
      return;
    },
    foundChangePage(pageNum) {
      this.foundCurrentPage = pageNum;
      this.getFound();
      const refElement = this.$refs.myRef;
      refElement.scrollIntoView();
    },
    sortMyLost() {
      if (this.lostSelected == null) {
        this.myLost.sort((a, b) => a.id - b.id);
      }
      if (this.lostSelected.id == "a") {
        this.myLost.sort((a, b) => a.id - b.id);
      }
      if (this.lostSelected.id == "b") {
        this.myLost.sort((a, b) => b.id - a.id);
      }
      if (this.lostSelected.id == "c") {
        this.myLost.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
      }
      if (this.lostSelected.id == "d") {
        this.myLost.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
      }
      if (this.lostSelected.id == "e") {
        this.myLost.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (this.lostSelected.id == "f") {
        this.myLost.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    sortMyFound() {
      if (this.foundSelected == null) {
        this.myFound.sort((a, b) => a.id - b.id);
      }
      if (this.foundSelected.id == "a") {
        this.myFound.sort((a, b) => a.id - b.id);
      }
      if (this.foundSelected.id == "b") {
        this.myFound.sort((a, b) => b.id - a.id);
      }
      if (this.foundSelected.id == "c") {
        this.myFound.sort(
          (a, b) => new Date(a.start_date) - new Date(b.start_date)
        );
      }
      if (this.foundSelected.id == "d") {
        this.myFound.sort(
          (a, b) => new Date(b.start_date) - new Date(a.start_date)
        );
      }
      if (this.foundSelected.id == "e") {
        this.myFound.sort((a, b) => a.title.localeCompare(b.title));
      }
      if (this.foundSelected.id == "f") {
        this.myFound.sort((a, b) => b.title.localeCompare(a.title));
      }
    },
    lostDetailsPage(id) {
      this.$router.push({
          name:"announcement",
          query: {
          No: id,
          Type: 'myLost',
        },
        });
    },
    lostMatches(id) {
      localStorage.removeItem("lost_id");
      localStorage.setItem("lost_id", id);
      setTimeout(() => {
        this.$router.push("/lost-matches");
      }, 1000);
    },
    foundMatches(id) {
      localStorage.removeItem("found_id");
      localStorage.setItem("found_id", id);
      setTimeout(() => {
        this.$router.push("/found-matches");
      }, 1000);
    },

    foundDetailsPage(id) {
      this.$router.push({
          name:"announcement",
          query: {
          No: id,
          Type: 'myFound',
        },
        });
    },

    activateAnnouncement(data) {
      axios
        .post("user/lost/activate", { id: data.id })
        .then(resp => {
          if (resp.data.data.lost.user_status != "") {
            Swal.fire({
              title: "DeActivated",
              text:
                "You announcement has been deactivated in " +
                resp.data.data.lost.user_status,
              icon: "success",
              confirmButtonColor: "#202842"
            });
          } else {
            Swal.fire({
              title: "Activated",
              text: "You announcement has been activated",
              icon: "success",
              confirmButtonColor: "#202842"
            });
          }
        })
        .catch(() => {
          alert("ops");
        });
    },
    foundActivateAnnouncement(data) {
      axios
        .post("user/found/activate", { id: data.id })
        .then(resp => {
          if (resp.data.data.lost.user_status != "") {
            Swal.fire({
              title: "DeActivated",
              text:
                "You announcement has been deactivated in " +
                resp.data.data.lost.user_status,
              icon: "success",
              confirmButtonColor: "#202842"
            });
          } else {
            Swal.fire({
              title: "Activated",
              text: "You announcement has been activated",
              icon: "success",
              confirmButtonColor: "#202842"
            });
          }
        })
        .catch(() => {
          alert("ops");
        });
    },
    updateEmailMatching(data) {
      axios
        .post("user/lost/update", {
          id: data.id,
          matching_email: data.matching_email
        })
        .then(resp => {
          if (resp.data.data.lost.matching_email == true) {
            Swal.fire({
              title: "Notification On",
              text:
                "You are going to receive the matches announcements vie Email ",
              icon: "success",
              confirmButtonColor: "#202842"
            });
          } else {
            Swal.fire({
              title: "Notification Off",
              text:
                "turn on the mathcing email notification to receive your announcement matches",
              confirmButtonColor: "#202842"
            });
          }
        })
        .catch(() => {
          alert("ops");
        });
    },
    foundUpdateEmailMatching(data) {
      axios
        .post("user/found/update", {
          id: data.id,
          matching_email: data.matching_email
        })
        .then(resp => {
          if (resp.data.data.found.matching_email == true) {
            Swal.fire({
              title: "Notification On",
              text:
                "You are going to receive the matches announcements vie Email ",
              icon: "success",
              confirmButtonColor: "#202842"
            });
          } else {
            Swal.fire({
              title: "Notification Off",
              text:
                "turn on the mathcing email notification to receive your announcement matches",
              confirmButtonColor: "#202842"
            });
          }
        })
        .catch(() => {
          alert("ops");
        });
    }
  },
  mounted() {
    this.getLost();
    this.getFound();
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>  
<style scoped>
</style>