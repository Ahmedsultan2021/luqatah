<template>
  <div class="py-5 px-5 my-5 mx-5">
    <input ref="autocompleteInput" placeholder="Search for a location" />
    <div style="width: 500px ; height:500px;" id="map" ref="map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      markers: [],
      directionsService: null,
      directionsRenderer: null
    };
  },
  mounted() {
    this.loadGoogleMapScript();
  },
  methods: {
    loadGoogleMapScript() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyCRMSE2oQeGa5vUdv7sSgAI4sTuTfvtAx8&callback=initMap";
      document.head.appendChild(script);
    },
    initMap() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.createMap(position.coords.latitude, position.coords.longitude);
          },
          error => {
            this.createMap(0, 0);
          }
        );
      } else {
        this.createMap(0, 0);
      }
    },
    createMap(lat, lng) {
      this.map = new google.maps.Map(this.$refs.map, {
        center: { lat, lng },
        zoom: 10,
        streetViewControl: false,
        draggableCursor: "default",
        mapTypeControl: true
      });

      this.initAutocomplete();
      this.initDirections();
    },
    initAutocomplete() {
      const input = this.$refs.autocompleteInput;
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", this.map);
      autocomplete.setFields(["place_id", "geometry", "name"]);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) return;

        const marker = this.createMarker(place.geometry.location, place.name);
        this.markers.push(marker);
        this.updateMarkerLabels();
        this.map.setCenter(place.geometry.location);

        if (this.markers.length === 1) {
          this.createBuffer();
        }
        if (this.markers.length > 1) {
          this.calculateDirections();
        }
      });
    },
    createMarker(position, name) {
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        draggable: true,
        label: "",
        title: name,
        icon: {
          url: "/images/marker.png",
          labelOrigin: new google.maps.Point(15, 15)
        }
      });

      marker.addListener("dragend", () => {
        const newLatLng = {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng()
        };
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: newLatLng }, (results, status) => {
          if (status === "OK" && results[0]) {
            const placeName = results[0].formatted_address;
            this.updateMarker(this.markers.indexOf(marker), {
              ...newLatLng,
              name: placeName
            });
            this.updateMarkerLabels();
            if (this.markers.length > 1) {
              this.calculateDirections();
            }
          }
        });
      });

      return marker;
    },
    updateMarker(index, updatedMarker) {
      this.markers[index] = {
        ...this.markers[index],
        ...updatedMarker
      };
    },
    updateMarkerLabels() {
      this.markers.forEach((marker, index) => {
        marker.setLabel({
          text: (index + 1).toString(),
          color: "black",
          fontSize: "12px",
          fontWeight: "bold"
        });
      });
    },
    initDirections() {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        map: this.map,
        suppressMarkers: true
      });
    },
    calculateDirections() {
      // Implement your directions calculation here
    },
    createBuffer() {
      // Implement your buffer creation logic here
    }
  },
  created() {
    window.initMap = this.initMap;
  }
};
</script>
