

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
                  <div class="col-lg-2 col-md-3 text-md-left text-center">
                    <img
                      src="images/a.png"
                      class="avatar avatar-large rounded-circle shadow d-block mx-auto"
                      alt
                    />
                  </div>
                  <!--end col-->

                  <div class="col-lg-10 col-md-9">
                    <div class="row align-items-end">
                      <div class="col-md-7 text-md-left text-center mt-4 mt-sm-0">
                        <h3 class="title mb-0">{{ currentUser.full_name }}</h3>
                        <small class="text-muted h6 mr-2">{{ currentUser.email }}</small>
                      </div>
                      <!--end col-->
                      <div class="col-md-5 text-md-right text-center">
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                          <li class="list-inline-item ml-1" @click="user_modal = true">
                            <b-button variant="secondary" v-b-tooltip.hover title="Settings">
                              <Edit2Icon class="fea icon-sm fea-social"></Edit2Icon>
                            </b-button>
                          </li>
                        </ul>
                        <!--end icon-->
                      </div>
                      <!--end col-->
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

    <!-- Profile Start -->
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-12 mx-auto">
            <div class="sidebar sticky-bar p-4 rounded shadow">
              <div class="widget">
                <h5 class="widget-title">Find Announcement</h5>
                <b-row>
                  <b-col class="my-1" cols="12" md="7" sm="12">
                    <b-form-input placeholder="Quich Search..." size="lg"></b-form-input>
                  </b-col>
                  <b-col class="my-1" cols="12" md="5" sm="12">
                    <div class="d-flex w-100">
                      <b-form-select size="lg" class="text-small" v-model="ann_type">
                        <b-form-select-option :value="null" class="text-primary">Announcement Type</b-form-select-option>
                        <b-form-select-option value="lost">Lost</b-form-select-option>
                        <b-form-select-option value="found">Found</b-form-select-option>
                      </b-form-select>
                      <b-button size="sm" class="mx-2">
                        <SearchIcon />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <hr style="border: 2px lightgray double;" />
              <div class="widget">
                <div class="row">
                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-profile"
                      class="accounts active rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-dashboard"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Profile</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/new-announcement"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-map-marker-plus"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Create Announcement</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/my-announcements"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-file"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">My Announcements</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/my-announcements"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-file-search-alt"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Search Announcemet</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/my-bookmarks"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-bookmark"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Bookmarks</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link to="/" class="accounts rounded d-block shadow text-center py-3">
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-map-marker-question"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Help</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2" @click="signOut">
                    <router-link to="#" class="accounts rounded d-block shadow text-center py-3">
                      <span class="pro-icons h3 text-muted">
                        <i class="uil uil-sign-out-alt"></i>
                      </span>
                      <h6 class="title text-dark h6 my-0">Logout</h6>
                    </router-link>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>

              <!-- <div class="widget mt-4 pt-2">
                            <h5 class="widget-title">Follow me :</h5>
                            <ul class="list-unstyled social-icon mb-0 mt-4">
                                <li class="list-inline-item"><a href="javascript:void(0)" class="rounded">
                                        <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <instagram-icon class="fea icon-sm fea-social"></instagram-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <github-icon class="fea icon-sm fea-social"></github-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <youtube-icon class="fea icon-sm fea-social"></youtube-icon>
                                    </a></li>
                                <li class="list-inline-item ml-1"><a href="javascript:void(0)" class="rounded">
                                        <gitlab-icon class="fea icon-sm fea-social"></gitlab-icon>
                                    </a></li>
                            </ul>
                          
              </div>-->
            </div>
          </div>
          <!--end col-->

          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Profile End -->
    <!--end section-->
    <Footer />
    <!-- Footer End -->
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
    <b-modal size="lg" centered v-model="user_modal">
      <b-tabs fill>
        <b-tab title="Edit Name">
          <b-container class="py-5 px-1">
            <b-row>
              <b-col>
                <div class="d-flex justify-contect-between">
                  <b-form-input class="mx-2 my-2" size="lg" v-model="username"></b-form-input>
                </div>
                <div class="mx-auto my-2 text-center" style="width:30%">
                  <b-button @click="saveNewName" block variant="primary">save</b-button>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
        <b-tab title="Change Password">
          <b-container class="py-5 px-1">
            <b-row>
              <b-col cols="12">
                <b-row>
                  <b-col lg="6" md="12" sm="12" class="my-2">
                    password
                    <b-input-group>
                      <b-button
                        v-if="!showPass"
                        @click="showPassword"
                        size="sm"
                        variant="light"
                        squared
                      >
                        <b class="mdi mdi-eye-outline"></b>
                      </b-button>
                      <b-button @click="hidePassword" v-else size="sm" variant="light" squared>
                        <b class="mdi mdi-eye-off"></b>
                      </b-button>
                      <b-form-input
                        v-model="password"
                        :type="passType"
                        class="pl-5"
                        placeholder="Password"
                        required
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col lg="6" md="12" sm="12" class="my-2">
                    confirm password
                    <b-input-group>
                      <b-button
                        v-if="!showPass"
                        @click="showPassword"
                        size="sm"
                        variant="light"
                        squared
                      >
                        <b class="mdi mdi-eye-outline"></b>
                      </b-button>
                      <b-button @click="hidePassword" v-else size="sm" variant="light" squared>
                        <b class="mdi mdi-eye-off"></b>
                      </b-button>
                      <b-form-input
                        v-model="password_again"
                        :type="passType"
                        class="pl-5"
                        placeholder="confirm Password"
                        required
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <div class="mx-auto my-2 text-center" style="width:30%">
                  <b-button block variant="primary" @click="saveNewPassword">save</b-button>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
      <template #modal-footer="{  cancel }">
        <b-button size="sm" variant="secondary" @click="cancel()">Cancel</b-button>
      </template>
      <template #modal-header>
        <b>Edit Profile</b>
      </template>
    </b-modal>
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
  Edit2Icon
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
      ann_type: null,
      user_modal: false,
      password: "",
      password_again: "",
      passType: "password",
      showPass: false,
      username: ""
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
    Edit2Icon
  },
  created() {
    this.username = this.currentUser.full_name;
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  methods: {
    ...mapActions(["signOut"]),
    saveNewPassword() {
      if (this.$v.$invalid) {
        if (this.$v.password_again.$params.sameAsPassword) {
          Swal.fire({
            title: "ops!",
            text: "the password does't match",
            icon: "warning",
            confirmButtonColor: "#202842"
          });
        }
      } else {
        axios
          .post("user/update", {
            password: this.password
          })
          .then(res => {
            Swal.fire({
              title: "Success",
              text: "The password has been changed successfully",
              icon: "success",
              confirmButtonColor: "#202842"
            });

            this.password = "";
            this.password_again = "";
          });
      }
    },
    saveNewName() {
      axios
        .post("user/update", {
          full_name: this.username
        })
        .then(res => {
          Swal.fire({
            title: "Success",
            text: "The username has been changed successfully",
            icon: "success",
            confirmButtonColor: "#202842"
          });
          this.currentUser.full_name = this.username;
        });
    },
    showPassword() {
      this.showPass = !this.showPass;
      this.passType = "text";
    },
    hidePassword() {
      this.showPass = !this.showPass;
      this.passType = "password";
    }
  }
};
</script>
