<template>
    <div>
        <b-button-group>
            <b-button>Sort by id</b-button>
            <b-button>sort by start date</b-button>
            <b-button>sort by end date</b-button>
        </b-button-group>
        <div v-for="(item, index) in myLost" :key="index">
            <ul>
                <li>{{item.id}}</li>
                <li>{{item.title}}</li>
                <li>{{item.start_date}}</li>
                <li>{{item.end_data}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "../axios.config";
    export default {
        data() {
            return {
                myLost:[]
            }
        },
        methods:{
            getLost(){
            /* this.loading=false */
            axios.get('user/my_lost')
            .then((resp)=>{
                this.myLost = resp.data.data.lost.map((lost)=>{
                    return{
                        id : lost.id,
                        title:lost.title,
                        start_date:lost.start_date,
                        end_date:lost.end_data,
                        user_status:lost.user_status,
                        status:lost.status,
                        
                    }
                })
            }).catch((err)=>{
                console.log(err)
            })
        },
        }
    }
</script>
