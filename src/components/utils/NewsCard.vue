<template>
  <div class="news-card">
    <div class="body">
    	<!-- <a v-if="NewsInfo.href!='#'" v-bind:href="NewsInfo.href" target="_blank">
    		<img v-on:click="toBlur" v-bind:class="{blur:isBlur}" class="pic" v-bind:src="NewsInfo.coverPic">
    	</a>
    	<img v-else v-on:onmouseover="toBlur" v-bind:class="{blur:isBlur}" class="pic" v-bind:src="NewsInfo.coverPic"> -->
    	<div class="imgbox">
    		<div v-on:mouseover="isBlur=true" v-on:mouseout="isBlur=false" v-bind:class="{beforeimg:!isBlur,beforeimg_hover:isBlur}"></div>

    		<div class="moreInfo" v-on:mouseover="isBlur=true" v-if="isBlur">
    			<a v-on:click="isBlur=false" v-if="NewsInfo.href!='#'" v-bind:href="NewsInfo.href" target="_blank">查看详情</a>
    			<span v-else>敬请期待</span>
    		</div>

    		<img v-on:mouseover="isBlur=true" v-on:mouseout="isBlur=false" v-bind:class="{blur:isBlur}" class="pic" v-bind:src="NewsInfo.coverPic">
    		

    	</div>
    				
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
      isBlur:false,
    }
  },
  props:{
  	NewsInfo:Object,
  },
  methods:{
  	toBlur:function(){
  		console.log("on hover");
  		this.isBlur=true;
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.moreInfo > a{
	text-decoration: none;
	color: inherit;
}
.body{
	width:291px;
	height: 343px;
	border: 1px solid lightgray;
	border-radius: 5px;
	float:left;
	margin-right: 20px;
	margin-bottom: 50px;
	box-shadow: lightgrey 1px 1px 5px;
}
.imgbox{
	position: relative;
	overflow: hidden;
	border-radius: 5px 5px 0 0;
	height: 241px;
}
.beforeimg{
	border-radius: 5px 5px 0 0;
	position: absolute;
	z-index: 2;
	width:291px;
	height: 241px;
	background-color: #000;
	opacity: 0;
	transition: opacity 0.4s;
}
.beforeimg_hover{
	border-radius: 5px 5px 0 0;
	position: absolute;
	width:291px;
	height: 241px;
	background-color: #000;
	z-index: 2;
	opacity: 0.5;
	transition: opacity 0.4s;
}
.pic{
	transition-property: filter;
	transition-duration: 0.4s;
	filter: blur(0px);
	width: 100%;
	height: auto;
	border-radius: 5px 5px 0 0;
}
.blur{
	background-color: rgba(0, 0, 0, 0.85);
	transition: background-color 0.5s linear;
	transition-property: filter;
	transition-duration: 0.4s;
	filter: blur(5px);
}
.moreInfo{
	position: absolute;
	left: 50%;
	top:50%;
	margin-left: -49px;
	margin-top: -18px;
	color: #fff;
	font-weight: bold;
	font-size: 14px;
	line-height: 36px;
	text-align: center;
	z-index: 3;
	width: 98px;
	height: 36px;
	border: 2px solid #fff;
	border-radius: 5px;
}
.moreInfo:hover{
	background-color: #fff;
	color: #000;
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
