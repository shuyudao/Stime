<template>
  <div>
    <div class="jinsom-post-list clear" page="2" type="all">
      <li id="jinsom-post-2247 words" v-for="item in times">
        <div class="header">
          <span class="type" title="图集">
            <i :class="item.type=='image'?'jinsom-icon jinsom-photo':'jinsom-icon jinsom-words'"></i>
          </span>
          <span class="time">{{item.year+"-"+item.month+"-"+item.day}}</span>
        </div>
        <div class="content" v-html="item.text"></div>

        <div class="footer">
          <div class="comment" @click="comments(item.cid)">
            <i class="jinsom-icon jinsom-comment"></i>
            <span>{{item.commentsNum}}</span>
          </div>
        </div>
      </li>
      
    </div>
    <Load  style="margin-bottom:60px;position: relative;top: -30px;" v-if="!getComplete"></Load>
  </div>
</template>

<script>
import { request } from "../network/request";
import baguetteBox from "../assets/js/baguetteBox.min.js";
import common from "../assets/js/common";
import Load from "../components/common/Load";
import Comment from "./common/Comment"

export default {
  name: "Time",
  data() {
    return {
      times: [],
      page: 1,
      loadend: false,
      getComplete: false,
      csrfToken:""
    };
  },
  components: {
    Load,
    Comment
  },
  methods: {
    getTimes() {
      
      if (!this.loadend) {
        this.getComplete = false;
        this.loadend = true;
        request({
          url: "/api/posts?stime=true&showContent=true&page=" + this.page
        }).then(e => {
          const temp = e.data.dataSet;

          this.getComplete = true;
          if (e.data.dataSet.length > 0) {
            this.loadend = false;
          }
          for (var i = 0; i < temp.length; i++) {
            const imgarr = temp[i].text.match(/<img[^>]+>/g); //检测出内容所含有的所有图片
            const gallery = `<div class="gallery type-e clear">`;

            if (imgarr != null) {
              temp[i]["type"] = "image";
              if (imgarr.length == 2 || imgarr.length == 4) {
                gallery = `<div class="gallery type-d clear">`;
              } else if (imgarr.length == 1) {
                gallery = `<div class="gallery type-e clear">`;
              }
              //遍历替换为空
              for (var j = 0; j < imgarr.length; j++) {
                temp[i].text = temp[i].text.replace(imgarr[j], "");
                temp[i].text = temp[i].text.replace(/<br>/g, "");
                //放入gallery
                var src = imgarr[j].match(/src="(.*?)".*?\/?>/i);
                var alt = imgarr[j].match(/alt="(.*?)".*?\/?>/i);
                gallery +=
                  '<a href="' +
                  src[1] +
                  '" data-caption="' +
                  alt[1] +
                  '" class="opacity">' +
                  imgarr[j] +
                  "</a>";
                if (j == imgarr.length - 1) {
                  gallery += "</div>";
                }
              }
            }
            temp[i].text += gallery;
          }
          this.times = this.times.concat(temp);

          setTimeout(function() {
            baguetteBox.run(".content");
          }, 1000);
        });
        this.page++;
      }
    },
    comments(cid){
      this.$router.push("./archives/"+cid);
    }
  },
  created() {
    this.getTimes();
  },
  activated() {
    document.title = "时间";
    common.scroll(() => {
      this.getTimes();
    });
  }
};
</script>

<style scoped>
@import url("../assets/css/time.css");
@import url("../assets/css/baguetteBox.min.css");

.jinsom-post-list {
  margin-bottom: 80px;
}


</style>