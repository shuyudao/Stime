<template>
    <div id="header">
        <div id="headimg">
            <img class="gray" src="http://q.qlogo.cn/headimg_dl?dst_uin=2423458891&spec=640&img_type=jpg" alt="">
        </div>
        <h2 id="title">术与道</h2>
        <p id="des"> 朗月清风，浓烟暗雨，天教憔悴度芳姿.</p>
        <div id="header-nav">
            <div class="nav-item"><router-link to="/">首页</router-link></div>
            <div class="nav-item"><router-link to="/time">时间的垃圾桶</router-link></div>
            <div class="nav-item"><router-link to="/record">归档</router-link></div>
            <div class="nav-item">关于</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

#header{
    width: 100%;
    height: 300px;
    padding-top: 50px;
}
#headimg{
    width: 120px;
    margin: 0 auto;
}
#headimg,img{
    width: 120px;
    height: 120px;
    border-radius: 120px;
}
#title{
    text-align: center;
    line-height: 60px;
    color: #000;
    font-size: 30px;
    font-weight: 400;
    font-family: 'Ma Shan Zheng', cursive;
}
#des{
    color: #65737E;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.05em;
}
#header-nav{
    margin-top: 30px;
    text-align: center;
}
.nav-item{
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
}
#header-nav a{
    color: #444;
}
</style>