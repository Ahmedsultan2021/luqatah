
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
                <a href="javascript:void(0)" class="btn btn-soft-success mr-2 mb-2"
                  >Search Announcement</a
                >
                <!-- <p>{{ahmed}}</p> -->
              </div>
              <b-input-group class="mt-3">
                <template #append>
                  <b-button style="height:50px"  variant="outline-secondary"><b style="font-size: 25px;" class="mdi mdi-map-search-outline"></b></b-button>
                </template>
                <b-form-input style="height:50px" placeholder="Quick Search" ></b-form-input>
            
                <template #prepend>
                  <b-dropdown right  style="height:50px" :text="keyWord" variant="secondary">
                    <b-dropdown-item>{{lost}}</b-dropdown-item>
                    <b-dropdown-item>{{found}}</b-dropdown-item>
                  </b-dropdown>
                </template>
              </b-input-group>
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
import { ArrowUpIcon,ArrowRightIcon } from "vue-feather-icons";
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
      ahmed: ''
    }
  },
  created(){
    this.ahmed = this.$route.query.id
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    ArrowRightIcon
  },
  methods:{
    createAnnPage(){
      if(this.currentUser == null){
        localStorage.setItem('flag', flag)
         this.$router.push('/login') 
     }else{
      this.$router.push('/new-announcement')
     } 
     
    }
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