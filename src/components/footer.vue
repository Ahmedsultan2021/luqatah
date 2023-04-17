<script>
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
} from "vue-feather-icons";
import { mapGetters,  mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    LinkedinIcon,
    MailIcon,
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    })
  },
  methods: {
    ...mapActions(["signOut"]),
    login(){
      this.$router.push('/login')
    }
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
            <router-link to="/" class="logo-footer">
             <!--  <img src="images/FinalLogo.png" style="max-height: 150px;" alt="" /> -->
             <h1 class="text-white">LUQATAH</h1>
            </router-link>
            <p class="mt-4">
              Where you can announce and search for lost and found items.
            </p>
            <ul class="list-unstyled social-icon social mb-0 mt-4">
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="rounded">
                  <facebook-icon class="fea icon-sm fea-social"></facebook-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <instagram-icon
                    class="fea icon-sm fea-social"
                  ></instagram-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <twitter-icon class="fea icon-sm fea-social"></twitter-icon>
                </a>
              </li>
              <li class="list-inline-item ml-1">
                <a href="javascript:void(0)" class="rounded">
                  <linkedin-icon class="fea icon-sm fea-social"></linkedin-icon>
                </a>
              </li>
            </ul>
            <!--end icon-->
          </div>
          <!--end col-->

          <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Announcements</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li v-if="currentUser">
                <router-link to="/new-announcement" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>Create Announcement
                  </router-link
                >
              </li>
              <li >
                <router-link to="" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>Search Announcement </router-link
                >
              </li>
              <li v-if="currentUser">
                <router-link to="" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>My Announcements</router-link
                >
              </li>
              <li v-if="currentUser">
                <router-link to="/documentation" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>Bookmarks
                </router-link
                >
              </li>
              
            </ul>
          </div>
          <!--end col-->

          <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">More</h5>
            <ul class="list-unstyled footer-list mt-4">
              <li>
                <!-- /page-privacy -->
                <router-link to="" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i> Privacy
                  Policy</router-link
                >
              </li>
              <li>
                <router-link to="" class="text-foot"
                  ><i class="mdi mdi-chevron-right mr-1"></i>
                  Help</router-link
                >
              </li>
             
            </ul>
          </div>
          <!--end col-->

          <div v-if="currentUser == null" class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Account</h5>
            <p class="mt-4"><router-link to="" class="text-primary">Sign Up</router-link> and announce for lost or found items</p>
            <form >
              <div class="row">
                <div class="col-lg-12">
                  <div class="foot-subscribe form-group">
                   <p><b>If you have an account</b></p>
                    
                  </div>
                </div>
                <div class="col-lg-12">
                  <input
                    id="submitsubscribe"
                    @click="login"
                    name="send"
                    class="btn btn-soft-primary btn-block"
                    value="Login"
                  />
                </div>
              </div>
            </form>
          </div>
          <div v-if="currentUser" class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <h5 class="text-light footer-head">Account</h5>
            
            <form>
              <div class="row">
                <div class="col-lg-12 mb-3">
                  <b-avatar class="mb-2" variant="primary" size="md" rounded></b-avatar>
                  <b style="font-size: 16px;" class="text-primary p-2">{{currentUser.full_name}}</b>
                </div>
                <div class="col-lg-12">
                  <input
                   @click="signOut"
                    name="send"
                    class="btn btn-soft-primary btn-block"
                    value="Sign Out"
                  />
                </div>
              </div>
            </form>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
    <footer class="footer footer-bar">
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col-sm-6">
            <div class="text-sm-left">
              <!-- © 2022 Luqatah. All rights reserved. -->
              <p class="mb-0">
                © {{ new Date().getFullYear() }} Luqatah. Design with
                <i class="mdi mdi-heart text-danger"></i> by
                <a
                  href="http://www.themesbrand.com/"
                  target="_blank"
                  class="text-reset"
                  >RMZtech</a
                >.
              </p>
            </div>
          </div>
          <!--end col-->

          <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </footer>
    <!--end footer-->
  </div>
</template>
