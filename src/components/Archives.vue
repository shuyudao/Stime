<template>
    <div id="Archives">
        <h2>文章归档</h2>
        <ul>
            <li v-for="item in posts"><a @click="openPOst(item.cid)"><span>{{item.year+"-"+item.month+"-"+item.day}}</span> <span class="title">{{item.title}}</span></a></li>
        </ul>
    </div>
</template>

<script>
import {request} from '../network/request';

export default {
    name:"Archives",
    data(){
        return{
            posts:[]
        }
    },
    created(){
        request({
            url:"/api/archives"
        }).then(e => {
            this.posts = e.data.dataSet;
        })
    },
    methods:{
        openPOst(cid){
             this.$router.push("./archives/"+cid);
        }
    },
    activated(){
        document.title = "文章归档";
    }
}
</script>

<style scoped>
#Archives{
    width: 740px;
    margin: 60px auto;
}
h2{
    font-family: 'Noto Serif SC', serif;
}
ul{
    margin-top: 40px;
}
li{
    list-style: none;
    font-size: 18px;
    font-family: 'Noto Serif SC', serif;
    line-height: 32px;
    font-weight: 600;
}
li span{
    font-weight: 500;
    padding-right: 10px;

}
a{
    color: #000!important;
    text-decoration: none;
}
.title{
    text-decoration: underline;
    cursor: pointer;
}
</style>