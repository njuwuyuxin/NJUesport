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
    height: 100px;
    width: 390px;
    border:solid lightgray 1px;
    border-radius: 3px;
    /* float:left; */
    padding:10px;
    padding-left: 0px;
    margin-bottom: 10px;
    box-shadow: lightgrey 1px 1px 3px;
}
.postCard{  
    height:100px;
    width: 410px;
    margin-left:2px;
    margin-right:2px;
    float:left;
}
.infoBox{
    width:235px;
    float:left;  
}
.imageBox{
    height: 80px;
    width: 130px;
    margin-top: 10px;
    float:right;
}
img{
    height: 80px;
    width:130px;
}
.tag,.footBox{
    color: gray;
    font-size: 14px;
}
.tag{
    height:22px;
    width: 50px;
}
.tag-left{
    height:22px;
    width:6px;
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
    width: 225px;
    height: 40px;
    margin-top: 5px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 16px;
    /* color: #63065f; */

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.footBox{
    margin-left: 20px;
}
.left{
    float:left;
}
.right{
    float:right;
}
</style>
