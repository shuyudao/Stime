import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载 提高速度
const Article = () => import("../components/Article")
const ArticleList = () => import("../components/ArticleList")
const Time = () => import("../components/Time")

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/',component:ArticleList},
        {path:"/archives/:id",component:Article},
        {path:"/time",component:Time}
    ],
    mode:'history'
})

export default router