<template>
  <div>
    <router-link to="#" @click.native.prevent="onThumbClick(0)">
     <div class="text-center mt-3">
      <!-- <img :src="thumb" alt="thumbnail" style="" :class="className" /> -->
      <b-avatar :src="thumb" rounded variant="link" size="20rem" :class="className"></b-avatar>
     </div>
    </router-link>
    <LightGallery
      :images="[large]"
      :index="photoIndex"
      :disable-scroll="true"
      @close="handleHide"
    />
  </div>
</template>

<script>
import { LightGallery } from "vue-light-gallery";

export default {
  props: ["thumb", "large", "className" ],
  components: {
    LightGallery
  },
  data() {
    return {
      photoIndex: null
    };
  },
  methods: {
    onThumbClick(index) {
      this.photoIndex = index;
    },
    handleHide() {
      this.photoIndex = null;
    },
  }
};
</script>
