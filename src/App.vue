<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <router-view></router-view>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header'
import ArticleList from './components/ArticleList'
import HomeFooter from './components/common/Footer'
import Article from './components/Article'

import router from './router/index';

export default {
  name: 'app',
  components: {
    HomeHeader,
    ArticleList,
    HomeFooter,
    Article
  },
  router
}
</script>

<style>
@import "assets/css/base.css";


</style>
