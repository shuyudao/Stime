<template>
  <div>
    <div id="comments" ref="comments">
      <h2>
        # 评论
        <span style="color:red;font-size:16px;padding-left:10px;">{{alert}}</span>
      </h2>
      <div>
        <input type="text" class="comment-input" placeholder="昵称*" v-model="comment.author" />
        <input type="email" class="comment-input" placeholder="邮箱*" v-model="comment.mail" />
        <input type="text" class="comment-input" placeholder="网址" v-model="comment.url" />
        <textarea
          name="content"
          id="comment-content"
          v-model="comment.text"
          placeholder="不说几句就不够意思了:)"
        ></textarea>
        <button id="pushCom" @click="pushCom">提交评论</button>
      </div>
    </div>
    <div id="commentsList" ref="commentsList">
      <div v-for="temp in comments">
        <CommentItem :commentsList="temp"></CommentItem>
      </div>
      <Load v-if="!getComplete"></Load>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
import CommentItem from "./CommentItem";
import Load from "./Load";
import common from "../../assets/js/common";

export default {
  name: "CommentList",
  data() {
    return {
      comments: [],
      page: 1,
      alert: "",
      comment: {
        cid: null,
        parent: null,
        text: "",
        author: "",
        mail: "",
        url: "",
        token: ""
      },
      loadend: false,
      getComplete: false
    };
  },
  props:['csrfToken'], //post's token
  components: {
    CommentItem,
    Load
  },
  methods: {
    pushCom() {
      this.comment.token = this.$props.csrfToken;
      const reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      );

      if (
        this.comment.mail != "" &&
        this.comment.author != "" &&
        this.comment.text != ""
      ) {
        this.alert = "";
        const mail = this.comment.mail;
        if (!reg.test(mail)) {
          this.alert = "你输入的不是邮箱";
          return false;
        }

        const start = window.location.href.indexOf("=");
        if (start > -1) {
          this.comment.parent = window.location.href.substr(start + 1, 10);
        }

        request({
          method: "post",
          url: "/api/comment",
          data: this.comment
        })
          .then(e => {
            this.page = 1;
            this.getComments();
            this.comment.parent = null;
            this.comment.text = "";

            window.history.pushState({}, "", "./" + this.comment.cid);

            if (e.status == "error") {
              this.alert = e.message;
            } else {
              this.alert = "评论成功";
            }
          })
          .catch(e => {
            this.alert = "评论过于频繁，请稍后再试";
          });
      } else {
        this.alert = "请确保昵称、邮箱、内容不为空";
      }
    },
    getComments() {
      if (!this.loadend) {
        this.loadend = true;
        this.getComplete = false;
        request({
          url:
            "/api/comments?cid=" + this.$route.params.id + "&page=" + this.page
        }).then(e => {
          this.comments = this.comments.concat(e.data.dataSet);
          if (e.data.dataSet.length > 0) {
            this.loadend = false;
          }
          this.getComplete = true;
        });
        this.page++;
      } else {
        this.getComplete = true;
      }
    }
  },
  created() {
    this.comment.cid = this.$route.params.id;

    this.getComments();
  },
  mounted() {
    common.scroll(() =>{
      this.getComments();
    });
  }
};
</script>

<style scoped>
</style>