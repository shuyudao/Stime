<template>
  <div id="article">
    <h2>{{post.title}}</h2>
    <p class="post-date">{{post.year+"-"+post.month+"-"+post.day}}</p>
    <div id="content" class="post-body" v-html="post.text"></div>

    <div id="comments" ref="comments">
      <h2># 评论<span style="color:red;font-size:16px;padding-left:10px;">{{alert}}</span></h2>
      <div>
        <input type="text" class="comment-input" placeholder="昵称*" v-model="comment.author" />
        <input type="email" class="comment-input" placeholder="邮箱*" v-model="comment.mail"/>
        <input type="text" class="comment-input" placeholder="网址" v-model="comment.url" />
        <textarea name="content" id="comment-content" v-model="comment.text" placeholder="不说几句就不够意思了:)"></textarea>
        <button id="pushCom" @click="pushCom">提交评论</button>
      </div>
    </div>

    <div id="commentsList" ref="commentsList">
      <div v-for="temp in comments">
        <Comment :commentsList="temp"></Comment>
      </div>
      
    </div>
  </div>
</template>

<script>
import { request } from "../network/request";
import Comment from './common/Comment';

export default {
  name: "Article",
  data() {
    return {
      cid: 0,
      post: {},
      comments: {},
      comment:{
        cid:null,
        parent:null,
        text:"",
        author:"",
        mail:"",
        url:"",
        token:""
      },
      alert:""
    };
  },
  methods:{
    pushCom(){

      const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");

      if(this.comment.mail!=""&&this.comment.author!=""&&this.comment.text!=""){
        this.alert=""
        const mail = this.comment.mail;
        if(!reg.test(mail)){
          this.alert="你输入的不是邮箱";
          return false;
        }

        const start = window.location.href.indexOf("=");
        if(start>-1){
          this.comment.parent = window.location.href.substr(start+1,10);
        }
        
        request({
          method:"post",
          url:"/api/comment",
          data:this.comment
        }).then(e => {
          this.getComments();
          this.comment.parent = null;
          this.comment.text="";
          if(e.status=="error"){
            this.alert=e.message;
          }else{
            this.alert="评论成功";
          }
        });
        
      }else{
        this.alert="请确保昵称、邮箱、内容不为空"
      }
    },
    getComments(){
      request({
        url: "/api/comments?cid=" + this.$route.params.id
      }).then(e => {
        this.comments = e.data.dataSet;
      });
    }
  },
  components:{
    Comment
  },
  created() {
    this.cid = this.$route.params.id;
    request({
      url: "/api/post?cid=" + this.$route.params.id
    }).then(e => {
      this.post = e.data;
      this.comment.token = e.data.csrfToken
      this.comment.cid = e.data.cid
    });

    this.getComments();
  }
};
</script>

<style scoped>
@import url("../assets/css/post.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.15.0/plugins/line-numbers/prism-line-numbers.css");


</style>