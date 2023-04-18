<template>
  <div>
    <Navbar :isIcons="true" />

   <div v-if="loading">
     <!-- Hero Start -->
     <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12 text-center">
            <div class="page-next-level">
              
              <div class="page-next">
                <nav aria-label="breadcrumb" class="d-inline-block">
                  <ul class="breadcrumb bg-white rounded shadow mb-0">
                    <li class="breadcrumb-item">
                      <router-link to="/">Home</router-link>
                    </li>
                    <li class="breadcrumb-item">
                      <router-link to="/my-Announcements">My Announcements</router-link>
                    </li>
                    <!-- <li class="breadcrumb-item active" aria-current="page">
                      Announcement Details
                    </li> -->
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
     <div class="text-center mb-3">
      <h5 class="m-0 p-0">View Announcement No #{{lost.id}}</h5>
      <p class="text-muted m-0 p-0">Created at {{lost.start_date}}</p>
      <div class="d-block d-sm-none">
        <b-button-group>
          <b-button variant="link" class="text-secondary" size="md" @click="print">
            <i class="mdi mdi-printer "></i><span class="ml-2">Print</span> 
          </b-button>
          <b-button variant="link" class="text-secondary" size="md">
            <i class="mdi mdi-bookmark"></i><span class="ml-2">Bookmark</span>
          </b-button>
          <b-button variant="link" class="text-secondary" size="md">
            <i class="mdi mdi-alert-outline"></i><span class="ml-2">Report </span>
          </b-button>
        </b-button-group>
        <hr>
      </div>
      <div class="d-none d-sm-block ">
        <b-button-group>
          <b-button variant="link" class="text-secondary" size="md" @click="print">
            <i class="mdi mdi-printer "></i><span class="ml-2">Print announcement</span> 
          </b-button>
          <b-button variant="link" class="text-secondary" size="md">
            <i class="mdi mdi-bookmark"></i><span class="ml-2">Bookmark</span>
          </b-button>
          <b-button variant="link" class="text-secondary" size="md">
            <i class="mdi mdi-alert-outline"></i><span class="ml-2">Report announcement</span>
          </b-button>
        </b-button-group>
        <hr>
      </div>
     </div>
     <div ref="printContent" class="container">
      <b-card style="box-shadow: 0 3px 15px rgba(128, 128, 128, 0.302);" class="mb-3">
        <b-card-title>
          <div class="text-right">
            <b-button @click="openGeneralDetailsModal()" variant="link" class="text-secondary">
              <i class="mdi mdi-pencil"></i> Edit
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
            <b-form-input style="font-weight: bold; font-size:17px" autocomplete="off" class="text-center text-light bg-dark" disabled v-model="type" readonly id="nested-street"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Announement title:"
            label-for="nested-city"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="lost.title" :readonly="readOnly" id="nested-city"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Date From:"
            label-for="nested-state"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="lost.start_date" :readonly="readOnly" id="nested-state"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Date To:"
            label-for="nested-country"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="lost.end_data" :readonly="readOnly" id="nested-country"></b-form-input>
          </b-form-group>
        </b-form-group>
      </b-card>
      <b-card style="box-shadow: 0 3px 15px rgba(128, 128, 128, 0.302);" class="mb-3">
        <b-card-title>
          <div class="text-right">
            <b-button variant="link" class="text-secondary">
              <i class="mdi mdi-pencil"></i> {{ editMode ? 'Save' : 'Edit' }}
            </b-button>
          </div>
        </b-card-title>
        <b-form-group label="Location"  label-size="lg" label-class="font-weight-bold pt-0" class="mb-0"></b-form-group>
        <div v-if="editMode">
          <input type="text" class="form-control" ref="autocompleteInput">
        </div>
        <div style="width:100%; height:400px">
          <div id="floating-panel">
          <b>Travel Mode: </b>
          <select id="mode" @change="calculateDirections">  
            <option value="DRIVING">Driving</option>
            <option value="WALKING">Walking</option>
            <!-- <option value="BICYCLING">Bicycling</option>
            <option value="TRANSIT">Transit</option> -->
          </select>
        </div>
        <div style=" height:100%" id="map"></div>
        </div>
        <!-- <div id="mode-buttons">
          <b-button v-on:click="setTravelMode('DRIVING')">Driving</b-button>
          <b-button v-on:click="setTravelMode('WALKING')">Walking</b-button>
        </div> -->
        <!-- <div class="text-center travel-mode-buttons mt-2">
          <h5 class="mb-0"><b>Travel Mode</b></h5>
          <b-button-group>
            <b-button class="mx-1" size="sm" v-on:click="setTravelMode('DRIVING')">Driving</b-button>
            <b-button class="mx-1" size="sm" v-on:click="setTravelMode('WALKING')">Walking</b-button>
          </b-button-group>
        </div> -->
        <div class="mt-2">
          <b-list-group>
            <b-list-group-item style="font-size: 13px;" class="mb-2" v-for="(address, locIndex) in markers" :key="locIndex" @mouseover="animateMarker(locIndex)"  @mouseout="stopAnimation(locIndex)">
              <img src="images/placeholder1.png" width="20" alt="">
              <b> Point {{locIndex+1}}</b>: {{address.title}}
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-card>
      <b-card style="box-shadow: 0 3px 15px rgba(128, 128, 128, 0.302);" class="mb-3">
        <b-form-group label="Items"  label-size="lg" label-class="font-weight-bold pt-0" class="mb-0"></b-form-group>
        <div class="mb-3 p-2 border itemDiv"  v-for="(item, itemIndex) in items" :key="itemIndex">
          <b-form-group
            label-cols-lg="3"
            :label="'Item '+(itemIndex+1)"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            
             <hr style="border:1px dashed rgba(128, 128, 128, 0.302);"> 
            <div v-for="(category, categoryIndex) in item.categories" :key="categoryIndex">
              <div v-if="category.category">
                <div class="text-right">
                  <b-button variant="link" class="text-secondary" @click="openCategoryModal(category.id)">
                    <i class="mdi mdi-pencil"></i> Edit
                  </b-button>
                </div>
                <b-form-group
                :label="'Category '+(categoryIndex+1)"
                label-for="nested-street"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="category.category.category.title" readonly id="nested-street"></b-form-input>
              </b-form-group>
              <b-form-group
                label="Sub Category"
                label-for="nested-city"
                label-cols-sm="3"
                label-align-sm="right"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="category.category.title" :readonly="readOnly" id="nested-city"></b-form-input>
              </b-form-group>
              </div>
              <hr>
            </div>
            <b-form-group label="Additional Data"  label-size="lg" label-class="font-weight-bold pt-0" class="mb-0"></b-form-group>
            <div v-for="(extra, extraIndex) in item.additional_data" :key="`item_${extraIndex}`">
              <b-form-group v-if="extra.name_ar" label-for="nested-city" label-cols-sm="3"  label-align-sm="right"
                :label="'Arabic Name'"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="extra.name_ar" :readonly="readOnly" id="nested-city"></b-form-input>
              </b-form-group>
              <b-form-group v-if="extra.name_lt" label-for="nested-city" label-cols-sm="3"  label-align-sm="right"
                :label="'Latin Name'"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="extra.name_lt" :readonly="readOnly" id="nested-city"></b-form-input>
              </b-form-group>
              <b-form-group v-if="extra.number" label-for="nested-city" label-cols-sm="3"  label-align-sm="right"
                :label="'Number'"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="extra.number" :readonly="readOnly" id="nested-city"></b-form-input>
              </b-form-group>
              <b-form-group v-if="extra.model" label-for="nested-city" label-cols-sm="3"  label-align-sm="right"
                :label="'Model'"
              >
                <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="extra.model" :readonly="readOnly" id="nested-city"></b-form-input>
              </b-form-group>
            </div>
            <hr>
            <b-form-group label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
              <template v-slot:label>
                <span>Images <b class="mdi mdi-image-outline"></b></span>
              </template>
            </b-form-group>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
              v-for="(img, imgIndex) in item.images" :key="`image_${imgIndex}`">
                
              <div class="text-center p-0 mb-2 mt-0">
                <b-button variant="soft-danger" @click="removeImage(img , imgIndex , itemIndex)" size="sm">X Delete Image</b-button>
              </div>
              <b-card >
                <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                  <div class="card-body p-0 text-center">
                      <img v-if="img.url != notFoundImage" :src="img.url" class="img-fluid" alt="work-image" style=" height:200px" @error="handleError(img)"/>
                      <img v-else :src="img.url" class="img-fluid" alt="work-image" @error="handleError(img)"/>
                      <div class="overlay-work bg-dark"></div>
                      <!-- <div class="icons text-center">
                        <a
                          href="javascript: void(0);"
                          @click="() => showImg(imgIndex)" 
                          class="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                        >
                          <camera-icon class="fea icon-sm"></camera-icon>
                        </a>
                      </div> -->
                    </div>
                  </div>
                  <div class="content text-center" >
                    <input v-model="img.title" readonly type="text" placeholder="No Title Added" style="font-weight: bold; font-size:15px" autocomplete="off" class="form-control mt-2 text-center text-primary">
                  </div>
                </b-card>
                <vue-easy-lightbox
                 :visible="lightBoxVisible"
                 :index="lightBoxIndex"
                 :imgs="img.url"
                 @hide="lightBoxVisible = false"
               ></vue-easy-lightbox>
              </div> 
              <!--end col-->
    
              <!--end col-->
              <!--end col-->
            </div>
          </b-form-group>
        </div>
      </b-card>
      <b-card style="box-shadow: 0 3px 15px rgba(128, 128, 128, 0.302);" class="mb-3">
        <b-card-title>
          <div class="text-right">
            <b-button variant="link" class="text-secondary">
              <i class="mdi mdi-pencil"></i> Edit
            </b-button>
          </div>
        </b-card-title>
        <b-form-group
          label-cols-lg="3"
          label="Contact Details"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <div v-for="(contact, contactIndex) in contact" :key="`image_${contactIndex}`">
            <b-form-group
              v-if="contact.phone" label="Phone Number" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.phone" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.email" label="Email" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.email" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.contact_person" label="Contact Person" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.contact_person" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.whatsapp" label="WhatsApp" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.whatsapp" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.facebook" label="Facebook" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.facebook" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.department" label="Department" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.department" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            <b-form-group
              v-if="contact.organization" label="Organization" label-for="nested-city" label-cols-sm="3" label-align-sm="right" >
              <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="contact.organization" :readonly="readOnly" id="nested-city"></b-form-input>
            </b-form-group>
            
          </div>
        </b-form-group>
      </b-card>

     </div>
     <b-modal size="lg" centered v-model="generalModel" no-close-on-esc no-close-on-backdrop hide-header-close>
        <template #modal-header>
          <b>General Details</b><i class="mdi mdi-pencil"></i>
        </template>
        <template #modal-footer>
        <div class="w-100">
          
          <b-button variant="secondary" size="sm" class="float-right mx-2"  @click="closeGeneralModal"  >
            Close
          </b-button>
          <b-button variant="primary" size="sm" class="float-right mx-2"  @click="saveGenelaDetailsUpdates"  >
            <span v-if="buttonLoading">Saving <b-spinner small ></b-spinner></span> 
            <span v-else>Save</span> 
          </b-button>
          </div>
        </template>
          <b-form-group
            label="Announement Type:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input style="font-weight: bold; font-size:17px" autocomplete="off" class="text-center text-light bg-dark" disabled v-model="type" readonly id="nested-street"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Announement title:"
            label-for="nested-city"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input style="font-weight: bold; font-size:15px" autocomplete="off" class="text-center text-primary" v-model="editGeneralDetails.title"  id="nested-city"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Date From:"
            label-for="nested-state"
            label-cols-sm="3"
            label-align-sm="right"
          >
          <b-form-datepicker
                  id="startDate" 
                  :max="editGeneralDetails.start_date"
                  v-model="editGeneralDetails.start_date"
                  class="text-three"
                  placeholder="From date"
                  type="date"
                ></b-form-datepicker>
          </b-form-group>
          <b-form-group
            label="Date To:"
            label-for="nested-country"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-datepicker
              id="endDate"
              :min="editGeneralDetails.start_date"
              v-model="editGeneralDetails.end_data"
              class="text-three"
              placeholder="From date"
              type="date"
            ></b-form-datepicker>
          </b-form-group>
      </b-modal>
     <b-modal size="lg" centered v-model="categoryEditModal" no-close-on-esc no-close-on-backdrop hide-header-close>
        <template #modal-header>
          <b>Edit Category</b><i class="mdi mdi-pencil"></i>
        </template>
        <template #modal-footer>
        <div class="w-100">
          
          <b-button variant="secondary" size="sm" class="float-right mx-2"  @click="categoryEditModal = false"  >
            Close
          </b-button>
          <b-button variant="primary" size="sm" class="float-right mx-2"  @click="saveCategoryUpdates"  > 
            <span v-if="buttonLoading">Saving <b-spinner small ></b-spinner></span> 
            <span v-else>Save</span> 
          </b-button>
          </div>
        </template>
          <b-form-group
            label="Category:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
          >
              <v-select
              v-model="category"
              placeholder="Select category"
              :options="categories"
              @input="showSubCategory(category)"
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
            />
          </b-form-group>
          <b-form-group
          v-if="subCategories.length>0"
            label="SubCategory:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
          >
              <v-select
              v-model="subCategory"
              placeholder="Select category"
              :options="subCategories"
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
            />
          </b-form-group>
      </b-modal>
     
    </section>
    <!--end section-->
    <!--end section-->
   </div>
   <div v-else class="text-center bg-half bg-light d-table w-100 " style="height:800px">
      <div style="padding: 250px 0">
        <span class="loader"> <b class="mdi mdi-map-marker"></b></span>
      </div>
   </div>
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
  </div>
