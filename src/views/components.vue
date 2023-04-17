<template>
  <div >
      <b-container fluid="xl">
          <b-row class="rowHeight " >
              <b-col lg="6" md="6" sm="6" xs="6" >
                <div class="cards-class div-profile" >
                  <b-card  class="flex-row listing-card-container   w-sm-100 profile-card" no-body>
                      <div  class="w-40 position-relative">
                          <router-link to="#">
                              <b-img  class="card-image-left-align" :src="thumb"   alt="Responsive image"></b-img>
                          </router-link>
                      </div>
                      <div class="w-100 d-flex align-items-center">
                          <b-card-body>
                              <router-link to="#">
                                <p class="font-weight-medium mb-0 account_name" >{{currentUser.full_name}}</p>
                                <p class="text-muted mb-0 text-small account_email">{{currentUser.email}}</p>
                              </router-link>
                          </b-card-body>
                      </div>
                  </b-card>
                  </div>
                  
              </b-col>
              <b-col lg="6" md="6" sm="6" xs="6" >
                <div class="cards-class" >
                  <b-card  class="flex-row listing-card-container   w-sm-100 announcement-card" no-body>
                      <div  class="w-40 position-relative">
                          <router-link to="#">
                              <b-img @click="goToNewAnn"  class="card-image-left-align" src="/assets/img/speaker.svg"  fluid alt="Responsive image"></b-img>
                          </router-link>
                      </div>
                      <div class="w-100 d-flex align-items-center">
                          <b-card-body>
                              <router-link to="#">
                                  <h5 @click="goToNewAnn"  class="card-content-size">Create an Announcement</h5>
                              </router-link>
                          </b-card-body>
                      </div>
                  </b-card>
                  <b-card class="flex-row listing-card-container   w-sm-100 search-card" no-body style=" border:double 1px rgba(52, 220, 122, 0.35);">
                      <div class="w-40 position-relative">
                          <router-link to="#">
                              <b-img  class="card-image-left-align searchImg" src="/assets/img/search.svg"  fluid alt="Responsive image"></b-img>
                          </router-link>
                      </div>
                      <div class="w-100 d-flex align-items-center">
                          <b-card-body>
                              <router-link to="#">
                                  <h5  class="card-content-size">Search Announcements</h5>
                              </router-link>
                          </b-card-body>
                      </div>
                  </b-card>
                </div>
              </b-col>
            <b-col cols="12">
                <b-row >
                  <b-col cols="12" class="taps-title"><p>My Announcements</p></b-col>
                  <b-col class="tabs-class">
                    <div>
                      <b-tabs  content-class="mt-3">
                        <b-tab title="Lost Announcements" active>
                          <b-table v-if="myLost"  tbody-class="text-two text-muted text-center" style="height:500px"
                                    thead-class="text-two text-center"  
                                    hover no-border-collapse responsive :items="myLost" :fields="lost_fields">

                            <template #cell(Matching_findings)="data" >
                              <b-button v-if="data"  style="border-radius:3px " size="sm" variant="primary">View Matches</b-button> 
                            </template>
                            <template #cell(Notify_me)="data">
                              <b-form-checkbox   v-model="data.item.status" switch size="lg"></b-form-checkbox>
                            </template>
                            <template #cell(more)="data">
                              <div>
                                <b-dropdown v-if="data" size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                  <template #button-content>
                                    <i  class="simple-icon-options-vertical text-dark"></i><span class="sr-only">Search</span>
                                  </template>
                                  <b-dropdown-item href="#"><i class="simple-icon-eye "></i><b class="ml-2">View Details</b> </b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-puzzle"></i><b class="ml-2">Show matching</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-close"></i><b class="ml-2">Deactivate</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="iconsminds-bookmark"></i><b class="ml-2">Bookmark</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-trash"></i><b class="ml-2">Delete</b></b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </template>
                          </b-table>
                          <b-row>
                            <b-colxx xxs="12">
                              <b-pagination-nav  v-if="pagination" class="justify-content-center pagination" :number-of-pages="lastpageLost" :link-gen="linkGenLost" :value="currentPageLost" :per-page="50" align="center"  @change="(a)=>changePageLost(a)">
                                <template v-slot:next-text>
                                  <i class="simple-icon-arrow-right" />
                                </template>
                                <template v-slot:prev-text>
                                  <i class="simple-icon-arrow-left" />
                                </template>
                                <template v-slot:first-text>
                                  <i class="simple-icon-control-start" />
                                </template>
                                <template v-slot:last-text>
                                  <i class="simple-icon-control-end" />
                                </template>
                              </b-pagination-nav>
                            </b-colxx>
                          </b-row>
                          <div v-if="empty1" class="text-center">
                            <b-jumbotron header="Empty" lead="You don’t have any Announcements yet.">
                              <b-button variant="primary" >Create Announcement</b-button>
                            </b-jumbotron>
                          </div>
                        </b-tab>
                        <b-tab  title="Finding Announcements">
                          <b-table  v-if="MyFound" tbody-class="text-two text-muted text-center" 
                                    thead-class="text-two text-center"  
                                    hover no-border-collapse responsive :items="MyFound" :fields="found_fields">
                            <template #cell(Matching_findings)="data" >
                              <b-button v-if="data"  style="border-radius:3px " variant="primary">View Matches</b-button> 
                            </template>
                            <template #cell(Notify_me)="data">
                              <b-form-checkbox   v-model="data.item.status" switch size="lg"></b-form-checkbox>
                            </template>
                            <template #cell(more)="data">
                              <div>
                                <b-dropdown v-if="data" size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
                                  <template #button-content>
                                    <i  class="simple-icon-options-vertical text-dark"></i><span class="sr-only">Search</span>
                                  </template>
                                  <b-dropdown-item href="#"><i class="simple-icon-eye "></i><b class="ml-2">View Details</b> </b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-puzzle"></i><b class="ml-2">Show matching</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-close"></i><b class="ml-2">Deactivate</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="iconsminds-bookmark"></i><b class="ml-2">Bookmark</b></b-dropdown-item>
                                  <b-dropdown-item href="#"><i class="simple-icon-trash"></i><b class="ml-2">Delete</b></b-dropdown-item>
                                </b-dropdown>
                              </div>
                            </template>
                          </b-table>
                          <b-row>
                            <b-colxx xxs="12">
                              <b-pagination-nav  v-if="pagination" class="justify-content-center pagination" :number-of-pages="lastpageFound" :link-gen="linkGenFound" :value="currentPageFound" :per-page="50" align="center"  @change="(a)=>changePageFound(a)">
                                <template v-slot:next-text>
                                  <i class="simple-icon-arrow-right" />
                                </template>
                                <template v-slot:prev-text>
                                  <i class="simple-icon-arrow-left" />
                                </template>
                                <template v-slot:first-text>
                                  <i class="simple-icon-control-start" />
                                </template>
                                <template v-slot:last-text>
                                  <i class="simple-icon-control-end" />
                                </template>
                              </b-pagination-nav>
                            </b-colxx>
                          </b-row>
                          <div v-if="empty2" class="text-center">
                            <b-jumbotron header="Empty" lead="You don’t have any Announcements yet.">
                              <b-button variant="primary" >Create Announcement</b-button>
                            </b-jumbotron>
                          </div>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </b-col>
                </b-row>
            </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>

