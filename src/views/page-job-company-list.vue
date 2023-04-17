<template>
  <div>
      <Navbar />
      <!-- Hero Start -->
      <div class="bg-half bg-light d-table w-100">
          <div class="container">
              <div class="row justify-content-center">
                 <b-container>
                  <b-row class="mt-3">
                      <b-col  sm="12" class="text-left mt-2">
                          <div class="text-center py-3">
                                    
                                    <a href="/new-announcement"  class="btn btn-soft-primary mr-2 mb-4"
                                  > Create Announcement</a
                              > 
                              <a href="javascript:void(0)" class="btn btn-soft-success mr-2 mb-4"
                                  >Search Announcement</a
                              >
                              <hr>
                          </div>
                          
                      </b-col>
                  </b-row>
                 </b-container>  
                  <!--end col-->
              </div>
              <!--end row-->
          </div>
          <!--end container-->
          <div class="text-center mt-3 mb-0">
              <h4><b><u>My Announcements</u></b></h4>
          </div>
      </div>
      <!--end section-->
      
      <!-- Start -->
     <div class="container">
      <b-row>
          <b-col class="text-center">
              <b-tabs fill card >
                  <b-tab title="Lost">
                      <div >
                          <div  v-if="loading" class="">
                              <div v-if="myLost.length > 0" class="row">
                                  <div class="col-12">
                                      <div class="table-responsive bg-white shadow mb-5">
                                          <table class="table table-center b-table-no-border-collapse table-bordered table-padding mb-0">
                                              <thead>
                                                  <tr>
                                                      <th class="py-3 " style="min-width: 160px;">Announcement No</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Announcement Title</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Creation Date</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Last modification date</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Matching findings</th>
                                                      <th class="py-3" style="min-width: 100px;">Mark As Seen</th>
                                                      <th class="py-3" style="min-width: 20px;"></th>
                                                  </tr>
                                              </thead>
                  
                                              <tbody>
                                                  <tr v-for="(item, index) of myLost" :key="index" @click="lostDetailsPage(item)">
                                                      
                                                      <td class="text-center">
                                                          <h6 >{{item.id}}</h6>
                                                      </td>
                                                      <td class="text-center">{{item.title}}</td>
                                                      <td class="text-center">
                                                          {{ item.start_date }}
                                                      </td>
                                                      <td class="text-center">
                                                          {{ item.end_data }}
                                                      </td>
                                                      <td class="text-center">
                                                          <b-button size="sm">View Matches</b-button>
                                                      </td>
                                                      <td class="h6" >
                                                          <div v-if="item.seen">
                                                                  <b style="font-size: 15px;" class=" text-primary mdi mdi-eye-outline"> seen</b>
                                                          </div>
                                                          <div v-else>
                                                              <b-form-checkbox @input="seenLostPost(item)" size="sm" v-model="item.seen">
                                                                  <b   style="font-size: 15px;" class=" mdi mdi-eye-off-outline"></b>
                                                              </b-form-checkbox>
                                                          </div>
                                                      </td>
                                                      <td class="text-center">
                                                          <b-dropdown size="lg"    variant="link" toggle-class="text-decoration-none" no-caret>
                                                              <template #button-content>
                                                                  <b class="mdi mdi-dots-vertical"></b>
                                                              </template>
                                                              <b-dropdown-item @click="lostDetailsPage(item)" href="#"><b class="mdi mdi-eye-circle"></b> <b> View Details</b></b-dropdown-item>
                                                              <b-dropdown-item v-if="item.bookmark" href="#" @click="lostRemoveBookmark(item),item.bookmark=!item.bookmark"><b class="text-primary mdi mdi-bookmark"></b> <b>Remove from bookmark</b></b-dropdown-item>
                                                              <b-dropdown-item v-else href="#" @click="lostAddBookmark(item),item.bookmark=!item.bookmark"><b class="mdi mdi-bookmark-outline"></b> <b> Add to bookmark</b></b-dropdown-item>
                                                              <b-dropdown-item @click="activatePost(item)" v-if="item.user_status" href="#"><b class="text-danger mdi mdi-card-off"></b> <b> Activate</b></b-dropdown-item>
                                                              <b-dropdown-item @click="deActivatePost(item)" v-else href="#"><b class="mdi mdi-card-off-outline"></b> <b> Deactivate</b></b-dropdown-item>
                                                              <b-dropdown-item href="#"><b class="mdi mdi-delete"></b> <b> Delete</b></b-dropdown-item>
                                                          </b-dropdown>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  <div class="text-center">
                                          <b-pagination-nav  v-if="lostPagination" class="justify-content-center pagination" :number-of-pages="lostLastpage" :link-gen="lostLinkGen" :value="lostCurrentPage" :per-page="50" align="center"  @change="(a)=>lostChangePage(a)">
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
                                  </div>
                                  <!--end col-->
                              </div>
                              <!--end row-->
                              <div v-else class="mb-4" style="width: 100%;">
                                  <div>
                                      <b-jumbotron header="Empty!" lead="You Don't have any lost announcements">
                                        <p>To create new announcement click below</p>
                                        <b-button variant="primary" href="/new-announcement">New Announcement</b-button>
                                      </b-jumbotron>
                                    </div>
                              </div>
                              <!--end row-->
                          </div>
                          <div style="height:70vh" v-else class="row">
                              <div class="col-12">
                                  <div  style=" position: absolute; top:50% ; right:50%">
                                      <b-spinner variant="primary"></b-spinner>
                                  </div>
                              </div>
                          </div>
                          <!--end container-->
                      </div>
                  </b-tab>
                  <b-tab title="Found">
                      <div >
                          <div  v-if="loading" class="">
                              <div v-if="myFound.length > 0" class="row">
                                  <div class="col-12">
                                      <div class="table-responsive bg-white shadow mb-5">
                                          <table class="table table-center b-table-no-border-collapse table-bordered table-padding mb-0">
                                              <thead>
                                                  <tr>
                                                      <th class="py-3" style="min-width: 20px;"></th>
                                                      <th class="py-3" style="min-width: 160px;">Announcement No</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Announcement Title</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Creation Date</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Last modification date</th>
                                                      <th class="text-center py-3" style="min-width: 160px;">Matching findings</th>
                                                      <th class="py-3" style="min-width: 100px;">Mark As Seen</th>
                                                  </tr>
                                              </thead>
                  
                                              <tbody>
                                                  <tr v-for="(item, index) of myFound" :key="index" >
                                                      <td class="text-center">
                                                          <b-dropdown size="lg"    variant="link" toggle-class="text-decoration-none" no-caret>
                                                              <template #button-content>
                                                                  <b class="mdi mdi-dots-vertical"></b>
                                                              </template>
                                                              <b-dropdown-item href="#"><b class="mdi mdi-eye-circle"></b> <b> View Details</b></b-dropdown-item>
                                                              <b-dropdown-item v-if="item.bookmark" href="#" @click="foundRemoveBookmark(item),item.bookmark=!item.bookmark"><b class="text-primary mdi mdi-bookmark"></b> <b>Remove from bookmark</b></b-dropdown-item>
                                                              <b-dropdown-item v-else href="#" @click="foundAddBookmark(item),item.bookmark=!item.bookmark"><b class="mdi mdi-bookmark-outline"></b> <b> Add to bookmark</b></b-dropdown-item>
                                                              <b-dropdown-item @click="activatePostFound(item)" v-if="item.user_status" href="#"><b class="text-danger mdi mdi-card-off"></b> <b> Activate</b></b-dropdown-item>
                                                              <b-dropdown-item @click="deActivatePostFound(item)" v-else href="#"><b class="mdi mdi-card-off-outline"></b> <b> Deactivate</b></b-dropdown-item>
                                                              <b-dropdown-item href="#"><b class="mdi mdi-delete"></b> <b> Delete</b></b-dropdown-item>
                                                          </b-dropdown>
                                                      </td>
                                                      <td class="text-center">
                                                          <h6 >{{item.id}}</h6>
                                                      </td>
                                                      <td class="text-center">{{item.title}}</td>
                                                      <td class="text-center">
                                                          {{ item.start_date }}
                                                      </td>
                                                      <td class="text-center">
                                                          {{ item.end_data }}
                                                      </td>
                                                      <td class="text-center">
                                                          <b-button size="sm">View Matches</b-button>
                                                      </td>
                                                      <td class="h6" >
                                                          <div v-if="item.seen">
                                                                  <b style="font-size: 15px;" class=" text-primary mdi mdi-eye-outline"> seen</b>
                                                          </div>
                                                          <div v-else>
                                                              <b-form-checkbox @input="seenFoundPost(item)" size="sm" v-model="item.seen">
                                                                  <b   style="font-size: 15px;" class=" mdi mdi-eye-off-outline"></b>
                                                              </b-form-checkbox>
                                                          </div>
                                                      </td>
                                                  
                                                  
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  <div class="text-center">
                                          <b-pagination-nav  v-if="foundPagination" class="justify-content-center pagination" :number-of-pages="foundLastpage" :link-gen="foundLinkGen" :value="foundCurrentPage" :per-page="50" align="center"  @change="(a)=>foundChangePage(a)">
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
                                  </div>
                                  <!--end col-->
                              </div>
                              <!--end row-->
                              <div v-else class="mb-4" style="width: 100%;">
                                  <div>
                                      <b-jumbotron header="Empty!" lead="You Don't have any Found announcements">
                                        <p>To create new announcement click below</p>
                                        <b-button variant="primary" href="/new-announcement">New Announcement</b-button>
                                      </b-jumbotron>
                                    </div>
                              </div>
                              <!--end row-->
                          </div>
                          <div style="height:70vh" v-else class="row">
                              <div class="col-12">
                                  <div  style=" position: absolute; top:50% ; right:50%">
                                      <b-spinner variant="primary"></b-spinner>
                                  </div>
                              </div>
                          </div>
                          <!--end container-->
                      </div>
                  </b-tab>
                 
    
    
              </b-tabs>
          </b-col>
      </b-row>
     </div>
      <!--end section-->
      <!-- End -->
      <!--end section-->
      <div class="col-lg-6 col-md-6 my-1 ">
        <b-form-select @input="sortMyLost" v-model="selected" :options="options"></b-form-select>
      </div>
      <div :style="{width:'300px' , height:'300px', background:'url(' + immg + ') no-repeat' , 'background-size': 'contain'}"></div>
      <Footer />
      <!-- Footer End -->
     
      <!-- Back to top -->
      <a href="javascript: void(0);" class="btn btn-icon btn-primary back-to-top" id="back-to-top" v-scroll-to="'#topnav'">
          <arrow-up-icon class="icons"></arrow-up-icon>
      </a>
      <!-- Back to top -->
  </div>
