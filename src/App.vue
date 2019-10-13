<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> 
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header'
import HomeFooter from './components/common/Footer'

import router from './router/index';

export default {
  name: 'app',
  components: {
    HomeHeader,
    HomeFooter
  },
  router
}
</script>

<style>
@import "assets/css/base.css";


</style>
