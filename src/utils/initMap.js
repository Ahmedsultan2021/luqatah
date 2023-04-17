// initMap.js
export function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 8,
    });
  }