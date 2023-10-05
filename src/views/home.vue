
<template>
  <div>
    <Navbar :isIcons="true"/>

    <!-- Hero Start -->
    <section class="bg-half bg-light d-table w-100">
      <div class="container">
        <div class="row align-items-center">
        
          <div class="col-md-6 col-12">
            <div class="title-heading text-center">
              <h1 class="font-weight-bold  mb-3 text-large kenzo" >
                Luqatah
              </h1>
              <h4 class="para-desc ">
                Where you can announce and search for lost and found items.
              </h4>
              <div class="mt-4 pt-2">
               
                <a href="javascript:void(0)" @click="createAnnPage" class="btn btn-soft-primary mr-2 mb-2"
                  > Create Announcement</a
                >
                <a  href="/search-announcement" class="btn btn-soft-success mr-2 mb-2"
                  >Search Announcement</a
                >
                <!-- <p>{{ahmed}}</p> -->
              </div>
              <b-row class="mt-3">
                  <b-col class="my-1" cols="12" lg="7" sm="12">
                    <b-form-input v-model="searchTerm" placeholder="Quick Search..." size="lg"></b-form-input>
                  </b-col>
                  <b-col class="my-1" cols="12" lg="5" sm="12">
                    <div class="d-flex w-100">
                      <b-form-select size="lg" class="text-small" v-model="ann_type">
                        <b-form-select-option
                          disabled
                          :value="null"
                          class="text-primary"
                        >Type</b-form-select-option>
                        <b-form-select-option value="lost">Lost</b-form-select-option>
                        <b-form-select-option value="found">Found</b-form-select-option>
                      </b-form-select>
                      <b-button size="sm" class="mx-2" @click="search()"
                        :disabled="!ann_type || !searchTerm"
                      >
                        <SearchIcon />
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
            </div>
          </div>
          <!--end col-->
          <div class="col-md-6  pt-2 mt-sm-0 pt-sm-0">
            <img
              src="images/digital/hand1.png"
              class="img-fluid d-block mx-auto"
              alt=""
            />
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <!-- Partners start -->
   
    <!--end section-->
    <!-- Partners End -->

   <!--  <div class="position-relative">
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
    </div> -->
    <!-- Hero End -->

    <!-- Start -->
   
    <!--end section-->
    <!-- End -->
    <!-- Section End -->
    <Footer />
    <!-- Footer End -->
    <!-- <Switcher /> -->
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
const flag = 1
import { ArrowUpIcon,ArrowRightIcon ,SearchIcon, } from "vue-feather-icons";
import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";
import { mapGetters,  mapActions } from "vuex";
/**
 * Index-developer component
 */
export default {
  data() {
    return {
      lost:'Lost',
      found:'Found',
      keyWord:'Lost',
      searchTerm: '',
      ann_type: null,
      search_value: "",
    }
  },
  created(){
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon,
    SearchIcon,
  },
  methods:{
    createAnnPage(){
      if(this.currentUser == null){
        localStorage.setItem('flag', flag)
         this.$router.push('/login') 
     }else{
      this.$router.push('/new-announcement')
     } 
     
    },
    search() {
      // Navigate to the other page and pass the search term as a parameter
      this.$router.push({
        path: '/search-announcement',
        query: { search_value: this.searchTerm , ann_type:this.ann_type  },
      });
    },
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    })
  },
  /* mounted() {

    window.addEventListener('beforeunload', function (e) {
 
  e.preventDefault(); 
  e.returnValue = 'true';
});
  },
  beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
} */
};
</script>
<style>
 .kenzo{
  font-size: 150px;
 }
</style>