import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载 提高速度
const Article = () => import("../components/Article")
const ArticleList = () => import("../components/ArticleList")
const Time = () => import("../components/Time")
const Archives = () => import("../components/Archives")

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {path:'/',
            component:ArticleList,
            meta: { 
                keepAlive: true // 需要缓存 
            }
        },
        {path:"/index.php/archives/:id",component:Article},
        {path:"/index.php/pages/:id",component:Article},
        {path:"/index.php/time",component:Time},
        {path:"/index.php/record",
            component:Archives,
            meta: { 
                keepAlive: true 
            }
        },
        {path:"/index.php/archives/:id",component:Article},
    ],
    mode:'history'
})

export default router