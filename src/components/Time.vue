<template>
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
        <div class="comment" onclick="jinsom_open_right_sidebar(2247)">
          <i class="jinsom-icon jinsom-comment"></i>
          <span>2</span>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import { request } from "../network/request";
import baguetteBox from "../assets/js/baguetteBox.min.js";
import common from "../assets/js/common";

export default {
  name: "Time",
  data() {
    return {
      times: [],
      page: 1,
      loadend: false
    };
  },
  methods: {
    getTimes() {
      if (!this.loadend) {
        request({
          url: "/api/posts?stime=true&showContent=true&page=" + this.page
        }).then(e => {
          const temp = e.data.dataSet;
          if(temp.length < 1){
            this.loadend = true;
            return;
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
    }
  },
  created() {
    this.getTimes();
  },
  mounted() {
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