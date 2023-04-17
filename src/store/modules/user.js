
import { currentUser, isAuthGuardActive } from '../../constants/config'
import { setCurrentUser, getCurrentUser } from '../../utils'
import axios from '../../axios.config'
import swal from 'sweetalert';


export default {
  state: {
    currentUser: isAuthGuardActive ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null,
    token: "",
    push_token:"",
    cities: [],
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess,
    token: state => state.token,
    push_token: state => state.push_token,
    cities: state => state.cities
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities
    },
    setToken(state) {
      /* state.token = localStorage.setItem('push_token',  t.getToken()) */
    },
    setUser(state, payload) {
      state.currentUser = payload
      state.processing = false
      state.loginError = null
    },
    setLogout(state) {
      state.currentUser = null
      state.processing = false
      state.loginError = null
    },
    setProcessing(state, payload) {
      state.processing = payload
      state.loginError = null
    },
    setError(state, payload) {
      state.loginError = payload
      state.currentUser = null
      state.processing = false
    },
    setForgotMailSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.forgotMailSuccess = true
    },
    setResetPasswordSuccess(state) {
      state.loginError = null
      state.currentUser = null
      state.processing = false
      state.resetPasswordSuccess = true
    },
    clearError(state) {
      state.loginError = null
    },
   /*  userToken(state, token) {
      state.push_token = token
      //console.log(token)
    } */
  },
  actions: {
    Cities({ commit }, payload) {
      commit('setCities', payload)
    },
   
    login({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      axios.post('user/login', { username: payload.email, password: payload.password, device_token: payload.push_token })
        .then((response) => {
          setCurrentUser(response.data)
          commit('setUser', response.data)
        }).catch((err) =>{
          
          setCurrentUser(err.response.data.message)
          commit('setUser', err.response.data.message)
          if(err.response.data.message == "credentials is not valid"){
            swal({
                title: "Login Failed",
                text: "Incorrect email or password ",
                icon: "warning",
                dangerMode: true,
            })
        }if(err.response.data.message == ""){
           swal({
                title: "Login Failed",
                text: "please verify your email",
                icon: "warning",
                dangerMode: true,
            })
           /*  localStorage.setItem('incorrect',err.response.data.message) */
        }
        } );

      
    },
    signUp({ commit }, payload){
      commit('clearError')
      commit('setProcessing', true)
      axios.post('user/verify_email',{email:payload.email , code: payload.code})
      .then((response) => {
        setCurrentUser(response.data)
        commit('setUser', response.data)
      }).catch((err) =>{
        setCurrentUser(err.response.data.message)
        commit('setUser', err.response.data.message)
        swal({
          title: "Failed",
          text: err.response.data.message,
          icon: "warning",
          dangerMode: true,
      })
      } );
    },
    forgotPassword({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(
          user => {
            commit('clearError')
            commit('setForgotMailSuccess')
          },
          err => {
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
    },
    resetPassword({ commit }, payload) {
      commit('clearError')
      commit('setProcessing', true)
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            commit('clearError')
            commit('setResetPasswordSuccess')
          },
          err => {
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
    },


    signOut() {
      swal({
        title: "Confirmation !",
        text: "Please confirm To sign out",
        icon: "warning",
        buttons: ["Cancel","Log Out"],
        dangerMode:true
        
        }).then((willDelete)=>{
          if(willDelete){
            setCurrentUser(null);
            window.location.replace("/")
          }
        })
      
    }
  }
}
