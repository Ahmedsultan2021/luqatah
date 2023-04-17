<template>
    <div>
        <b-container fluid>
            <b-row>
                <b-col sm="7">
                    <div class="mt-5" id="map" style="height: 600px;"></div>
                    <input ref="autocompleteInput"  placeholder="search for location" class="form-control mt-3" />
                    <input id="range" class="form-control" @change="createBuffer" type="range" min="0" max="100" step="1" v-model="bufferRadius">
                    <p><b>The Range is </b>{{bufferRadius}} Km</p>
                    <b-button @click="resetMap">reset map</b-button>
                </b-col>
                <b-col sm="5">
                    <div class="mt-5" v-if="markers[0]" style="height: 600px; overflow-y: scroll; border-bottom: 1px dashed darkgray; ">
                        <b-list-group  v-for="(marker, index) in markers" :key="index" @mouseover="animateMarker(index)" @mouseout="stopAnimation(index)">
                            <b-list-group-item   class="mb-1 hover" >
                                <div class="d-flex justify-content-between mb-3">
                                    <div class="text-left">
                                        <b class="text-danger"><u>Marker {{index+1}}</u></b>
                                    </div>
                                    <div class="text-left">
                                        <b-button variant="soft-secondary" @click="removeMarker(index)" size="sm">X</b-button>
                                    </div>
                                </div>
                                <p><b>{{marker.name}}</b></p>
                                <!-- <p>( {{ marker.lat }},{{ marker.lng }} )</p> -->
                            </b-list-group-item>    
                          </b-list-group>
                    </div>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      markers: [],
      markersWithLatLng: [],
      directionsService: null,
      directionsRenderer: null,
      directionsSteps: [],
      allPoints:[],
      bufferRadius: 3, // Add bufferRadius property
      buffer:'',
      map:'',
      currentInfoWindow :'',
      defaultLocation:{ lat: 31.229389862175648, lng: 29.959807012803527  }
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc&callback=initMap";
    document.head.appendChild(script);
    // Define initMap function in global scope
    window.initMap = () =>{
        const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 31.229389862175648, lng: 29.959807012803527  },
        zoom: 10,
      });
      this.map = map
      const markers = [];
      this.markers = markers;

      // Add click event listener to map
      this.map.addListener("click", (e)=>{
         // Create a marker for clicked position
         const marker = new google.maps.Marker({
            position: e.latLng,
            draggable: true, // make the marker draggable
            map: this.map,
            title: "name",
            icon: {
                url:'images/placeholder1.png',
                labelOrigin: new google.maps.Point(15,15)
            },
        });
       

         // Add marker position to markers array
         const geocoder = new google.maps.Geocoder();
         geocoder.geocode({ location: e.latLng }, (results, status) =>{
            if (status === "OK"){
                if (results[0]){
                    const placeName = results[0].formatted_address;
                    marker.setTitle(placeName)
                    // Add marker position and place name to markers array
                    markers.push({
                        marker,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                        name: placeName,
                    });
                    this.markers = markers
                    this.map.setZoom(14);
                    this.map.setCenter(e.latLng);
                    
                    if(this.markers.length > 1){
                        this.calculateDirections()
                    }
                    if(this.markers.length >= 1){
                        this.createBuffer()
                    }

                    // dragend marker
                    this.markers.forEach((marker, index) => {
                       /*  marker.marker.setLabel((index+1).toString()); */
                        marker.marker.addListener('click', () => this.animateMarker(index));
                        marker.marker.addListener('dragend', () => {
                            const newLatLng = {
                                lat: marker.marker.getPosition().lat(),
                                lng: marker.marker.getPosition().lng(),
                            };
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: newLatLng }, (results, status) =>{
                                if (status === "OK"){
                                    if (results[0]){
                                        const placeName = results[0].formatted_address;
                                        newLatLng.name = placeName;
                                        this.updateMarker(index, newLatLng);
                                        if(this.markers.length>1){
                                            this.calculateDirections()
                                        }
                                        if(this.markers.length >= 1){
                                            this.createBuffer()
                                        }
                                    }
                                }
                            });
                        });
                    });

                     // add info window
                    this.markers.forEach(markerObj => {
                        const marker = markerObj.marker;
                        const infoWindow = new google.maps.InfoWindow({
                            content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                        });
                        
                        marker.addListener('click', () => {
                            infoWindow.open(map, marker);
                        });
                    });
                }
                else {
                    console.log("No results found");
                }
            }
            else {
                console.log(`Geocoder failed due to: ${status}`);
            }
         })

      });

      // Create autocomplete search bar
      const input = this.$refs.autocompleteInput;
      const autocomplete = new google.maps.places.Autocomplete(input);

      // Set the bounds to the map's viewport to ensure that autocomplete
      // results are biased towards the visible area of the map.
      autocomplete.bindTo("bounds", map);

       // Specify just the place data fields that you need.
       autocomplete.setFields(["place_id", "geometry", "name"]);

        // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      autocomplete.addListener("place_changed", () =>{

      

        const place = autocomplete.getPlace();
        if (!place.geometry){
            return;
        }
        this.$refs.autocompleteInput.value = ''

        // Add marker for selected place
        const marker = new google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
          draggable: true, // make the marker draggable
          icon: {
                url:'images/placeholder1.png',
                labelOrigin: new google.maps.Point(15,15)
            },
        });

         // Add marker position to markers array
         markers.push({
          marker,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name:place.name
        });

        this.markers = markers
        this.map.setZoom(14);
        this.map.setCenter(place.geometry.location);
        if(this.markers.length >= 1){
            this.createBuffer()
        }
        if(this.markers.length > 1){
          this.calculateDirections() 
        }

        // dragend marker
        this.markers.forEach((marker, index) => {
            marker.marker.addListener('click', () => this.animateMarker(index));
            marker.marker.addListener('dragend', () => {
                const newLatLng = {
                    lat: marker.marker.getPosition().lat(),
                    lng: marker.marker.getPosition().lng(),
                };
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ location: newLatLng }, (results, status) =>{
                    if (status === "OK"){
                        if (results[0]){
                            const placeName = results[0].formatted_address;
                            newLatLng.name = placeName;
                            this.updateMarker(index, newLatLng);
                            if(this.markers.length>1){
                                this.calculateDirections()
                            }
                            if(this.markers.length >= 1){
                                this.createBuffer()
                            }
                        }
                    }
                });
            });
        });
        
        // add info window
        this.markers.forEach(markerObj => {
            const marker = markerObj.marker;
            const infoWindow = new google.maps.InfoWindow({
                content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
            });
            
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        });
      })

       // Initialize directionsService and directionsRenderer
       this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
       

    }
  },
  methods: {
    removeMarker(index) {
        const marker = this.markers[index].marker;
        marker.setMap(null); // remove marker from the map
        this.markers.splice(index, 1); // remove marker from the markers array
        if(this.markers.length >= 1){
            this.createBuffer()
        }
        if(this.markers.length>1){
            this.calculateDirections()
        }else{
            // Remove buffer from the map
            if (this.buffer) {
                this.buffer.setMap(null);
                this.buffer = null;
            }
            // Remove directions from the map
            if (this.directionsRenderer) {
                this.directionsRenderer.setMap(null);
                this.directionsRenderer = null;
                this.directions = null;
            }

            // Initialize directionsService and directionsRenderer
            this.directionsService = new google.maps.DirectionsService();
            this.directionsRenderer = new google.maps.DirectionsRenderer({
                map: this.map,
                suppressMarkers: true // Set to true to suppress "A" and "B" markers
            });
            }
    },
    resetMap(){
        this.markers.forEach((marker) =>{
            marker.marker.setMap(null);
        })
        this.markers.splice(0);

        // Remove buffer from the map
        if (this.buffer) {
            this.buffer.setMap(null);
            this.buffer = null;
        }

        // Remove directions from the map
        if (this.directionsRenderer) {
            this.directionsRenderer.setMap(null);
            this.directionsRenderer = null;
            this.directions = null;
        }

        // Initialize directionsService and directionsRenderer
        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true // Set to true to suppress "A" and "B" markers
        });
    },
    updateMarker(index, newLatLng) {
      // update the marker's position and store the new lat/lng in this.markers
      this.markers[index].lat = newLatLng.lat;
      this.markers[index].lng = newLatLng.lng;
      this.markers[index].name = newLatLng.name;
      this.markers[index].marker.setPosition(newLatLng);
    },
    animateMarker(index) {
        const marker = this.markers[index].marker
        marker.setAnimation(google.maps.Animation.BOUNCE);
        const infoWindow = new google.maps.InfoWindow({
            content: `<div><b>${this.markers[index].name}</b><br>( ${this.markers[index].lat} , ${this.markers[index].lng}</div>`
        });
        infoWindow.open(map, marker);
        // store a reference to the info window
        this.currentInfoWindow = infoWindow;
    },
    stopAnimation(index) {
        this.markers[index].marker.setAnimation(null);
        // close the info window
        if (this.currentInfoWindow) {
            this.currentInfoWindow.close();
        }
    },
    calculateDirections() {
         // Ensure there are at least two markers to calculate directions
        if (this.markers.length < 2) {
            alert("Please add at least two markers to calculate directions.");
            return;
        }

        // Create an array of LatLng objects from the markers array
        const waypoints = this.markers.map((marker) => {
            return { location: new google.maps.LatLng(marker.lat, marker.lng) };
        });

        // Create a DirectionsRequest object
        const request = {
            origin: new google.maps.LatLng(this.markers[0].lat, this.markers[0].lng),
            destination: new google.maps.LatLng(
            this.markers[this.markers.length - 1].lat,
            this.markers[this.markers.length - 1].lng
            ),
            waypoints: waypoints.slice(1, -1),
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
        };

        // Call DirectionsService to calculate the route
        this.directionsService.route(request, (response, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
            // Add direction coordinates to response object
            const direction = response.routes[0].legs[0].start_location;
            response.direction = {
                lat: direction.lat(),
                lng: direction.lng(),
            };

            // Display directions on map
            if (this.directionsRenderer) {
                this.directionsRenderer.setDirections(response);
            }

            // Save response to component data
            this.directionsResponse = response;

            const data = [];
            const legs = response.routes[0].legs;
            for (let i = 0; i < legs.length; i++) {
                const steps = legs[i].steps;
                for (let j = 0; j < steps.length; j++) {
                    const polyline = steps[j].polyline;
                    const decoded = google.maps.geometry.encoding.decodePath(
                    polyline.points
                    );
                    for (let k = 0; k < decoded.length; k++) {
                    const latLng = {
                        lat: decoded[k].lat(),
                        lng: decoded[k].lng(),
                    };
                    data.push(latLng);
                    this.allPoints = data
                    /*   console.log(this.allPoints)   */
                    }
                }
                
            }
            } else {
            alert("Failed to calculate directions.");
            }
        });
    },
    createBuffer(){
        // Ensure there are at least two markers to create buffer
        if (this.markers.length < 1) {
            alert("Please add at least two markers to create buffer.");
            return;
        }

        // Get center of all markers
        let latSum = 0;
        let lngSum = 0;
        for (const marker of this.markers) {
            latSum += marker.lat;
            lngSum += marker.lng;
        }
        const centerMarker = new google.maps.LatLng(latSum / this.markers.length, lngSum / this.markers.length);

        // Remove existing buffer if it exists
        if (this.buffer) {
            this.buffer.setMap(null);
        }

        // Calculate the bounds of all markers and directions
        const bounds = new google.maps.LatLngBounds();
        this.markers.forEach((marker) => bounds.extend(marker.marker.getPosition()));
        if (this.directions && this.directions.routes && this.directions.routes.length > 0) {
            const routeBounds = new google.maps.LatLngBounds();
            const route = this.directions.routes[0];
            route.legs.forEach((leg) => {
            leg.steps.forEach((step) => {
                step.path.forEach((latLng) => routeBounds.extend(latLng));
            });
            });
            bounds.union(routeBounds);
        }

         // Set the buffer circle's center and radius based on the bounds
        const center = bounds.getCenter();
        const northEast = bounds.getNorthEast();
        const radiusFromBounds = google.maps.geometry.spherical.computeDistanceBetween(center, northEast) ; 
        const radius = Math.max(this.bufferRadius*1000,radiusFromBounds); // Use the larger of the two radii
        if(radiusFromBounds > this.bufferRadius*1000){
            this.bufferRadius = Math.ceil(radiusFromBounds/1000)
        }

        // Create circle around center point
        const circle = new google.maps.Circle({
            center: centerMarker,
            radius: radius , // Convert to meters
            strokeColor: "blue",
            strokeOpacity: 0.2,
            strokeWeight: 0.6,
            fillColor: "blue",
            fillOpacity: 0.2,
            map: this.map,
        });

        // Save buffer circle to component data
        this.buffer = circle;
    },

  },
}
</script>

<style >
.pac-container{
    position: absolute;
    top: 100%;
    left: 0;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    list-style: none;
    
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;
}
.pac-item {
    font-size: 14px;
    font-family: Helvetica;
    width: 100%;
    color: #00531d;
    vertical-align: middle;
    white-space: nowrap;
    background: none;
    border: 0;
  }
  
.pac-item:hover,
.pac-item:focus {
  color: #fff;
  text-decoration: none;
  background-color: #f7961c;
}

.pac-item-selected {
  text-decoration: none;
  background-color: #f0f0f0;
}
.pac-item-query{
    color:#202842;
    font-weight: 900;
    font-size: 14px;
}

</style>