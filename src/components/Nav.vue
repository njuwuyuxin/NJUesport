<template>
  <div class="nav">
  	<div class="nav-box">
  		<div class="logo_img"><img src="../assets/images/logo.png"></div>
	  	<div class="nav_items">
	  		<ul>		
	  			<li>首页</li>
	  			<li>部门介绍</li>
	  			<li>社团活动</li>
	  			<li>合作伙伴</li>
	  			<li>联系我们</li>
	  		</ul>
  		</div>
  	</div>
  	
  </div>
</template>

<script>
export default {
  name: 'top_nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
ul{
	list-style: none;
}
li{
	float:left;
	height: 40px;
	margin-left: 20px;
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