</template>
<script>
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  MessageCircleIcon,
  MailIcon,
  UserIcon,
  CameraIcon,
  StarIcon
} from "vue-feather-icons";
import * as turf from '@turf/turf';
import { Carousel, Slide } from "vue-carousel";
import 'jspdf-autotable';
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import axios from "../axios.config";
import VueEasyLightbox from "vue-easy-lightbox";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from 'sweetalert2';
/**
 * Shop-product-detail component
 */
export default {
  data() {
    return {
      type:'Lost',
      countval: 1,
      lost_id:localStorage.getItem('lost_id'),
      lost:'',
      locations:[],
      items:[],
      loading:false,
      range:0,
      line_string:'',
      contact:'',
      lightBoxVisible: false,
      readOnly:true,
      markers:[],
      directionsService: null,
      directionsRenderer: null,
      directionsCalculated: false, // Add new flag
      circle :null,
      directionsSteps: [],
      allPoints: [],
      buffer: "",
      line:'',
      editMode:false,
      lightBoxVisible: false,
      lightBoxIndex: 0, // default: 0,
      notFoundImage:'/images/not-found.png',
      noContactFound:'No contact details added',
      container :'',
      generalModel:false,
      editGeneralDetails:'',
      buttonLoading:false,
      categoryEditModal:false,
      lost_sub_category_id:'',

      //selections
      categories:[],
      category:null,
      subCategories:[],
      subCategory:null
    };
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    Carousel,
    Slide,
    ArrowUpIcon,
    VueSlickCarousel,
    HeartIcon,
    EyeIcon,
    ShoppingCartIcon,
    MessageCircleIcon,
    MailIcon,
    UserIcon,
    CameraIcon,
    VueEasyLightbox,
    StarIcon,
    "v-select":vSelect
  },
  mounted() {
    this.getLost()
  },
  methods: {
    getCategories(){
      // get categories
      axios.get("user/category/get").then(resp => {
        this.categories = resp.data.data.categories.map(category => {
          return {
            id: category.id,
            label: category.title
          };
        });
      });
    },
    showSubCategory(data){
      this.subCategories = [];
      if (data == null) {
        this.subCategories = [];
        this.subCategory = null;
      } else{
        this.subCategory = null;
        axios
          .post("user/sub_category/get", { id: data.id })
          .then(resp => {
            this.subCategories = resp.data.data.category.sub_categories.map(
              sub => {
                return {
                  id: sub.id,
                  label: sub.title
                };
              }
            );
          });
      }
    },
    getLost(){
      this.loading = false
      axios.post('user/lost/get_id',{id:this.lost_id})
      .then((resp)=>{
        // this.editGeneralDetails = resp.data.data.lost
        let lost = resp.data.data.lost
        this.lost = lost
        if (lost.location_range) {
          this.range = lost.location_range
        }
        else{
          this.range = 1
        }
          
        this.line_string = lost.line_string
        this.locations = lost.locations.map((location)=>{
          return{
            id:location.id,
            lat: parseFloat(location.latitude),
            lng: parseFloat(location.longitude),
            name:location.name
          }
        })
        this.items = lost.items.map((item)=>{
          return{
            id:item.id,
            categories:item.lost_sub_category.map((c)=>{
              return{
                id:c.id,
                category:c.sub_category
              }
            }),  
            additional_data:item.additional_data.map((add)=>{
              return{
                id: add.id,
                name_ar: add.name_ar,
                name_lt: add.name_lt,
                number: add.number,
                model: add.model
              }
            }),
            images:item.images.map((img)=>{
              return{
                id:img.id,
                url:img.image,
                title:img.title
              }
            }),
           
          }
        })
        
        this.contact = lost.contact_details
        this.loading = true
      }).then(()=>{
        if(this.locations.length > 0){
          this.initLocation()
        }
      })
    },
    // showImg(imgIndex) {
    //    this.lightBoxIndex = imgIndex; 
    //   this.lightBoxVisible = true;
    //   console.log(this.lightBoxIndex)
    // },
    increment() {
      this.countval++;
    },
    decrement() {
      if (this.countval > 0) this.countval--;
    },
    initLocation() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
      "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyCRMSE2oQeGa5vUdv7sSgAI4sTuTfvtAx8&callback=initMap";
      document.head.appendChild(script);
      // Define initMap function in global scope
      window.initMap = () => {
        let defaultCenter = { lat: 31.229389862175648, lng: 29.959807012803527 };
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const map = new google.maps.Map(document.getElementById("map"), {
                center: {
                  lat: this.locations[0].lat,
                  lng: this.locations[0].lng,                 
                },
                zoom: 9,
                streetViewControl: false, // disable street view control
                draggableCursor: 'default', // change the draggable cursor to default
                mapTypeControl: false, // enable map type control
                
              });
              
              this.map = map;
              const markers = [];
              this.locations.forEach((location, index) => {
                const marker = new google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: map,
                  title: location.name,
                  label: { text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" },
                  icon: {
                    url: "/images/marker.png",
                    labelOrigin: new google.maps.Point(15, 15),
                  },
                });
                markers.push(marker);
              });
              this.markers = markers;
              if(this.markers.length === 1){
                    this.createBuffer()
                }
                if(this.markers.length > 1){
                  this.calculateDirections() 
                }
            },
            () => {
              console.log("Error: The Geolocation service failed.");
              const map = new google.maps.Map(document.getElementById("map"), {
                center: {
                  lat: this.locations[0].lat,
                  lng: this.locations[0].lng,                 
                },
                zoom: 10,
                streetViewControl: false, // disable street view control
                draggableCursor: 'default', // change the draggable cursor to default
                mapTypeControl: false, // enable map type control
              });
              this.map = map;
              const markers = [];
              this.locations.forEach((location , index) => {
                const marker = new google.maps.Marker({
                  position: { lat: location.lat, lng: location.lng },
                  map: map,
                  title: location.name,
                  label: { text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" },
                  icon: {
                    url: "/images/marker.png",
                    labelOrigin: new google.maps.Point(15, 15),
                  },
                });
                markers.push(marker);
              });
              this.markers = markers;
            }
          );
          if(this.markers.length === 1){
            this.createBuffer()
          }
          if(this.markers.length > 1){
            this.calculateDirections() 
          }
        } else {
          console.log("Error: Your browser doesn't support geolocation.");
          const map = new google.maps.Map(document.getElementById("map"), {
            center: {
                  lat: this.locations[0].lat,
                  lng: this.locations[0].lng,                 
                },
            zoom: 9,
            streetViewControl: false, // disable street view control
            draggableCursor: 'default', // change the draggable cursor to default
            mapTypeControl: true, // enable map type control
            mapTypeControlOptions: {
              style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: google.maps.ControlPosition.LEFT,
              mapTypeIds: ["roadmap", "terrain"],
              mapTypeIds: ["driving", "walking"],
            },
          });
          this.map = map;
          const markers = [];
          this.locations.forEach((location,index) => {
            const marker = new google.maps.Marker({
              position: { lat: location.lat, lng: location.lng },
              map: map,
              title: location.name,
              label: { text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" },
                  icon: {
                    url: "/images/marker.png",
                    labelOrigin: new google.maps.Point(15, 15),
                  },
            });
            markers.push(marker);
          });
          this.markers = markers;
          if(this.markers.length === 1){
            this.createBuffer()
        }
        if(this.markers.length > 1){
          this.calculateDirections() 
        }

        }
         // Initialize directionsService and directionsRenderer
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });

      };
    },
    calculateDirections() {
        // Clear allPoints array
        this.allPoints = [];
        const selectedMode = document.getElementById("mode").value;
        // Ensure there are at least two markers to calculate directions
        if (this.markers.length < 2) {
            alert("Please add at least two markers to calculate directions.");
            return;
        }

        // Create an array of LatLng objects from the markers array
        const waypoints = this.markers.map((marker) => {
            return { location: new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()) };
        });
        this.waypoints = waypoints

        // Create a DirectionsRequest object
        const request = {
            origin: new google.maps.LatLng(this.markers[0].getPosition().lat(), this.markers[0].getPosition().lng()),
            destination: new google.maps.LatLng(
            this.markers[this.markers.length - 1].getPosition().lat(),
            this.markers[this.markers.length - 1].getPosition().lng()
            ),
            waypoints: waypoints.slice(1, -1),
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode[selectedMode],
        };

        // Call DirectionsService to calculate the route
        this.directionsService.route(request, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.directionsCalculated = true; // Set the flag to true
                
            // Add direction coordinates to response object
            const direction = response.routes[0].legs[0].start_location;
            response.direction = {
                lat: direction.lat(),
                lng: direction.lng(),
            };

            // Display directions on map
            if (this.directionsRenderer) {
                this.directionsRenderer.setDirections(response);
                  // Add direction coordinates to allPoints array
                this.createBuffer();
            }
             // Set the same directions on the directionsRenderer2 object
            // Save response to component data
            this.directionsResponse = response;

            // Add direction coordinates to allPoints array
            

            /* this.createBuffer(); */
            } else {
               // Draw a line between the markers
              const path = this.markers.map((marker) => new google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()));
              const polyline = new google.maps.Polyline({
                  path: path,
                  strokeColor: "#FF0000",
                  strokeOpacity: 1.0,
                  strokeWeight: 3,
                  map: this.map,
              });
              // Save the line to component data
              this.line = polyline;
              const data = []
              for (let i = 0; i < this.markers.length; i++) {
                const latLng = {
                  lat: this.markers[i].getPosition().lat(),
                  lng: this.markers[i].getPosition().lng(),
                };
                data.push(latLng);
                if (i === this.markers.length - 1) {
                  // Add the final marker to the allPoints array
                  const latLng = {
                    lat: this.markers[i].getPosition().lat(),
                    lng: this.markers[i].getPosition().lng(),
                  };
                  data.push(latLng);
                }
                this.allPoints = data;
                this.directionsCalculated = true;
              }
              this.createBuffer()
            }
        });
    },
    createBuffer() {
      if (this.markers.length === 1) {
        console.log('first hello');
        // Create a buffer as a circle around the marker
        const marker = this.markers[0];
        const center = marker.getPosition();
        const radius = this.range * 1000;
        const options = {
          strokeColor: "#007aff",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#007aff",
          fillOpacity: 0.35,
          map: this.map,
          center: center,
          radius: radius,
        };
        const circle = new google.maps.Circle(options);
        // Remove the old buffer
        if (this.buffer) {
          this.buffer.setMap(null);
        }
        this.buffer = circle;
      } else if (this.directionsCalculated) {
         console.log('second hello', this.markers[0].getPosition().lat());
        // Remove the old buffer
        if (this.buffer) {
          this.buffer.setMap(null);
        }
        // Create a buffer around the route
        const lineString = turf.lineString(this.line_string.coordinates.map(point => [point[0], point[1]]));
         console.log("line",this.line_string.coordinates[0][0]) 
        const buffer = turf.buffer(lineString, this.range, { units: "kilometers" });
        console.log(this.range)
        const coordinates = buffer.geometry.coordinates[0].map((point) => {
          return { lat: point[1], lng: point[0] };
        });
        // Create a new buffer polygon
        const options = {
          paths: coordinates,
          strokeColor: "#007aff",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#007aff",
          fillOpacity: 0.35,
          map: this.map,
        };
        const polygon = new google.maps.Polygon(options);
        this.buffer = polygon;
      }
    },
    animateMarker(locIndex) {
        const marker = this.markers[locIndex]
        marker.setAnimation(google.maps.Animation.BOUNCE);
    },
    stopAnimation(locIndex) {
        this.markers[locIndex].setAnimation(null);
    },
    handleError(img) { // Define a new method to handle error
      img.url = this.notFoundImage;
    },
    setTravelMode(mode) {
      this.travelMode = mode;
      this.calculateAndDisplayRoute();
    },
    calculateAndDisplayRoute(){

    },
    print() {
      window.print();
    },

    // modals
    openGeneralDetailsModal(){
      this.generalModel = true
      axios.post('user/lost/get_id',{id:this.lost.id})
      .then((resp)=>{
        this.editGeneralDetails ={
          title:resp.data.data.lost.title,
          start_date:resp.data.data.lost.start_date,
          end_data:resp.data.data.lost.end_data,
        }
      })
    },
    closeGeneralModal(){
      this.editGeneralDetails = ''
      this.generalModel = false
    },
    saveGenelaDetailsUpdates(){
      this.buttonLoading = true
      axios.post('user/lost/update',{
        id:this.lost_id ,
        title:this.editGeneralDetails.title,
        start_date:this.editGeneralDetails.start_date,
        end_data:this.editGeneralDetails.end_data
       })
      .then(()=>{
        this.generalModel = false
        this.buttonLoading = false
        this.getLost()
      }).catch(()=>{
        Swal.fire('Something went wrong, try again later')
      })
    },
    removeImage(img , imgIndex , itemIndex){
      Swal.fire({
        title: img.title,
        text: 'Are you sure you want to delete this image?',
        imageUrl: img.url,
        imageWidth: 400,
        confirmButtonColor: "#202842",
        cancelButtonColor: '#d33',
        imageAlt: 'Custom image',
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
      }).then((result)=>{
        if (result.isConfirmed) {
          axios.post('user/lost/delete/image',{id:img.id})
          .then(()=>{
            this.items[itemIndex].images.splice(imgIndex,1)
          })
          .catch(()=>{
            Swal.fire('Something went wrong, try again later')
          })
        }
      })
    },
    openCategoryModal(id){
      this.categoryEditModal = true
      this.lost_sub_category_id = id
      this.getCategories()
    },
    saveCategoryUpdates(){
      if(this.subCategory != null){
        Swal.fire({
          title: 'Are you sure?',
          text: "Confirm to change the category",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: "#202842",
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Confirm!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post('user/lost/sub_category/update',{
              id:this.lost_sub_category_id,
              sub_category_id : this.subCategory.id
            }).then(()=>{
              this.categoryEditModal = false
              Swal.fire(
                'Done!',
                'The category has been updated.',
                'success'
              )
              this.getLost()
              this.lost_sub_category_id = ''
            })
            .catch(()=>{
              Swal.fire('Something went wrong, try again later')
            })
          }
        })
      }
    }
  },
  
};
</script>
<style scoped>
 .itemDiv{
  background-color: rgba(244, 243, 243, 0.15);
 }
 #floating-panel {
  position: absolute;
  top: 122px;
  left: 21px;
  z-index: 5;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #999;
  text-align: center;
  font-family: "Roboto", "sans-serif";
  line-height: 30px;
  padding-left: 10px;
}

</style>








