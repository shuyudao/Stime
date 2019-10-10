<template>
    <div id="article-list">
        <div class="article-item" @click="readPost(item.cid)" v-for="item in post">
            <h3 class="article-title"><span class="in-text">{{item.title}}</span></h3>
            <div class="article-desc">
                <p>{{item.desc+"..."}}</p>    
            </div>
            <div class="article-info">
                <p class="date"><i class="iconfont icon-riqi"/>{{item.year+"-"+item.month+"-"+item.year}}</p>
                <p class="views"><i class="iconfont icon-yuedu"/>{{item.views==null?0:item.views}}</p>
                <p class="comments"><i class="iconfont icon-pinglun"/>{{item.commentsNum}}</p>
            </div>
        </div>

    </div>
</template>

<script>
import {request} from "../network/request"

export default {
    name:"ArticleList",
    data(){
        return{
            post:[]
        }
    },
    created(){
        request({
            url:"/api/posts?showDesc=true"
        }).then(e => {
            this.post = e.data.dataSet;
        })
    },
    methods:{
        readPost(cid){
            this.$router.push("/article/"+cid)
        }
    }
}
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_1449684_w1g3hwq701.css");
.iconfont{
    padding-right: 4px;
}
#article-list{
    width: 740px;
    margin: 40px auto;
}
.article-item{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 50px;
    cursor: pointer;
}
.article-title .in-text,.article-title{
    color: #000;
    font-size: 22px;
    font-weight: 600;
    font-family: 'Noto Serif SC', serif;
}

.article-desc{
    color: #434A54;
    font-size: 16px;
    padding-top: 20px;
    line-height: 28px;
    display: -webkit-box;
}
.t-tag{
    color: #65737E
}
.article-info{
    color: #AAB2BD;
    margin-top: 20px;
    font-size: 14px;
}
.article-info p{
    display: inline-block;
    padding-right: 20px;
}
</style>