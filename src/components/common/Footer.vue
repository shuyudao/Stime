<template>
    <div id="footer">
        <div id="footer-main">
            <p v-html="themedata.footer"></p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer",
    props:['themedata']
}
</script>

<style scoped>

#footer{
    width: 100%;
    height: 60px;
    background: #fff;
    color: #666;
    padding: 0px;
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0px;
}
#footer-main{
    font-size: 14px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
}
#footer-main p{
    line-height: 60px;
}
#footer-main a{
    color: #666;
}
@media screen and (max-width: 520px) {
    #footer-main p{
        font-size: 12px;
    }
}
</style>