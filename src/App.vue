<template>
  <div id="app" v-if="loadend">
    <HomeHeader :themedata="data"></HomeHeader>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> 
    <HomeFooter :themedata="data"></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header'
import HomeFooter from './components/common/Footer'

import router from './router/index';
import { request } from './network/request';

export default {
  name: 'app',
  components: {
    HomeHeader,
    HomeFooter
  },
  data(){
    return{
      data:{},
      loadend:false
    }
  },
  router,
  created(){
    request({
      url:"/api/themeset"
    }).then(e => {
      this.data = e.data.dataSet
      this.loadend = true;
    })
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
