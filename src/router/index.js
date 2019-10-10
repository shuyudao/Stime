import Vue from 'vue'
import VueRouter from 'vue-router'

const Article = () => import("../components/Article")
const ArticleList = () => import("../components/ArticleList")

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/index'},
        {path:'/index',component:ArticleList},
        {path:"/article/:id",component:Article}
    ],
    mode:'history'
})

export default router