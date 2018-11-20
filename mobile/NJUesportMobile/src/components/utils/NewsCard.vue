<template>
  <div class="newsCard">
  	<div class="body">
	  	<div class="imgBox"><img v-bind:src="NewsInfo.coverPic"></div>
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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
	width: 145px;
	border: 1px solid lightgray;
	border-radius: 5px;
	float: left;
	margin-right: 12px;
	margin-bottom: 15px;
	box-shadow: lightgrey 1px 1px 2px;
}
img{
	width: inherit;
	height: inherit;
	border-radius: 5px 5px 0 0;
}
.imgBox{
	width: 146px;
}
.title,.date,.tag{
	width: 145px;
	font-size: 11px;
	text-align: center;
	color: #63065f;
}
.date{
	font-size: 8px;
	padding-bottom: 5px;
	border-bottom: 1px solid lightgray;
	color:darkgray;
}
.tag{
	height: 20px;
	line-height: 20px;
	font-size: 11px;
	color:darkgray;
}
</style>
