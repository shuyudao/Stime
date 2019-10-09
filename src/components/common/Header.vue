<template>
    <div id="header">
        <div id="headimg">
            <img class="gray" src="http://q.qlogo.cn/headimg_dl?dst_uin=2423458891&spec=640&img_type=jpg" alt="">
        </div>
        <h2 id="title">王杰</h2>
        <p id="des"> 朗月清风，浓烟暗雨，天教憔悴度芳姿.</p>
        <div id="header-nav">
            <div class="nav-item">首页</div>
            <div class="nav-item">时间垃圾桶</div>
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
    font-family: zkxw;
}
#des{
    color: #65737E;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
}
#header-nav{
    display: flex;
    
    text-align: center;
}
.nav-item{
    flex: 1;
}
</style>