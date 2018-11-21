<template>
	<div class="frame">
		<div class="actCard">
		<div class="picBox"><a v-bind:href="ActInfo.href" target="_blank"><img class="pic" v-bind:src="ActInfo.coverPic"></a></div>
		<div class="intro">
			<div class="title"><a v-bind:href="ActInfo.href" target="_blank">{{ActInfo.title}}</a></div>
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
	margin-left: -140px;
	width: 280px;
	padding: 10px 0;
	border-bottom: 1px solid lightgray;
}
.picBox{
	/*width: 50px;*/
	/*height: 45px;*/
	width: 110px;
	height: auto;
	float: left;
}
.pic{
	width: 110px;
	/*height: 95px;*/
}
.intro{
	height: 92px;
	width: 160px;
	margin-left: 10px;
	float: left;
	font-size: 11px;

}
.title a{
	display: block;
	color:#63065f;
	font-weight: bold;
	width: 160px;
	height: 34px;
	max-width: 160px;
	font-size: 13px;

	overflow:hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}
.date,.tag{
	display: inline-block;
	font-size: 8px;
	color:darkgray;
	margin:1px 0;
}
.content{
	width: 160px;
	height: 39px;
	font-size: 8px;
	display: -webkit-box;
	-webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.actCard:after{
	content: "020"; 
	display: block; 
	height: 0; 
	clear: both; 
	visibility: hidden;
}
</style>
