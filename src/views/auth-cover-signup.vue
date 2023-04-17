<template>
  <div>
      <div class="back-to-home rounded d-none d-sm-block">
          <router-link to="/" class="btn btn-icon btn-primary">
              <HomeIcon ></HomeIcon>
          </router-link>
      </div>
  
      <!-- Hero Start -->
      <section class="cover-user bg-white">
          <div class="container-fluid px-0">
              <div class="row no-gutters position-relative">
                  <div class="col-lg-7  cover-my-30 order-2">
                      <div class="cover-user-img d-flex align-items-center">
                          <div class="row">
                              <div class="col-12">
                                  <div class="card login-page border-0" style="z-index: 1">
                                      <div class="card-body p-0">
                                          <div class="text-center">
                                              <router-link to="/">
                                                  <img src="images/logo1.png" height="100" alt="">
                                              </router-link>
                                          </div>
                                         
                                          <b-form @submit.prevent="submitSignUp" class="login-form mt-5 px-3">
                                              <h4 class="card-title text-center">Create new account</h4>
                                              <div class="row">
                                                <div class="col-12 text-center mb-2">
                                                  <p class="mb-0 mt-3"><small class="text-muted mr-2"><b>Already have an account?</b></small>
                                                      <router-link to="/login" class="text-primary font-weight-bold">Login</router-link>
                                                  </p>
                                              </div>
                                              <!--end col-->
                                                  <div class="col-lg-12">
                                                    <div class="form-group ">
                                                        <label> Email <span class="text-danger">*</span></label>
                                                        <div class="position-relative">
                                                        <MailIcon class="fea icon-sm icons"></MailIcon>
                                                        <b-form-input autocomplete="off" v-model="form.username" type="email" :state="emailState" class="form-control pl-5" placeholder="Email" name="email" required></b-form-input>
                                                        <b-form-invalid-feedback id="input-live-feedback">
                                                            Please enter a valid email
                                                        </b-form-invalid-feedback>
                                                    </div>
                                                    </div>
                                                </div>
                                                <!--end col-->
                                                <div class="col-lg-12">
                                                  <div class="form-group ">
                                                      <label>Full Name <span class="text-danger">*</span></label>
                                                      <div class="position-relative">
                                                      <user-icon class="fea icon-sm icons"></user-icon>
                                                      <b-form-input autocomplete="off" v-model="form.fullName" type="text" :state="fullNameState" class="form-control pl-5" placeholder="Full Name" name="fullName" required></b-form-input>
                                                      <b-form-invalid-feedback id="input-live-feedback">
                                                          The name field is required
                                                      </b-form-invalid-feedback>
                                                  </div>
                                                  </div>
                                              </div>
                                              <!--end col-->
                                                  <div class="col-lg-12">
                                                      <div class="form-group">
                                                          <label>Password <span class="text-danger">*</span></label>
                                                              <div class="position-relative">
                                                          <router-link to="#" class="text-dark">
                                                              <EyeIcon @click="showPassword" v-if="!showPass" class="fea icon-sm icons"></EyeIcon>
                                                              <EyeOffIcon @click="hidePassword" v-else class="fea icon-sm icons"></EyeOffIcon>
                                                          </router-link>
                                                          <b-form-input autocomplete="off" v-model="form.password" :state="passwordState" :type="passType" class="form-control pl-5" placeholder="Password" required></b-form-input>
                                                          <b-form-invalid-feedback id="input-live-feedback">
                                                              {{ feedback }}
                                                          </b-form-invalid-feedback>
                                                      </div>
                                                      </div>
                                                  </div>
                                                  <!--end col-->
                                                  <div class="col-lg-12">
                                                    <div class="form-group">
                                                        <label>Confirm Password <span class="text-danger">*</span></label>
                                                            <div class="position-relative">
                                                        <router-link to="#" class="text-dark">
                                                            <EyeIcon @click="showConfPassword" v-if="!confshowPass" class="fea icon-sm icons"></EyeIcon>
                                                            <EyeOffIcon @click="hideConfPassword" v-else class="fea icon-sm icons"></EyeOffIcon>
                                                        </router-link>
                                                        <b-form-input autocomplete="off" v-model="form.passConfirm" :state="passConfirmState" :type="confpassType" class="form-control pl-5" placeholder="Password" required></b-form-input>
                                                        <b-form-invalid-feedback id="input-live-feedback">
                                                            The password confirmation does not match.
                                                        </b-form-invalid-feedback>
                                                    </div>
                                                    </div>
                                                </div>
                                                <!--end col-->
  
                                                  <div class="col-lg-12">
                                                      <div class="d-flex justify-content-between">
                                                          <div class="form-group">
                                                              <div class="custom-control custom-checkbox">
                                                                  <input v-model="TOS"  type="checkbox" class="custom-control-input" id="customCheck1">
                                                                  <label class="custom-control-label" for="customCheck1">Accept our 
                                                                    <router-link to="#">Terms of Use</router-link>  and <router-link to="#">Privacy Policy</router-link></label>
                                                              </div>
                                                          </div>
                                                         
                                                      </div>
                                                  </div>
                                                  <!--end col   Registering to this website, you accept our  Terms of Use and ourPrivacy Policy-->
  
                                                  <div class="col-lg-12 mb-0">
                                                      <b-button type="submit" class="btn btn-primary btn-block">Create Account <b-spinner small v-if="isVisible"></b-spinner> </b-button>
                                                  </div>
                                                  <!--end col-->

                                                
                                                  <!--end col-->
  
                                                  
                                              </div>
                                              <!--end row-->
                                              <b-modal centered  hide-header no-close-on-backdrop v-model="confirmModal">
                                                <template #modal-footer="{  cancel }">
                                                  <b-button style="display:none" size="sm" variant="outline-danger" @click="cancel()">
                                                      Close
                                                  </b-button>
                                                  <b-button class="center" size="sm" variant="outline-danger" @click="cancel()">
                                                    Close
                                                </b-button>
                                                </template>
                                                <div v-if="isProcessing" class="text-center py-5">
                                                  <b-spinner variant="secondary" type="grow" label="Spinning" class="mb-1"></b-spinner>
                                                  <h6 class="text-secondary"><b>Checking you entries</b></h6>
                                                </div>
                                                <div v-else>
                                                  <div  v-if="!verifySpinner" class="text-center" >
                                                    <h5>The OTP has been send to 
                                                      <MailIcon class="fea icon-sm icons text-info"></MailIcon> <u class="text-info small">{{form.username}}</u> 
                                                    </h5>
                                                  </div>
                                                  <div v-if="!verifySpinner">
                                                    <center > <otp-input
                                                      :isDisabled="isDisabled"
                                                     :digits="6"
                                                     :gap="0"
                                                      
                                                     :isValid="isCodeValid"
                                                     @on-complete="onCompleteHandler"
                                                   > 
                                                      
                                                     </otp-input></center>
                                                   </div>
                                                   <b-row class="justify-content-center">
                                                    <b-col sm="6" class="my-3 text-center">
                                                      <b-button v-if="!verifySpinner" @click="verifyEmail" type="submit" class="btn btn-primary btn-block">
                                                        Verify Your Email <b-spinner small v-if="isSpin"></b-spinner> 
                                                      </b-button>
                                                    </b-col>
                                                   </b-row>
                                                   <b-row>
                                                    <!-- <b-col sm="6">
                                                      <p class="small">The OTP will expire in {{ timerCount }} seconds</p>
                                                    </b-col> -->
                                                    <b-col sm="12" class="text-center">
                                                      <center>
                                                        <p>If you didn't recieve the code click here 
                                                          <b-button  @click="reSendCode" variant="link">
                                                            <b v-if="!verifySpinner" >Resend Code</b>
                                                          </b-button>
                                                          <b v-if="verifySpinner" >Sending
                                                            <b-spinner type="grow" small ></b-spinner>
                                                          </b>
                                                        </p>
                                                      </center>
                                                    </b-col>
                                                   </b-row>
                                                </div>
                                                <!-- {{ timerCount }} -->
                                                
                                              </b-modal>
                                          </b-form>
                                      </div>
                                  </div>
                              </div>
                              <!--end col-->
                          </div>
                          <!--end row-->
                      </div> <!-- end about detail -->
                  </div> <!-- end col -->
  
                  <div class="col-lg-5 offset-lg-7 padding-less img order-1" style="background-image:url('images/loginPic.png') ; background-size: cover;"  data-jarallax='{"speed": 0.5}'></div><!-- end col -->
              </div>
              <!--end row-->
          </div>
          <!--end container fluid-->
      </section>
      <!--end section-->
      <!-- Hero End -->
    <!--   <Switcher /> -->
  
  </div>
