<template>
  <div>
    <!-- Navbar STart -->
    <header
      id="topnav"
      class="defaultscroll sticky"
      :class="{ 'bg-white': isWhiteNavbar === true }"
    >
      <div class="container">
        <!-- Logo container-->
        <div>
          <router-link class="logo" to="/" v-if="navLight !== true">
            <img src="images/logo1.png" height="60" alt="" />
          </router-link>
          <router-link class="logo" to="/" v-else>
            <!-- <img src="images/logo-dark.png" class="l-dark" height="24" alt="" /> -->
            <img
              src="images/logo.png"
              class="l-light"
              height="24"
              alt=""
            />
          </router-link>
        </div>
        <div v-if="currentUser" class="buy-button " >
          <b-dropdown size="sm" variant="link">
            <template #button-content>
              <b style="font-size: 13px;" class="text-primary p-2">{{currentUser.full_name}}</b><b-avatar  variant="primary" size="md" rounded></b-avatar>
            </template>
            <b-dropdown-item >
              <b-button size="sm" @click="signOut" variant="outline-primary">Sign Out </b-button>
            </b-dropdown-item>
            
          </b-dropdown>
        
        </div>
        <div v-if="currentUser == null" class="buy-button" >
          <a
            :href="login"
            
            class="btn"
            :class="{
              'btn-light': navLight === true,
              'btn-primary': navLight !== true,
            }"
            >Login/SignUp</a
          >
        </div>
        <ul class="buy-button list-inline mb-0" >
          <!-- <li class="list-inline-item mb-0 developer-icon">
            <b-dropdown
              right
              variant="link"
              toggle-class="text-decoration-none p-0 pr-2"
              menu-class="dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
            >
              <template #button-content>
                <i class="mdi mdi-magnify h4 text-muted"></i>
              </template>
              <div style="width: 300px">
                <form>
                  <input
                    type="text"
                    id="text"
                    name="name"
                    class="form-control border bg-white"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </b-dropdown>
          </li> -->
          <li class="list-inline-item mb-0">
            <b-dropdown
            right
            variant="link"
            toggle-class="text-decoration-none p-0 "
          >
            <template #button-content>
              <b style="font-size: 13px;" class="text-primary p-2">English</b>
              <a
              href="javascript:void(0)"
              class="btn btn-icon btn-soft-primary"
              data-toggle="modal"
              data-target="#productview"
              ><i class="mdi mdi-web mdi-18px icons"></i
            ></a>
            </template>
            <b-dropdown-item @click="setLtr">English</b-dropdown-item>
            <b-dropdown-item @click="setRtl">العربية</b-dropdown-item>
          </b-dropdown>
          </li>
          <!-- <li class="list-inline-item mb-0">
            <a
              href="javascript:void(0)"
              class="btn btn-icon btn-soft-primary"
              data-toggle="modal"
              data-target="#productview"
              ><i class="mdi mdi-account-outline mdi-18px icons"></i
            ></a>
          </li> -->
        </ul>
        <!--end login button-->
        <!--end login button-->
        <!-- End Logo container-->
        <div class="menu-extras">
          <div class="menu-item">
            <!-- Mobile menu toggle-->
            <a
              class="navbar-toggle"
              @click="toggleMenu()"
              :class="{ open: isCondensed === true }"
            >
              <div class="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            <!-- End mobile menu toggle-->
          </div>
        </div>

        <div id="navigation">
          <!-- Navigation Menu-->
          <div class="buy-menu-btn d-lg-none m-2">
            <div v-if="currentUser == null">
              <router-link :to="login"
              class="btn"
              :class="{
                'btn-light': navLight === true,
                'btn-primary': navLight !== true,
              }"
              >Login/SignUp</router-link 
            >
           </div>
           <div v-if="currentUser">
              <b-button class="text-decoration-none p-0 pr-2 mb-2" variant="link">
               <b-avatar  variant="primary" size="md" rounded></b-avatar>
               <b style="font-size: 13px;" class="text-primary p-2">{{currentUser.full_name}}</b>
              </b-button>
              <b-button  @click="signOut" class="float-right" variant="outline-primary">
                <b style="font-size: 13px;" class=" p-2">Sign Out</b>
               </b-button>
           </div>
          </div>
          <ul
            class="navigation-menu"
            :class="{ 'nav-light': navLight === true }"
          >
            <li>
              <router-link to="/" class="side-nav-link-ref"><p class="text-small" style="font-size: 12px;">Home</p> </router-link>
            </li>
            <li v-if="currentUser">
              <router-link to="/my-Announcements" class="side-nav-link-ref"><p class="text-small" style="font-size: 12px;">My Announcement</p> </router-link>
            </li>
            <li v-if="currentUser">
              <router-link to="/" class="side-nav-link-ref"><p class="text-small" style="font-size: 12px;">Bookmarks</p> </router-link>
            </li>
            <li>
              <router-link to="/" class="side-nav-link-ref"><p class="text-small" style="font-size: 12px;">Help</p> </router-link>
            </li>
            
          </ul>
          <!--end navigation menu-->
          <div class="buy-menu-btn d-lg-none">
            <b-dropdown
            right
           
            variant="link"
            toggle-class="text-decoration-none p-0 pr-2 mb-2"
          >
            <template #button-content>
              <a
              href="javascript:void(0)"
              class="btn btn-icon btn-link"
              data-toggle="modal"
              dropright 
              data-target="#productview"
              ><i class="mdi mdi-web mdi-18px icons text-primary"></i
            ></a><b class="text-primary ml-1">Language</b>
            </template>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>العربية</b-dropdown-item>
          </b-dropdown><br>
          
           
         
          </div>
          <!--end login button-->
        </div>
        <!--end navigation-->
      </div>
      <!--end container-->
    </header>
    <!--end header-->
    <!-- Navbar End -->
  </div>
