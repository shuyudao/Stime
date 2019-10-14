<template>
  <div id="comvue">
    <div id="comments" ref="comments">
      <h2>
        # 评论
        <span style="color:red;font-size:16px;padding-left:10px;">{{alert}}</span>
      </h2>
      <div>
        <input v-if="!islogin" type="text" class="comment-input" placeholder="昵称*" v-model="comment.author" />
        <input v-if="!islogin" type="email" class="comment-input" placeholder="邮箱*" v-model="comment.mail" />
        <input v-if="!islogin" type="text" class="comment-input" placeholder="网址" v-model="comment.url" />
        <textarea
          name="content"
          id="comment-content"
          v-model="comment.text"
          :placeholder="placetxt"
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
      placetxt:"不说几句就不够意思了:)",
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
      getComplete: false,
      islogin:false
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
        (this.comment.mail != "" &&
        this.comment.author != "" &&
        this.comment.text != "")||this.islogin
      ) {
        this.alert = "";
        const mail = this.comment.mail;
        if (!this.islogin&&!reg.test(mail)) {
          this.alert = "你输入的不是邮箱";
          return false;
        }

        const start = window.location.href.indexOf("pid=");
        if (start > -1) {
          this.comment.parent = window.location.href.substr(start + 4, 10);
        }

        request({
          method: "post",
          url: "/api/comment",
          data: this.comment,
          withCredentials:true
        })
          .then(e => {
            this.page = 1;
            this.loadend = false;
            this.comments = [];
            this.getComments();
            this.comment.parent = null;
            this.comment.text = "";

            window.history.pushState({}, "", "./" + this.comment.cid);

            if (e.status == "error") {
              this.alert = e.message;
            } else {
              this.alert = "评论成功";
              this.placetxt = "不说几句就不够意思了:)";
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
            "/api/comments?cid=" + this.comment.cid + "&page=" + this.page
        }).then(e => {
          this.comments = this.comments.concat(e.data.dataSet);
          if (e.data.dataSet.length > 0) {
            this.loadend = false;
          }
          this.getComplete = true;
        });
        this.page++;
      }
    }
  },
  created() {
    this.comment.cid = this.$route.params.id;
    this.getComments();
    request({
      url:"/api/comments?islogin=true",
      withCredentials:true
    }).then(e => {
      if(e.key!=null){
        this.islogin = true;
      }
    })
  },
  mounted() {
    common.scroll(() =>{
      this.getComments();
    });
  },
  watch: {
    $route() {
      if(window.location.href.indexOf("#comments")){
        this.placetxt = "回复它："
      }
    }
  }
};
</script>

<style scoped>
#comments{
  margin-top: 80px;
}
#comvue{
  width: 100%;
}
.comment-input{
  display: block;
  height: 32px;
  margin-top: 10px;
  width: 280px;
  outline: none;
  padding-left: 6px;
}
#comment-content{
  width: 480px;
  height: 140px;
  resize: none;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px;
  outline: none;
  background: #FCFCFC;
}
#pushCom{
  width: 100px;
  font-size: 14px;
  height: 32px;
  background: #333333;
  color: #FFF;
  border: none;
  cursor: pointer;
  position: relative;
  top: -11px;
  left: 20px;
}

#commentsList{
    margin-top: 10px;
}
@media screen and (max-width: 520px) {
  #comment-content {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;

  }
  input{
    width: 100%;
    box-sizing: border-box;
  }
  .comment-input{
    width: 100%;
  }
  #comments>div{
    padding-top: 10px;
  }
  #pushCom{
    top: 5px;
    left: 0px;
  }
  #commentsList{
    word-wrap: break-all;
  }
}
</style>