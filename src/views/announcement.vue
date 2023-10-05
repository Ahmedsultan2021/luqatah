

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
                        <h3 class="title mb-0">Announcement No #{{ $route.query.No }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12">
                    <div class="text-center mt-3">
                      <div>
                        <b-button-group>
                          <b-button variant="link" class="text-secondary" size="md" @click="print">
                            <PrinterIcon />
                            <span class="ml-2">Print</span>
                          </b-button>
                          <div v-if="$route.query.Type === 'lost' || $route.query.Type === 'found'">
                            <b-button
                              v-if="announcement.bookmark"
                              @click="bookmark_announcement"
                              variant="link"
                              class="text-secondary"
                              size="md"
                            >
                              <BookmarkIcon />
                              <span class="ml-2">Unbookmark</span>
                            </b-button>
                            <b-button
                              v-else
                              @click="bookmark_announcement"
                              variant="link"
                              class="text-secondary"
                              size="md"
                            >
                              <BookmarkIcon />
                              <span class="ml-2">Bookmark</span>
                            </b-button>
                          </div>
                          <b-button variant="link" class="text-secondary" size="md">
                            <AlertCircleIcon />
                            <span class="ml-2">Report</span>
                          </b-button>
                        </b-button-group>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section mt-60">
      <div class="mt-lg-3">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-12 mx-auto">
            <div class="sidebar sticky-bar p-4 rounded shadow">
              <div class="widget">
                <!-- general data -->
                <b-card class="my-3">
                  <b-card-title>
                    <div
                      class="d-flex justify-content-between"
                      v-if="currentUser.id == announcement.user.id"
                    >
                      <p></p>
                      <b-button
                        v-if="readOnly"
                        @click="readOnly =!readOnly"
                        variant="link"
                        class="text-secondary"
                      >
                        <Edit2Icon />Edit
                      </b-button>
                      <b-button
                        v-else
                        @click="get_sengle_announcement($route.query.No)"
                        variant="link"
                        class="text-secondary"
                      >
                        <RefreshCcwIcon />Reset
                      </b-button>
                    </div>
                  </b-card-title>
                  <b-form-group
                    label-cols-lg="3"
                    label="General Details"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                  >
                    <b-form-group
                      label="Announement Type:"
                      label-for="nested-street"
                      label-cols-sm="3"
                      label-align-sm="right"
                    >
                      <b-form-input
                        style="font-weight: bold; font-size:17px"
                        autocomplete="off"
                        class="text-center text-light bg-dark"
                        disabled
                        v-model="ann_type"
                        readonly
                        id="nested-street"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Announement title:"
                      label-for="nested-city"
                      label-cols-sm="3"
                      label-align-sm="right"
                    >
                      <b-form-input
                        style="font-weight: bold; font-size:15px"
                        autocomplete="off"
                        class="text-center text-primary"
                        v-model="announcement.title"
                        :readonly="readOnly"
                        id="nested-city"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Date From:"
                      label-for="nested-state"
                      label-cols-sm="3"
                      label-align-sm="right"
                    >
                      <b-form-input
                        type="date"
                        style="font-weight: bold; font-size:15px"
                        autocomplete="off"
                        class="text-center text-primary"
                        v-model="announcement.start_date"
                        :readonly="readOnly"
                        id="nested-state"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      label="Date To:"
                      label-for="nested-country"
                      label-cols-sm="3"
                      label-align-sm="right"
                    >
                      <b-form-input
                        type="date"
                        style="font-weight: bold; font-size:15px"
                        autocomplete="off"
                        class="text-center text-primary"
                        v-model="announcement.end_data"
                        :readonly="readOnly"
                        id="nested-country"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                  <div class="text-right">
                    <b-button
                      size="md"
                      variant="secondary"
                      v-if="!readOnly"
                      @click="save_general_changes"
                    >save changes</b-button>
                  </div>
                  <b-row class="mt-5" v-if="announcement.locations.length > 0">
                    <b-col cols="12" lg="7" md="7" sm="12">
                      <map-display
                        :locations="announcement.locations"
                        :line-string="announcement.line_string"
                        :location-range="announcement.location_range"
                        @add-marker="addMarker"
                      />
                    </b-col>
                    <b-col cols="12" lg="5" md="5" sm="12">
                      <b-list-group
                        class="px-1"
                        v-for="(marker, index) in announcement.locations"
                        :key="index"
                      >
                        <b-list-group-item class="mb-1 hover">
                          <div class="d-flex justify-content-between mb-2">
                            <div class="text-left pt-1">
                              <img src="images/placeholder1.png" width="20" alt />
                              <b class="text-danger">Point {{index+1}}</b>
                            </div>
                            <div class="text-left">
                              <b-button
                                pill
                                variant="secondary"
                                @click="removeMarker(index)"
                                size="sm"
                              >X</b-button>
                            </div>
                          </div>
                          <p class="text-secondary" style="font-size: 13px;">
                            <b>{{marker.name}}</b>
                          </p>
                          <!-- <p>( {{ marker.lat }},{{ marker.lng }} )</p> -->
                        </b-list-group-item>
                      </b-list-group>
                    </b-col>
                  </b-row>
                </b-card>

                <!-- items data -->
                <b-card class="my-3">
                  <b-card-title>
                    <div
                      class="d-flex justify-content-between"
                      v-if="currentUser.id == announcement.user.id"
                    >
                      <p></p>
                      <b-button
                        v-if="isDisabled"
                        @click="isDisabled =!isDisabled"
                        variant="link"
                        class="text-secondary"
                      >
                        <Edit2Icon />Edit
                      </b-button>
                      <b-button
                        v-else
                        @click="get_sengle_announcement($route.query.No)"
                        variant="link"
                        class="text-secondary"
                      >
                        <RefreshCcwIcon />Reset
                      </b-button>
                    </div>
                  </b-card-title>
                  <b-form-group
                    label-cols-lg="3"
                    label="Items Details"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                  >
                    <div v-for="(item, itemIndex) in announcement.items" :key="itemIndex">
                      <b-form-group
                        label-cols-lg="3"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0"
                        :label="'Item ' +(itemIndex + 1)"
                      ></b-form-group>
                      <div
                        v-for="(category, categoryIndex) in item.lost_sub_category"
                        :key="categoryIndex"
                      >
                        <b-form-group
                          :label="'Category:' + (categoryIndex + 1)"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="category.sub_category"
                          class="mb-2"
                        >
                          <b-form-select
                            style="font-weight: bold; font-size:15px"
                            class="text-center text-primary"
                            v-model="category.sub_category.category.id"
                            :options="categories"
                            :disabled="isDisabled"
                            @input="show_sub_categories(category.sub_category.category.id)"
                          ></b-form-select>
                        </b-form-group>
                        <b-form-group
                          label="Sub category:"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="category.sub_category"
                        >
                          <b-form-input
                            v-if="isDisabled"
                            class="text-center"
                            style="font-weight: bold; font-size:15px"
                            v-model="category.sub_category.title"
                            :disabled="isDisabled"
                          ></b-form-input>
                          <div v-else>
                            <b-form-select
                              v-if="subcategories.length > 0"
                              style="font-weight: bold; font-size:15px"
                              class="text-center text-primary"
                              v-model="category.sub_category.id"
                              :options="subcategories"
                              :disabled="isDisabled"
                            ></b-form-select>
                            <div class="text-right">
                              <b-button
                                class="mt-3"
                                size="sm"
                                variant="secondary"
                                v-if="!isDisabled"
                                @click="save_updated_category(category)"
                              >save changes</b-button>
                            </div>
                          </div>
                        </b-form-group>
                      </div>
                      <b-form-group
                        v-if="item.additional_data.length > 0"
                        label-cols-lg="3"
                        label-size="md"
                        label-class="text-secondary pt-0"
                        class="mb-0 mx-2"
                        :label="'Additional data'"
                      ></b-form-group>
                      <div
                        v-for="(additional, additionalIndex) in item.additional_data"
                        :key="additionalIndex"
                      >
                        <b-form-group
                          label="Name (Arabic):"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="additional.name_ar"
                        >
                          <b-form-input
                            style="direction: rtl;"
                            readonly
                            v-model="additional.name_ar"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Name (Latin):"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="additional.name_lt"
                        >
                          <b-form-input readonly v-model="additional.name_lt"></b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Number:"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="additional.number"
                        >
                          <b-form-input readonly v-model="additional.number"></b-form-input>
                        </b-form-group>
                        <b-form-group
                          label="Model:"
                          label-for="nested-city"
                          label-cols-sm="3"
                          label-align-sm="right"
                          v-if="additional.model"
                        >
                          <b-form-input readonly v-model="additional.model"></b-form-input>
                        </b-form-group>
                      </div>
                      <b-container fluid class="p-4 bg-light" v-if="item.images.length">
                        <b-row>
                          <b-col
                            class="my-1"
                            cols="12"
                            lg="4"
                            md="6"
                            v-for="(image, imageIndex) in item.images"
                            :key="imageIndex"
                          >
                            <b-img
                              thumbnail
                              fluid
                              style="height:130px"
                              :src="image.image"
                              alt="Image 1"
                            ></b-img>
                          </b-col>
                        </b-row>
                      </b-container>
                      <hr />
                    </div>
                  </b-form-group>
                </b-card>

                <!-- contact details -->
                <b-card class="my-3">
                  <b-card-title>
                    <div
                      class="d-flex justify-content-between"
                      v-if="currentUser.id == announcement.user.id"
                    >
                      <p></p>
                      <b-button
                        v-if="isDisabled"
                        @click="isDisabled =!isDisabled"
                        variant="link"
                        class="text-secondary"
                      >
                        <Edit2Icon />Edit
                      </b-button>
                      <b-button
                        v-else
                        @click="get_sengle_announcement($route.query.No)"
                        variant="link"
                        class="text-secondary"
                      >
                        <RefreshCcwIcon />Reset
                      </b-button>
                    </div>
                  </b-card-title>
                  <b-form-group
                    label-cols-lg="3"
                    label="Contact Detail"
                    label-size="lg"
                    label-class="font-weight-bold pt-0"
                    class="mb-0"
                  >
                    <div
                      v-for="(contact, contactIndex) in announcement.contact_details"
                      :key="contactIndex"
                    >
                      <b-form-group
                        label="Phone:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.phone"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.phone"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Email:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.email"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.email"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          >
                          </b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Contact Person:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.contact_person"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.contact_person"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Whatsapp:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.whatsapp"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.whatsapp"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Facebook:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.facebook"
                      >
                        <b-input-group>
                         
                          <b-form-input
                            v-model="contact.facebook"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Department:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.department"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.department"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group
                        label="Organization:"
                        label-for="nested-street"
                        label-cols-sm="3"
                        label-align-sm="right"
                        v-if="contact.organization"
                      >
                      <b-input-group>
                         
                          <b-form-input
                            v-model="contact.organization"
                            style="font-weight: bold; font-size:17px"
                            autocomplete="off"
                            class="text-center"
                            disabled
                            readonly
                            id="nested-street"
                          ></b-form-input>
                          <b-input-group-append>
                            <b-button>X</b-button>
                          </b-input-group-append>
                        </b-input-group>
                      </b-form-group>
                    </div>
                  </b-form-group>
                </b-card>
              </div>
            </div>
          </div>
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
import MapDisplay from "../components/MapDisplay.vue";
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
  PrinterIcon,
  AlertCircleIcon,
  ItalicIcon,
  GlobeIcon,
  GiftIcon,
  MapPinIcon,
  SearchIcon,
  Edit2Icon,
  ArrowRightIcon,
  RefreshCcwIcon
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
      loading: false,
      readOnly: true,
      isDisabled: true,
      announcement: "",
      items: "",
      locations: "",
      contact: "",
      url: "",
      models: "",
      category: "",
      categories: [],
      sub_category: "",
      subcategories: [],
      ann_type: this.$route.query.Type,
      generalModal: false
    };
  },
  components: {
    Navbar,
    Switcher,
    MapDisplay,
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
    PrinterIcon,
    AlertCircleIcon,
    ItalicIcon,
    GlobeIcon,
    GiftIcon,
    MapPinIcon,
    SearchIcon,
    Edit2Icon,
    ArrowRightIcon,
    RefreshCcwIcon
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  methods: {
    /* add markers */
    addMarker(newLocation) {
      this.announcement.locations.push(newLocation);
      this.announcement.line_string.coordinates.push([
        newLocation.longitude,
        newLocation.latitude
      ]);
    },

    /* categories list */
    get_categories() {
      // get categories
      axios.get("user/category/get").then(resp => {
        this.categories = resp.data.data.categories.map(category => {
          return {
            value: category.id,
            text: category.title
          };
        });
      });
    },

    /* subcategories list */
    show_sub_categories(id) {
      this.sub_category = null;
      this.subcategories = [];
      axios.post("user/sub_category/get", { id: id }).then(resp => {
        this.subcategories = resp.data.data.category.sub_categories.map(sub => {
          return {
            value: sub.id,
            text: sub.title
          };
        });
      });
    },

    /* announcement details */
    get_sengle_announcement(id) {
      this.loading = true;
      this.isDisabled = true;
      if (
        this.$route.query.Type === "myLost" ||
        this.$route.query.Type === "lost"
      ) {
        this.url = "user/lost/get_id";
      } else {
        this.url = "user/found/get_id";
      }

      axios.post(this.url, { id: id }).then(resp => {
        let result =
          this.$route.query.Type === "myLost" ||
          this.$route.query.Type === "lost"
            ? resp.data.data.lost
            : resp.data.data.found;
        this.announcement = result;
        console.log(this.announcement);
        this.locations = result.locations.map(location => {
          return {
            id: location.id,
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude),
            name: location.name
          };
        });

        this.contact = result.contact_details;
        this.loading = false;
        this.readOnly = true;
      });
    },

    /* bookmark / unbookmark announcement */
    bookmark_announcement() {
      if (this.$route.query.Type === "lost") {
        axios
          .post("user/lost/bookmark", {
            lost_id: this.$route.query.No
          })
          .then(resp => {
            Swal.fire({
              title: "Success",
              text: resp.data.message,
              icon: "success",
              confirmButtonColor: "#202842"
            });
            this.get_sengle_announcement(this.$route.query.No);
          })
          .catch(err => {
            Swal.fire({
              title: "Invalid Id",
              text: err.response.data.errors.lost_id[0],
              icon: "error",
              confirmButtonColor: "#202842"
            });
          });
      }
      if (this.$route.query.Type === "found") {
        axios
          .post("user/found/bookmark", {
            found_id: this.$route.query.No
          })
          .then(resp => {
            Swal.fire({
              title: "Success",
              text: resp.data.message,
              icon: "success",
              confirmButtonColor: "#202842"
            });
            this.get_sengle_announcement(this.$route.query.No);
          })
          .catch(err => {
            Swal.fire({
              title: "Invalid Id",
              text: err.response.data.errors.found_id[0],
              icon: "error",
              confirmButtonColor: "#202842"
            });
          });
      }
    },

    /* print announcement */
    print() {
      window.print();
    },

    /* save general changes */
    save_general_changes() {
      Swal.fire({
        title: "Confirmation",
        text: "Please confirm to save changes",
        icon: "warning",
        confirmButtonColor: "#202842"
      }).then(result => {
        if (result.isConfirmed) {
          if (
            this.$route.query.Type === "myLost" ||
            this.$route.query.Type === "lost"
          ) {
            this.url = "user/lost/update";
          } else {
            this.url = "user/found/update";
          }
          axios
            .post(this.url, {
              id: this.$route.query.No,
              title: this.announcement.title,
              start_date: this.announcement.start_date,
              end_data: this.announcement.end_data
            })
            .then(resp => {
              Swal.fire({
                title: "Success",
                text: resp.data.message,
                icon: "success",
                confirmButtonColor: "#202842"
              });
            });
          this.get_sengle_announcement(this.$route.query.No);
        }
      });
    },

    /* save general changes */
    save_updated_category(category) {
      Swal.fire({
        title: "Confirmation",
        text: "Please confirm to save changes",
        icon: "warning",
        confirmButtonColor: "#202842"
      }).then(result => {
        if (result.isConfirmed) {
          if (
            this.$route.query.Type === "myLost" ||
            this.$route.query.Type === "lost"
          ) {
            this.url = "/user/lost/sub_category/update";
          } else {
            this.url = "/user/found/sub_category/update";
          }
          axios
            .post(this.url, {
              id: category.id,
              sub_category_id: category.sub_category.id
            })
            .then(resp => {
              Swal.fire({
                title: "Success",
                text: resp.data.message,
                icon: "success",
                confirmButtonColor: "#202842"
              });
            });
          this.get_sengle_announcement(this.$route.query.No);
        }
      });
    }
  },
  created() {
    if (this.$route.query.No) {
      this.get_sengle_announcement(this.$route.query.No);
    } else {
      this.$router.push("/");
    }

    this.get_categories();

    //get years
    function generateArrayOfYears() {
      var max = new Date().getFullYear();
      var min = max - 60;
      var years = [];

      for (var i = max; i >= min; i--) {
        years.push(i);
      }
      return years;
    }

    var years = generateArrayOfYears();

    this.models = years;
  }
};
</script>
