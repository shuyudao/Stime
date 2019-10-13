<template>
    <li class="comment even thread-even depth-1">
        <div class="comment-body">
            <div class="comment-author vcard">
            <img
                alt
                :src="'https://cdn.v2ex.com/gravatar/'+commentsList.mailHash+'?s=100&amp;d=mm&amp;r=g'"
                class="avatar avatar-32 photo"
                height="32"
                width="32"
            />
            <cite class="fn">
                <a
                :href="commentsList.url"
                rel="external nofollow"
                class="url"
                target="_blank"
                >{{commentsList.author}}</a>
            </cite>
            <span v-if="commentsList.authorId=='1'" class="admin">博主</span>
            <span class="says">说道：</span>
            </div>

            <div class="comment-meta commentmetadata">
            <a class="com-date">{{formatDate(commentsList.created)}}</a>
            </div>

            <p>{{commentsList.text}}</p>

            <div class="reply">
            <a rel="nofollow" :href="'#comments?id='+commentsList.coid" class="comment-reply-link" @click="scr">回复</a>
            </div>
        </div>
        <div class="comment-child"  v-if="commentsList.children!=undefined&&commentsList.children.length>0">
            <div v-for="temp in commentsList.children">
                <Comment :commentsList="temp"></Comment>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name:"Comment",
    props:['commentsList'],
    data(){
      return {
      }
    },
    components:{
        Comment
    },
    methods:{
      scr(){
        comments.scrollIntoView();
      }
    },
    computed: {
      formatDate() {
        function formatTime(number, format) {
          var formateArr = ["Y", "M", "D", "h", "m", "s"];
          var returnArr = [];

          var date = new Date(number * 1000);
          returnArr.push(date.getFullYear());
          returnArr.push(formatNumber(date.getMonth() + 1));
          returnArr.push(formatNumber(date.getDate()));

          returnArr.push(formatNumber(date.getHours()));
          returnArr.push(formatNumber(date.getMinutes()));
          returnArr.push(formatNumber(date.getSeconds()));

          for (var i in returnArr) {
            format = format.replace(formateArr[i], returnArr[i]);
          }
          return format;
        }

        //数据转化
        function formatNumber(n) {
          n = n.toString();
          return n[1] ? n : "0" + n;
        }

        return function(ctime) {
          return formatTime(ctime, "Y-M-D h:m:s");
        };
    }
  }
}
</script>

<style scoped>
.admin{
  color: #fff!important;
  padding:0 4px 0 4px;
  background: #ffa500;
  border-radius: 4px;
  font-size: 12px;
}
/* Comments */
#commentsList li {
  list-style: none;
}
.url{
  font-style: normal;
  text-decoration: none;
  font-weight: 600;
}
.com-date{
  text-decoration: none;
}
.comment-child{
  padding-left: 30px
}
.nocomments {
  display: none;
}
.comment,
.pingback {
  z-index: 1;
}
.comment-reply-link{
  cursor: pointer;
}
.comment.depth-1 {
  margin: 1% 0 1% 0;
  padding: 0 0 1%;
}
.comment.depth-1 .depth-1 {
  padding: 0;
  border: 0;
}
.comment .comment {
  margin-left: 30px;
  border-left: 1px solid #e6e9ed;
}
.comment .comment .comment {
  margin: 0;
  padding: 0;
  border: 0;
}
.comment-body {
  padding: 15px 0;
  position: relative;
}
.comment .comment .comment-body,
.comment .comment .comment > .comment-body.new-comment {
  margin: 0 0 0 -16px;
}
.comment-body p {
  font-size: 1rem;
  clear: both;
  line-height: 22px;
  margin: 0 0 0 55px;
}
.comment-body pre {
  margin: 1rem 0 0 2rem;
}
.comment-body pre code {
  max-height: 14rem;
  padding: 1rem;
}
.comment .comment .comment-body p {
  margin: 0 0 0 40px;
}
.comment .comment .comment-body img {
  width: 100%;
}
.comment br,
.pingback .reply,
.comment-meta a.comment-edit-link {
  display: none;
}
.comment .comment-author {
  font-size: 0.8rem;
  margin: 0 0 20px 0;
  line-height: 26px;
}
.comment .comment-author .avatar,
.comment .comment-author:before {
  float: left;
  width: 42px;
  height: 42px;
  margin: 0 12px 0 0;
  position: relative;
  background: #fff;
  padding: 2px;
  border: 1px solid #e6e9ed;
  border-radius: 100%;
}
.comment .comment .comment-author .avatar,
.comment .comment .comment-author:before {
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
}
.comment .comment-author cite,
.comment .comment-author span {
  position: relative;
  top: -4px;
}
.comment-author span {
  left: 5px;
  color: #aab2bd;
}
.comment-awaiting-moderation {
  font-style: normal;
  color: #f55;
}
.reply,
.comment-meta a {
  position: absolute;
  top: 12px;
  right: 0;
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
  color: #656d78;
}
.reply a:before {
  content: "@";
}
.comment .comment-meta {
  line-height: 0;
  height: 0;
}
.comment-meta a {
  position: absolute;
  top: 48px;
  left: 55px;
}
.comment .comment .comment-meta a {
  left: 40px;
}
.pingback .comment-meta {
  line-height: 0;
}
.comment-meta a {
  color: #aab2bd;
}
#respond {
  position: relative;
  margin: 2rem 0;
}
.comment #respond {
  border-top: 1px solid #e6e9ed;
  padding: 20px 0;
}
.comment .comment #respond {
  margin-left: 26px;
}
#respond h3 {
  font-size: 1rem;
  display: block;
  width: 100%;
}
#respond h3 small {
  font-size: 0.8rem;
  line-height: 0.8rem;
  margin: 0 0 0 20px;
}
#respond h3 small a:before {
  content: "[ ";
}
#respond h3 small a:after {
  content: " ]";
}

.post_password_form label {
  display: block;
}
.post_password_form input {
  max-width: 240px;
}
.post_password_form [type="submit"] {
  margin: 1rem auto;
  max-width: 100px;
}
.post_password_form {
  margin: 20% 0 12%;
}

.pingback {
  font-size: 12px;
  box-shadow: 0 0 0 1px #f5f7fa inset;
  margin: 0 0 1rem;
  padding: 1rem;
}
.pingback p {
  font-size: 12px;
  color: #aab2bd;
  margin: 0;
}
.pingback .fn a {
  color: #434a54;
}
.pingback .comment-meta a {
  left: initial;
  right: 0;
  top: 1rem;
}
.pingback .comment-author.vcard {
  line-height: 16px;
  margin: 0 0 10px;
}
.pingback .comment-author span {
  font-size: 0;
}
.pingback .comment-author span:before {
  content: " - Refer to this article：";
  color: #e6e9ed;
  font-size: 12px;
}
</style>