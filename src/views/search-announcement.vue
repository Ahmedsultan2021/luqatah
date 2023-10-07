

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
                          <b-button class="mx-1" @click="quick = true , results = '' ,by_id= false , result_card = false , ann_type = null" >
                            Quick search
                            <SearchIcon />
                          </b-button>
                          <b-button class="mx-1"   @click="quick = false ,by_id= false , results = '' , result_card = false , ann_type = null">
                            Advanced search
                            <MapPinIcon />
                          </b-button>
                          <b-button class="mx-1"   @click="quick = false , by_id= true , results = '' , result_card = false">
                            By Announcement No
                            #
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
      <div class=" mt-lg-3">
        <div class="row">
          <div class="col-lg-10 col-md-10 col-12 mx-auto">
            <div class="sidebar sticky-bar p-4 rounded shadow">
              <div class="widget" v-if="quick">
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
                      <b-button size="sm" 
                        class="mx-2"
                        :disabled="!search_value || !ann_type" 
                        @click="quick_search()">
                        <SearchIcon />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="widget" v-else-if="by_id">
                <h5 class="widget-title">Find Announcement</h5>
                <b-row>
                  <b-col class="my-1" cols="12" md="7" sm="12">
                    <b-form-input v-model="id_value" placeholder="Announcement No #" size="lg"
                        type="text"  
                        @input="sanitizeInput"
                    ></b-form-input>
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
                      <b-button size="sm" 
                        class="mx-2"
                        :disabled="!id_value || !ann_type" 
                        @click="search_by_id  ()">
                        <SearchIcon />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="widget" v-else>
                <h5 class="widget-title">Find Announcement</h5>
                <hr>
                <b-row>
                  <b-col cols="12" lg="12" md="12" sm="12">
                    <h6 class="widget-title"><u>Required Data</u></h6>
                  </b-col>
                </b-row>
               <b-row class="mt-2">
                <b-col cols="12" lg="4" md="4" sm="12">
                  <b-form-group label="select type">
                    <b-form-select class="text-small" v-model="ann_type" label="ahmed">
                        <b-form-select-option
                          disabled
                          :value="null"
                          class="text-primary"
                        >Announcement Type</b-form-select-option>
                        <b-form-select-option value="lost">Lost</b-form-select-option>
                        <b-form-select-option value="found">Found</b-form-select-option>
                      </b-form-select>
                 </b-form-group>
                </b-col>
                <b-col cols="12" lg="4" md="4" sm="12">
                 <b-form-group label="select category">
                  <b-form-select 
                    v-model="category" 
                    :options="categories" 
                    class="mb-3"
                    @input="show_sub_categories"  
                  >
                  </b-form-select>
                 </b-form-group>
                </b-col>
                <b-col cols="12" lg="4" md="4" sm="12">
                 <b-form-group label="select subcategory" v-if="category">
                  <b-form-select v-model="sub_category" :options="subcategories" class="mb-3">
                  </b-form-select>
                 </b-form-group>
                </b-col>
                <b-col cols="12" lg="4" md="4" sm="12">
                  <b-form-group label="select date">
                    <b-form-input type="date" v-model="advanced_data.date"></b-form-input>
                 </b-form-group>
                </b-col>
               </b-row>
               <hr>
                <b-row>
                  <b-col cols="12" lg="12" md="12" sm="12">
                    <h6 class="widget-title"><u>Additional Data</u></h6>
                  </b-col>
                </b-row>
               <b-row class="mt-2">
                <b-col cols="12" lg="4" md="4" sm="12">
                  <b-form-group label="Latin name">
                    <b-form-input  v-model="advanced_data.name_lt" :state="validate_name_lt"></b-form-input>
                 </b-form-group>
                </b-col>
                <b-col cols="12" lg="4" md="4" sm="12">
                  <b-form-group label="Arabic name">
                    <b-form-input  v-model="advanced_data.name_ar" :state="validate_name_ar"></b-form-input>
                 </b-form-group>
                </b-col>
                <b-col cols="12" lg="4" md="4" sm="12">
                 <b-form-group label="model" >
                  <b-form-select v-model="advanced_data.model" :options="models" class="mb-3">
                  </b-form-select>
                 </b-form-group>
                </b-col>
               
                <b-col cols="12" lg="4" md="4" sm="12"></b-col>
               </b-row>
               <b-row class="justify-content-center">
                <b-col cols="6">
                  <b-button @click="advanced_search" block
                    :disabled="!this.category || !this.sub_category || !this.advanced_data.date"
                  >Search <SearchIcon /></b-button>
                </b-col>
              </b-row>
              </div>
              <hr style="border: 2px lightgray double;" />
              <div  ref="resultCard" id="result-card">
                <div v-if="result_card">
                  <div v-if="!loading">
                    <b>Results</b>
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
      ann_type: null,
      quick: true,
      advanced: false,
      search_value: "",
      advanced_data: {
        category:null,
        sub_category:null,
        date:"",
        name_ar:"",
        name_lt:"",
        number:"",
        model:"2023"
      },
      category:null,
      sub_category:null,
      categories:[],
      subcategories:[],
      moedels:[],
      loading: false,
      results:[],
      result_card:false,
      by_id:false,
      id_value:null
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
    }),
    validate_name_ar() {
      // Use the regex pattern to validate the name_lt property
      if(this.advanced_data.name_ar == null || this.advanced_data.name_ar == null) {
        return null
      }else{
        const regex = /[\u0600-\u06FF ]/;
        return regex.test(this.advanced_data.name_ar) ? true : false;
      }
    }
  },
  methods: {
    scrollForResultCard() {
      // Get a reference to the result card element using the ref you defined
      const resultCardElement = this.$refs.resultCard;
      
      // Scroll the element into view
      resultCardElement.scrollIntoView({ behavior: 'smooth' });
    },

    lostDetailsPage(id) {
      this.$router.push({
          name:"announcement",
          query: {
          No: id,
          Type: this.ann_type,
        },
        });
    },

    get_categories(){
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

    show_sub_categories(){
      const selectedCategory = this.categories.find(cat => cat.value === this.category);
      if (selectedCategory) {
        this.advanced_data.category = selectedCategory.text;
      }
      this.sub_category = null
      this.subcategories = []
      axios
          .post("user/sub_category/get", { id: this.category })
          .then(resp => {
            this.subcategories = resp.data.data.category.sub_categories.map(
              sub => {
                return {
                  value: sub.id,
                  text: sub.title
                };
              }
            );
          });
    },
    sanitizeInput() {
      // Remove non-numeric characters from input
      this.id_value = this.id_value.replace(/\D/g, '');
    },

    quick_search() {
      this.advanced_data = {
        category:null,
        sub_category:null,
        date:"",
        name_ar:"",
        name_lt:"",
        number:"",
        model:"2023"
      }
      this.category = null
      this.sub_category = null
      this.subcategories = ''
     if(this.ann_type != null){
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
     }else{
      Swal.fire({
            title: "Choose announcement type",
            icon: "warning",
            confirmButtonColor: "#202842"
          });
     }
     
    },

    advanced_search() {
      this.loading = true
      this.result_card = true
      this.search_value = null
      const selectedSubCategory = this.subcategories.find(cat => cat.value === this.sub_category);
      if (selectedSubCategory) {
        this.advanced_data.sub_category = selectedSubCategory.text;
      }
      const url = this.ann_type === 'lost' ? 'user/lost/advan_search' : 'user/found/advan_search';
      // this.$router.replace({ query: {
      //       ann_type : this.ann_type , 
      //       category:this.advanced_data.category,
      //       sub_category:this.advanced_data.sub_category,
      //       date:this.advanced_data.date,
      //       name_lt:this.advanced_data.name_lt,
      //       name_ar:this.advanced_data.name_ar,
      //       number:this.advanced_data.number,
      //       model:this.advanced_data.model,
      //     }   
      //   });
      axios.post(url ,this.advanced_data)
      .then(resp => {
        if(this.ann_type === 'lost'){
            this.results = resp.data.data.lost.map(lost => {
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
          this.results = resp.data.data.found.map(found => {
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
   };
  //  if (this.$route.query.category) {
  //     this.ann_type = this.$route.query.ann_type
  //     this.advanced_search()
  //  }

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
