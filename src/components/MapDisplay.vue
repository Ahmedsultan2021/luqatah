<template>
    <div>
      <b-card>
        <div id="map" style="height: 400px; width: 100%;"></div>
      </b-card>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (this.location) {
        this.initMap();
      }
    },
    watch: {
      locations: {
        immediate: true,
        handler(newVal) {
          if (newVal && newVal.length > 0) {
            this.initMap();
          }
        },
      },
    },
    methods: {
      initMap() {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
        "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyCRMSE2oQeGa5vUdv7sSgAI4sTuTfvtAx8&callback=initMap";
        document.head.appendChild(script);
  
        window.initMap = () => {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: {
              lat: parseFloat(this.locations[0].latitude),
              lng: parseFloat(this.locations[0].longitude),
            },
            zoom: 14,
          });
  
          this.locations.forEach(location => {
            new google.maps.Marker({
              position: {
                lat: parseFloat(location.latitude),
                lng: parseFloat(location.longitude),
              },
              map,
              title: location.name,
            });
          });
  
          const directionsPath = new google.maps.Polyline({
            path: this.lineString.coordinates.map(coord => ({
              lat: coord[1],
              lng: coord[0],
            })),
            geodesic: true,
            strokeColor: 'rgba(1, 1, 196, 0.719)',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            map,
          });
  
          const bufferCircle = new google.maps.Circle({
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#0000FF',
            fillOpacity: 0.35,
            map,
            center: {
              lat: parseFloat(this.locations[0].latitude),
              lng: parseFloat(this.locations[0].longitude),
            },
            radius: this.locationRange * 1000, // Convert to meters
          });
  
          // Add click event listener to the map
          map.addListener('click', event => {
            this.addMarker(event.latLng); // Call the addMarker method
          });
        };
      },
  
      addMarker(latLng) {
        const newLocation = {
          latitude: latLng.lat(),
          longitude: latLng.lng(),
          name: 'New Marker', // You can customize this
        };
  
        this.locations.push(newLocation);
        this.createMarkers();
      },
  
      createMarkers() {
        // Clear existing markers
        this.markers.forEach(marker => {
          marker.setMap(null);
        });
  
        this.markers = [];
  
        this.locations.forEach(location => {
          const marker = new google.maps.Marker({
            position: {
              lat: parseFloat(location.latitude),
              lng: parseFloat(location.longitude),
            },
            map: this.map,
            title: location.name,
          });
          this.markers.push(marker);
        });
      },
    },
    data() {
      return {
        map: null,
        markers: [], // Store created markers
      };
    },
    props: {
      locations: Array,
      lineString: Object,
      locationRange: Number,
    },
  };
  </script>
  