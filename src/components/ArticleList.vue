<template>
    <div id="article-list">
        <div class="article-item" @click="readPost(item.cid)" v-for="item in post">
            <h3 class="article-title"><span class="in-text">{{item.title}}</span></h3>
            <div class="article-desc">
                <p>{{item.desc+"..."}}</p>    
            </div>
            <div class="article-info">
                <p class="date"><i class="iconfont icon-riqi"/>{{item.year+"-"+item.month+"-"+item.day}}</p>
                <p class="views"><i class="iconfont icon-yuedu"/>{{item.views==null?0:item.views}}</p>
                <p class="comments"><i class="iconfont icon-pinglun"/>{{item.commentsNum}}</p>
            </div>
        </div>
        <Load v-if="!getComplete"></Load>
    </div>
</template>

<script>
import {request} from "../network/request"
import common from "../assets/js/common";
import Load from "../components/common/Load"

export default {
    name:"ArticleList",
    data(){
        return{
            post:[],
            page:1,
            loadend:false, //加载全部完成
            getComplete:false,
            defaulttitle:""
        }
    },
    components:{
        Load
    },
    created(){
        console.log("Stime主题：https://github.com/shuyudao/Stime");
        
        this.defaulttitle = document.title
        this.getArticles()
    },
    methods:{
        readPost(cid){
            this.$router.push("/index.php/archives/"+cid)
        },
        getArticles(){

            if(!this.loadend){
                this.getComplete = false;
                this.loadend = true;
                request({
                    url:"/api/posts?showDesc=true&page="+this.page
                }).then(e => {
                    this.post = this.post.concat(e.data.dataSet);
                    this.getComplete = true;
                    
                    if(e.data.dataSet.length > 0 ){
                        this.loadend = false;
                    }
                })
                this.page++;
            }
            
        }
    },
    activated() {
        document.title = this.defaulttitle+"-首页";
        
        common.scroll(() => {
            this.getArticles();
        });
        
    }
}
</script>

<style scoped>

.iconfont{
    padding-right: 4px;
}
#article-list{
    width: 740px;
    margin: 40px auto;
    margin-bottom: 80px;
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
.article-desc p{
    width: 100%;
    word-break: break-all;
    font-family: "noto serif sc",serif;
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