</template>
  
<script>
import Switcher from "@/components/switcher";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  HomeIcon,
  UserIcon,
  KeyIcon,
  EyeOffIcon,
  EyeIcon,
  MailIcon
} from 'vue-feather-icons';
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import  OtpInput  from  "otp-input-vue2";
import axios from '../axios.config'
/**
* Auth-cover-login component
*/
export default {
  
  data() {
      return {
         form:{
          fullName:null,
          username:'',
          password:'',
          passConfirm:null,
         },
          device_token:'sdhfhskldfhsd',
          isVisible:false,
          verifySpinner:false,
          feedback:'',
          passType:'password',
          showPass:false,
          confpassType:'password',
          confshowPass:false,
          TOS:false,
          confirmModal: false,
          isCodeValid:true,
          timerCount: 120,
          isDisabled:false,
          varification:'',
          isProcessing:true,
          isSpin:false
      }
  },
  components: {
      Switcher,
      FacebookIcon,
      InstagramIcon,
      TwitterIcon,
      LinkedinIcon,
      HomeIcon,
      UserIcon,
      KeyIcon,
      EyeOffIcon,
      EyeIcon,
      OtpInput,
      MailIcon
  },
  mixins: [validationMixin],
  methods:{
      ...mapActions(["signUp"]),
      submitSignUp(){
        if(this.emailState == true && this.fullNameState == true && this.passwordState == true && this.passConfirmState == true){
            if(this.TOS == true){
              this.isVisible = true
              axios.post('user/sign_up',{
                email:this.form.username,
                password:this.form.password,
                full_name:this.form.fullName
              }).then(()=>{
                      this.isVisible = false
                      this.confirmModal = true
                      setTimeout(() => {
                          this.isProcessing = false;
                      }, 3000)
                  })
                  .then(()=>{
                    this.timerCount = 120
                    setTimeout(() => {
                            this.timerCount--;
                        }, 1000); 
                  })
                  .catch((err)=>{
                    let error = err.response.status
                      if(error == 422){
                        swal({
                        title: "Failed To Register",
                        text: "The email has already been taken.",
                        icon: "error",
                        dangerMode: true,
                      })
                      this.isVisible = false
                    }else{
                      swal({
                        title: "Faild To register",
                        text: "Something went wrong, Try again later",
                        icon: "error",
                        dangerMode: true,
                      })
                      this.isVisible = false
                    }
                    
                  })
            }else{
              swal({
                title: "One Last Step",
                text: "Please accept our terms of use and privacy policy",
                icon: "warning",
                dangerMode: true,
              })
            }
        }else{
          swal({
            title: "Invalid Entries",
            text: "Please check your entries and try again .",
            icon: "warning",
            dangerMode: true,
          })
        }
     
      },
      showPassword(){
          this.showPass = !this.showPass
          this.passType = 'text'
      },
      hidePassword(){
          this.showPass = !this.showPass
          this.passType = 'password'
      },
      showConfPassword(){
          this.confshowPass = !this.confshowPass
          this.confpassType = 'text'
      },
      hideConfPassword(){
          this.confshowPass = !this.confshowPass
          this.confpassType = 'password'
      },
      onCompleteHandler(code){
        this.varification = code
        console.log('the code is', this.varification)
        this.isCodeValid = true;
		},
    verifyEmail(){
      this.isSpin = true
      setTimeout(()=>{
        this.isSpin = false
      },2000)
      if(this.varification == ''){
        swal({
          title: "Failed To Verify",
          text: "Please enter the code you received.",
          icon: "error",
          dangerMode: true,
        })
        this.isSpin = false
      }else{
        this.signUp({
          email:this.form.username,
          code:this.varification
        })
      }
    },

		reSendCode(){
      this.verifySpinner = true
      axios.post('user/resend_code',{email:this.form.username}).then(()=>{
        swal({
          title: "Please Check Your Email",
          icon: "success",
          successMode: true,
        })
      }).then(()=>{
        this.verifySpinner = false
      })
    },

  },
  watch: {
    timerCount: {
                handler(value) {
                    if(this.confirmModal == true){
                      if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                    }else{
                      value = 120
                    }
                   

                },
                immediate: true // This ensures the watcher is triggered upon creation
            },

      currentUser(val) {
        if(val.success){
          setTimeout(() => {
              window.location.replace("/")
          }, 1000);
          console.log(this.currentUser)
        }/* else{
          swal({
                title: "Failed",
                text: val,
                icon: "warning",
                dangerMode: true,
            })
            this.isSpin = false
        } */
        
          
      },
      
  },
  computed: {
...mapGetters({
  currentUser: "currentUser",
}),

emailState(){
  const text = this.form.username;
  let n = text.search( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  if(text == ''){
          return null
        }
        if(text == null){
          return null
        }
        if(n == 0){
          return true
        }else{
          return false
        }
},
fullNameState(){
  if (this.form.fullName == null){
    return null
  }else{
    return this.form.fullName.length  > 0 ? true : false
  }
  
},
passwordState(){
  const text = this.form.password;
  if(text.length == 0){
      return null
  }if(text.length > 0 && text.length < 6){
      this.feedback = "The password must be at least 6 characters."
      return false
  }else{
      return true
  }
},
passConfirmState(){
  if (this.form.passConfirm == null){
    return null
  }if(this.form.passConfirm == this.form.password){
    return true
  }else{
    return false
  }
}
},
}
</script>

