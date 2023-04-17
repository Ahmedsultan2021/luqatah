<script>
export default {
  data() {
    return {
      pricingData: [
        {
          title: "Free",
          price: 0,
          feature: ["Full Access", "Source Files"],
          button: "Buy Now",
        },
        {
          title: "Starter",
          price: 39,
          feature: ["Full Access", "Source Files", "Free Appointments"],
          button: "Get Started",
          isBest: true,
        },
        {
          title: "Professional",
          price: 59,
          feature: [
            "Full Access",
            "Source Files",
            "1 Domain Free",
            "Enhanced Security",
          ],
          button: "Try it Now",
        },
        {
          title: "Ultimate",
          price: 79,
          feature: [
            "Full Access",
            "Enhanced Security",
            "Source Files",
            "1 Domain Free",
            "Free Appointments",
          ],
          button: "Buy Now",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="row">
    <div
      class="col-lg-3 col-md-6 col-12 mt-4 pt-2"
      v-for="(item, index) of pricingData"
      :key="index"
    >
      <div
        class="card pricing-rates business-rate shadow bg-light border-0 rounded"
        :class="{
          'bg-white': item.isBest === true,
          'bg-light': item.isBest !== true,
        }"
      >
        <div
          class="ribbon ribbon-right ribbon-warning overflow-hidden"
          v-if="item.isBest"
        >
          <span class="text-center d-block shadow small h6">Best</span>
        </div>
        <div class="card-body">
          <h6 class="title font-weight-bold text-uppercase text-primary mb-4">
            {{ item.title }}
          </h6>
          <div class="d-flex mb-4">
            <span class="h4 mb-0 mt-2">$</span>
            <span class="price h1 mb-0">{{ item.price }}</span>
            <span class="h4 align-self-end mb-1">/mo</span>
          </div>

          <ul class="list-unstyled mb-0 pl-0">
            <li
              v-for="(feature, index) in item.feature"
              class="h6 text-muted mb-0"
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
    <!--end col-->
  </div>
</template>