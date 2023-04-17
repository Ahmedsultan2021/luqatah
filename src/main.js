import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import "../public/css/materialdesignicons.min.css";
// import 'swiper/swiper-bundle.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue } from 'bootstrap-vue'
import { FormInputPlugin } from 'bootstrap-vue'
import { FormDatepickerPlugin } from 'bootstrap-vue'
var VueScrollTo = require('vue-scrollto');
import Scrollspy from 'vue2-scrollspy';
import VueYoutube from 'vue-youtube'
import vueVimeoPlayer from 'vue-vimeo-player'
import VueMasonry from 'vue-masonry-css'
import VueFormWizard from 'vue-form-wizard'
 import 'vue-form-wizard/dist/vue-form-wizard.min.css'
 import VueHtmlToPaper from 'vue-html-to-paper'
/* import GmapVue from 'gmap-vue'  */

Vue.use(VueHtmlToPaper)

// Vue.use(GmapVue, {
//   load: {
//     // [REQUIRED] This is the unique required value by Google Maps API
//     key: 'AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc',
//     // [OPTIONAL] This is required if you use the Autocomplete plugin
//     // OR: libraries: 'places,drawing'
//     // OR: libraries: 'places,drawing,visualization'
//     // (as you require)
//     libraries: 'places',

//     // [OPTIONAL] If you want to set the version, you can do so:
//     /* v: '3.26', */

//     // This option was added on v3.0.0 but will be removed in the next major release.
//     // If you already have an script tag that loads Google Maps API and you want to use it set you callback
//     // here and our callback `GoogleMapsCallback` will execute your custom callback at the end; it must attached
//     // to the `window` object, is the only requirement.
//     customCallback: 'MyCustomCallback',
//   },

//   // [OPTIONAL] If you intend to programmatically custom event listener code
//   // (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
//   // instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
//   // you might need to turn this on.
//   autoBindAllEvents: true,

//   // [OPTIONAL] If you want to manually install components, e.g.
//   // import {GmapMarker} from 'gmap-vue/src/components/marker'
//   // Vue.component('GmapMarker', GmapMarker)
//   // then set installComponents to 'false'.
//   // If you want to automatically install all the components this property must be set to 'true':
//   installComponents: true,

//   // Load the Google Maps API dynamically, if you set this to `true` the plugin doesn't load the Google Maps API
//   dynamicLoad: false,
// })


import axios from 'axios';
axios.create({
  baseURL: 'https://luqatah.brunchenapp.com/api/',
  headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accept-Language': 'en',
      "Access-Control-Allow-Origin": "*",    
      }
    });
Vue.use(VueScrollTo, {
  duration: 3000,
  easing: "ease"
})
Vue.use(VueFormWizard)
Vue.use(FormInputPlugin)
Vue.use(FormDatepickerPlugin)
Vue.use(BootstrapVue)
Vue.use(Scrollspy);
Vue.use(VueYoutube)
Vue.use(vueVimeoPlayer)
Vue.use(VueMasonry)
/* export default new Vue({
  store,
}) */

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


