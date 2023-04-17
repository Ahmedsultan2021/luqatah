<script>
import Switcher from "@/components/switcher";
import { HomeIcon } from "vue-feather-icons";

/**
 * Page-maintenance component
 */
export default {
  data() {
    return {
      hour: null,
      minute: null,
      second: null,
      curday: null,
      secTime: null,
      ticker: null,
    };
  },
  components: {
    Switcher,
    HomeIcon,
  },
  mounted() {
    this.todo();
    // Set the date we're counting down to
  },
  methods: {
    todo: function () {
      var v = this;
      setInterval(function () {
        var countDownDate = 2910436542504;
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        v.hour = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        v.minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        v.second = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },

    getSeconds() {
      var nowDate = new Date();
      var dy = 6; //Sunday through Saturday, 0 to 6
      var countertime = new Date(
        nowDate.getFullYear(),
        nowDate.getMonth(),
        nowDate.getDate(),
        20,
        0,
        0
      ); //20 out of 24 hours = 8pm

      this.curtime = nowDate.getTime(); //current time
      var atime = countertime.getTime(); //countdown time
      var diff = parseInt((atime - curtime) / 1000);
      if (diff > 0) {
        this.curday = dy - nowDate.getDay();
      } else {
        this.curday = dy - nowDate.getDay() - 1;
      } //after countdown time
      if (this.curday < 0) {
        this.curday += 7;
      } //already after countdown time, switch to next week
      if (diff <= 0) {
        diff += 86400 * 7;
      }
      this.startTimer(diff);
    },

    startTimer(secs) {
      this.secTime = parseInt(secs);
      this.ticker = 
      setInterval(() => {
        this.tick()
      }, 1000);
      this.tick(); //initial count display
    },

    tick() {
      var secs = secTime;
      if (secs > 0) {
        secTime--;
      } else {
        clearInterval(ticker);
        this.getSeconds(); //start over
      }

      
 var days = Math.floor(secs/86400);
 secs %= 86400;
 var hours= Math.floor(secs/3600);
 secs %= 3600;
 var mins = Math.floor(secs/60);
 secs %= 60;
 
 //update the time display
 document.getElementById("days").innerHTML = curday;
 document.getElementById("hours").innerHTML = ((hours < 10 ) ? "0" : "" ) + hours;
 document.getElementById("minutes").innerHTML = ( (mins < 10) ? "0" : "" ) + mins;
 document.getElementById("seconds").innerHTML = ( (secs < 10) ? "0" : "" ) + secs;
    },


  },
};
</script>

<template>
  <div>
    <div class="back-to-home rounded d-none d-sm-block">
      <router-link to="/" class="btn btn-icon btn-soft-primary">
        <home-icon class="icons"></home-icon>
      </router-link>
    </div>

    <!-- MAINTENANCE PAGE -->
    <section
      class="bg-home d-flex align-items-center"
      data-jarallax='{"speed": 0.5}'
      style="background-image: url('images/maintenance.jpg')"
    >
      <div class="bg-overlay"></div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-12 text-center">
            <a href="javascript:void(0)" class="logo h5"
              ><img src="images/logo-light.png" height="24" alt=""
            /></a>
            <div
              class="text-uppercase text-white title-dark mt-2 mb-4 maintenance"
            >
              System Is Under Maintenance
            </div>
            <p class="text-white-50 para-desc mx-auto para-dark">
              Perfect and awesome template to present your future product or
              service. Hooking audience attention is all in the opener.
            </p>
            <p id="days"> </p>
            <p id="hours"> </p>
            <p id="minutes"> </p>
            <p id="seconds"> </p>

          </div>
        </div>

        <div class="row">
          <div class="col-md-12 text-center">
            <div class="text-center">
              <div id="clock" class="mb-4 overflow-hidden text-center">
                <p class="mb-0 ml-3 mr-3 d-inline-block">
                  <span id="hours" class="d-block position-relative">{{
                    hour
                  }}</span>
                  <span class="indicator position-relative d-block">Hours</span>
                </p>
                <p class="mb-0 ml-3 mr-3 d-inline-block">
                  <span id="minutes" class="d-block position-relative">{{
                    minute
                  }}</span>
                  <span class="indicator position-relative d-block"
                    >Minutes</span
                  >
                </p>
                <p class="mb-0 ml-3 mr-3 d-inline-block">
                  <span id="seconds" class="d-block position-relative">{{
                    second
                  }}</span>
                  <span class="indicator position-relative d-block"
                    >Seconds</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <router-link to="/" class="btn btn-primary mt-4"
              ><i class="mdi mdi-backup-restore"></i> Go Back Home</router-link
            >
          </div>
        </div>
      </div>
      <!-- end container -->
    </section>
    <!--end section-->
    <!-- MAINTENANCE PAGE -->
    <Switcher />
  </div>
</template>
