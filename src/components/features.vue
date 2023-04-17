<script>
export default {
  props: {
    featuresData: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
};
</script>

<template>
  <div class="row">
    <div
      class="col-md-4 col-12"
      v-for="(item, index) in featuresData"
      :key="index"
    >
      <div class="features text-center">
        <div class="image position-relative d-inline-block">
          <i :class="`${item.icon} h1 text-primary`"></i>
        </div>

        <div class="content mt-4">
          <h5>{{item.title}}</h5>
          <p class="text-muted mb-0">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>

    <!--end col-->
  </div>
</template>