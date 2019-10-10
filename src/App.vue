<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <ArticleList></ArticleList>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header'
import ArticleList from './components/ArticleList'
import HomeFooter from './components/common/Footer'

export default {
  name: 'app',
  components: {
    HomeHeader,
    ArticleList,
    HomeFooter
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
