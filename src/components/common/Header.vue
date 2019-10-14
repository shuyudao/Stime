<template>
    <div id="header">
        <div id="headimg">
            <img class="" :src="themedata.logoUrl" alt="">
        </div>
        <h2 id="title">{{themedata.name}}</h2>
        <p id="des"> {{themedata.notice}}</p>
        <div id="header-nav">
            <div class="nav-item"><router-link to="/index.php">首页</router-link></div>
            <div class="nav-item"><router-link to="/index.php/time">时间</router-link></div>
            <div class="nav-item"><router-link to="/index.php/record">归档</router-link></div>
            <div class="nav-item" v-for="item in pages"><a @click="openPage(item.cid)">{{item.title}}</a></div>
        </div>
    </div>
</template>

<script>
import { request } from "../../network/request"

export default {
    name:"Header",
    props:['themedata'],
    data(){
        return{
            pages:[],
            loadend:false
        }
    },
    created(){
        request({
            url:"/api/pages"
        }).then(e => {
            this.pages = e.data.dataSet;
            this.loadend = true
        })
    },
    methods:{
        openPage(cid){
            this.$router.push("/index.php/pages/"+cid);
        }
    }
}
</script>

<style scoped>

#header{
    width: 100%;
    height: 300px;
    padding-top: 50px;
}
#headimg{
    width: 120px;
    margin: 0 auto;
}
#headimg,img{
    width: 120px;
    height: 120px;
    border-radius: 120px;
}
#title{
    text-align: center;
    line-height: 60px;
    color: #000;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Ma Shan Zheng', cursive;
}
#des{
    color: #65737E;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.05em;
}
#header-nav{
    margin-top: 30px;
    text-align: center;
}
.nav-item{
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
}
#header-nav a{
    color: #444;
}
@media screen and (max-width: 520px) {
    #des{
        font-size: 14px;
    }
}
</style>