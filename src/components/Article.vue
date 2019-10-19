<template>
  <div id="article">
    <div v-if="post.title!=null">
      <h2 v-if="post.title = post.title.indexOf('stime')==0?'时间段详情':post.title">{{post.title}}</h2>
      <p class="post-date">{{post.year+"-"+post.month+"-"+post.day}}</p>
      <div id="content" class="post-body" v-html="post.text"></div>
    </div>
    <h2 v-if="post.title==null" style="text-align:center">加载内容...</h2>
    <Comment :csrfToken="csrfToken" v-if="post.allowComment=='1'"></Comment>
  </div>
</template>

<script>
import { request } from "../network/request";
import Comment from "../components/common/Comment";
import Prism from 'prismjs'

export default {
  name: "Article",
  data() {
    return {
      cid: 0,
      post: {},
      csrfToken: ""
    };
  },
  components: {
    Comment
  },
  methods: {
    getPost() {
      request({
        url: "/api/post?cid=" + this.$route.params.id
      }).then(e => {
        this.post = e.data;
        const tpc = document.title.split("-");
        document.title = tpc[0]+"-"+e.data.title;
        this.csrfToken = e.data.csrfToken;
        setTimeout(function () {
          Prism.highlightAll();
        },100);
      });
    }
  },
  created() {
    header.scrollIntoView();
    this.cid = this.$route.params.id;
  },
  watch: {
    $route() {
      this.cid = this.$route.params.id;
    },
    cid() {
      this.post = {};
      this.getPost();
      Prism.highlightAll();
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/post.css");
</style>