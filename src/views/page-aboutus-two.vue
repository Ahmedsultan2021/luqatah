<template>
  <div>
    <section class="wrapper">
      <div class="container">
        <div class="row">
          <div class="col text-center mb-5">
            <h1 class="display-4">Bootstrap 4 Cards With Background Image</h1>
            <p
              class="lead"
            >Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas pulvinar.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4" v-for="(item, index) of myLost" :key="index">
            <div
              class="card text-white card-has-bg click-col"
              style="background-image:url('https://source.unsplash.com/600x900/?tech,street');"
            >
              <img
                class="card-img d-none"
                src="https://source.unsplash.com/600x900/?tech,street"
                alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?"
              />
              <div class="card-img-overlay d-flex flex-column">
                <div class="card-body">
                  <small class="card-meta mb-2">Announcement Number {{item.id}}</small>
                  <h4 class="card-title mt-0">
                    <a
                      class="text-white"
                      herf="#"
                    >Goverment Lorem Ipsum Sit Amet Consectetur dipisi?</a>
                  </h4>
                  <small>
                    <i class="far fa-clock"></i> October 15, 2020
                  </small>
                </div>
                <div class="card-footer">
                  <div class="media">
                    <img
                      class="mr-3 rounded-circle"
                      src="https://assets.codepen.io/460692/internal/avatars/users/default.png"
                      alt="Generic placeholder image"
                      style="max-width:50px"
                    />
                    <div class="media-body">
                      <h6 class="my-0 text-white d-block">Oz Coruhlu</h6>
                      <small>Director of UI/UX</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "../axios.config";
export default {
    data() {
        return {
            myLost:[],
        }
    },
    methods:{
        getLost(){
            /* this.loading=false */
            axios.get('user/my_lost')
            .then((resp)=>{
               /*  this.lostLastpage = resp.data.data.last_page
                if(this.lostLastpage > 1){
                    this.lostPagination = true
                } */
                this.myLost = resp.data.data.lost.map((lost)=>{
                    return{
                        id : lost.id,
                        title:lost.title,
                        start_date:lost.start_date,
                        end_data:lost.end_data,
                        user_status:lost.user_status,
                        
                    }
                })
               /*  this.loading = true */
            }).catch((err)=>{
                console.log(err)
            })
        },
    },
    mounted() {
        this.getLost()
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 10vh;
}
//post card styles

.card {
  border: none;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 450px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-height: 350px;
  }

  @media (max-width: 420px) {
    min-height: 300px;
  }

  &.card-has-bg {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center center;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
      transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

      .card-img-overlay {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
        background: rgb(35, 79, 109);
        background: linear-gradient(
          0deg,
          rgba(4, 69, 114, 0.5) 0%,
          rgba(4, 69, 114, 1) 100%
        );
      }
    }
  }
  .card-footer {
    background: none;
    border-top: none;
    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
  }
  .card-meta {
    color: white;
    font-weight: 900;
  }
  .card-body {
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }
    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(35, 79, 109);
    background: linear-gradient(
      0deg,
      rgba(35, 79, 109, 0.3785889355742297) 0%,
      rgba(69, 95, 113, 1) 100%
    );
  }
}
@media (max-width: 767px) {
}
</style>