</template>

<script>
/**
 * Navbar component
 */
 import { mapGetters,  mapActions } from "vuex";
export default {
  data() {
    return {
      isCondensed: false,
      login:'/login'
    };
  },
  props: {
    isWhiteNavbar: {
      type: Boolean,
    },
    navLight: {
      type: Boolean,
    },
    isIcons: {
      type: Boolean,
    },
  },

  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };
   /*  console.log(this.currentUser) */

    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("topnav").classList.add("nav-sticky");
      } else {
        document.getElementById("topnav").classList.remove("nav-sticky");
      }

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }

    var links = document.getElementsByClassName("side-nav-link-ref");
    var matchingMenuItem = null;
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i];
        break;
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      var parent = matchingMenuItem.parentElement;

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
            }
          }
        }
      }
    }
  },
  methods: {
    setRtl() {
      /* document.getElementById("theme-opt").setAttribute("href", "./css/style-rtl.css"); */
    },
    setLtr() {
    /*   document.getElementById("theme-opt").setAttribute("href", "./css/style.css"); */
    },
    /**
     * Toggle menu
     */
    toggleMenu() {
      this.isCondensed = !this.isCondensed;
      if (this.isCondensed) {
        document.getElementById("navigation").style.display = "block";
      } else document.getElementById("navigation").style.display = "none";
    },

    /**
     * Menu clicked show the submenu
     */
    onMenuClick(event) {
      event.preventDefault();
      const nextEl = event.target.nextSibling.nextSibling;

      if (nextEl && !nextEl.classList.contains("open")) {
        const parentEl = event.target.parentNode;
        if (parentEl) {
          parentEl.classList.remove("open");
        }
        nextEl.classList.add("open");
      } else if (nextEl) {
        nextEl.classList.remove("open");
      }
      return false;
    },
    ...mapActions(["signOut"]),
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
    })
  },
};
</script>

