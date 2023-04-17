<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  props: {
    testimonialData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<template>
  <carousel id="customer-testi" :per-page="3" dir="ltr" :autoplay="true" :loop="true">
    <Slide v-for="item in testimonialData" :key="item.id">
      <div class="media customer-testi m-2">
        <img
          :src="`${item.profile}`"
          class="avatar avatar-small mr-3 rounded shadow"
          alt=""
        />
        <div
          class="media-body content p-3 shadow rounded bg-white position-relative"
        >
          <ul class="list-unstyled mb-0">
            <li class="list-inline-item">
              <i class="mdi mdi-star text-warning"></i>
            </li>
            <li class="list-inline-item">
              <i class="mdi mdi-star text-warning"></i>
            </li>
            <li class="list-inline-item">
              <i class="mdi mdi-star text-warning"></i>
            </li>
            <li class="list-inline-item">
              <i class="mdi mdi-star text-warning"></i>
            </li>
            <li class="list-inline-item">
              <i class="mdi mdi-star text-warning"></i>
            </li>
          </ul>
          <p class="text-muted mt-2">" {{ item.message }} "</p>
          <h6 class="text-primary">
            - {{ item.name }}
            <small class="text-muted">{{ item.designation }}</small>
          </h6>
        </div>
      </div>
    </Slide>
  </carousel>
</template>