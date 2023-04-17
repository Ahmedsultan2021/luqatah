<script>
export default {
  props: {
    pricingData: {
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
      class="col-md-4 col-12 mt-4 pt-2"
      v-for="(item, index) of pricingData"
      :key="index"
    >
      <div
        class="card pricing-rates business-rate shadow bg-light rounded text-center border-0"
      >
        <div
          class="ribbon ribbon-right ribbon-warning overflow-hidden"
          v-if="item.isBest === true"
        >
          <span class="text-center d-block shadow small h6">Best</span>
        </div>

        <div class="card-body py-5">
          <h6 class="title font-weight-bold text-uppercase text-primary mb-4">
            {{ item.title }}
          </h6>
          <div class="d-flex justify-content-center mb-4">
            <span class="h4 mb-0 mt-2">$</span>
            <span class="price h1 mb-0">{{ item.price }}</span>
            <span class="h4 align-self-end mb-1">/mo</span>
          </div>

          <ul class="list-unstyled mb-0 pl-0">
            <li
              class="h6 text-muted mb-0"
              v-for="(feature, index) in item.feature"
              :key="index"
            >
              <span class="text-primary h5 mr-2"
                ><i class="uil uil-check-circle align-middle"></i></span
              >{{ feature }}
            </li>
          </ul>
          <a href="javascript:void(0)" class="btn btn-primary mt-4">{{
            item.button
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>