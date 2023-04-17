<template>
    <div>
        <div id="map" style="height:400px; width:100%"></div>
    </div>
</template>

<script>
    export default {
       data() {
        return {
            markers:[
                {
                    "lat": 31.116180000000004,
                    "lng": 29.97314
                },
                {
                    "lat": 31.116130000000002,
                    "lng": 29.972960000000004
                },
                {
                    "lat": 31.116130000000002,
                    "lng": 29.972960000000004
                },
                {
                    "lat": 31.116930000000004,
                    "lng": 29.972490000000004
                },
            ]
        }
       },
       mounted() {
        
       },
    }
</script>

<style lang="scss" scoped>

</style>