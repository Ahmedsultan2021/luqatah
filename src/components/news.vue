<script>
/**
 * News component
 */
export default {
  data() {
    return {
      newsData: [
        {
          image: "images/blog/01.jpg",
          title: "Design your apps in your own way",
        },
        {
          image: "images/blog/02.jpg",
          title: "How apps is changing the IT world",
        },
        {
          image: "images/blog/03.jpg",
          title: "Smartest Applications for Business",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="row">
    <div
      class="col-lg-4 col-md-6 mt-4 pt-2"
      v-for="(item, index) of newsData"
      :key="index"
    >
      <div class="card blog rounded border-0 shadow">
        <div class="position-relative">
          <img
            :src="`${item.image}`"
            class="card-img-top rounded-top"
            alt="..."
          />
          <div class="overlay rounded-top bg-dark"></div>
        </div>
        <div class="card-body content">
          <h5>
            <a href="javascript:void(0)" class="card-title title text-dark">{{
              item.title
            }}</a>
          </h5>
          <div class="post-meta d-flex justify-content-between mt-3">
            <ul class="list-unstyled mb-0">
              <li class="list-inline-item mr-2 mb-0">
                <a href="javascript:void(0)" class="text-muted like"
                  ><i class="mdi mdi-heart-outline mr-1"></i>33</a
                >
              </li>
              <li class="list-inline-item">
                <a href="javascript:void(0)" class="text-muted comments"
                  ><i class="mdi mdi-comment-outline mr-1"></i>08</a
                >
              </li>
            </ul>
            <router-link to="/page-blog-detail" class="text-muted readmore"
              >Read More <i class="mdi mdi-chevron-right"></i
            ></router-link>
          </div>
        </div>
        <div class="author">
          <small class="text-light user d-block"
            ><i class="mdi mdi-account"></i> Calvin Carlo</small
          >
          <small class="text-light date"
            ><i class="mdi mdi-calendar-check"></i> 13th August, 2019</small
          >
        </div>
      </div>
    </div>
    <!--end col-->
  </div>
  <!--end row-->
</template>