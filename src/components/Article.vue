<template>

    <div id="article">
        <h2>{{post.title}}</h2>
        <p class="post-date">{{post.year+"-"+post.month+"-"+post.day}}</p>
        <div id="content" class="post-body" v-html="post.text">

        </div>

        <div id="comments">
          <h2># 评论</h2>
          <div>
            <input type="text" class="comment-input" placeholder="昵称*">
            <input type="email" class="comment-input" placeholder="邮箱*">
            <input type="text" class="comment-input" placeholder="网址">
            <textarea name="content" id="comment-content" placeholder="不说几句就不够意思了:)"></textarea>
            <button id="pushCom">提交评论</button>
          </div>
        </div>

        <div id="commentsList">
          
        </div>

    </div>

</template>

<script>
import {request} from "../network/request"

export default {
    name:"Article",
    data(){
      return{
        cid:0,
        post:{}
      }
    },
    created(){
      this.cid = this.$route.params.id;
      request({
        url:"/api/post?cid="+this.$route.params.id
      }).then(e => {
        this.post = e.data
      })
    }
}
</script>

<style scoped>
@import url("../assets/css/post.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.15.0/plugins/line-numbers/prism-line-numbers.css");



</style>