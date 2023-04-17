<template>
    <div>
        <div id="map" style="width:100%; height:650px"></div>
        <input v-if="markers.length > 0" id="range" class="form-control" @change="createBuffer" type="range" min="0" max="100" step="1" v-model="bufferRadius">
        <b style="font-size: 12px;" v-if="markers.length > 0">The Range is {{bufferRadius}} Km</b>
    </div>
</template>

<script>
import * as turf from '@turf/turf';
    export default {
        data() {
            return {
                map:null,
                markers: [],
                directionsService: null,
                directionsRenderer: null,
                circle :null,
                directionsSteps: [],
                allPoints: [],
                buffer: "",
                bufferRadius:1,
                directionsCalculated: false, // Add new flag


            }
        },
        mounted() {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src =
            "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyAyIMu_yWFiJ-7Qgc8kGlEc8UYqM_X9Xpc&callback=initMap";
            document.head.appendChild(script);

            window.initMap = () =>{
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: { lat: 31.229389862175648, lng: 29.959807012803527  },
                    zoom: 10,
                });
                this.map = map
                const markers = [];
                this.markers = markers;
                this.map.addListener("click", (e)=>{
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
                    markers.push({
                        marker,
                        lat: marker.getPosition().lat(),
                        lng: marker.getPosition().lng(),
                    });
                    this.markers = markers
                    this.map.setZoom(12);
                    this.map.setCenter(e.latLng);
                    
                    if(this.markers.length > 1){
                        this.calculateDirections()
                        /* this.createBuffer() */
                    }
                    if(this.markers.length >= 1){
                        this.createBuffer()
                    }
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
            calculateDirections() {
                // Clear allPoints array
                this.allPoints = [];

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
                        this.directionsCalculated = true; // Set the flag to true
                    // Add direction coordinates to response object
                    const direction = response.routes[0].legs[0].start_location;
                    response.direction = {
                        lat: direction.lat(),
                        lng: direction.lng(),
                    };

                    // Display directions on map
                    if (this.directionsRenderer) {
                        this.directionsRenderer.setDirections(response);
                         // Add direction coordinates to allPoints array
                         const data = [];
                        const legs = response.routes[0].legs;
                        for (let i = 0; i < legs.length; i++) {
                            const steps = legs[i].steps;
                            for (let j = 0; j < steps.length; j++) {
                                const polyline = steps[j].polyline;
                                const decoded = google.maps.geometry.encoding.decodePath(polyline.points);
                                for (let k = 0; k < decoded.length; k++) {
                                    const latLng = {
                                        lat: decoded[k].lat(),
                                        lng: decoded[k].lng(),
                                    };
                                    data.push(latLng);
                                    this.allPoints = data;
                                }
                            }
                        }
                        this.createBuffer();
                    }

                    // Save response to component data
                    this.directionsResponse = response;

                    // Add direction coordinates to allPoints array
                   

                    /* this.createBuffer(); */
                    } else {
                    alert("Failed to calculate directions.");
                    }
                });
            },
            createBuffer() {
  if (this.markers.length === 1) {
    console.log('first hello');
    // Create a buffer as a circle around the marker
    const marker = this.markers[0].marker;
    const center = marker.getPosition();
    const radius = this.bufferRadius * 1000;
    const options = {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: this.map,
      center: center,
      radius: radius,
    };
    const circle = new google.maps.Circle(options);
    // Remove the old buffer
    if (this.buffer) {
      this.buffer.setMap(null);
    }
    this.buffer = circle;
  } else if (this.directionsCalculated) {
    console.log('second hello', this.allPoints);
    // Remove the old buffer
    if (this.buffer) {
      this.buffer.setMap(null);
    }
    // Create a buffer around the route
    const lineString = turf.lineString(this.allPoints.map(point => [point.lng, point.lat]));
    const buffer = turf.buffer(lineString, this.bufferRadius, { units: "kilometers" });
    const coordinates = buffer.geometry.coordinates[0].map((point) => {
      return { lat: point[1], lng: point[0] };
    });
    // Create a new buffer polygon
    const options = {
      paths: coordinates,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: this.map,
    };
    const polygon = new google.maps.Polygon(options);
    this.buffer = polygon;
  }
}







        },
    }
</script>