import { mapGetters, mapMutations, mapActions } from "vuex";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
/* import TopnavVue from '../../../containers/navs/Topnav.vue'; */
import axios from '../axios.config'
/* import { adminRoot } from '../constants/config'; */
export default {
  components:{
      "v-select": vSelect,
  },
  data() {
      return {
          thumb:'/assets/img/user.png',
          announcementImg:'/assets/img/speaker.svg',
          searchImg:'/assets/img/search.svg',
          myLost:'',
          MyFound:'',
          pagination:"",
          empty1:false,
          empty2:false,
          lastpageLost:1,
          currentPageLost:1,
          lastpageFound:1,
          currentPageFound:1,
         /*  adminRoot, */
          lost_fields:[
            {
              key:'Announcement_Number',
              sortable:true,
            },
            {
              key:'Announcement_Title',
              sortable:true,
            },
            {
              key:'Creation_Date',
              sortable:true,
            },
            {
              key:'Last_modification_date',
              sortable:true,
            },
            {
              key:'Matching_findings',
              sortable:true,
            },
            {
              key:'Notify_me',
              sortable:true,
            },
            {
              key:'More',
              sortable:false,
            },

          ],
          found_fields:[
          {
              key:'Announcement_Number',
              sortable:true,
            },
            {
              key:'Announcement_Title',
              sortable:true,
            },
            {
              key:'Creation_Date',
              sortable:true,
            },
            {
              key:'Last_modification_date',
              sortable:true,
            },
            {
              key:'Matching_findings',
              sortable:true,
            },
            {
              key:'Notify_me',
              sortable:true,
            },
            {
              key:'More',
              sortable:false,
            },
          ]
      }
  },
  computed: {
  ...mapGetters({
    currentUser: "currentUser",
  })
},
methods:{
  linkGenLost(pageNum) {
          return "#page/" + pageNum + "/foobar";
          
      },
  changePageLost(pageNum) {
      this.currentPageLost = pageNum;
      console.log(this.currentPageLost)
        this.getMyLost()
  },
  getMyLost(){
    this.pagination=1
    axios.get('user/my_lost?page='+this.currentPageLost)
    .then((resp)=>{
      this.lastpageLost=resp.data.data.last_page
      if(resp.data.data.lost.length == 0){
       this.empty1 = true
      }
      else{
        this.myLost = resp.data.data.lost.map((lost)=>{
        return{
          Announcement_Number : lost.id,
          Announcement_Title : lost.title,
          Creation_Date : lost.start_date,
          Last_modification_date : lost.end_data,
          status:lost.status

        }
      })
      }
    })
    .catch((err)=>{
      alert(err)
    })

  },

  linkGenFound(pageNum) {
          return "#page/" + pageNum + "/foobar";
          
      },
  changePageFound(pageNum) {
      this.currentPageFound = pageNum;
      console.log(this.currentPageFound)
        this.getMyFound()
  },
  getMyFound(){
    this.pagination = 1
    axios.get('user/my_found?page='+this.currentPageFound)
    .then((resp)=>{
      this.lastpageFound = resp.data.data.last_page































      
      if(resp.data.data.founds.length == 0){
          this.empty2 = true
      }else{
        this.MyFound = resp.data.data.founds.map((lost)=>{
        return{
          Announcement_Number : lost.id,
          Announcement_Title : lost.title,
          Creation_Date : lost.start_date,
          Last_modification_date : lost.end_data,
          status:lost.status

        }
      })
      }
    })
    .catch((err)=>{
      alert(err)
    })

  },
  goToNewAnn(){
 /*    window.location.replace(`${adminRoot}/user/newAnnouncement`); */
  }
},
mounted(){
  /* //...............
      get announcements 
      
      1- get lost */
      this.getMyLost()
      
      /*2- get found  */
      this.getMyFound()
},
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
*{
  font-family: Poppins;
  
}
body{
  background: white;
  
  
}
.tabs-class{
  padding: 0 110px 0 110px
}
.taps-title{
  padding-left: 90px;
  margin-bottom: 20px;
  margin-top: 60px;
  font-size: 18px;
  font-weight: 500;
  color: #202842;
}
.rowHeight{
    
  margin: 150px 0 300px 0 
}
.imgSize{
  height: 93px;
}
.account_name{
  font-size: 22px;
  padding: 5px;
}
.account_email{
  font-size: 15px;
  padding: 5px;
}
 p{
  font-size: 18px;
  padding: 5px;
} 
.card-image-left-align{
  width: 110px;
  border-top-left-radius: calc(0.15rem - 1px);
  border-bottom-left-radius: calc(0.15rem - 1px);
    height: 100px; 
  object-fit: contain;
}
.announcement-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 100%;
  margin: 0 0 0 70px;
  border-radius: 4px;
  
}


