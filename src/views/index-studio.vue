<template >
  <b-card class="m-2" >
    <b-container >
      <b-row>
        <b-col lg="5" class="p-0  mt-2">
          <form class="ui segment large form">
            <div class="ui message red" v-show="error">{{error}}</div>
            <div class="ui segment">
              <div class="field">
                <div class="ui right icon input large" :class="{loading:spinner}">
                  <input
                    type="text"
                    placeholder="Enter your address"
                    v-model="address"
                    ref="autocomplete"
                    id="autocomplete"
                  />
                  <i class="dot circle link icon" @click="locatorButtonPressed"></i>
                </div>
              </div>
              <div class="field">
                <div class="two fields">
                  <div class="field">
                    <select v-model="type">
                      <option value="restaurant">Restaurant</option>
                    </select>
                  </div>
                  <div class="field">
                    <select v-model="radius">
                      <option value="5">5KM</option>
                      <option value="10">10KM</option>
                      <option value="15">15KM</option>
                      <option value="20">20KM</option>
                    </select>
                  </div>
                </div>
              </div>
              <button class="ui button" @click.prevent="findCloseBuy">Find CloseBuy Place</button>
            </div>
          </form>
          <div class="ui segment" style="max-height: 365px; overflow:auto">
            <div class="ui divided items">
              <div class="item " v-for="(place,i) in places" :key="place.id" @click="showInfoWindow(i)"
              :class="{'active' : activeIndex === i}"
              style="padding:10px"> 
                <div class="content ">
                  <div class="header">{{place.name}}</div>
                  <div class="meta">{{place.geometry.location.lat}},{{place.geometry.location.lng}}</div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="7" class="p-0 mt-2">
          <center>
            <div id="map" ref="map"></div>
          </center>
        </b-col>
      </b-row>

    </b-container>
  </b-card>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      address: "",
      error: "",
      spinner: false,
      lat:0,
      lng:0,
      type:'',
      radius:'',
      apiKey:'AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc',
      places:[],
      markers: [],
      activeIndex:-1
    };
  },

  mounted() {
    let a = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete")
      
    );

    a.addListener("place_changed", () => {
      let place = a.getPlace();
      this.address = place.formatted_address;
      this.lat = place.geometry.location.lat();
      this.lng = place.geometry.location.lng();

      this.showLocationOnTheMap(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
    });
  },

  methods: {
    locatorButtonPressed() {
      this.spinner = true;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude,
            this.lng =position.coords.longitude,
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );

            this.showLocationOnTheMap(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            this.error =
              "Locator is unable to find your address. Please type your address manually.";
            this.spinner = false;
            // console.log(error.message);
          }
        );
      } else {
        this.error = error.message;
        this.spinner = false;
        console.log("Your browser does not support geolocation API ");
      }
    },
    getAddressFrom(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc"
        )
        .then((response) => {
          if (response.data.error_message) {
            this.error = response.data.error_message;
            console.log(response.data.error_message);
          } else {
            this.address = response.data.results[0].formatted_address;
            // console.log(response.data.results[0].formatted_address);
          }
          this.spinner = false;
        })
        .catch((error) => {
          this.error = error.message;
          this.spinner = false;
          console.log(error.message);
        });
    },

    showLocationOnTheMap(latitude, longitude) {
      // Show & center the Map based oon
      var map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
      });
    },
    findCloseBuy(){
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&radius=${this.radius * 1000}&key=${
        this.apiKey
      }`;

      axios
        .get(URL)
        .then(response => {
         this.places = response.data.results;
           this.showPlacesOnMap();  
          /* console.log(response); */
        })
        .catch(error => {
          this.error = error.message;
        });
  
  },
  showPlacesOnMap(){
    const map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      const infoWindow = new google.maps.InfoWindow();
       

      for (let i = 0; i < this.places.length; i++) {
        const lat = this.places[i].geometry.location.lat;
        const lng = this.places[i].geometry.location.lng;
        const placeID = this.places[i].place_id;

        const marker = new google.maps.Marker({
          position:new google.maps.LatLng(lat,lng),
          map:map
        })
        this.markers.push(marker)
        new markerClusterer.MarkerClusterer({
            map,
            markers: this.markers
        });

        google.maps.event.addListener(marker,"click" , ()=>{
          const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${this.apiKey}&place_id=${placeID}`;
          axios.get(URL)
          .then((resp)=>{
            if(resp.data.error_message){
              this.error = resp.data.error_message;
            }else{
              const place = resp.data.result;

              infoWindow.setContent(
                `<div class="ui header">place</div>
                  ${place.formatted_address} <br>
                  ${place.formatted_phone_number} <br>
                  <a href="${place.website}" target="_blank">${place.website}</a>
                `
              );
          infoWindow.open(map, marker);
            }
          })
          .catch(error => {
              this.error = error.message;
            });
          
          
          
        })
        
      }
  },
  showInfoWindow(i){
    this.activeIndex = i
    new google.maps.event.trigger(this.markers[i], "click")
  }
  },
};
</script>


<style>
.ui.button,
.dot.circle.icon {
  background-color: #ff5a5f;
  color: white;
}

.pac-icon {
  display: none;
}

.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: #ececec;
}

.pac-item-query {
  font-size: 16px;
}

#map {
 width: 100%;
 height: 600px
}
.active{
  background:#ff5a5f !important;
}
</style>



