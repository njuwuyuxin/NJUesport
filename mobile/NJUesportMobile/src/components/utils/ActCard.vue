<template>
	<div class="frame">
		<div class="actCard">
		<div class="picBox"><a v-bind:href="ActInfo.href" target="_blank"><img class="pic" v-bind:src="ActInfo.coverPic"></a></div>
		<div class="intro">
			<h3 class="title"><a v-bind:href="ActInfo.href" target="_blank">{{ActInfo.title}}</a></h3>
			<span class="date">{{ActInfo.date}}</span>
			<span class="tag">{{ActInfo.tag}}</span>
			<div class="content">{{ActInfo.content}}</div>
		</div>
	</div>
	</div>
	
</template>

<script>
export default {
  name: 'ActCard',
  data () {
    return {
      
    }
  },
  props:{
  	ActInfo:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	display: inline-block;
}
.frame{
	position: relative;
}
.actCard{
	position: relative;
	left: 50%;
	margin-left: -575px;
	width: 1150px;
	padding: 20px 0;
	border-bottom: 1px solid lightgray;
}
.picBox{
	width: 150px;
	height: 125px;
	float: left;
}
.pic{
	width: 150px;
	height: 125px;
}
.intro{
	height: 125px;
	width: 977px;
	margin-left: 20px;
	float: left;
}
.title{
	color:#63065f;
}
.date,.tag{
	display: inline-block;
	font-size: 14px;
	color:darkgray;
	margin:5px 0;
}
.content{
	font-size: 14px;
}
.actCard:after{
	content: "020"; 
	display: block; 
	height: 0; 
	clear: both; 
	visibility: hidden;
}
</style>