.search-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 100%;
  margin: 0 90px 0 0;
  border-radius: 4px;
  
}
.profile-card{
  border:none;
  height: 90%;
  margin: 0 0 0 90px;
}
.searchImg{
  padding: 11px;
}
.cards-class{
  display: flex;   
  justify-content: space-between;
}
.card-content-size{
  font-size: 16px;
  font-weight: 500;
}
/* .card-content-size :hover{

  color: #e48c00;
} */



@media screen and (max-width: 1440px){
body{
    background: white;
    position: relative;
}
.rowHeight{
  height:  900px;
  margin: 150px 0 0 0 
}
.tabs-class{
  padding: 0 90px 0 90px;
}
.taps-title{
  padding-left: 90px;
  margin-bottom: 20px;
  margin-top: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #202842;
}
.imgSize{
  height: 93px;
}
.account_name{
  font-size: 18px;
  padding: 5px;
}
.account_email{
  font-size: 14px;
  padding: 5px;
}
 
.card-image-left-align{
  width: 110px;
  border-top-left-radius: calc(0.15rem - 1px);
  border-bottom-left-radius: calc(0.15rem - 1px);
    height: 100px; 
  object-fit: contain;
}
.announcement-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 100%;
  margin: 0 15px 0 0;
  border-radius: 4px;
  width:350px
  
}


