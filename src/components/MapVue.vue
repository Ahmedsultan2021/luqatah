<template>
    <div >
        <input ref="autocompleteInput" placeholder="search for location" class="form-control mb-2" />
        <div id="map-container">
            <div id="floating-panel">
                <b>Travel Mode: </b>
                <select id="mode" @change="calculateDirections">
                    <option value="DRIVING">Driving</option>
                    <option value="WALKING">Walking</option>
                </select>
            </div>
            <div id="map" style="width:100%; height:600px"></div>
        </div>
        <input v-if="markers.length > 0" id="range" class="form-control" @change="createBuffer" type="range" min="0"
            max="100" step="1" v-model="bufferRadius">
        <b style="font-size: 12px;" v-if="markers.length > 0">The Range is {{ bufferRadius }} Km</b>
    </div>
</template>

<script>
export default {
    props:{
        markers: {
            type: Array,
            required: true,
        },
        bufferRadius: {
            type: Number,
            required: true
        },
        allPoints: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            directionsService: null,
            directionsRenderer: null,
            directionsCalculated: false,
            circle: null,
            directionsSteps: [],
            // allPoints: [],
            // bufferRadius: 1,
            buffer: "",
            map: "",
            // markers: [],
            line: '',
        }
    },
    created() {
        this.$on('new-marker-added', (marker) => {
            this.markers.push(marker);
        });
    },
    mounted() {
        //map
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "https://maps.googleapis.com/maps/api/js?libraries=places,geometry&key=AIzaSyCRMSE2oQeGa5vUdv7sSgAI4sTuTfvtAx8&callback=initMap";
        document.head.appendChild(script);
        // Define initMap function in global scope
        window.initMap = () => {

            // map1 (step One)
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log(position)
                        const map = new google.maps.Map(document.getElementById("map"), {
                            center: {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            },
                            zoom: 10,
                            streetViewControl: false, // disable street view control
                            draggableCursor: 'default', // change the draggable cursor to default
                            mapTypeControl: false, // enable map type control
                        });
                        this.map = map
                        const markers = [];
                        this.markers = markers;
                        this.$emit('markers-updated', this.markers);
                        this.map.addListener("click", (e) => {
                            // Create a marker for clicked position
                            const marker = new google.maps.Marker({
                                position: e.latLng,
                                draggable: true, // make the marker draggable
                                map: this.map,
                                title: "name",
                                label: '',
                                icon: {
                                    url: "/images/marker.png",
                                    labelOrigin: new google.maps.Point(15, 15)
                                },
                            });


                            // Add marker position to markers array
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: e.latLng }, (results, status) => {
                                if (status === "OK") {
                                    if (results[0]) {
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
                                        this.$emit('markers-updated', this.markers);
                                        this.markers.forEach((marker, index) => {
                                            marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                                        })
                                        this.map.setZoom(10);
                                        this.map.setCenter(e.latLng);

                                        if (this.markers.length > 1) {
                                            this.calculateDirections()
                                        }
                                        if (this.markers.length >= 1) {
                                            this.createBuffer()
                                        }

                                        // dragend marker
                                        this.markers.forEach((marker, index) => {
                                            /*  marker.marker.setLabel((index+1).toString()); */
                                            /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                                            marker.marker.addListener('dragend', () => {
                                                const newLatLng = {
                                                    lat: marker.marker.getPosition().lat(),
                                                    lng: marker.marker.getPosition().lng(),
                                                };
                                                const geocoder = new google.maps.Geocoder();
                                                geocoder.geocode({ location: newLatLng }, (results, status) => {
                                                    if (status === "OK") {
                                                        if (results[0]) {
                                                            const placeName = results[0].formatted_address;
                                                            newLatLng.name = placeName;
                                                            this.updateMarker(index, newLatLng);
                                                            if (this.markers.length > 1) {
                                                                this.calculateDirections()
                                                            }
                                                            if (this.markers.length >= 1) {
                                                                this.createBuffer()
                                                            }
                                                        }
                                                    }
                                                });
                                            });
                                        });

                                        // add info window
                                        // this.markers.forEach(markerObj => {
                                        //     const marker = markerObj.marker;
                                        //     const infoWindow = new google.maps.InfoWindow({
                                        //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                                        //     });

                                        //     marker.addListener('click', () => {
                                        //         infoWindow.open(map, marker);
                                        //     });
                                        // });
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
                        // Add click event listener to map


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
                        autocomplete.addListener("place_changed", () => {

                            const place = autocomplete.getPlace();
                            if (!place.geometry) {
                                return;
                            }
                            this.$refs.autocompleteInput.value = ''
                            this.$refs.autocompleteInput.placeholder = 'search another location'

                            // Add marker for selected place
                            const marker = new google.maps.Marker({
                                position: place.geometry.location,
                                map: this.map,
                                draggable: true, // make the marker draggable
                                label: '',
                                icon: {
                                    url: "/images/marker.png",
                                    labelOrigin: new google.maps.Point(15, 15)
                                },
                            });

                            // Add marker position to markers array
                            markers.push({
                                marker,
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                                name: place.name
                            });

                            this.markers = markers
                            this.$emit('markers-updated', this.markers);
                            this.markers.forEach((marker, index) => {
                                marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                            })
                            this.map.setZoom(10);
                            this.map.setCenter(place.geometry.location);
                            if (this.markers.length === 1) {
                                this.createBuffer()
                            }
                            if (this.markers.length > 1) {
                                this.calculateDirections()
                            }

                            // dragend marker
                            this.markers.forEach((marker, index) => {
                                /* marker.marker.addListener('click', () => this.animateMarker(index)); */
                                marker.marker.addListener('dragend', () => {
                                    const newLatLng = {
                                        lat: marker.marker.getPosition().lat(),
                                        lng: marker.marker.getPosition().lng(),
                                    };
                                    const geocoder = new google.maps.Geocoder();
                                    geocoder.geocode({ location: newLatLng }, (results, status) => {
                                        if (status === "OK") {
                                            if (results[0]) {
                                                const placeName = results[0].formatted_address;
                                                newLatLng.name = placeName;
                                                this.updateMarker(index, newLatLng);
                                                if (this.markers.length > 1) {
                                                    this.calculateDirections()
                                                }
                                                if (this.markers.length >= 1) {
                                                    this.createBuffer()
                                                }
                                            }
                                        }
                                    });
                                });
                            });

                            // add info window
                            // this.markers.forEach(markerObj => {
                            //     const marker = markerObj.marker;
                            //     const infoWindow = new google.maps.InfoWindow({
                            //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                            //     });

                            //     marker.addListener('click', () => {
                            //         infoWindow.open(map, marker);
                            //     });
                            // });
                        })

                        // Initialize directionsService and directionsRenderer
                        this.directionsService = new google.maps.DirectionsService();
                        this.directionsRenderer = new google.maps.DirectionsRenderer({
                            map: this.map,
                            suppressMarkers: true // Set to true to suppress "A" and "B" markers
                        });
                    },
                    () => {
                        console.log("Error: Your browser doesn't support geolocation.");
                        const map = new google.maps.Map(document.getElementById("map"), {
                            center: {
                                lat: 0,
                                lng: 0
                            },
                            zoom: 3,
                            streetViewControl: false, // disable street view control
                            draggableCursor: 'default', // change the draggable cursor to default
                            mapTypeControl: true, // enable map type control
                        });
                        this.map = map
                        const markers = [];
                        this.markers = markers;
                        this.$emit('markers-updated', this.markers);
                        this.map.addListener("click", (e) => {
                            // Create a marker for clicked position
                            const marker = new google.maps.Marker({
                                position: e.latLng,
                                draggable: true, // make the marker draggable
                                map: this.map,
                                title: "name",
                                label: '',
                                icon: {
                                    url: "/images/marker.png",
                                    labelOrigin: new google.maps.Point(15, 15)
                                },
                            });


                            // Add marker position to markers array
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: e.latLng }, (results, status) => {
                                if (status === "OK") {
                                    if (results[0]) {
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
                                        this.$emit('markers-updated', this.markers);
                                        this.markers.forEach((marker, index) => {
                                            marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                                        })
                                        this.map.setZoom(10);
                                        this.map.setCenter(e.latLng);

                                        if (this.markers.length > 1) {
                                            this.calculateDirections()
                                        }
                                        if (this.markers.length >= 1) {
                                            this.createBuffer()
                                        }

                                        // dragend marker
                                        this.markers.forEach((marker, index) => {
                                            /*  marker.marker.setLabel((index+1).toString()); */
                                            /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                                            marker.marker.addListener('dragend', () => {
                                                const newLatLng = {
                                                    lat: marker.marker.getPosition().lat(),
                                                    lng: marker.marker.getPosition().lng(),
                                                };
                                                const geocoder = new google.maps.Geocoder();
                                                geocoder.geocode({ location: newLatLng }, (results, status) => {
                                                    if (status === "OK") {
                                                        if (results[0]) {
                                                            const placeName = results[0].formatted_address;
                                                            newLatLng.name = placeName;
                                                            this.updateMarker(index, newLatLng);
                                                            if (this.markers.length > 1) {
                                                                this.calculateDirections()
                                                            }
                                                            if (this.markers.length >= 1) {
                                                                this.createBuffer()
                                                            }
                                                        }
                                                    }
                                                });
                                            });
                                        });

                                        // add info window
                                        // this.markers.forEach(markerObj => {
                                        //     const marker = markerObj.marker;
                                        //     const infoWindow = new google.maps.InfoWindow({
                                        //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                                        //     });

                                        //     marker.addListener('click', () => {
                                        //         infoWindow.open(map, marker);
                                        //     });
                                        // });
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
                        // Add click event listener to map


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
                        autocomplete.addListener("place_changed", () => {

                            const place = autocomplete.getPlace();
                            if (!place.geometry) {
                                return;
                            }
                            this.$refs.autocompleteInput.value = ''
                            this.$refs.autocompleteInput.placeholder = 'search another location'

                            // Add marker for selected place
                            const marker = new google.maps.Marker({
                                position: place.geometry.location,
                                map: this.map,
                                draggable: true, // make the marker draggable,
                                label: '',
                                icon: {
                                    url: "/images/marker.png",
                                    labelOrigin: new google.maps.Point(15, 15)
                                },
                            });

                            // Add marker position to markers array
                            markers.push({
                                marker,
                                lat: place.geometry.location.lat(),
                                lng: place.geometry.location.lng(),
                                name: place.name
                            });

                            this.markers = markers
                            this.$emit('markers-updated', this.markers);
                            this.markers.forEach((marker, index) => {
                                marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                            })
                            this.map.setZoom(10);
                            this.map.setCenter(place.geometry.location);
                            if (this.markers.length === 1) {
                                this.createBuffer()
                            }
                            if (this.markers.length > 1) {
                                this.calculateDirections()
                            }

                            // dragend marker
                            this.markers.forEach((marker, index) => {
                                /* marker.marker.addListener('click', () => this.animateMarker(index)); */
                                marker.marker.addListener('dragend', () => {
                                    const newLatLng = {
                                        lat: marker.marker.getPosition().lat(),
                                        lng: marker.marker.getPosition().lng(),
                                    };
                                    const geocoder = new google.maps.Geocoder();
                                    geocoder.geocode({ location: newLatLng }, (results, status) => {
                                        if (status === "OK") {
                                            if (results[0]) {
                                                const placeName = results[0].formatted_address;
                                                newLatLng.name = placeName;
                                                this.updateMarker(index, newLatLng);
                                                if (this.markers.length > 1) {
                                                    this.calculateDirections()
                                                }
                                                if (this.markers.length >= 1) {
                                                    this.createBuffer()
                                                }
                                            }
                                        }
                                    });
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
                )
            } else {
                console.log("Error: Your browser doesn't support geolocation.");
                const map = new google.maps.Map(document.getElementById("map"), {
                    center: {
                        lat: 0,
                        lng: 0
                    },
                    zoom: 3,
                    streetViewControl: false, // disable street view control
                    draggableCursor: 'default', // change the draggable cursor to default
                    mapTypeControl: true, // enable map type control
                });
                this.map = map
                const markers = [];
                this.markers = markers;
                this.$emit('markers-updated', this.markers);
                this.map.addListener("click", (e) => {
                    // Create a marker for clicked position
                    const marker = new google.maps.Marker({
                        position: e.latLng,
                        draggable: true, // make the marker draggable
                        map: this.map,
                        label: '',
                        title: "name",
                        icon: {
                            url: "/images/marker.png",
                            labelOrigin: new google.maps.Point(15, 15)
                        },
                    });


                    // Add marker position to markers array
                    const geocoder = new google.maps.Geocoder();
                    geocoder.geocode({ location: e.latLng }, (results, status) => {
                        if (status === "OK") {
                            if (results[0]) {
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
                                this.$emit('markers-updated', this.markers);
                                this.markers.forEach((marker, index) => {
                                    marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                                })
                                this.map.setZoom(10);
                                this.map.setCenter(e.latLng);

                                if (this.markers.length > 1) {
                                    this.calculateDirections()
                                }
                                if (this.markers.length >= 1) {
                                    this.createBuffer()
                                }

                                // dragend marker
                                this.markers.forEach((marker, index) => {
                                    /*  marker.marker.setLabel((index+1).toString()); */
                                    /*  marker.marker.addListener('click', () => this.animateMarker(index)); */
                                    marker.marker.addListener('dragend', () => {
                                        const newLatLng = {
                                            lat: marker.marker.getPosition().lat(),
                                            lng: marker.marker.getPosition().lng(),
                                        };
                                        const geocoder = new google.maps.Geocoder();
                                        geocoder.geocode({ location: newLatLng }, (results, status) => {
                                            if (status === "OK") {
                                                if (results[0]) {
                                                    const placeName = results[0].formatted_address;
                                                    newLatLng.name = placeName;
                                                    this.updateMarker(index, newLatLng);
                                                    if (this.markers.length > 1) {
                                                        this.calculateDirections()
                                                    }
                                                    if (this.markers.length >= 1) {
                                                        this.createBuffer()
                                                    }
                                                }
                                            }
                                        });
                                    });
                                });

                                // add info window
                                // this.markers.forEach(markerObj => {
                                //     const marker = markerObj.marker;
                                //     const infoWindow = new google.maps.InfoWindow({
                                //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                                //     });

                                //     marker.addListener('click', () => {
                                //         infoWindow.open(map, marker);
                                //     });
                                // });
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
                // Add click event listener to map


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
                autocomplete.addListener("place_changed", () => {

                    const place = autocomplete.getPlace();
                    if (!place.geometry) {
                        return;
                    }
                    this.$refs.autocompleteInput.value = ''
                    this.$refs.autocompleteInput.placeholder = 'search another location'

                    // Add marker for selected place
                    const marker = new google.maps.Marker({
                        position: place.geometry.location,
                        map: this.map,
                        draggable: true, // make the marker draggable
                        label: '',
                        icon: {
                            url: "/images/marker.png",
                            labelOrigin: new google.maps.Point(15, 15)
                        },
                    });

                    // Add marker position to markers array
                    markers.push({
                        marker,
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                        name: place.name
                    });

                    this.markers = markers
                    this.$emit('markers-updated', this.markers);
                    this.markers.forEach((marker, index) => {
                        marker.marker.setLabel({ text: (index + 1).toString(), color: "black", fontSize: "12px", fontWeight: "bold" })
                    })
                    this.map.setZoom(10);
                    this.map.setCenter(place.geometry.location);
                    if (this.markers.length === 1) {
                        this.createBuffer()
                    }
                    if (this.markers.length > 1) {
                        this.calculateDirections()
                    }

                    // dragend marker
                    this.markers.forEach((marker, index) => {
                        /* marker.marker.addListener('click', () => this.animateMarker(index)); */
                        marker.marker.addListener('dragend', () => {
                            const newLatLng = {
                                lat: marker.marker.getPosition().lat(),
                                lng: marker.marker.getPosition().lng(),
                            };
                            const geocoder = new google.maps.Geocoder();
                            geocoder.geocode({ location: newLatLng }, (results, status) => {
                                if (status === "OK") {
                                    if (results[0]) {
                                        const placeName = results[0].formatted_address;
                                        newLatLng.name = placeName;
                                        this.updateMarker(index, newLatLng);
                                        if (this.markers.length > 1) {
                                            this.calculateDirections()
                                        }
                                        if (this.markers.length >= 1) {
                                            this.createBuffer()
                                        }
                                    }
                                }
                            });
                        });
                    });

                    // add info window
                    // this.markers.forEach(markerObj => {
                    //     const marker = markerObj.marker;
                    //     const infoWindow = new google.maps.InfoWindow({
                    //         content: `<div><b>${markerObj.name}</b><br>( ${markerObj.lat} , ${markerObj.lng}</div>`
                    //     });

                    //     marker.addListener('click', () => {
                    //         infoWindow.open(map, marker);
                    //     });
                    // });
                })

                // Initialize directionsService and directionsRenderer
                this.directionsService = new google.maps.DirectionsService();
                this.directionsRenderer = new google.maps.DirectionsRenderer({
                    map: this.map,
                    suppressMarkers: true // Set to true to suppress "A" and "B" markers
                });
            }
        }
        /* -------------end map1------------- */



    },
    methods: {
        calculateDirections() {
            // Clear allPoints array
            this.allPoints = [];
            const selectedMode = document.getElementById("mode").value;
            // Ensure there are at least two markers to calculate directions
            if (this.markers.length < 2) {
                alert("Please add at least two markers to calculate directions.");
                return;
            }

            // Create an array of LatLng objects from the markers array
            const waypoints = this.markers.map((marker) => {
                return { location: new google.maps.LatLng(marker.lat, marker.lng) };
            });
            this.waypoints = waypoints

            // Create a DirectionsRequest object
            const request = {
                origin: new google.maps.LatLng(this.markers[0].lat, this.markers[0].lng),
                destination: new google.maps.LatLng(
                    this.markers[this.markers.length - 1].lat,
                    this.markers[this.markers.length - 1].lng
                ),
                waypoints: waypoints.slice(1, -1),
                optimizeWaypoints: true,
                travelMode: google.maps.TravelMode[selectedMode],
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
                    // Set the same directions on the directionsRenderer2 object
                    // Save response to component data
                    this.directionsResponse = response;

                    // Add direction coordinates to allPoints array


                    /* this.createBuffer(); */
                } else {
                    // Draw a line between the markers
                    const path = this.markers.map((marker) => new google.maps.LatLng(marker.lat, marker.lng));
                    const polyline = new google.maps.Polyline({
                        path: path,
                        strokeColor: "#FF0000",
                        strokeOpacity: 1.0,
                        strokeWeight: 3,
                        map: this.map,
                    });
                    // Save the line to component data
                    this.line = polyline;
                    const data = []
                    for (let i = 0; i < this.markers.length; i++) {
                        const latLng = {
                            lat: this.markers[i].lat,
                            lng: this.markers[i].lng,
                        };
                        data.push(latLng);
                        if (i === this.markers.length - 1) {
                            // Add the final marker to the allPoints array
                            const latLng = {
                                lat: this.markers[i].lat,
                                lng: this.markers[i].lng,
                            };
                            data.push(latLng);
                        }
                        this.allPoints = data;
                        this.directionsCalculated = true;
                    }
                    this.createBuffer()
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
                    strokeColor: "#007aff",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#007aff",
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
                /* console.log("line",lineString) */
                const buffer = turf.buffer(lineString, this.bufferRadius, { units: "kilometers" });
                const coordinates = buffer.geometry.coordinates[0].map((point) => {
                    return { lat: point[1], lng: point[0] };
                });
                // Create a new buffer polygon
                const options = {
                    paths: coordinates,
                    strokeColor: "#007aff",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#007aff",
                    fillOpacity: 0.35,
                    map: this.map,
                };
                const polygon = new google.maps.Polygon(options);
                this.buffer = polygon;
            }

        },
        updateMarker(index, newLatLng) {
            // update the marker's position and store the new lat/lng in this.markers
            this.markers[index].lat = newLatLng.lat;
            this.markers[index].lng = newLatLng.lng;
            this.markers[index].name = newLatLng.name;
            this.markers[index].marker.setPosition(newLatLng);
        },

    },
}
</script>

<style lang="scss" scoped></style>