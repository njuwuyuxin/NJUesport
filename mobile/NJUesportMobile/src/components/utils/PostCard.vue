<template>
    <div class="postCard">
        <div class="frame">
            <div class="infoBox">
                <div class="tag">
                    <div class="tag-left"></div>
                    <div class="tag-right">{{PostInfo.tag}}</div>    
                </div>
                <div class="title"><a v-bind:href="PostInfo.href" target="_blank">{{PostInfo.title}}</a></div>
                <div class="footBox">
                    <div class="left">{{PostInfo.userName}}</div>
                    <div class="right">{{PostInfo.date}}</div>
                </div>
            </div>
            <div class="imageBox">
                <a v-bind:href="PostInfo.href" target="_blank"><img v-bind:src="PostInfo.picture"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostCard',
    data () {
        return {
            
        }
    },
    props:{
        PostInfo:Object,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
    position: relative;
    height: 74px;
    width: 296px;
    border:solid lightgray 1px;
    border-radius: 3px;
    /* float:left; */
    padding:3px;
    padding-left: 0px;
    margin-bottom: 10px;
    box-shadow: lightgrey 1px 1px 3px;
}
.postCard{  
    height:74px;
    width: 296px;
    margin-bottom: 18px;
}
.infoBox{
    width:167px;
    float:left;  
}
.imageBox{
    height: 60px;
    width: 96px;
    margin-top: 6px;
    margin-right: 4px;
    float:right;
}
img{
    height: 60px;
    width:96px;
}
.tag,.footBox{
    color: gray;
    font-size: 10px;
}
.tag{
    height:22px;
    width: 40px;
}
.tag-left{
    height:16px;
    width:4px;
    margin-top: 3px;
    background-color: black;
    float:left;
}
.tag-right{
    height:22px;
    width: 30px;
    float:right;
    line-height: 22px;
}
.title{
    width: 167px;
    height: 32px;
    margin-top: 0px;
    margin-left: 10px;
    margin-bottom: 2px;
    font-weight: bold;
    font-size: 13px;
    /* color: #63065f; */

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.footBox{
    margin-left: 10px;
}
.left{
    float:left;
}
.right{
    float:right;
}
</style>
