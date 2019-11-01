<template>
  <div class="nav">
  	<div class="nav-box">
  		<div class="logo_img"><router-link class="router_css" to="/"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo.png"></router-link></div>
	  	<div class="nav_items">
	  		<ul>		
	  			<li><router-link class="router_css" to="/">首页</router-link></li>
	  			<li><router-link class="router_css" to="/Department">部门介绍</router-link></li>
	  			<li><router-link class="router_css" to="/Activities">社团活动</router-link></li>
	  			<li><router-link class="router_css" to="/Partner">合作伙伴</router-link></li>
	  			<li><router-link class="router_css" to="/Contact">联系我们</router-link></li>
	  			<li><a class="router_css" href="http://bbs.njuesport.club" target="_blank" >论坛</a></li>
	  		</ul>
  		</div>
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	list-style: none;
}
.router_css{
	text-decoration: none;
	color: inherit;
}
li{
	float:left;
	height: 40px;
	margin-left: 5px;
	font-size:25px;
	line-height: 40px;
	font-weight: bold;
	padding:0 10px;
	color: #fff;
	border-radius: 20px;
}
li:hover{
	background-color: #fff;
	color: #63065f;
}
.nav{
	width: 100%;
	height:120px;
	background: #63065f;
	position: relative;
}
.nav-box{
	position: absolute;
	left: 50%;
	margin-left: -620px;
	height: 120px;
	width: 1240px;
}
.logo_img{
	float:left;
}
.nav_items{
	float:left;
	height: 120px;
	/*height: 50px;
	width: 500px;*/
	margin-top: 40px;
	margin-left: 265px;

}
</style>