.search-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 100%;
  margin: 0 90px 0 0;
  border-radius: 4px;
  width:330px
}
.profile-card{
  border:none;
  height: 90%;
  margin: 0 0 0 90px;
}
.searchImg{
  padding: 11px;
}
.cards-class{
  display: flex;   
  justify-content: space-between;
  width:100%;

}
.card-content-size{
  font-size: 12px;
  font-weight: 500;
}

  }


  @media screen and (max-width: 1024px){
    body{
          background: white;
          /* background-size: contain; */
        position: relative;
}
.rowHeight{
 
  margin: 150px 0 0 0 
}
.imgSize{
  height: 93px;
}
.tabs-class{
  padding: 0 10px 0 10px;
}
.taps-title{
  padding-left: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #202842;
}
.account_name{
  font-size: 18px;
  padding: 5px;
}
.account_email{
  font-size: 14px;
  padding: 5px;
}
 
.card-image-left-align{
  width: 110px;
  border-top-left-radius: calc(0.15rem - 1px);
  border-bottom-left-radius: calc(0.15rem - 1px);
    height: 100px; 
  object-fit: contain;
}
.announcement-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 83px;
  width: 100% !important;
  margin: 0 15px 0 0;
  border-radius: 4px;
  
}


.search-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 83px;
  width: 100% !important;
  margin: 0 0 0 0;
  border-radius: 4px;
}
.profile-card{
  border:none;
  height: 83px;
  margin: 0 0 0 90px;
} .profile-card img{
  height:80px
}
.searchImg{
  padding: 0;
}
.cards-class{
  display: flex;   
  justify-content: space-between;
 
  

}
.card-content-size{
  font-size: 12px;
  font-weight: 500;
}

  }


  @media screen and (max-width: 768px){
    body{
          background: white;
          /* background-size: contain; */
        position: relative;
}
.rowHeight{
  height:  900px;
  margin: 110px 0 0 0 
}
.text-one {
font-size: 10px !important;

color: #151e42;
}
.tabs-class{
  padding: 0 10px 0 10px;
  margin-top: 0;
}
.taps-title{
  padding-left: 20px;
  margin-bottom: 2px;
  margin-top: 0px;
  font-size: 11px;
  font-weight: 500;
  color: #202842;
}
.imgSize{
  height: 93px;
}
.account_name{
  font-size: 18px;
  padding: 0;
}
.account_email{
  font-size: 14px;
  padding: 0;
}
 
.card-image-left-align{
  display: none;
}
.announcement-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 83px;
  width: 100% !important;
  margin: 0 15px 0 0;
  border-radius: 4px;
  
}


