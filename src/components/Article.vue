<template>
  <div id="article" v-cloak>
    <h2>{{post.title}}</h2>
    <p class="post-date">{{post.year+"-"+post.month+"-"+post.day}}</p>
    <div id="content" class="post-body" v-html="post.text"></div>
    <Comment :csrfToken="csrfToken"></Comment>
  </div>
</template>

<script>
import { request } from "../network/request";
import Comment from "../components/common/Comment"

export default {
  name: "Article",
  data() {
    return {
      cid: 0,
      post: {},
      csrfToken:""
    };
  },
  components: {
    Comment
  },
  created() {
    header.scrollIntoView();
    this.cid = this.$route.params.id;
    request({
      url: "/api/post?cid=" + this.$route.params.id
    }).then(e => {
      this.post = e.data;
      this.csrfToken = e.data.csrfToken;
      
    });
  }
};
</script>

<style scoped>
@import url("../assets/css/post.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-okaidia.css");
@import url("https://cdn.jsdelivr.net/npm/prismjs@1.15.0/plugins/line-numbers/prism-line-numbers.css");
</style>