

<template>
  <div>
    <Navbar :isIcons="true" />

    <!-- Hero Start -->
    <section
      class="bg-profile d-table w-100 bg-primary"
      style="background: url('images/bg2.png') center center;"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card public-profile border-0 rounded shadow" style="z-index: 1;">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-12 col-md-12">
                    <div class="text-center">
                      <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0 d-flex">
                        <h3 class="title mb-0">Search Announcement</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="text-center mt-3">
                      <div>
                        <b-button-group>
                          <b-button class="mx-1">
                            Quick search
                            <SearchIcon />
                          </b-button>
                          <b-button class="mx-1">
                            Advanced search
                            <MapPinIcon />
                          </b-button>
                        </b-button-group>
                      </div>
                    </div>
                    <!--end row-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--ed container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- search Start -->
    <section class="section mt-60">
      <div class=" mt-lg-3">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-12 mx-auto">
            <div class="sidebar sticky-bar p-4 rounded shadow">
              <div class="widget">
                <h5 class="widget-title">Find Announcement</h5>
                <b-row>
                  <b-col class="my-1" cols="12" md="7" sm="12">
                    <b-form-input v-model="search_value" placeholder="Quick Search..." size="lg"></b-form-input>
                  </b-col>
                  <b-col class="my-1" cols="12" md="5" sm="12">
                    <div class="d-flex w-100">
                      <b-form-select size="lg" class="text-small" v-model="ann_type">
                        <b-form-select-option
                          disabled
                          :value="null"
                          class="text-primary"
                        >Announcement Type</b-form-select-option>
                        <b-form-select-option value="lost">Lost</b-form-select-option>
                        <b-form-select-option value="found">Found</b-form-select-option>
                      </b-form-select>
                      <b-button size="sm" class="mx-2" @click="quick_search()">
                        <SearchIcon />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <hr style="border: 2px lightgray double;" />
              <div v-if="result_card">
                <div v-if="!loading">
                  <div class="row" v-if="results.length > 0">
                    <div
                      class="col-lg-4 col-md-6 col-12 my-3 pt-2"
                      v-for="(data, index) of results"
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
                            <br/>
                           
                          </ul>
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
                  <div class="text-center py-5 my-5" v-else>
                    <h2>No Announcements Found</h2>
                  </div>
                </div>
                <div v-else class="text-center container bg-half">
                  <span class="loader">
                    <b class="mdi mdi-map-marker"></b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>

    <Footer />

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
import { required, sameAs, extend } from "vuelidate/lib/validators";
import { mapGetters, mapActions } from "vuex";
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  GitlabIcon,
  MailIcon,
  UserPlusIcon,
  UsersIcon,
  MessageCircleIcon,
  BellIcon,
  ToolIcon,
  PhoneIcon,
  BookmarkIcon,
  ItalicIcon,
  GlobeIcon,
  GiftIcon,
  MapPinIcon,
  SearchIcon,
  Edit2Icon,
  ArrowRightIcon
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import Swal from "sweetalert2";
import axios from "../axios.config";

/**
 * Account-profile component
 */
export default {
  data() {
    return {
      ann_type: "lost",
      quick: true,
      advanced: false,
      search_value: "",
      advanced_data: {},
      loading: false,
      results:[],
      result_card:false
    };
  },
  validations: {
    password_again: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    YoutubeIcon,
    GitlabIcon,
    MailIcon,
    UserPlusIcon,
    UsersIcon,
    MessageCircleIcon,
    BellIcon,
    ToolIcon,
    PhoneIcon,
    BookmarkIcon,
    ItalicIcon,
    GlobeIcon,
    GiftIcon,
    MapPinIcon,
    SearchIcon,
    Edit2Icon,
    ArrowRightIcon
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  methods: {
    quick_search() {
      this.loading = true
      this.result_card = true
      const url = this.ann_type === 'lost' ? 'user/lost/search' : 'user/found/search';
      axios.post(url , {search: this.search_value})
      .then(resp => {
        if(this.ann_type === 'lost'){
            this.results = resp.data.data.losts.map(lost => {
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
        }else{
          this.results = resp.data.data.founds.map(found => {
            return {
              id: found.id,
              title: found.title,
              start_date: found.start_date,
              end_data: found.end_data,
              user_status: found.user_status ? false : true,
              status: found.status,
              matching_email: found.matching_email
            };
          });
        }
        this.loading = false
      })
      .catch((err)=>{
        console.log(err)
        this.loading = false
      })
     
    },
  },
  created(){
   if (this.$route.query.search_value) {
    this.search_value = this.$route.query.search_value
    this.ann_type = this.$route.query.ann_type
    this.quick_search()
   }
  }
};
</script>
