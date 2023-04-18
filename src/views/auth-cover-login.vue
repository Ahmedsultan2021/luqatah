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
                                           
                                            <b-form @submit.prevent="loginSubmit" class="login-form mt-5 px-3">
                                                <h4 class="card-title text-center">Login</h4>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <div class="form-group ">
                                                            <label>Your Email <span class="text-danger">*</span></label>
                                                            <div class="position-relative">
                                                            <user-icon class="fea icon-sm icons"></user-icon>
                                                            <b-form-input v-model="form.username" type="email" :state="emailState" class="form-control pl-5" placeholder="Email" name="email" required></b-form-input>
                                                            <b-form-invalid-feedback id="input-live-feedback">
                                                                Please enter a valid email
                                                            </b-form-invalid-feedback>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <!--end col-->
                                                
                                                    
                                                    <div class="col-lg-12">
                                                        <div class="form-group">
                                                            <label>Password <span class="text-danger">*</span></label>
                                                                <div class="position-relative">
                                                                    <div >
                                                                        <b-input-group>
                                                                            <b-button v-if="!showPass" @click="showPassword"  variant="light" squared>
                                                                                <b  class="mdi mdi-eye-outline"></b>
                                                                            </b-button>
                                                                            <b-button @click="hidePassword" v-else  variant="light" squared>
                                                                                <b  class="mdi mdi-eye-off"></b>
                                                                            </b-button>
                                                                                <b-form-input v-model="form.password" :state="passwordState" :type="passType" class="form-control pl-5" placeholder="Password" required></b-form-input>
                                                                                <b-form-invalid-feedback id="input-live-feedback">
                                                                                    {{ feedback }}
                                                                                </b-form-invalid-feedback>
                                                                        </b-input-group>
                                                                            
                                                                    </div>
                                                                    <div>
                                                                    </div>
                                                           
                                                        </div>
                                                        </div>
                                                    </div>
                                                    <!--end col-->
    
                                                    <div class="col-lg-12">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="form-group">
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                    <label class="custom-control-label" for="customCheck1">Remember me</label>
                                                                </div>
                                                            </div>
                                                            <p class="forgot-pass mb-0">
                                                                <router-link to="/login" class="text-primary font-weight-bold">Forgot password ?</router-link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <!--end col-->
    
                                                    <div class="col-lg-12 mb-0">
                                                        <b-button type="submit" class="btn btn-primary btn-block">Login <b-spinner small v-if="isVisible"></b-spinner> </b-button>
                                                    </div>
                                                    <!--end col-->
                                                    <div v-if="currentUser=='please verify your email'" class="col-lg-12 mt-2">
                                                        <div class="d-flex justify-content-between">
                                                            <div class="form-group">
                                                                <p class="text-danger mt-1">{{currentUser}}</p>
                                                            </div>
                                                            <p @click="openModal" class="forgot-pass mb-0">
                                                                <router-link to="#"  class="btn btn-soft-dark btn-sm  font-weight-bold">Verify</router-link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <!--end col-->
                                                  
                                                    <!--end col-->
    
                                                    <div class="col-12 text-center">
                                                        <p class="mb-0 mt-3"><small class="text-dark mr-2">Don't have an account ?</small>
                                                            <router-link to="/signup" class="text-primary font-weight-bold">Sign Up</router-link>
                                                        </p>
                                                    </div>
                                                    <!--end col-->
                                                </div>
                                                <!--end row-->
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
             :digits="8"
             :gap="2"
             :isValid="isCodeValid"
             @on-complete="onCompleteHandler"
           >
               <template #errorMessage> There is an error </template>
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
    </div>
</template>
    
<script>
import axios from '../axios.config'
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
import { next } from 'dom7';
export default {
    data() {
        return {
           form:{
            username:'',
            password:'',
           },
            device_token:'sdhfhskldfhsd',
            isVisible:false,
            feedback:'',
            passType:'password',
            showPass:false,
            notVerified:'',
            confirmModal: false,
            isDisabled:false,
            varification:'',
            isProcessing:true,
            isSpin:false,
            verifySpinner:false,
            isCodeValid:true,
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
    mounted(){},
    beforeRouteLeave(to, from , next){
        localStorage.setItem('flag',null)
        next()
    },
    
    methods:{
        ...mapActions(["login","signUp"]),
        loginSubmit(){
            this.isVisible = true
            setTimeout(()=>{
                this.isVisible = false
            },2000)
            this.login({
                email: this.form.username,
                password: this.form.password,
                push_token: "qjw;dlihkhkjgshcgdvbjknalm'sdnl;absklvjgh"
            });
        },
        showPassword(){
            this.showPass = !this.showPass
            this.passType = 'text'
        },
        hidePassword(){
            this.showPass = !this.showPass
            this.passType = 'password'
        },
        onCompleteHandler(code){
        this.varification = code
        console.log('the code is', this.varification)
        this.isCodeValid = true;
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
        verifyEmail(){
            this.isSpin = true
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
        openModal(){
            
            this.confirmModal = true
            axios.post('user/resend_code',{email:this.form.username})
            .then(()=>{
                this.isProcessing = false
            })
        }

    },
    watch: {
       
        currentUser(val) {
            console.log(val)
           if(val.success){
            if(localStorage.getItem('flag')==1){
                setTimeout(() => {
                    window.location.replace("/new-announcement")
                }, 1000);
                   localStorage.setItem('flag',null) 
            }else{
                setTimeout(() => {
                window.location.replace("/")
            }, 1000);
            }
           
           }else{
            
            console.log(this.currentUser)
           } 
        },
        loginError(val) {
        if (val != null) {
            this.$notify("error", "Login Error", val, {
            duration: 3000,
            permanent: false,
            });
            
        }
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
  }
},
}
</script>

