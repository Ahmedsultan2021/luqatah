<template>
  <div>
    <!-- <div v-if="currentUser == null">
        <new-announcement/>
    </div>-->
    <div>
      <Navbar :isIcons="true" />
      <section class="bg-half bg-light d-table w-100">
        <div class="container">
          <form-wizard
            title
            ref="formWizard"
            subtitle
            finish-button-text="Create Announcement"
            :emit-nav-event="true"
            stepSize="xs"
            color="#202842"
            :start-index="0"
            @on-complete="onCreate"
            class="mb-5 mt-1"
          >
            <template slot="title">
              <p style="font-size: 26px" class>
                <b>Create Announcement</b>
              </p>
            </template>
            <template slot="footer" slot-scope="props">
              <div class="wizard-footer-left">
                <wizard-button
                  v-if="props.activeTabIndex > 0 && !props.isLastStep"
                  @click.native="stepBack"
                  :style="props.fillButtonStyle"
                >
                  <b class="mdi mdi-arrow-left"></b>
                  <b>Back</b>
                </wizard-button>
                <wizard-button
                  v-if="props.isLastStep"
                  @click.native="stepBack"
                  :style="props.fillButtonStyle"
                >
                  <b class="mdi mdi-arrow-left">Back</b>
                </wizard-button>
              </div>
              <div class="wizard-footer-right">
                <wizard-button
                  v-if="!props.isLastStep"
                  @click.native="props.nextTab()"
                  class="wizard-footer-right"
                  :style="props.fillButtonStyle"
                >
                  <b>Next</b>
                  <b class="mdi mdi-arrow-right"></b>
                </wizard-button>

                <wizard-button
                  v-else
                  @click.native="onCreate"
                  class="wizard-footer-right finish-button"
                  :style="props.fillButtonStyle"
                >
                  <b v-if="isVisible">
                    {{ props.isLastStep ? "Save" : "Next" }}
                    <b class="mdi mdi-content-save"></b>
                  </b>
                  <b v-else>
                    <b-spinner small></b-spinner>Processing
                  </b>
                </wizard-button>
              </div>
            </template>
            <!-- :beforeChange="validateStepOne"  -->
            <tab-content title="General Details" :beforeChange="validateStepOne">
              <b-form-group
                id="fieldset-horizontal"
                class="mt-2"
                label-cols-sm
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Announcement Title</h5>
                </template>
                <b-form-input
                  id="input-live"
                  class="mt-1"
                  :state="titleState"
                  autocomplete="off"
                  aria-describedby="input-live-help input-live-feedback"
                  trim
                  v-model="step_one.title"
                  required
                  size="lg"
                  placeholder="Enter your announcement title"
                ></b-form-input>
                <b-form-invalid-feedback id="input-live-feedback">The title is required</b-form-invalid-feedback>
              </b-form-group>
              <hr />
              <b-form-group
                id="fieldset-horizontal"
                class="mt-2"
                label-cols-sm
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Announcement Type</h5>
                </template>
                <b-form-radio-group
                  id="input-horizontal"
                  class="radio-btn text-three pt-3 d-inline-block"
                  size="md"
                  v-model="step_one.announcement_type"
                  :options="announcement_types"
                ></b-form-radio-group>
              </b-form-group>
              <hr />
              <b-form-group
                id="fieldset-horizontal1"
                class="mt-2"
                label-cols-sm
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Date</h5>
                </template>
                <b style="color: #202842">Date From</b>
                <div v-if="step_one.end_data">
                  <b-form-datepicker
                  id="startDate"
                  aria-describedby="startDate startDate-feedback"
                  today-button
                  reset-button
                  :max="step_one.end_data"
                  :state="startDateReq"
                  v-model="step_one.start_date"
                  class="text-three"
                  placeholder="From date"
                  type="date"
                ></b-form-datepicker>
                <b-form-invalid-feedback id="startDate-feedback">The start date is required</b-form-invalid-feedback>
                </div>
                <div v-else>
                  <b-form-datepicker
                  id="startDate"
                  aria-describedby="startDate startDate-feedback"
                  today-button
                  reset-button
                  :max="maxDate"
                  :state="startDateReq"
                  v-model="step_one.start_date"
                  class="text-three"
                  placeholder="From date"
                  type="date"
                ></b-form-datepicker>
                <b-form-invalid-feedback id="startDate-feedback">The start date is required</b-form-invalid-feedback>
                </div>
                <br />
                <b style="color: #202842">Date To</b>
                <div  v-if="step_one.start_date">
                  <b-form-datepicker
                    id="endDate"
                    aria-describedby="endDate endDate-feedback"
                    today-button
                    reset-button
                    :state="endDateReq"
                    :min="step_one.start_date"
                    v-model="step_one.end_data"
                    class="text-three"
                    placeholder="to date"
                    type="date"
                  ></b-form-datepicker>
                  <b-form-invalid-feedback
                    id="endDate-feedback"
                  >The end date should be a day after the start date</b-form-invalid-feedback>
                </div>
                <div  v-else>
                  <b-form-datepicker
                    id="endDate"
                    aria-describedby="endDate endDate-feedback"
                    today-button
                    reset-button
                    :state="endDateReq"
                    :max="maxDate"
                    v-model="step_one.end_data"
                    class="text-three"
                    placeholder="to date"
                    type="date"
                  ></b-form-datepicker>
                  <b-form-invalid-feedback
                    id="endDate-feedback"
                  >The end date should be a day after the start date</b-form-invalid-feedback>
                </div>

              </b-form-group>
              <hr />
              <b-form-group
                id="fieldset-horizontal1"
                class="mt-2"
                label-cols-sm
                label-cols-lg="4"
                content-cols-sm
                content-cols-lg="8"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Location</h5>
                </template>
                </b-form-group>
              <b-container fluid>
                <b-row>
                    <b-col sm="8">
                      <input ref="autocompleteInput"   placeholder="search for location" class="form-control mb-2" />
                      <div id="map-container">
                            <div id="floating-panel">
                              <b>Travel Mode: </b>
                              <select id="mode" @change="calculateDirections">  
                                <option value="DRIVING">Driving</option>
                                <option value="WALKING">Walking</option>
                                <!-- <option value="BICYCLING">Bicycling</option>
                                <option value="TRANSIT">Transit</option> -->
                              </select>
                            </div>
                            <div id="map"></div>
                          </div>
                          <input v-if="markers.length > 0" id="range" class="form-control" @change="createBuffer" type="range" min="0" max="101" step="1" v-model="bufferRadius">
                          <b style="font-size: 14px;" v-if="markers.length > 0">- 
                            <b v-if="bufferRadius > 100">Match finding announcements everywhere</b>
                             <b v-else>Limit matching to specified location(s) within an area of {{bufferRadius}} Km</b>
                          </b>
                          
                    </b-col>
                    <b-col sm="4">
                      <div  v-if="markers[0]" style="height: 500px; overflow-y: scroll ; border-bottom: 1px dashed darkgray; ">  
                        <div class="text-right">
                          <b-button variant="light" squared   @click="resetMap()">Reset Map</b-button>
                        </div>
                          <b-list-group class="px-1"  v-for="(marker, index) in markers" :key="index" @mouseover="animateMarker(index)" @click="scrollToMap" @mouseout="stopAnimation(index)">
                                <b-list-group-item   class="mb-1 hover" >
                                    <div class="d-flex justify-content-between mb-2">
                                        <div class="text-left pt-1">
                                          <img src="images/placeholder1.png" width="20" alt="">
                                            <b class="text-danger " >Point {{index+1}}</b>  
                                        </div>
                                         <div class="text-left">
                                            <b-button pill variant="secondary" @click="removeMarker(index)" size="sm">X</b-button>
                                        </div> 
                                    </div>
                                    <p class="text-secondary" style="font-size: 13px;"><b>{{marker.name}}</b></p>
                                    <!-- <p>( {{ marker.lat }},{{ marker.lng }} )</p> -->
                                </b-list-group-item>    
                              </b-list-group>
                        </div>
    
                    </b-col>
                </b-row>
            </b-container>
            </tab-content>
            <!-- :beforeChange="validateStepTwo"  -->
            <tab-content title="Items Details" :beforeChange="validateStepTwo">
              <b-card
                bg-variant="soft-dark"
                text-variant="white"
                no-body
                v-for="(item, itemIndex) in step_two"
                :key="`item_${itemIndex}`"
                class="mb-2"
              >
                <b-container fluid>
                  <b-row>
                    <b-col class="mt-1 pt-2">
                      <h5>
                        <b>
                          <u>
                            {{
                            itemIndex == 0 ? "Item 1" : "Item" + (itemIndex + 1)
                            }}
                          </u>
                        </b>
                      </h5>
                    </b-col>
                    <b-col class="mt-1 py-1 text-right">
                      <b-button @click="removeItem(itemIndex)" variant="danger" size="sm">
                        <b>X</b> Delete Item
                      </b-button>
                    </b-col>
                  </b-row>
                </b-container>

                <b-card>
                  <div>
                    <b-form-group
                      id="fieldset-horizontal"
                      class="m-2 text-three"
                      label-cols-lg="3"
                      content-cols-lg="9"
                      label-size="lg"
                      label-for="input-horizontal"
                    >
                      <template v-slot:label>
                        <h5>Categories</h5>
                      </template>

                      <b-row
                        class="my-1"
                        v-for="(category, categoryIndex) in item.categoryArray"
                        :key="`category_${categoryIndex}`"
                      >
                        <b-col sm="10">
                          <b-form-group label="Category">
                            <v-select
                              v-model="category.category"
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
                        </b-col>
                        <b-col sm="10">
                          <b-form-group v-if="category.category" label="Sub-Category">
                            <v-select
                              v-model="category.subCategory"
                              placeholder="Select sub-category"
                              :options="category.subCategories"
                              style="
                                --vs-controls-color: #202842;
                                --vs-border-color: #202842;
                                --vs-dropdown-bg: white;
                                --vs-dropdown-color: #202842;
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
                        </b-col>
                        <b-col sm="12">
                          <b
                            style="font-size: 14px"
                            v-if="!category.subCategory"
                            class="text-danger d-none d-md-block"
                          >{{ category.desc }}</b>
                          <b
                            style="font-size: 11px"
                            v-if="!category.subCategory"
                            class="text-danger d-block d-md-none"
                          >{{ category.desc }}</b>
                        </b-col>
                        <b-col md="4">
                          <b-button
                            variant="soft-danger"
                            block
                            size="sm"
                            class="mb-3"
                            @click="removeCategory(itemIndex, categoryIndex)"
                          >
                            <b style="font-size: 12px" class="mdi mdi-delete-forever-outline">Delete</b>
                          </b-button>
                        </b-col>
                        <b-col sm="10">
                          <hr style="border-top: 1px dashed #202842" />
                        </b-col>
                      </b-row>
                      <b-col md="12" class="text-right">
                        <b-button
                          size="sm"
                          class="mt-1"
                          @click="addAnotherSubCategory(itemIndex)"
                          variant="soft-secondary"
                        >
                          <b
                            style="font-size: 12px"
                            class="mdi mdi-plus-circle"
                          >Add Another Category</b>
                        </b-button>
                      </b-col>
                    </b-form-group>

                    <hr />
                    <b-form-group
                      id="fieldset-horizontal"
                      class="m-2 text-three"
                      label-cols-lg="3"
                      content-cols-lg="9"
                      label-size="lg"
                      label-for="input-horizontal"
                    >
                      <template v-slot:label>
                        <h5>Additional Details</h5>
                      </template>
                      <b-row class="my-1">
                        <b-col sm="10" class="mb-2">
                          <b-form-group class="mt-1">
                            <v-select
                              placeholder="Select addition details"
                              v-model="item.selected"
                              @input="PushAdditional(itemIndex)"
                              :options="[
                                'Name(Arabic)',
                                'Name(Latin)',
                                'Number',
                                'Model',
                              ]"
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
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <b-row
                        class="my-1"
                        v-for="(extra, extraIndex) in item.additionalArray"
                        :key="`ans_${extraIndex}`"
                      >
                        <b-col cols="10" class="mb-2">
                          <div>
                            <b-form-group v-if="extra.value == 'ar'" label="Name(Arabic)">
                              <template v-slot:description>
                                <span :id="`err_${extraIndex}`" class="text-danger"></span>
                              </template>
                              <input
                                type="text"
                                @input="isArabicChars($event, itemIndex, extraIndex)"
                                autocomplete="off"
                                class="form-control"
                                id="arabic"
                                lang="ar"
                                placeholder="enter Arabic name only"
                                v-model="extra.name_ar"
                              />
                              <b-button
                                style="text-decoration: none"
                                @click="removeExtra(itemIndex, extraIndex)"
                                squared
                                variant="link"
                              >
                                <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                                <b class="text-danger">remove</b>
                              </b-button>
                            </b-form-group>
                            <!-- end arabic  -->
                            <b-form-group label="Name(Latin)" v-if="extra.value == 'lt'">
                              <template v-slot:description>
                                <span :id="`enErr_${extraIndex}`" class="text-danger"></span>
                              </template>
                              <input
                                type="text"
                                @input="isEnglishChars(itemIndex, extraIndex)"
                                class="form-control"
                                autocomplete="off"
                                lang="en"
                                placeholder="enter Latin name only"
                                v-model="extra.name_lt"
                              />
                              <b-button
                                style="text-decoration: none"
                                @click="removeExtra(itemIndex, extraIndex)"
                                squared
                                variant="link"
                              >
                                <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                                <b class="text-danger">remove</b>
                              </b-button>
                            </b-form-group>
                            <!--  end latin -->
                            <b-form-group label="Number" v-if="extra.value == 'no'">
                              <template v-slot:description>
                                <span class="text-muted">This field accept numbers only</span>
                                <!-- <span :id="`NoErr_${extraIndex}`" class="text-danger"></span> -->
                              </template>
                              <input
                                class="form-control"
                                lang="en"
                                type="tel"
                                @input="isNumber(itemIndex, extraIndex)"
                                autocomplete="off"
                                placeholder="e.g. serial number , imei ...etc"
                                v-model="extra.number"
                              />
                              <b-button
                                style="text-decoration: none"
                                @click="removeExtra(itemIndex, extraIndex)"
                                squared
                                variant="link"
                              >
                                <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                                <b class="text-danger">remove</b>
                              </b-button>
                            </b-form-group>
                            <!-- end number -->
                            <b-form-group label="Model" v-if="extra.value == 'Model'">
                              <v-select
                                v-model="extra.model"
                                :options="models"
                                placeholder="select model"
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
                                  --vs-dropdown-max-height: 200px;
                                  --vs-border-raduis: 0px;
                                "
                              ></v-select>
                              <b-button
                                style="text-decoration: none"
                                @click="removeExtra(itemIndex, extraIndex)"
                                squared
                                variant="link"
                              >
                                <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                                <b class="text-danger">remove</b>
                              </b-button>
                            </b-form-group>
                          </div>
                        </b-col>
                        <b-col cols="2"></b-col>
                      </b-row>
                    </b-form-group>

                    <hr />
                    <div>
                      <b-form-group
                        id="fieldset-horizontal"
                        class="m-2 text-three"
                        label-cols-sm
                        label-cols-lg="3"
                        content-cols-sm
                        label-cols-md="3"
                        content-cols-md="9"
                        content-cols-lg="9"
                        label-size="lg"
                        label-for="input-horizontal"
                      >
                        <template v-slot:label>
                          <h5>Images</h5>
                        </template>
                        <div>
                          <b-button
                            variant="soft-secondary"
                            style="border: dashed"
                            class="mb-2"
                            @click="openUpload(itemIndex)"
                          >
                            <b style="font-size: 14px" class="mdi mdi-image">Click To Upload Images</b>
                          </b-button>

                          <input
                            style="display: none"
                            type="file"
                            accept="image/*"
                            :id="itemIndex"
                            @click="clearFile(itemIndex)"
                            @change="uploadImage($event, itemIndex)"
                          />
                        </div>
                        <div class="row">
                          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
                          v-for="(img, imgIndex) in item.images" :key="`image_${imgIndex}`">
                            
                            <b-card >
                             <div class="text-center mb-2">
                              <b-button
                                @click="removePreview(itemIndex, imgIndex)"
                                size="sm"
                                variant="soft-danger"
                              >
                                <b style="font-size: 10px">X</b>
                              </b-button>
                             </div>
                              <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                                <div class="card-body p-0">
                                  <img :src="img.src" class="img-fluid" alt="work-image" style="width:200px ; height:200px"/>
                                  <div class="overlay-work bg-dark"></div>
                                  <div class="icons text-center">
                                    <a
                                      href="javascript: void(0);"
                                      @click="() => showImg(imgIndex)" 
                                      class="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"
                                    >
                                      <camera-icon class="fea icon-sm"></camera-icon>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div class="content text-center" >
                                <h6 class="text-dark tag mb-0">Image Title</h6>
                                <input v-model="img.title" type="text" placeholder="Image Title" class="form-control">
                              </div>
                            </b-card>
                          </div> 
                          <!--end col-->
                
                          <!--end col-->
                           <vue-easy-lightbox
                            :visible="lightBoxVisible"
                            :index="lightBoxIndex"
                            :imgs="item.images"
                            @hide="lightBoxVisible = false"
                          ></vue-easy-lightbox>
                          <!--end col-->
                        </div>
                        <div v-if="item.imgLoad">
                          <b-spinner variant="secondary" small >
                            
                          </b-spinner>
                          <b style="font-size: 12px"> <b class="mdi mdi-image"></b> Uploading Image...</b>
                        </div>
                      </b-form-group>
                    </div>
                  </div>
                </b-card>
              </b-card>
              <b-button class="mb-5" size="sm" variant="soft-secondary" @click="addItem">
                <b style="font-size: 12px" class="mdi mdi-plus-circle">Add Another Item</b>
              </b-button>
            </tab-content>

            <tab-content title="Contact Details" :beforeChange="validateStepThree">
              <b-form-group
                id="fieldset-horizontal"
                class="mt-2 text-three"
                label-cols-sm
                label-cols-lg="3"
                content-cols-sm
                label-cols-md="3"
                content-cols-md="9"
                content-cols-lg="9"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Contact Details</h5>
                </template>
                <b-row class="my-1">
                  <b-col sm="10" class="mt-2">
                    <b-form-group class="mt-1">
                      <v-select
                        placeholder="Select contact details"
                        @input="pushContact"
                        v-model="selected"
                        :options="[
                          'phone',
                          'email',
                          'whatsapp',
                          'facebook',
                          'contact person',
                          'organization',
                          'department',
                        ]"
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
                    </b-form-group>
                  </b-col>
                  <b-col
                    sm="10"
                    v-for="(con, contactIndex) in contact_details"
                    :key="`contactDet_${contactIndex}`"
                  >
                    <div>
                      <b-form-group v-if="con.value == 'phone'" label="Phone Number">
                        <input
                          type="tel"
                          @paste.prevent
                          @input="isPhoneNumber(contactIndex)"
                          class="form-control"
                          id="arabic"
                          :state="con.phoneState"
                          autocomplete="off"
                          lang="ar"
                          placeholder="enter your phone number"
                          v-model="con.phone"
                        />
                        <!-- <p :id="`phoneErr_${contactIndex}`" class="text-danger p-0 m-0"></p> -->
                        <span class="text-muted">This field accept numbers only</span>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'email'" label="Email">
                        <input
                          @input="isEmail(contactIndex)"
                          :state="con.emailState"
                          type="email"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="enter your email"
                          v-model="con.email"
                        />
                        <p :id="`mailErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'whatsapp'" label="WhatsApp">
                        <input
                          @input="isWhatsApp(contactIndex)"
                          :state="con.awhatsappState"
                          type="tel"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="enter your whatsApp number"
                          v-model="con.awhatsapp"
                        />
                        <!-- <p :id="`whatsappErr_${contactIndex}`" class="text-danger p-0 m-0"></p> -->
                        <span class="text-muted">This field accept numbers only</span>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>
                      <b-form-group v-if="con.value == 'facebook'" label="Facebook">
                        <input
                          @input="isFaceBook(contactIndex)"
                          :state="con.facebookState"
                          type="text"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="enter your facebook link"
                          v-model="con.facebook"
                        />
                        <p :id="`facebookErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'contact_person'" label="Contact Person">
                        <input
                          @input="isContact_person(contactIndex)"
                          :state="con.contact_personState"
                          type="text"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="enter your contact name"
                          v-model="con.contact_person"
                        />
                        <p :id="`contact_personErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'address'" label="Address">
                        <input
                          type="text"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="enter Arabic name only"
                          v-model="con.address"
                        />
                        <p :id="`addressErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'department'" label="Department">
                        <input
                          @input="isDepartment(contactIndex)"
                          :state="con.departmentState"
                          type="text"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="department name"
                          v-model="con.department"
                        />
                        <p :id="`departmentErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>

                      <b-form-group v-if="con.value == 'organization'" label="Organization">
                        <input
                          @input="isOrganization(contactIndex)"
                          :state="con.organizationState"
                          type="text"
                          class="form-control"
                          id="arabic"
                          lang="ar"
                          placeholder="organization name"
                          v-model="con.organization"
                        />
                        <p :id="`organizationErr_${contactIndex}`" class="text-danger p-0 m-0"></p>
                        <b-button
                          style="text-decoration: none"
                          @click="removeContact(contactIndex)"
                          squared
                          variant="link"
                        >
                          <b style="font-size: 19px" class="mdi mdi-delete text-danger"></b>
                          <b class="text-danger">remove</b>
                        </b-button>
                      </b-form-group>
                    </div>
                  </b-col>
                </b-row>
              </b-form-group>
              <hr />
              <b-form-group
                id="fieldset-horizontal"
                class="mt-2 text-three"
                label-cols-sm
                label-cols-lg="3"
                content-cols-sm
                label-cols-md="3"
                content-cols-md="9"
                content-cols-lg="9"
                label-size="lg"
                label-for="input-horizontal"
              >
                <template v-slot:label>
                  <h5>Additional Information</h5>
                </template>
                <b-form-textarea size="lg" rows="8" v-model="step_one.additional_information"></b-form-textarea>
              </b-form-group>
            </tab-content>
            <tab-content  title="Confirmation" ref="tab2" >
              <b-card bg-variant="soft-light" text-variant="white" no-body>
                <b-card bg-variant="soft-dark" text-variant="white" no-body>
                  <b-container fluid>
                    <b-row>
                      <b-col cols="7" class="mt-1 pt-2">
                        <p style="font-size: 15px">
                          <b>General Details</b>
                        </p>
                      </b-col>
                      <b-col cols="5" class="mt-1 py-1 text-right">
                        <b-button @click="editStepOne" style="font-size: 14px" size="sm">
                          Edit
                          <i class="mdi mdi-pencil"></i>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-card no-body>
                    <b-container class="mt-3">
                      <b-row class="mb-2">
                        <b-col class="text-dark" sm="6">
                          <b>Type:</b>
                        </b-col>
                        <b-col class="text-primary" sm="6">
                          <p>
                            <b >{{ step_one.announcement_type }}</b> 
                          </p>
                        </b-col>
                      </b-row>
                      <b-row class="mb-2">
                        <b-col class="text-dark" sm="6">
                          <b>Title:</b>
                        </b-col>
                        <b-col class="text-primary" sm="6">
                          <p>
                            <b >{{ step_one.title }}</b> 
                          </p>
                        </b-col>
                      </b-row>
                      <b-row class="mb-2">
                        <b-col class="text-dark" sm="6">
                          <b>Date From:</b>
                        </b-col>
                        <b-col class="text-primary" sm="6">
                          <p>
                            <b >{{ step_one.start_date }}</b>
                          </p>
                        </b-col>
                      </b-row>
                      <b-row class="mb-2">
                        <b-col class="text-dark" sm="6">
                          <b>Date To:</b>
                        </b-col>
                        <b-col class="text-primary" sm="6">
                          <p>
                            <b >{{ step_one.end_data }}</b>
                          </p>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card>
                </b-card>
                <hr  />
                <b-card  bg-variant="soft-dark" text-variant="white" no-body>
                  <b-container fluid>
                    <b-row>
                      <b-col cols="7" class="mt-1 pt-2"> 
                        <p style="font-size: 15px">
                          <b>Location</b>
                        </p>
                      </b-col>
                      <b-col cols="5" class="mt-1 py-1 text-right">
                        <b-button @click="editStepOne" style="font-size: 14px" size="sm">
                          Edit
                          <i class="mdi mdi-pencil"></i>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-card no-body>
                    <b-container  v-if="markers.length > 0" class="mt-3">
                      <b-row>
                        <b-col>
                          <div id="map2" style="height: 500px; width: 100%;"></div>
                        </b-col>
                      </b-row>
                    </b-container>
                    <b-container  v-else class="mt-3">
                      <b-row>
                        <b-col>
                          <div >
                            <h6 class="text-secondary"><b>No Locations Added</b></h6>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card>
                </b-card>
                <hr />
                <b-card bg-variant="soft-dark" text-variant="white" no-body>
                  <b-container fluid>
                    <b-row>
                      <b-col sm="7" class="mt-1 pt-2">
                        <p style="font-size: 15px">
                          <b>Items Details</b>
                        </p>
                      </b-col>
                      <b-col sm="5" class="mt-1 py-1 text-right">
                        <b-button @click="editStepTwo" style="font-size: 14px" size="sm">
                          Edit
                          <i class="mdi mdi-pencil"></i>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-card no-body v-for="(item, i) in step_two" :key="`items_${i}`">
                    <b-container>
                      <br />

                      <b-row>
                        <b-col class="text-dark">
                          <h5>
                            <b>
                              <u>{{ i == 0 ? "Item 1" : "Item " + (i + 1) }}</u>
                            </b>
                          </h5>
                        </b-col>
                      </b-row>
                      <br />
                      <b-row>
                        <b-col class="text-dark">
                          <b>
                            <u>Categories</u>:
                          </b>
                        </b-col>
                      </b-row>
                      <!-- <b-dd-divider /> -->
                      <br />
                      <b-row class="mb-2"
                        v-for="(category, categoryIndex) in item.categoryArray"
                        :key="`cat_${categoryIndex}`"
                      >
                        <b-col class="text-dark " sm="6">
                          <b>Category ({{ categoryIndex + 1 }})</b>:
                        </b-col>
                        <b-col v-if="category.category != null" class="text-primary" sm="6">
                          <p>
                            <b>{{ category.category.label }}</b>
                          </p>
                        </b-col>
                        <b-col class="text-dark" sm="6">
                          <b>Subcategory</b>:
                        </b-col>
                        <b-col v-if="category.subCategory != null" class="text-primary" sm="6">
                          <p>
                            <b>{{ category.subCategory.label }}</b>
                          </p>
                        </b-col>
                        <b-col cols="12">
                          <hr />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col class="text-dark">
                          <b>
                            <u>Additional Details</u>:
                          </b>
                        </b-col>
                      </b-row>
                      <br />
                      <b-row class="mb-4"
                        v-for="(extra, extraIndex) in item.additionalArray"
                        :key="`extra_${extraIndex}`"
                      >
                        <b-col v-if="extra.name_ar" class="text-dark" sm="6">
                          <b>Name(Arabic)</b>:
                        </b-col>
                        <b-col v-if="extra.name_ar" class="text-primary" sm="7">
                          <p>
                            <b>{{ extra.name_ar }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="extra.name_lt" class="text-dark" sm="6">
                          <b>Name(Latin)</b>:
                        </b-col>
                        <b-col v-if="extra.name_lt" class="text-primary" sm="7">
                          <p>
                            <b>{{ extra.name_lt }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="extra.number" class="text-dark" sm="6">
                          <b>Number</b>:
                        </b-col>
                        <b-col v-if="extra.number" class="text-primary" sm="7">
                          <p>
                            <b>{{ extra.number }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="extra.model" class="text-dark" sm="6">
                          <b>Model</b>:
                        </b-col>
                        <b-col v-if="extra.model" class="text-primary" sm="7">
                          <p>
                            <b>{{ extra.model }}</b>
                          </p>
                        </b-col>
                      </b-row>
                      <hr />
                      <b-row>
                        <b-col class="text-dark">
                          <b>
                            <u>Images</u>:
                          </b>
                        </b-col>
                      </b-row>
                      <br />
                    </b-container>
                    <div class="row p-2">
                          <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2"
                          v-for="(img, imgIndex) in item.images" :key="`image_${imgIndex}`">
                            
                            <b-card >
                              <div class="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                                <div class="card-body p-0 text-center">
                                  <img  :src="img.src" class="img-fluid" alt="work-image" style=" height:200px" />
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
                  </b-card>
                </b-card>
                <hr />
                <b-card bg-variant="soft-dark" text-variant="white" no-body>
                  <b-container fluid>
                    <b-row>
                      <b-col sm="7" class="mt-1 pt-2">
                        <p style="font-size: 15px">
                          <b>Contact Details</b>
                        </p>
                      </b-col>
                      <b-col sm="5" class="mt-1 py-1 text-right">
                        <b-button @click="editStepThree" style="font-size: 14px" size="sm">
                          Edit
                          <i class="mdi mdi-pencil"></i>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-card no-body>
                    <br />
                    <b-container class="mb-3">
                      <b-row
                        v-for="(contact, cIndex) in contact_details"
                        :key="`contactos_${cIndex}`" class="mb-4"
                      >
                        <b-col v-if="contact.phone" class="text-dark " sm="6">
                          <b>Phone Number</b>:
                        </b-col>
                        <b-col v-if="contact.phone" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.phone }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.email" class="text-dark " sm="6">
                          <b>Email</b>:
                        </b-col>
                        <b-col v-if="contact.email" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.email }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.contact_person" class="text-dark " sm="6">
                          <b>Contact Person</b>:
                        </b-col>
                        <b-col v-if="contact.contact_person" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.contact_person }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.organization" class="text-dark " sm="6">
                          <b>Organization</b>:
                        </b-col>
                        <b-col v-if="contact.organization" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.organization }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.department" class="text-dark " sm="6">
                          <b>Department</b>:
                        </b-col>
                        <b-col v-if="contact.department" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.department }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.whatsapp" class="text-dark " sm="6">
                          <b>Whatsapp</b>:
                        </b-col>
                        <b-col v-if="contact.whatsapp" class="text-primary  " sm="12">
                          <p>
                            <b>{{ contact.whatsapp }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.facebook" class="text-dark " sm="6">
                          <b>Facebook</b>:
                        </b-col>
                        <b-col v-if="contact.facebook" class="text-primary " sm="12">
                          <p>
                            <b>{{ contact.facebook }}</b>
                          </p>
                        </b-col>
                        <b-col v-if="contact.address" class="text-dark " sm="6">
                          <b>Address</b>:
                        </b-col>
                        <b-col v-if="contact.address" class="text-primary " sm="12">
                          <p>
                            <b>{{ contact.address }}</b>
                          </p>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card>
                </b-card>
                <hr />
                <b-card bg-variant="soft-dark" text-variant="white" no-body>
                  <b-container fluid>
                    <b-row>
                      <b-col cols="7" class="mt-1 pt-2">
                        <p style="font-size: 15px">
                          <b>Additional Information</b>
                        </p>
                      </b-col>
                      <b-col cols="5" class="mt-1 py-1 text-right">
                        <b-button @click="editStepFour" style="font-size: 14px" size="sm">
                          Edit
                          <i class="mdi mdi-pencil"></i>
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-container>
                  <b-card no-body>
                    <br />
                    <b-container>
                      <b-row class="mb-3">
                        <b-col v-if="step_one.additional_information" class="text-dark">
                          <b>{{ step_one.additional_information }}</b>
                        </b-col>
                        <br />
                      </b-row>
                    </b-container>
                  </b-card>
                </b-card>
                <br />
              </b-card>
            </tab-content>
          </form-wizard>
        </div>
      </section>
      <b-modal hide-footer hide-header v-model="result" centered no-close-on-backdrop>
        <div v-if="isProcessing" class="text-center py-5">
          <span class="loader"> <b class="mdi mdi-map-marker"></b></span>
          <h4 class="text-secondary">
            <b>Saving</b>
          </h4>
        </div>
        <div v-else class="text-center py-2">
          <h1 style="font-size: 100px">
            <i class="mdi mdi-check-circle" style="color: green"></i>
          </h1>
          <h5>The Announcements has been added successfully</h5>
          <br />
          <div>
            <b-button class="m-1" variant="secondary" @click="myAnnPage">My Announcements</b-button>
            <b-button class="m-1" @click="newAnnPage" variant="secondary">New Announcement</b-button>
          </div>
        </div>
      </b-modal>
      <Footer />
      <a
        href="javascript: void(0);"
        class="btn btn-icon btn-primary back-to-top"
        id="back-to-top"
        v-scroll-to="'#topnav'"
      >
        <arrow-up-icon class="icons"></arrow-up-icon>
      </a>
    </div>
  </div>
</template>

<script>
import newAnnouncement from "../components/login/newAnnouncement.vue";
import { initMap } from "@/utils/initMap";
import axios from "../axios.config";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import { ArrowUpIcon, ArrowRightIcon , CameraIcon} from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { helpers } from "gmap-vue";
const { googleMapsApiInitializer } = helpers;
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { mapGetters, mapActions } from "vuex";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Swal from "sweetalert2";
import SingleLightbox from "../components/SingleLightbox"
import VueEasyLightbox from "vue-easy-lightbox";
import * as turf from '@turf/turf';
export default {
  components: {
    Navbar,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    CameraIcon,
    "v-select": vSelect,
    "vue-dropzone": vue2Dropzone,
    "new-announcement": newAnnouncement,
    swiper,
    swiperSlide,
    "single-light-box":SingleLightbox,
    VueEasyLightbox,
  },
  data() {
    return {
      maxDate: new Date().toISOString().slice(0, 10), 
      img: [{ image: "" }],
      acceptedimages: [],
      ImagePreview: "",
      isProcessing: true,
      result: false,
      announcement_types: ["Lost", "Found"],
      step_one: {
        announcement_type: "Lost",
        title: null,
        start_date: null,
        end_data: null,
        additional_information: ""
      },
      dateValidation: {
        valid: true,
        notValid: false
      },
      categories: [],
      step_two: [
        {
          id: 1,
          imgLoad: false,
          images: [],
          selected: "",
          categoryArray: [
            {
              category: "",
              subCategory: null,
              subCategories: [],
              desc: ""
            }
          ],
          additionalArray: []
        }
      ],
      items: "",
      models: [],
      contact_details: [],
      selected: "",
      contacts: "",
      file: "",
      imgLoad: true,
      counter: "",
      isVisible: true,
      dirty: false,
      flag: 0,
      stepThreeFlag: true,
      stepOneFlag: false,
      mapCenter:{lat:0, lng:0},
      mapZoom:3,
      selectedTravelMode:'Driving',

      /* maps properties */
      markers: [],
      markersWithLatLng: [],
      directionsService: null,
      directionsService2: null,
      directionsRenderer: null,
      directionsRenderer2 :null,
      directionsCalculated: false, // Add new flag
      directionsCalculated2: false, // Add new flag
      circle :null,
      directionsSteps: [],
      allPoints: [],
      allWaysPoints:[],
      bufferRadius: 1, // Add bufferRadius property
      buffer: "",
      map: "",
      map2:"",
      allMarkers: [],
      newPositions:'',
      currentInfoWindow :'',
      defaultLocation:{ lat: 31.229389862175648, lng: 29.959807012803527  },
      lightboximgs: [],
      lightBoxVisible: false,
      lightBoxIndex: 0, // default: 0,
      line:'',
      line2:'',
      waypoints:'',
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    }),
    titleState() {
      if (this.step_one.title == null) {
        return null;
      } else {
        return this.step_one.title.length > 0 ? true : false;
      }
    },
    startDateReq() {
      if (this.step_one.start_date == null) {
        return null;
      } else {
        return this.step_one.start_date.length > 0 ? true : false;
      }
    },
    endDateReq() {
      if (this.step_one.start_date == null) {
        return null;
      }else if(this.step_one.end_data == null){
        return null;
      } else {
        return this.step_one.end_data.length > 0 &&
          this.step_one.end_data >= this.step_one.start_date
          ? true
          : false;
      }
    }
  },
  mounted() {
    //map
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyCRMSE2oQeGa5vUdv7sSgAI4sTuTfvtAx8&callback=initMap";
    document.head.appendChild(script);
    // Define initMap function in global scope
    window.initMap = () =>{

        // map1 (step One)
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) =>{
              console.log(position)
              const map = new google.maps.Map(document.getElementById("map"), {
                center: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,                 
                },
                zoom: 10,
                streetViewControl: false, // disable street view control
                draggableCursor: 'default', // change the draggable cursor to default
                mapTypeControl: false, // enable map type control
              });
              this.map = map
              const markers = [];
              this.markers = markers;
              this.map.addListener("click", (e)=>{
         // Create a marker for clicked position
         const marker = new google.maps.Marker({
            position: e.latLng,
            draggable: true, // make the marker draggable
            map: this.map,
            title: "name",
            label:'',
            icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });
       

         // Add marker position to markers array
         const geocoder = new google.maps.Geocoder();
         geocoder.geocode({ location: e.latLng }, (results, status) =>{
            if (status === "OK"){
                if (results[0]){
                    const placeName = results[0].formatted_address;
                    marker.setTitle(placeName)
                    // Add marker position and place name to markers array
                    markers.push({
                        marker,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                        name: placeName,
                    });
                    this.markers = markers
                    this.markers.forEach((marker,index)=>{
                      marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
                    })
                    this.map.setZoom(10);
                    this.map.setCenter(e.latLng);
                    
                    if(this.markers.length > 1){
                        this.calculateDirections()
                    }
                    if(this.markers.length >= 1){
                        this.createBuffer()
                    }

                    // dragend marker
                    this.markers.forEach((marker, index) => {
                       /*  marker.marker.setLabel((index+1).toString()); */
                       /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                        marker.marker.addListener('dragend', () => {
                            const newLatLng = {
                                lat: marker.marker.getPosition().lat(),
                                lng: marker.marker.getPosition().lng(),
                            };
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: newLatLng }, (results, status) =>{
                                if (status === "OK"){
                                    if (results[0]){
                                        const placeName = results[0].formatted_address;
                                        newLatLng.name = placeName;
                                        this.updateMarker(index, newLatLng);
                                        if(this.markers.length>1){
                                            this.calculateDirections()
                                        }
                                        if(this.markers.length >= 1){
                                            this.createBuffer()
                                        }
                                    }
                                }
                            });
                        });
                    });

                     // add info window
                    // this.markers.forEach(markerObj => {
                    //     const marker = markerObj.marker;
                    //     const infoWindow = new google.maps.InfoWindow({
                    //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                    //     });
                        
                    //     marker.addListener('click', () => {
                    //         infoWindow.open(map, marker);
                    //     });
                    // });
                }
                else {
                    console.log("No results found");
                }
            }
            else {
                console.log(`Geocoder failed due to: ${status}`);
            }
         })

      });
        // Add click event listener to map
    

      // Create autocomplete search bar
      const input = this.$refs.autocompleteInput;
      const autocomplete = new google.maps.places.Autocomplete(input);

      // Set the bounds to the map's viewport to ensure that autocomplete
      // results are biased towards the visible area of the map.
      autocomplete.bindTo("bounds", map);

       // Specify just the place data fields that you need.
       autocomplete.setFields(["place_id", "geometry", "name"]);

        // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      autocomplete.addListener("place_changed", () =>{

        const place = autocomplete.getPlace();
        if (!place.geometry){
            return;
        }
        this.$refs.autocompleteInput.value = ''
        this.$refs.autocompleteInput.placeholder = 'search another location'

        // Add marker for selected place
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          draggable: true, // make the marker draggable
          label:'',
          icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });

         // Add marker position to markers array
         markers.push({
          marker,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name:place.name
        });

        this.markers = markers
        this.markers.forEach((marker,index)=>{
            marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
          })
        this.map.setZoom(10);
        this.map.setCenter(place.geometry.location);
        if(this.markers.length === 1){
            this.createBuffer()
        }
        if(this.markers.length > 1){
          this.calculateDirections() 
        }

        // dragend marker
        this.markers.forEach((marker, index) => {
            /* marker.marker.addListener('click', () => this.animateMarker(index)); */
            marker.marker.addListener('dragend', () => {
                const newLatLng = {
                    lat: marker.marker.getPosition().lat(),
                    lng: marker.marker.getPosition().lng(),
                };
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: newLatLng }, (results, status) =>{
                    if (status === "OK"){
                        if (results[0]){
                            const placeName = results[0].formatted_address;
                            newLatLng.name = placeName;
                            this.updateMarker(index, newLatLng);
                            if(this.markers.length>1){
                                this.calculateDirections()
                            }
                            if(this.markers.length >= 1){
                                this.createBuffer()
                            }
                        }
                    }
                });
            });
        });
        
        // add info window
        // this.markers.forEach(markerObj => {
        //     const marker = markerObj.marker;
        //     const infoWindow = new google.maps.InfoWindow({
        //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
        //     });
            
        //     marker.addListener('click', () => {
        //         infoWindow.open(map, marker);
        //     });
        // });
      })

      // Initialize directionsService and directionsRenderer
      this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
            },
            () =>{
              console.log("Error: Your browser doesn't support geolocation.");
          const map = new google.maps.Map(document.getElementById("map"), {
                center:{
                  lat: 0,
                  lng: 0                 
                },
                zoom: 3,
                streetViewControl: false, // disable street view control
                draggableCursor: 'default', // change the draggable cursor to default
                mapTypeControl: true, // enable map type control
              });
              this.map = map
              const markers = [];
              this.markers = markers;
              this.map.addListener("click", (e)=>{
         // Create a marker for clicked position
         const marker = new google.maps.Marker({
            position: e.latLng,
            draggable: true, // make the marker draggable
            map: this.map,
            title: "name",
            label:'',
            icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });
       

         // Add marker position to markers array
         const geocoder = new google.maps.Geocoder();
         geocoder.geocode({ location: e.latLng }, (results, status) =>{
            if (status === "OK"){
                if (results[0]){
                    const placeName = results[0].formatted_address;
                    marker.setTitle(placeName)
                    // Add marker position and place name to markers array
                    markers.push({
                        marker,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                        name: placeName,
                    });
                    this.markers = markers
                    this.markers.forEach((marker,index)=>{
                      marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
                    })
                    this.map.setZoom(10);
                    this.map.setCenter(e.latLng);
                    
                    if(this.markers.length > 1){
                        this.calculateDirections()
                    }
                    if(this.markers.length >= 1){
                        this.createBuffer()
                    }

                    // dragend marker
                    this.markers.forEach((marker, index) => {
                       /*  marker.marker.setLabel((index+1).toString()); */
                       /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                        marker.marker.addListener('dragend', () => {
                            const newLatLng = {
                                lat: marker.marker.getPosition().lat(),
                                lng: marker.marker.getPosition().lng(),
                            };
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: newLatLng }, (results, status) =>{
                                if (status === "OK"){
                                    if (results[0]){
                                        const placeName = results[0].formatted_address;
                                        newLatLng.name = placeName;
                                        this.updateMarker(index, newLatLng);
                                        if(this.markers.length>1){
                                            this.calculateDirections()
                                        }
                                        if(this.markers.length >= 1){
                                            this.createBuffer()
                                        }
                                    }
                                }
                            });
                        });
                    });

                     // add info window
                    // this.markers.forEach(markerObj => {
                    //     const marker = markerObj.marker;
                    //     const infoWindow = new google.maps.InfoWindow({
                    //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                    //     });
                        
                    //     marker.addListener('click', () => {
                    //         infoWindow.open(map, marker);
                    //     });
                    // });
                }
                else {
                    console.log("No results found");
                }
            }
            else {
                console.log(`Geocoder failed due to: ${status}`);
            }
         })

      });
        // Add click event listener to map
    

      // Create autocomplete search bar
      const input = this.$refs.autocompleteInput;
      const autocomplete = new google.maps.places.Autocomplete(input);

      // Set the bounds to the map's viewport to ensure that autocomplete
      // results are biased towards the visible area of the map.
      autocomplete.bindTo("bounds", map);

       // Specify just the place data fields that you need.
       autocomplete.setFields(["place_id", "geometry", "name"]);

        // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      autocomplete.addListener("place_changed", () =>{

        const place = autocomplete.getPlace();
        if (!place.geometry){
            return;
        }
        this.$refs.autocompleteInput.value = ''
        this.$refs.autocompleteInput.placeholder = 'search another location'

        // Add marker for selected place
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          draggable: true, // make the marker draggable,
          label:'',
          icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });

         // Add marker position to markers array
         markers.push({
          marker,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name:place.name
        });

        this.markers = markers
        this.markers.forEach((marker,index)=>{
          marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
        })
        this.map.setZoom(10);
        this.map.setCenter(place.geometry.location);
        if(this.markers.length === 1){
            this.createBuffer()
        }
        if(this.markers.length > 1){
          this.calculateDirections() 
        }

        // dragend marker
        this.markers.forEach((marker, index) => {
            /* marker.marker.addListener('click', () => this.animateMarker(index)); */
            marker.marker.addListener('dragend', () => {
                const newLatLng = {
                    lat: marker.marker.getPosition().lat(),
                    lng: marker.marker.getPosition().lng(),
                };
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: newLatLng }, (results, status) =>{
                    if (status === "OK"){
                        if (results[0]){
                            const placeName = results[0].formatted_address;
                            newLatLng.name = placeName;
                            this.updateMarker(index, newLatLng);
                            if(this.markers.length>1){
                                this.calculateDirections()
                            }
                            if(this.markers.length >= 1){
                                this.createBuffer()
                            }
                        }
                    }
                });
            });
        });
        
        
      })

      // Initialize directionsService and directionsRenderer
      this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
            }
          )
        }else{
          console.log("Error: Your browser doesn't support geolocation.");
          const map = new google.maps.Map(document.getElementById("map"), {
                center:{
                  lat: 0,
                  lng: 0                 
                },
                zoom: 3,
                streetViewControl: false, // disable street view control
                draggableCursor: 'default', // change the draggable cursor to default
                mapTypeControl: true, // enable map type control
              });
              this.map = map
              const markers = [];
              this.markers = markers;
              this.map.addListener("click", (e)=>{
         // Create a marker for clicked position
         const marker = new google.maps.Marker({
            position: e.latLng,
            draggable: true, // make the marker draggable
            map: this.map,
            label:'',
            title: "name",
            icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });
       

         // Add marker position to markers array
         const geocoder = new google.maps.Geocoder();
         geocoder.geocode({ location: e.latLng }, (results, status) =>{
            if (status === "OK"){
                if (results[0]){
                    const placeName = results[0].formatted_address;
                    marker.setTitle(placeName)
                    // Add marker position and place name to markers array
                    markers.push({
                        marker,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                        name: placeName,
                    });
                    this.markers = markers
                    this.markers.forEach((marker,index)=>{
                      marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
                    })
                    this.map.setZoom(10);
                    this.map.setCenter(e.latLng);
                    
                    if(this.markers.length > 1){
                        this.calculateDirections()
                    }
                    if(this.markers.length >= 1){
                        this.createBuffer()
                    }

                    // dragend marker
                    this.markers.forEach((marker, index) => {
                       /*  marker.marker.setLabel((index+1).toString()); */
                       /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                        marker.marker.addListener('dragend', () => {
                            const newLatLng = {
                                lat: marker.marker.getPosition().lat(),
                                lng: marker.marker.getPosition().lng(),
                            };
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: newLatLng }, (results, status) =>{
                                if (status === "OK"){
                                    if (results[0]){
                                        const placeName = results[0].formatted_address;
                                        newLatLng.name = placeName;
                                        this.updateMarker(index, newLatLng);
                                        if(this.markers.length>1){
                                            this.calculateDirections()
                                        }
                                        if(this.markers.length >= 1){
                                            this.createBuffer()
                                        }
                                    }
                                }
                            });
                        });
                    });

                     // add info window
                    // this.markers.forEach(markerObj => {
                    //     const marker = markerObj.marker;
                    //     const infoWindow = new google.maps.InfoWindow({
                    //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                    //     });
                        
                    //     marker.addListener('click', () => {
                    //         infoWindow.open(map, marker);
                    //     });
                    // });
                }
                else {
                    console.log("No results found");
                }
            }
            else {
                console.log(`Geocoder failed due to: ${status}`);
            }
         })

      });
        // Add click event listener to map
    

      // Create autocomplete search bar
      const input = this.$refs.autocompleteInput;
      const autocomplete = new google.maps.places.Autocomplete(input);

      // Set the bounds to the map's viewport to ensure that autocomplete
      // results are biased towards the visible area of the map.
      autocomplete.bindTo("bounds", map);

       // Specify just the place data fields that you need.
       autocomplete.setFields(["place_id", "geometry", "name"]);

        // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      autocomplete.addListener("place_changed", () =>{

        const place = autocomplete.getPlace();
        if (!place.geometry){
            return;
        }
        this.$refs.autocompleteInput.value = ''
        this.$refs.autocompleteInput.placeholder = 'search another location'

        // Add marker for selected place
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          draggable: true, // make the marker draggable
          label:'',
          icon: {
                url:"/images/marker.png",
                labelOrigin: new google.maps.Point(15,15)
            },
        });

         // Add marker position to markers array
         markers.push({
          marker,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name:place.name
        });

        this.markers = markers
        this.markers.forEach((marker,index)=>{
          marker.marker.setLabel({ text: (index + 1).toString(), color: "black" ,fontSize: "12px", fontWeight: "bold" })
        })
        this.map.setZoom(10);
        this.map.setCenter(place.geometry.location);
        if(this.markers.length === 1){
            this.createBuffer()
        }
        if(this.markers.length > 1){
          this.calculateDirections() 
        }

        // dragend marker
        this.markers.forEach((marker, index) => {
            /* marker.marker.addListener('click', () => this.animateMarker(index)); */
            marker.marker.addListener('dragend', () => {
                const newLatLng = {
                    lat: marker.marker.getPosition().lat(),
                    lng: marker.marker.getPosition().lng(),
                };
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: newLatLng }, (results, status) =>{
                    if (status === "OK"){
                        if (results[0]){
                            const placeName = results[0].formatted_address;
                            newLatLng.name = placeName;
                            this.updateMarker(index, newLatLng);
                            if(this.markers.length>1){
                                this.calculateDirections()
                            }
                            if(this.markers.length >= 1){
                                this.createBuffer()
                            }
                        }
                    }
                });
            });
        });
        
        // add info window
        // this.markers.forEach(markerObj => {
        //     const marker = markerObj.marker;
        //     const infoWindow = new google.maps.InfoWindow({
        //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
        //     });
            
        //     marker.addListener('click', () => {
        //         infoWindow.open(map, marker);
        //     });
        // });
      })

      // Initialize directionsService and directionsRenderer
      this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
        }       
    }
    /* -------------end map1------------- */
    this.$nextTick(() => {
      if (this.$refs.tab2.isActive) {
          this.initMap2();
      }
    });
    // get categories
    axios.get("user/category/get").then(resp => {
      this.categories = resp.data.data.categories.map(category => {
        return {
          id: category.id,
          label: category.title
        };
      });
    });

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
    
  },
  methods: {
    initMap2(){
      if(this.markers.length > 0){
      const map = new google.maps.Map(document.getElementById("map2"), {
        center: { lat: 31.229389862175648, lng: 29.959807012803527 },
        zoom: 10,
        streetViewControl: false, // disable street view control
        draggableCursor: 'default', // change the draggable cursor to default
        mapTypeControl: false, // enable map type control
      });
      this.map2 = map;
      this.allWaysPoints = this.allPoints


        console.log('all points' , this.allWaysPoints)
         // Create a LatLngBounds object
      const bounds = new google.maps.LatLngBounds();

      this.markers.forEach((marker1) => {
        const marker = new google.maps.Marker({
          position: { lat: marker1.lat, lng: marker1.lng },
          map: map,
        });
        this.allMarkers.push({
          marker,
          lat: marker1.lat,
          lng: marker1.lng,
        });
        bounds.extend(marker1.marker.getPosition());
      });
      // Center the map around the bounds
        this.map2.fitBounds(bounds);
      console.log('the map2 is',this.map2)

      // Create a new DirectionsRenderer object for map2
      this.directionsService2 = new google.maps.DirectionsService();
      this.directionsRenderer2 = new google.maps.DirectionsRenderer({
        map: this.map2,
        suppressMarkers: true,
      });
        // Ensure there are at least two markers to calculate directions
        if (this.allMarkers.length < 2) {
            return;
        }

        // Create an array of LatLng objects from the markers array
        const waypoints = this.allMarkers.map((marker) => {
            return { location: new google.maps.LatLng(marker.lat, marker.lng) };
        });

        // Create a DirectionsRequest object
        const request = {
            origin: new google.maps.LatLng(this.allMarkers[0].lat, this.allMarkers[0].lng),
            destination: new google.maps.LatLng(
            this.allMarkers[this.allMarkers.length - 1].lat,
            this.allMarkers[this.allMarkers.length - 1].lng
            ),
            waypoints: waypoints.slice(1, -1),
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
        };

        // Call DirectionsService to calculate the route
        this.directionsService2.route(request, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                this.directionsCalculated2 = true; // Set the flag to true
            // Add direction coordinates to response object
            const direction = response.routes[0].legs[0].start_location;
            response.direction = {
                lat: direction.lat(),
                lng: direction.lng(),
            };

            // Display directions on map
            if (this.directionsRenderer2) {
                this.directionsRenderer2.setDirections(response);
               if (this.bufferRadius < 101) {
                if (this.markers.length === 1) {
                  
                  // Create a buffer as a circle around the marker
                  const marker = this.allMarkers[0].marker;
                  const center = marker.getPosition();
                  const radius = this.bufferRadius * 1000;
                  const options = {
                    strokeColor: "#007aff",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#007aff",
                    fillOpacity: 0.35,
                    map: this.map2,
                    center: center,
                    radius: radius,
                  };
                  const circle = new google.maps.Circle(options);
                  // Remove the old buffer
                  if (this.circle) {
                    this.circle.setMap(null);
                  }
                  this.circle = circle;
                } else if (this.directionsCalculated) {
               
                  // Remove the old buffer
                  if (this.circle) {
                    this.circle.setMap(null);
                  }
                  // Create a buffer around the route
                  const lineString = turf.lineString(this.allWaysPoints.map(point => [point.lng, point.lat]));
                  const buffer = turf.buffer(lineString, this.bufferRadius, { units: "kilometers" });
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
                    map: this.map2,
                  };
                  const polygon = new google.maps.Polygon(options);
                  this.circle = polygon;
                }
               }else{
                if (this.circle) {
                    this.circle.setMap(null);
                  }
               }
            }
            // Set the same directions on the directionsRenderer2 object
            // Save response to component data
            this.directionsResponse = response;

            // Add direction coordinates to allPoints array
            

            /* this.createBuffer(); */
            } else {
              if (this.bufferRadius < 101) {
                const path = this.allMarkers.map((marker) => new google.maps.LatLng(marker.lat, marker.lng));
              const polyline = new google.maps.Polyline({
                  path: path,
                  strokeColor: "#FF0000",
                  strokeOpacity: 1.0,
                  strokeWeight: 3,
                  map: this.map2,
              });
              // Save the line to component data
                  this.line2 = polyline;
                  const data = []
                  for (let i = 0; i < this.markers.length; i++) {
                    const latLng = {
                      lat: this.markers[i].lat,
                      lng: this.markers[i].lng,
                    };
                    data.push(latLng);
                    if (i === this.markers.length - 1) {
                      // Add the final marker to the allPoints array
                      const latLng = {
                        lat: this.markers[i].lat,
                        lng: this.markers[i].lng,
                      };
                      data.push(latLng);
                    }
                    this.allWaysPoints = data;
                    this.directionsCalculated = true;
                  }
                  if (this.markers.length === 1) {
                  
                  // Create a buffer as a circle around the marker
                  const marker = this.allMarkers[0].marker;
                  const center = marker.getPosition();
                  const radius = this.bufferRadius * 1000;
                  const options = {
                    strokeColor: "#007aff",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#007aff",
                    fillOpacity: 0.35,
                    map: this.map2,
                    center: center,
                    radius: radius,
                  };
                  const circle = new google.maps.Circle(options);
                  // Remove the old buffer
                  if (this.circle) {
                    this.circle.setMap(null);
                  }
                  this.circle = circle;
                } else if (this.directionsCalculated) {
               
                  // Remove the old buffer
                  if (this.circle) {
                    this.circle.setMap(null);
                  }
                  // Create a buffer around the route
                  const lineString = turf.lineString(this.allWaysPoints.map(point => [point.lng, point.lat]));
                  const buffer = turf.buffer(lineString, this.bufferRadius, { units: "kilometers" });
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
                    map: this.map2,
                  };
                  const polygon = new google.maps.Polygon(options);
                  this.circle = polygon;
                }
              }else{
                if (this.circle) {
                    this.circle.setMap(null);
                  }
              }

            }
        });
       
            }
            return true
    },
    removeMarker(index) {
     
        const marker = this.markers[index].marker;
        marker.setMap(null); // remove marker from the map
        this.markers.splice(index, 1); // remove marker from the markers array
        if(this.markers.length === 0){
          console.log('dalia')
          this.directionsCalculated = false
          this.$refs.autocompleteInput.placeholder = 'search for location'
          this.allPoints = []
            // Remove buffer from the map
            if (this.buffer) {
                this.buffer.setMap(null);
                this.buffer = null;
            }
            // Remove directions from the map
            if (this.directionsRenderer) {
                this.directionsRenderer.setMap(null);
                this.directionsRenderer = null;
                this.directions = null;
            }
            if (this.line) {
              this.line.setMap(null)
            }
            // Initialize directionsService and directionsRenderer
            this.directionsService = new google.maps.DirectionsService();
            this.directionsRenderer = new google.maps.DirectionsRenderer({
                map: this.map,
                suppressMarkers: true // Set to true to suppress "A" and "B" markers
            });
        }
        else if(this.markers.length === 1){
          console.log('ahmed')
          this.directionsCalculated = false
          if (this.buffer) {
                this.buffer.setMap(null);
                this.buffer = null;
            }
            // Remove directions from the map
            if (this.directionsRenderer) {
                this.directionsRenderer.setMap(null);
                this.directionsRenderer = null;
                this.directions = null;
                
            }
             this.directionsService = new google.maps.DirectionsService();
            this.directionsRenderer = new google.maps.DirectionsRenderer({
                map: this.map,
                suppressMarkers: true // Set to true to suppress "A" and "B" markers
            });
            this.createBuffer()
        }
        else if(this.markers.length > 1){
          console.log('beeeeeb')
            this.calculateDirections()
            this.createBuffer()
        }
            console.log("marker length:",this.markers.length)
    },
    resetMap(){
      this.allPoints = []
        this.markers.forEach((marker) =>{
            marker.marker.setMap(null);
        })
        this.markers.splice(0);
        /* console.log("markers length",this.markers.length) */

        // Remove buffer from the map
        if (this.buffer) {
            this.buffer.setMap(null);
            this.buffer = null;
        }

        // Remove directions from the map
        if (this.directionsRenderer) {
            this.directionsRenderer.setMap(null);
            this.directionsRenderer = null;
            this.directions = null;
        }
        if(this.line){
          this.line.setMap(null)
        }

        // Initialize directionsService and directionsRenderer
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
    },
    updateMarker(index, newLatLng) {
      // update the marker's position and store the new lat/lng in this.markers
      this.markers[index].lat = newLatLng.lat;
      this.markers[index].lng = newLatLng.lng;
      this.markers[index].name = newLatLng.name;
      this.markers[index].marker.setPosition(newLatLng);
    },
    animateMarker(index) {
        const marker = this.markers[index].marker
        marker.setAnimation(google.maps.Animation.BOUNCE);
        // const infoWindow = new google.maps.InfoWindow({
        //     content: `<div><b>${this.markers[index].name}</b><br>( ${this.markers[index].lat} , ${this.markers[index].lng}</div>`
        // });
        // infoWindow.open(map, marker);
        // // store a reference to the info window
        // this.currentInfoWindow = infoWindow;
    },
    stopAnimation(index) {
        this.markers[index].marker.setAnimation(null);
        // close the info window
        // if (this.currentInfoWindow) {
        //     this.currentInfoWindow.close();
        // }
    },
    scrollToMap(){
      document.getElementById('map').scrollIntoView({ behavior: "smooth" })
    },
    addMarker(){
      
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
            return { location: new google.maps.LatLng(marker.lat, marker.lng) };
        });
        this.waypoints = waypoints

        // Create a DirectionsRequest object
        const request = {
            origin: new google.maps.LatLng(this.markers[0].lat, this.markers[0].lng),
            destination: new google.maps.LatLng(
            this.markers[this.markers.length - 1].lat,
            this.markers[this.markers.length - 1].lng
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
                  const data = [];
                const legs = response.routes[0].legs;
                for (let i = 0; i < legs.length; i++) {
                    const steps = legs[i].steps;
                    for (let j = 0; j < steps.length; j++) {
                        const polyline = steps[j].polyline;
                        const decoded = google.maps.geometry.encoding.decodePath(polyline.points);
                        for (let k = 0; k < decoded.length; k++) {
                            const latLng = {
                                lat: decoded[k].lat(),
                                lng: decoded[k].lng(),
                            };
                            data.push(latLng);
                            this.allPoints = data;
                        }
                    }
                }
                this.createBuffer();
            }
             // Set the same directions on the directionsRenderer2 object
            // Save response to component data
            this.directionsResponse = response;

            // Add direction coordinates to allPoints array
            

            /* this.createBuffer(); */
            } else {
               // Draw a line between the markers
              const path = this.markers.map((marker) => new google.maps.LatLng(marker.lat, marker.lng));
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
                  lat: this.markers[i].lat,
                  lng: this.markers[i].lng,
                };
                data.push(latLng);
                if (i === this.markers.length - 1) {
                  // Add the final marker to the allPoints array
                  const latLng = {
                    lat: this.markers[i].lat,
                    lng: this.markers[i].lng,
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
     if (this.bufferRadius < 101) {
      if (this.markers.length === 1) {
        console.log('first hello');
        // Create a buffer as a circle around the marker
        const marker = this.markers[0].marker;
        const center = marker.getPosition();
        const radius = this.bufferRadius * 1000;
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
         console.log('second hello', this.allPoints);
        // Remove the old buffer
        if (this.buffer) {
          this.buffer.setMap(null);
        }
        // Create a buffer around the route
        const lineString = turf.lineString(this.allPoints.map(point => [point.lng, point.lat]));
        /* console.log("line",lineString) */
        const buffer = turf.buffer(lineString, this.bufferRadius, { units: "kilometers" });
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
     }else{
      if (this.buffer) {
          this.buffer.setMap(null);
        }
     }
    },
    clearFile(itemIndex) {
      document.getElementById(itemIndex).value = "";
    },

    isArabicChars(e, itemIndex, extraIndex) {
      var arregex = /[\u0600-\u06FF ]/;
      var test = arregex.test(
        this.step_two[itemIndex].additionalArray[extraIndex].name_ar.slice(-1)
      );
      if (test == false) {
        let len = this.step_two[itemIndex].additionalArray[extraIndex].name_ar
          .length;
        let arabic = this.step_two[itemIndex].additionalArray[
          extraIndex
        ].name_ar.substring(0, len - 1);
        this.step_two[itemIndex].additionalArray[extraIndex].name_ar = arabic;
        document.getElementById(`err_${extraIndex}`).innerText =
          "Only Arabic letters accepted with no charecters or numbers";
      } else {
        this.step_two[itemIndex].additionalArray[extraIndex].name_ar;
        document.getElementById(`err_${extraIndex}`).innerText = "";
      }
      /* */
    },
    /*  displayERR(){
      document.getElementById('nameAR').innerText = 'error ya wad'
    }, */
    isNumber(itemIndex, extraIndex) {
      var arregex = /^[1234567890]/;
      var test = arregex.test(
        this.step_two[itemIndex].additionalArray[extraIndex].number.slice(-1)
      );
      if (test == false) {
        let len = this.step_two[itemIndex].additionalArray[extraIndex].number
          .length;
        let no = this.step_two[itemIndex].additionalArray[
          extraIndex
        ].number.substring(0, len - 1);
        this.step_two[itemIndex].additionalArray[extraIndex].number = no;
        document.getElementById(`NoErr_${extraIndex}`).innerText =
          "Only numbers accepted";
      } else {
        this.step_two[itemIndex].additionalArray[extraIndex].number;
        document.getElementById(`NoErr_${extraIndex}`).innerText = "";
      }
    },
    isEnglishChars(itemIndex, extraIndex) {
      var arregex = /^[A-Za-z ]+$/;
      var test = arregex.test(
        this.step_two[itemIndex].additionalArray[extraIndex].name_lt.slice(-1)
      );
      if (test == false) {
        let len = this.step_two[itemIndex].additionalArray[extraIndex].name_lt
          .length;
        let latin = this.step_two[itemIndex].additionalArray[
          extraIndex
        ].name_lt.substring(0, len - 1);
        this.step_two[itemIndex].additionalArray[extraIndex].name_lt = latin;
        document.getElementById(`enErr_${extraIndex}`).innerText =
          "Only Latin letters accepted";
      } else {
        this.step_two[itemIndex].additionalArray[extraIndex].name_lt;
        document.getElementById(`enErr_${extraIndex}`).innerText = "";
      }
    },
    newAnnPage() {
      window.location.replace("/new-announcement");
    },
    myAnnPage() {
      window.location.replace("/my-Announcements");
    },
    editStepOne() {
      this.$refs.formWizard.changeTab(3, 0);
      this.map.setZoom(10)
      window.scrollTo(0, 0);
    },
    editStepTwo() {
      this.$refs.formWizard.changeTab(3, 1);
      window.scrollTo(0, 0);
    },
    editStepThree() {
      this.$refs.formWizard.changeTab(3, 2);
      window.scrollTo(0, 0);
    },
    stepBack() {
      this.$refs.formWizard.prevTab();
      window.scrollTo(0, 0);
    },
    editStepFour() {
      this.$refs.formWizard.changeTab(3, 2);
      window.scrollTo(0, 0);
    },
    PushAdditional(itemIndex) {
      /* this.step_two[itemIndex].additionalArray[extraIndex].name_ar = '' */
      console.log(this.step_two[itemIndex].selected);

      if (this.step_two[itemIndex].selected === "Name(Latin)") {
        this.step_two[itemIndex].additionalArray.push({
          name_lt: null,
          name_ar: null,
          number: null,
          model: null,
          value: "lt"
        });
        this.step_two[itemIndex].selected = null;
        console.log(this.step_two[itemIndex].additionalArray);
      }
      if (this.step_two[itemIndex].selected === "Name(Arabic)") {
        this.step_two[itemIndex].additionalArray.push({
          name_lt: null,
          name_ar: null,
          number: null,
          model: null,
          value: "ar"
        });
        this.step_two[itemIndex].selected = null;
        console.log(this.step_two[itemIndex].additionalArray);
      }
      if (this.step_two[itemIndex].selected === "Number") {
        this.step_two[itemIndex].additionalArray.push({
          name_lt: null,
          name_ar: null,
          number: null,
          model: null,
          value: "no"
        });
        this.step_two[itemIndex].selected = null;
        console.log(this.step_two[itemIndex].additionalArray);
      }
      if (this.step_two[itemIndex].selected === "Model") {
        this.step_two[itemIndex].additionalArray.push({
          name_lt: null,
          name_ar: null,
          number: null,
          model: null,
          value: "Model"
        });
        this.step_two[itemIndex].selected = null;
        console.log(this.step_two[itemIndex].additionalArray);
      }
    },

    openUpload(itemIndex) {
      document.getElementById(itemIndex).click();
    },
    uploadImage(event, itemIndex) {
      console.log(itemIndex);

      var reader,
        files = event.target.files;
      if (files.length === 0) {
        console.log("empty");
      }
      reader = new FileReader();
      reader.onload = event => {
        this.ImagePreview = event.target.result;
      };
      reader.readAsDataURL(files[0]);
      let selectedFile = event.target.files[0];
      this.file = selectedFile;
      /* console.log(this.file) */
      let fd = new FormData();
      let i = "";
      let image = this.file;
      if (this.step_one.announcement_type == "Lost") {
        this.step_two[itemIndex].imgLoad = true;
        fd.append("image", image);
        axios
          .post("user/lost/add/image", fd, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(resp => {
            this.step_two[itemIndex].images.push({
              src: this.ImagePreview,
              alt: resp.data.data.image,
              title: "-"
            });
            this.step_two[itemIndex].imgLoad = false;
          });
      } else {
        this.step_two[itemIndex].imgLoad = true;
        fd.append("image", image);
        axios
          .post("user/found/add/image", fd, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(resp => {
            this.step_two[itemIndex].images.push({
              preview: this.ImagePreview,
              image: resp.data.data.image
            });
            this.step_two[itemIndex].imgLoad = false;
          });
      }
    },
    showFiles(itemIndex) {
      let image = this.$refs.myVueDropzone_itemIndex.getAcceptedFiles();

      console.log(image);
    },
    changeCenter(data) {
      this.center = data;
      console.log(this.center);
    },
    validateStepOne() {
      let title = this.titleState;
      let start = this.startDateReq;
      let end = this.endDateReq;
      if (title == null || start == null || end == null) {
        this.stepOneFlag = false;
        Swal.fire({
          title: "Missing Data",
          text: "Please fill all required fields ",
          icon: "warning",
          confirmButtonColor: "#202842"
        });
      } else {
        if (title == false || start == false || end == false) {
          this.stepOneFlag = false;
        } else {
          this.stepOneFlag = true;
        }
      }
      if (this.stepOneFlag == true) {
        this.stepOneFlag = false;
        window.scrollTo(0, 0);
        console.log("items length", this.step_two.length);
        return true;
      } else {
        this.stepOneFlag = false;
        if (title == false) {
          Swal.fire({
            title: "Missing Data",
            text: "The announcement title is required ",
            icon: "warning",
            confirmButtonColor: "#202842"
          });
        }
        if (start == false) {
          Swal.fire({
            title: "Missing Data",
            text: "The start Date is required ",
            icon: "warning",
            confirmButtonColor: "#202842"
          });
        }
        if (end == false) {
          Swal.fire(
            "Please enter the end date!, and it must be a day after the selected stard date"
          );
          Swal.fire({
            title: "Missing Data",
            text:
              "The end date is required, and it must be the same day or any day after the selected stard date ",
            icon: "warning",
            confirmButtonColor: "#202842"
          });
        }
        return false;
      }
    },

    validateStepTwo() {
      window.scrollTo(0, 0);
      console.log("items length", this.step_two.length);
      let i = 0;
      let index = 0;

      for (i = 0; i < this.step_two.length; i++) {
        for (
          index = 0;
          index < this.step_two[i].categoryArray.length;
          index++
        ) {
          if (this.step_two[i].categoryArray[index].subCategory == null) {
            this.flag = 1;
            /*  console.log('the flag is :'+this.flag) */
            this.step_two[i].categoryArray[index].desc =
              "Select sub category or delete this category";
          } else {
            /*  console.log(this.step_two[i].categoryArray[index].subCategory) */
            this.step_two[i].categoryArray[index].desc = "";
          }
        }
      }
      if (this.flag == 1) {
        this.flag = 0;
        return false;
      } else {
        this.flag = 0;
        return true;
      }
    },
    validateStepThree() {
      window.scrollTo(0, 0);
      if (this.contact_details.length != 0) {
        for (let i = 0; i < this.contact_details.length; i++) {
          const c = this.contact_details[i];
          if (typeof c !== "undefined") {
            if (Object.values(c)[2] == false || Object.values(c)[2] == null) {
              this.stepThreeFlag = false;
            } else {
              console.log(Object.values(c)[2]);
            }
          }
        }
        if (this.stepThreeFlag == false) {
          Swal.fire({
            title: "Not Valid Entries",
            text: "Please enter a valid data or remove unwanted fields",
            icon: "warning",
            confirmButtonColor: "#202842"
          });

          this.stepThreeFlag = true;
          return false;
        } else {
          this.stepThreeFlag = true;
           this.initMap2() 
          console.log('all markers:',this.allMarkers)
          return true;
          
        }
      } else {
        Swal.fire({
          title: "Missing Data",
          text: "Please select at least one contact details!",
          icon: "warning",
          confirmButtonColor: "#202842"
        });
        return false;
      }
    },
    confirmItems() {
      window.scrollTo(0, 0);
      this.items = this.step_two;
      this.contacts = this.contact_details;
      return true;
    },
    showSubCategory(data) {
      data.subCategories = [];
      if (data.category == null) {
        data.subCategories = [];
        data.subCategory = null;
      } else {
        data.subCategory = null;
        axios
          .post("user/sub_category/get", { id: data.category.id })
          .then(resp => {
            data.subCategories = resp.data.data.category.sub_categories.map(
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
    removeItem(itemIndex) {
      if (this.step_two.length == 1) {
        Swal.fire({
          title: "Warning",
          text: "At least one item must be entered",
          icon: "warning",
          confirmButtonColor: "#202842"
        });
      } else {
        this.step_two.splice(itemIndex, 1);
      }
    },
    addItem() {
      this.step_two.push({
        images: [],
        imgLoad: false,
        selected: null,
        categoryArray: [
          {
            category: "",
            subCategory: null,
            subCategories: [],
            desc: ""
          }
        ],
        additionalArray: [
          {
            name_ar: "",
            name_lt: "",
            number: "",
            model: "",
            extra_id: ""
          }
        ]
      });
      console.log("items length", this.step_two.length);
    },
    addAnotherSubCategory(itemIndex) {
      this.step_two[itemIndex].categoryArray.push({
        category: null,
        subCategory: null,
        subCategories: [],
        desc: ""
      });
    },
    removeCategory(itemIndex, categoryIndex) {
      if (this.step_two[itemIndex].categoryArray.length == 1) {
        Swal.fire({
          title: "Warning",
          text: "You have to choose at least one category and subcategory",
          icon: "warning",
          confirmButtonColor: "#202842"
        });
      } else {
        this.step_two[itemIndex].categoryArray.splice(categoryIndex, 1);
      }
    },
    addAnotherDetails(itemIndex) {
      /*  this.step_two[itemIndex].additionalArray.push({name_ar:'',name_lt:'',number:'',model:'',extra_id:''}) */
    },
    removeExtra(itemIndex, extraIndex) {
      this.step_two[itemIndex].additionalArray.splice(extraIndex, 1);
    },
    pushContact() {
      if (this.selected === "phone") {
        this.contact_details.push({
          phone: null,
          value: "phone",
          phoneState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "email") {
        this.contact_details.push({
          email: null,
          value: "email",
          emailState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "contact person") {
        this.contact_details.push({
          contact_person: null,
          value: "contact_person",
          contact_personState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "whatsapp") {
        this.contact_details.push({
          awhatsapp: null,
          value: "whatsapp",
          awhatsappState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "organization") {
        this.contact_details.push({
          organization: null,
          value: "organization",
          organizationState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "department") {
        this.contact_details.push({
          department: null,
          value: "department",
          departmentState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "facebook") {
        this.contact_details.push({
          facebook: null,
          value: "facebook",
          facebookState: null
        });
        this.selected = null;
        console.log(this.contact_details);
      }
      if (this.selected === "address") {
        this.contact_details.push({ address: null, value: "address" });
        this.selected = null;
      }
    },
    removeContact(contactIndex) {
      this.contact_details.splice(contactIndex, 1);
    },
    /* test the regex for contact details */
    isPhoneNumber(contactIndex) {
      var arregex = /^\d+$/;
      const text = this.contact_details[contactIndex].phone.slice(-1);
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].phone == "") {
        this.contact_details[contactIndex].phoneState = null;
      }
      if (this.contact_details[contactIndex].phone == null) {
        this.contact_details[contactIndex].phoneState = null;
      } else if (n == true) {
        this.contact_details[contactIndex].phoneState = true;
        document.getElementById(`phoneErr_${contactIndex}`).innerText = "";
      } else {
        this.contact_details[contactIndex].phoneState = false;
        let len = this.contact_details[contactIndex].phone.length;
        let number = this.contact_details[contactIndex].phone.substring(
          0,
          len - 1
        );
        this.contact_details[contactIndex].phone = number;
        document.getElementById(`phoneErr_${contactIndex}`).innerText =
          "Only numbers accepted";
      }
    },
    isWhatsApp(contactIndex) {
      var arregex = /^\d+$/;
      const text = this.contact_details[contactIndex].awhatsapp.slice(-1);
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].awhatsapp == "") {
        this.contact_details[contactIndex].awhatsappState = null;
      }
      if (this.contact_details[contactIndex].awhatsapp == null) {
        this.contact_details[contactIndex].awhatsappState = null;
      } else if (n == true) {
        this.contact_details[contactIndex].awhatsappState = true;
        document.getElementById(`whatsappErr_${contactIndex}`).innerText = "";
      } else {
        this.contact_details[contactIndex].awhatsappState = false;
        let len = this.contact_details[contactIndex].awhatsapp.length;
        let number = this.contact_details[contactIndex].awhatsapp.substring(
          0,
          len - 1
        );
        this.contact_details[contactIndex].awhatsapp = number;
        document.getElementById(`whatsappErr_${contactIndex}`).innerText =
          "Only numbers accepted";
      }
    },
    isFaceBook(contactIndex) {
      var arregex = /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/gi;
      const text = this.contact_details[contactIndex].facebook;
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].facebook == "") {
        this.contact_details[contactIndex].facebookState = null;
        document.getElementById(`facebookErr_${contactIndex}`).innerText = "";
      }
      if (this.contact_details[contactIndex].facebook == null) {
        this.contact_details[contactIndex].facebookState = null;
        document.getElementById(`facebookErr_${contactIndex}`).innerText = "";
      } else if (n == true) {
        this.contact_details[contactIndex].facebookState = true;
        document.getElementById(`facebookErr_${contactIndex}`).innerText = "";
      } else {
        this.contact_details[contactIndex].facebookState = false;
        document.getElementById(`facebookErr_${contactIndex}`).innerText =
          "enter a valid facebook link";
      }
    },
    isContact_person(contactIndex) {
      var arregex = /^(?!\s*$).+/;
      const text = this.contact_details[contactIndex].contact_person;
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].contact_person == "") {
        this.contact_details[contactIndex].contact_personState = null;
        document.getElementById(`contact_personErr_${contactIndex}`).innerText =
          "";
      }
      if (this.contact_details[contactIndex].contact_person == null) {
        this.contact_details[contactIndex].contact_personState = null;
        document.getElementById(`contact_personErr_${contactIndex}`).innerText =
          "";
      } else if (n == true) {
        this.contact_details[contactIndex].contact_personState = true;
        document.getElementById(`contact_personErr_${contactIndex}`).innerText =
          "";
      } else {
        this.contact_details[contactIndex].contact_personState = false;
        document.getElementById(`contact_personErr_${contactIndex}`).innerText =
          "Please fill theis field or remove it";
      }
    },
    isDepartment(contactIndex) {
      var arregex = /^(?!\s*$).+/;
      const text = this.contact_details[contactIndex].department;
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].department == "") {
        this.contact_details[contactIndex].departmentState = null;
        document.getElementById(`departmentErr_${contactIndex}`).innerText = "";
      }
      if (this.contact_details[contactIndex].department == null) {
        this.contact_details[contactIndex].departmentState = null;
        document.getElementById(`departmentErr_${contactIndex}`).innerText = "";
      } else if (n == true) {
        this.contact_details[contactIndex].departmentState = true;
        document.getElementById(`departmentErr_${contactIndex}`).innerText = "";
      } else {
        this.contact_details[contactIndex].departmentState = false;
        document.getElementById(`departmentErr_${contactIndex}`).innerText =
          "Please fill theis field or remove it";
      }
    },
    isOrganization(contactIndex) {
      var arregex = /^(?!\s*$).+/;
      const text = this.contact_details[contactIndex].organization;
      let n = arregex.test(text);
      if (this.contact_details[contactIndex].organization == "") {
        this.contact_details[contactIndex].organizationState = null;
        document.getElementById(`organizationErr_${contactIndex}`).innerText =
          "";
      }
      if (this.contact_details[contactIndex].organization == null) {
        this.contact_details[contactIndex].organizationState = null;
        document.getElementById(`organizationErr_${contactIndex}`).innerText =
          "";
      } else if (n == true) {
        this.contact_details[contactIndex].organizationState = true;
        document.getElementById(`organizationErr_${contactIndex}`).innerText =
          "";
      } else {
        this.contact_details[contactIndex].organizationState = false;
        document.getElementById(`organizationErr_${contactIndex}`).innerText =
          "Please fill theis field or remove it";
      }
    },
    isEmail(contactIndex) {
      const text = this.contact_details[contactIndex].email;
      let n = text.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      if (text == "") {
        this.contact_details[contactIndex].emailState = null;
        document.getElementById(`mailErr_${contactIndex}`).innerText = "";
      }
      if (text == null) {
        this.contact_details[contactIndex].emailState = null;
        document.getElementById(`mailErr_${contactIndex}`).innerText = "";
      }
      if (n == 0) {
        this.contact_details[contactIndex].emailState = true;
        document.getElementById(`mailErr_${contactIndex}`).innerText = "";
      } else {
        this.contact_details[contactIndex].emailState = false;
        document.getElementById(`mailErr_${contactIndex}`).innerText =
          "Please enter a valid email";
      }
    },
    removePreview(itemIndex, imgIndex) {
      this.step_two[itemIndex].images.splice(imgIndex, 1);
    },
    showImg(imgIndex) {
       this.lightBoxIndex = imgIndex; 
      this.lightBoxVisible = true;
    },
    onCreate() {
      this.isVisible = false;
      let contact = this.contact_details.map(c => {
        return {
          address: c.address,
          contact_person: c.contact_person,
          department: c.department,
          email: c.email,
          facebook: c.facebook,
          organization: c.organization,
          phone: c.phone,
          whatsapp: c.whatsapp
        };
      });
      let items = this.step_two.map(item => {
        return {
          sub_categories: item.categoryArray.map(category => {
            return {
              sub_category_id: category.subCategory.id
            };
          }),
          additional_data: item.additionalArray,
          images: item.images.map(image => {
            return {
              image: image.alt,
              title: image.title
            };
          })
        };
      });

      let locations = this.markers.map((marker)=>{
        return{
          longitude:marker.lng,
          latitude:marker.lat,
          name:marker.name
        }
      })
      let directions ;
      if(this.allPoints.length > 0){
         directions = this.allPoints.map((point)=>{
        return{
          lng:point.lng,
          lat:point.lat
        }
      })
      }else{
        directions =  this.markers.map((marker)=>{
        return{
          lat:marker.lat,
          lng:marker.lng,
        }
      })
      }

      if (this.step_one.announcement_type == "Lost") {
        axios
          .post("user/lost/add", {
            title: this.step_one.title,
            start_date: this.step_one.start_date,
            end_data: this.step_one.end_data,
            additional_information: this.step_one.additional_information,
            items: items,
            locations: locations,
            contact_details: contact,
            // matching_location: 1,
            directions:directions,
            location_range:this.bufferRadius
          })
          .then(resp => {
            console.log(resp.data.data);
            this.isVisible = true;
            this.result = true;
            setTimeout(() => {
              this.isProcessing = false;
            }, 4000);
          })
          .catch(err => {
            this.isVisible = true;
            Swal.fire({
              title: err.response.data.message,
              text: "Please check your entry and try again",
              icon: "warning",
              confirmButtonColor: "#202842"
            });
          });
      }
      if (this.step_one.announcement_type == "Found") {
        axios
          .post("user/found/add", {
            title: this.step_one.title,
            start_date: this.step_one.start_date,
            end_data: this.step_one.end_data,
            additional_information: this.step_one.additional_information,
            items: items,
            locations: locations,
            contact_details: contact,
            matching: 1,
            directions:directions,
            location_range:this.bufferRadius
          })
          .then(resp => {
            console.log(resp.data.data);
            this.result = true;
            this.isVisible = true;
            setTimeout(() => {
              this.isProcessing = false;
            }, 4000);
          })
          .catch(err => {
            this.isVisible = true;
            Swal.fire({
              title: "Missing Data",
              text: err.response.message,
              icon: "error",
              confirmButtonColor: "#202842"
            });
          });
      }
    },
  },
};
</script>

<style >
.pac-container{
    position: absolute;
    top: 100%;
    left: 0;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
}
.pac-item {
    font-size: 12px;
    font-family: Helvetica;
    width: 100%;
    color: #00531d;
    vertical-align: middle;
    white-space: nowrap;
    background: none;
    border: 0;
  }
  
.pac-item:hover,
.pac-item:focus {
  color: #fff;
  text-decoration: none;
  background-color: #f7961c;
}

.pac-item-selected {
  text-decoration: none;
  background-color: #f0f0f0;
}
.pac-item-query{
    color:#202842;
    font-weight: 900;
    font-size: 14px;
}
#map-container {
  position: relative;
  width: 100%;
  height: 400px;
}
#map {
  width: 100%;
  height: 100%;
  z-index: 1;
}
.reset-button {
  position: absolute;
  bottom: 15px;
  left: 10px;
  z-index: 2;
}
#floating-panel {
  position: absolute;
  top: 10px;
  left: 0;
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
