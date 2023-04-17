<template>
    <div>
      <b-container class="my-5">
        <b-row class="justify-content-center">
            <b-col cols="8">
                <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->

  
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide v-for="(item, index) in images" :key="index">
          <template #img>
           <router-link to="#">
            <div :style="{
                width:'100%' , height:'450px', 
                background:'url(' + item.url + ') no-repeat' , 'background-size': 'cover'
            }" @click="showModal(item.url)">
            </div>
           </router-link>
          </template>
        </b-carousel-slide>
  
       
      </b-carousel>
  
      
            </b-col>
        </b-row>
      </b-container>
      <b-modal  modal-class="ahmed" v-model="showImageModal" title="Image" hide-footer>
        <img :src="modalImageUrl" alt="Full-size image" class="full-image">
      </b-modal>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
            slide: 0,
            sliding: null,
            showImageModal: false,
            modalImageUrl: '',
            images: [
                { url: 'https://luqatah.brunchenapp.com/public/lost_images/1680039051.apple_iphone_13_pro_max_review_-_01_0.webp' },
                { url: 'https://luqatah.brunchenapp.com/public/lost_images/1680039417.call-icon-noisy-phone-flat-calling-symbol-vector-33282617.jpg' },
                { url: 'https://luqatah.brunchenapp.com/public/lost_images/1675277768.GTImageHandler.jpg' },
            // ...
            ],
        }
      },
      methods: {
        onSlideStart(slide) {
          this.sliding = true
        },
        onSlideEnd(slide) {
          this.sliding = false
        },
        showModal(url) {
      this.modalImageUrl = url;
      this.showImageModal = true;
    }

      }
    }
  </script>
  <style scoped>
  .full-image {
    max-width: 100%;
    max-height: 100vh;
  }
  
  .ahmed{
    max-width: 100%;
    min-height: 100vh;
  }
  </style>