.search-card{
  border:double 1px  rgba(255, 145, 0, 0.35);
  height: 83px;
  width: 100% !important;
  margin: 0 0 0 0;
  border-radius: 4px;
}
.profile-card{
  border:none;
  height: 83px;
  margin: 0 0 0 10px;
} .profile-card img{
  display:inline;
  height:80px
}
.searchImg{
  padding: 0;
}
.cards-class{
  display: flex;   
  justify-content: space-between;
 
  

}
.card-content-size{
  display: block;
}
  }


  @media screen and (max-width: 425px){
    
    .text-one {
    font-size: 10px !important;
    
    color: #151e42;
    }
  .tabs-class{
      padding: 0 10px 0 10px;
      margin-top: 0px;
    }
    .taps-title{
      padding-left: 20px;
      margin-bottom: 20px;
      margin-top: 30px;
      font-size: 11px;
      font-weight: 500;
      color: #202842;
      align-self: center;
    }
    .rowHeight{
      
      margin: 90px 0 0 0 
    }
    .imgSize{
      height: 93px;
    }
    .account_name{
      font-size: 18px;
      padding: 0;
    }
    .account_email{
      font-size: 14px;
      padding: 0;
    }
    
    .card-image-left-align{
      display: block;
      height: inherit;
    }
    .announcement-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      width: 100% !important;
      margin: 0 15px 0 0;
      border-radius: 4px;
      
    }
    

    .search-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      width: 100% !important;
      margin: 0 0 0 0;
      border-radius: 4px;
    }
    .profile-card{
      border:none;
      height: 83px;
      margin: 0 0 0 10px;
    } .profile-card img{
      display:inline;
      height:80px
    }
    .searchImg{
      padding: 0;
    }
    .cards-class{
      display: flex;   
      justify-content: space-between;
    
      

    }
    .card-content-size{
      display: block;
    }
      }
      


  @media screen and (max-width: 375px){
    body{
      background: white;
        position: relative;
    }
    .rowHeight{
      margin: 90px 0 0 0 
    }
    .imgSize{
      height: 93px;
    }
    .account_name{
      font-size: 18px;
      padding: 0;
    }
    .account_email{
      font-size: 14px;
      padding: 0;
    }
    
    .card-image-left-align{
      width: auto;
        border-top-left-radius: calc(0.15rem - 1px);
        border-bottom-left-radius: calc(0.15rem - 1px);
        height: 100%; 
        object-fit:fill;
    }
    .announcement-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      width: 100% !important;
      margin: 0 15px 0 0;
      border-radius: 4px;
      padding-left: 5px;
      
    }
    

    .search-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      width: 100% !important;
      margin: 0 0 0 0;
      border-radius: 4px;
    }
    .profile-card{
      border:none;
      height: 83px;
      margin: 0 0 0 10px;
    } .profile-card img{
      display:inline;
      height:80px
    }
    .searchImg{
      padding: 0;
    }
    .cards-class{
      display: flex;   
      justify-content: space-between;
      margin: 10px 0 0 0 ;
    
      

    }
    .card-content-size{
      display: block;
    }
  }


  @media screen and (max-height: 667px){
    body{
      background: white;
        position: relative;
        height: 1100px;
    }
    .rowHeight{
      margin: 90px 0 0 0 
    }
    .imgSize{
      height: 93px;
    }
    .account_name{
      font-size: 18px;
      padding: 0;
    }
    .account_email{
      font-size: 14px;
      padding: 0;
    }
    
    .card-image-left-align{
        width: auto;
        border-top-left-radius: calc(0.15rem - 1px);
        border-bottom-left-radius: calc(0.15rem - 1px);
        height: 100%; 
        object-fit:fill;
        padding:0 5px 0 5px
    }
    .announcement-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      
      margin: 0 15px 0 0;
      border-radius: 4px;
      
    }
    

    .search-card{
      border:double 1px  rgba(255, 145, 0, 0.35);
      height: 60px;
      
      margin: 0 0 0 0;
      border-radius: 4px;
    }
    .profile-card{
      border:none;
      height: 83px;
      margin: 0 0 0 10px;
    } .profile-card img{
      display:inline;
      height:80px
    }
    .searchImg{
      padding: 0;
    }
    .cards-class{
      display: flex; 
    }
    .card-content-size{
      display: block;
    }
  }
</style>