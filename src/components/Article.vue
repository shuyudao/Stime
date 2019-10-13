<template>
  <div id="article">
    <div v-if="post.title!=null">
      <h2 v-if="post.title = post.title.indexOf('stime')==0?'时间段详情':post.title">{{post.title}}</h2>
      <p class="post-date">{{post.year+"-"+post.month+"-"+post.day}}</p>
      <div id="content" class="post-body" v-html="post.text"></div>
    </div>
    <h2 v-if="post.title==null" style="text-align:center">加载内容...</h2>
    <Comment :csrfToken="csrfToken"></Comment>
  </div>
</template>

<script>
import { request } from "../network/request";
import Comment from "../components/common/Comment";

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
        this.csrfToken = e.data.csrfToken;
      });
    }
  },
  created() {
    header.scrollIntoView();
    this.cid = this.$route.params.id;
    this.getPost();
  },
  watch: {
    $route() {
      this.cid = this.$route.params.id;
    },
    cid() {
      this.getPost();
    }
  }
};
</script>

<style scoped>
@import url("../assets/css/post.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.15.0/plugins/line-numbers/prism-line-numbers.css");
</style>