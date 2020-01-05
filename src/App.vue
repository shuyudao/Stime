<template>
  <div id="app">
    <HomeHeader :themedata="data"></HomeHeader>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <HomeFooter :themedata="data"></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from "./components/common/Header";
import HomeFooter from "./components/common/Footer";

import router from "./router/index";
import { request } from "./network/request";

export default {
  name: "app",
  components: {
    HomeHeader,
    HomeFooter
  },
  data() {
    return {
      data: {},
      loadend: false
    };
  },
  router,
  created() {
    request({
      url: "/api/themeset"
    }).then(e => {
      this.data = e.data.dataSet;
      if (
        window.location.href.indexOf("/index.php/archives") < 0 &&
        window.location.href.indexOf("/index.php/pages") < 0
      ) {
        for (var i = 0; i < e.data.dataSet.topBarBlock.length; i++) {
          var temp = e.data.dataSet.topBarBlock[i];
          var arr = window.location.href.split("/");
          // 未url硬性指定访问就会跳转
          if (temp == "showPosts") {
            this.$router.push("/index.php");
            break;
          } else if (temp == "showTimes") {
            this.$router.push("/index.php/time");
            break;
          } else if (temp == "showArchive") {
            this.$router.push("/index.php/record");
            break;
          }
        }
      }
      this.loadend = true;
    });
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
