<script>
import Switcher from "@/components/switcher";

/**
 * Page-thankyou component
 */
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <!-- Hero Start -->
    <section class="bg-home bg-light d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="text-center">
              <div
                class="icon d-flex align-items-center justify-content-center bg-soft-primary rounded-circle mx-auto"
                style="height: 90px; width: 90px"
              >
                <i class="uil uil-thumbs-up align-middle h1 mb-0"></i>
              </div>
              <h1 class="my-4 font-weight-bold">Thank You</h1>
              <p class="text-muted para-desc mx-auto">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered bootstrap4 html page.
              </p>
              <router-link to="/" class="btn btn-soft-primary mt-3"
                >Go To Home</router-link
              >
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Hero End -->
    <Switcher />
  </div>
</template>