<template>
  <div class="news-card">
    <div class="body">
    	<a v-if="NewsInfo.href!='#'" v-bind:href="NewsInfo.href" target="_blank"><img class="pic" v-bind:src="NewsInfo.coverPic"></a>
    	<img v-else class="pic" v-bind:src="NewsInfo.coverPic">
    	<div class="title">{{NewsInfo.title}}</div>
    	<div class="date">{{NewsInfo.date}}</div>
    	<div class="tag">{{NewsInfo.class}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  data () {
    return {
      
    }
  },
  props:{
  	NewsInfo:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.body{
	width:291px;
	height: 349px;
	border: 1px solid lightgray;
	border-radius: 5px;
	float:left;
	margin-right: 20px;
	margin-bottom: 50px;
	box-shadow: lightgrey 1px 1px 5px;
}
.pic{
	width: 100%;
	height: auto;
	border-radius: 5px 5px 0 0;
}
.title,.date,.tag{
	text-align: center;
}
.title{
	margin-top: 10px;
	color:#63065f;
}
.date{
	padding-bottom: 10px;
	font-size: 14px;
	color:darkgray;
	border-bottom: 1px solid lightgray;
}
.tag{
	margin-top: 10px;
	font-size: 14px;
	color:darkgray;
}
</style>
