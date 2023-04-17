<template>
  <div class="py-5 px-5">
    <b-container class="mt-1 py-5">
      <b-row class="mt-5">
        <b-col class="text-center">
          <b-alert :show="showAlert"  variant="danger">{{error}}</b-alert>
          <b-input-group class="mt-3">
            <template #append>
              <b-button v-if="loading" @click="getCurrentLocation" variant="outline-danger" squared>
                <b  class="mdi mdi-map-marker"></b>
              </b-button>
              <b-button v-else @click="getCurrentLocation" variant="outline-danger" squared>
                <b-spinner small ></b-spinner>
              </b-button>
            </template>
            <b-form-input id="autocomplete" ref="autocomplete" v-model="address" size="lg" placeholder="enter your address"></b-form-input>
          </b-input-group>
          <b-button class="mt-2" variant="secondary">Go</b-button>
        </b-col>
      </b-row>
    </b-container>
    <center>
      <div id="map" ref="map"></div>
    </center>
   
   
  </div>
  
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
    address:'',
    error:'',
    showAlert:false,
    loading:true,
    voice:true
    };
  },
  mounted() {
    var autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(31.20176, 29.91582)
        ),
      }
    );

    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();

       this.showLocationOnMap(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      ); 
    });
  },
  methods: {
    getCurrentLocation(){
      this.loading = false
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          this.getAddressFrom(position.coords.latitude,position.coords.longitude);
          this.showLocationOnMap(position.coords.latitude,position.coords.longitude)
          this.showAlert = false
        },

       
        error =>{
          console.log(error.message)
          this.showAlert = true
          this.error = error.message
          this.loading = true
        }
        );
      }else{
        console.log('your browser is not support geolocation API');
        this.showAlert = true
          this.error = error.message
          this.loading = true 
      }
    },

    getAddressFrom(lat, long){
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ',' + long + '&key=AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc')
      .then((resp)=>{
        if(resp.data.error_message){
          console.log(resp.data.error_message);
          this.showAlert = true
          this.error = resp.data.error_message
        }else{
          this.showAlert = false
          this.address = resp.data.results[0].formatted_address
        }
        this.loading = true
      })
      .catch((err)=>{
        console.log(err.message)
        this.showAlert = true
          this.error = err.message
      })
    },
    showLocationOnMap(lat,long){
      // create A Map Object
      var map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(lat, long),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      // Add Marker
      new google.maps.Marker({
        position : new google.maps.LatLng(lat,long),
        map : map
      })
    }
  },
  
};
</script>

<style >
  .pac-icon{
    display: none;
  }
  
  .pac-item{
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }

  .pac-item:hover{
    background-color: #ececec;
  }
  
  .pac-item-query{
    font-size: 16px;
    color:#202842;
    font-weight: 900;

  }
  #map{
    width: 700px;
    height: 700px;
    
  }
</style>