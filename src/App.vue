<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <ArticleList></ArticleList>
  </div>
</template>

<script>
import HomeHeader from './components/common/Header'
import ArticleList from './components/common/ArticleList'

export default {
  name: 'app',
  components: {
    HomeHeader,
    ArticleList
  }
}
</script>

<style>
@import "assets/css/base.css";


</style>