</template>
<script>
import {
  ArrowUpIcon
} from 'vue-feather-icons';
import {
  Carousel,
  Slide
} from 'vue-carousel';
import axios from "../axios.config";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import { mapGetters,  mapActions } from "vuex";
import Swal from "sweetalert2";
/**
* Shop-cart component
*/
export default {
  data() {
      return {
          counter: 0,
          loading:false,
          lostCurrentPage: 1,
          lostLastpage:1,
          foundCurrentPage: 1,
          foundLastpage:1,
          lostPagination:false,
          foundPagination:false,
          checked:false,
          myLost:[],
          myFound:[]
      }
  },
  components: {
      Navbar,
      Switcher,
      Footer,
      Carousel,
      Slide,
      ArrowUpIcon
  },
  mounted() {
      this.getLost()
      this.getFound()
  },
  methods: {
      getLost(){
          this.loading=false
          axios.get('user/my_lost?page='+this.lostCurrentPage)
          .then((resp)=>{
              this.lostLastpage = resp.data.data.last_page
              if(this.lostLastpage > 1){
                  this.lostPagination = true
              }
              this.myLost = resp.data.data.lost.map((lost)=>{
                  return{
                      id : lost.id,
                      title:lost.title,
                      start_date:lost.start_date,
                      end_data:lost.end_data,
                      seen:lost.seen,
                      bookmark:lost.bookmark,
                      user_status:lost.user_status
                  }
              })
              this.loading = true
          }).catch((err)=>{
              console.log(err)
          })
      },
      getFound(){
          this.loading=false
          axios.get('user/my_found?page='+this.foundCurrentPage)
          .then((resp)=>{
              this.foundLastpage = resp.data.data.last_page
              if(this.foundLastpage > 1){
                  this.foundPagination = true
              }
              this.myFound = resp.data.data.founds.map((found)=>{
                  return{
                      id : found.id,
                      title:found.title,
                      start_date:found.start_date,
                      end_data:found.end_data,
                      seen:found.seen,
                      bookmark:found.bookmark,
                      user_status:found.user_status
                  }
              })
              this.loading = true
          }).catch((err)=>{
              console.log(err)
          })
      },
      lostLinkGen(pageNum) {
          return ;
          
      },
      lostChangePage(pageNum) {
          this.lostCurrentPage = pageNum;
          this.getLost()
      },
      foundLinkGen(pageNum) {
          return;
          
      },
      foundChangePage(pageNum) {
          this.foundCurrentPage = pageNum;
          this.getFound()
      },
      seenLostPost(item){
          axios.post('user/lost/seen',{lost_id : item.id})
          .then(()=>{
              Swal.fire({
                  title: "",
                  text: "Your post marked as seen",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
          }).catch(()=>{
              Swal.fire({
                  title: "",
                  text: "Something went wrong, please try again",
                  icon: "error",
                  confirmButtonColor: "red"
              });
          })
        
      },
      seenFoundPost(item){
          axios.post('user/found/seen',{found_id : item.id})
          .then(()=>{
              Swal.fire({
                  title: "",
                  text: "Your post marked as seen",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
          }).catch(()=>{
              Swal.fire({
                  title: "",
                  text: "Something went wrong, please try again",
                  icon: "error",
                  confirmButtonColor: "red"
              });
          })
        
      },
      lostAddBookmark(item){
          axios.post('user/lost/bookmark',{lost_id:item.id})
          .then((resp)=>{
              if(resp.data.message == "Lost Bookmark added successfully"){
                  Swal.fire({
                  title: "",
                  text: "You post has been added to bookmarks",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              } 
          }) 
      },
      foundAddBookmark(item){
          axios.post('user/found/bookmark',{found_id:item.id})
          .then((resp)=>{
              if(resp.data.message == "Found Bookmark added successfully"){
                  Swal.fire({
                  title: "",
                  text: "You post has been added to bookmarks",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              } 
          }) 
      },
      lostRemoveBookmark(item){
          axios.post('user/lost/bookmark',{lost_id:item.id})
          .then((resp)=>{
              if(resp.data.message == "Lost Bookmark deleted successfully"){
                  Swal.fire({
                  title: "",
                  text: "You post has been removed from bookmarks",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              } 
          }) 
      },
      foundRemoveBookmark(item){
          axios.post('user/found/bookmark',{found_id:item.id})
          .then((resp)=>{
              if(resp.data.message == "Found Bookmark deleted successfully"){
                  Swal.fire({
                  title: "",
                  text: "You post has been removed from bookmarks",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              } 
          }) 
      },
      activatePost(item){
          axios.post('user/lost/activate',{id:item.id})
          .then((resp)=>{
              item.user_status = resp.data.data.lost.user_status
              if(item.user_status == ''){
                  Swal.fire({
                  title: "",
                  text: "You post has been activated successfully",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              }
          })
      },
      activatePostFound(item){
          axios.post('user/found/activate',{id:item.id})
          .then((resp)=>{
              item.user_status = resp.data.data.found.user_status
              if(item.user_status == ''){
                  Swal.fire({
                  title: "",
                  text: "You post has been activated successfully",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              }
          })
      },
      deActivatePost(item){
          axios.post('user/lost/activate',{id:item.id})
          .then((resp)=>{
              item.user_status = resp.data.data.lost.user_status
              if(item.user_status != ''){
                  Swal.fire({
                  title: "",
                  text: "You post has been Deactivated",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              }
          })
      },
      deActivatePostFound(item){
          axios.post('user/found/activate',{id:item.id})
          .then((resp)=>{
              item.user_status = resp.data.data.found.user_status
              if(item.user_status != ''){
                  Swal.fire({
                  title: "",
                  text: "You post has been Deactivated",
                  icon: "success",
                  confirmButtonColor: "#202842"
              });
              }
          })
      },
      lostDetailsPage(item){
          localStorage.setItem("lost_id", item.id) 
          setTimeout(()=>{
              this.$router.push('/my-lost-details')
          },1000)
         
      }
  },
  computed: {
  ...mapGetters({
    currentUser: "currentUser",
  })
},
}
</script>




