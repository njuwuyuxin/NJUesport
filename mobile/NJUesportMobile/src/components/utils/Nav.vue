<template>
  <div class="nav">
  	<div class="top">
		<router-link to="/"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo.png" class="logo"></router-link>
	</div>
    <ul class="nav-ul">
		<li><router-link to="/">首页</router-link></li>
		<li><router-link to="/Department">部门介绍</router-link></li>
		<li><router-link to="/Activities">社团活动</router-link></li>
		<li><router-link to="/Partner">合作伙伴</router-link></li>
		<li><router-link to="/Contact">联系我们</router-link></li>
	</ul>
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
a{
	text-decoration: none;
	color: #333;
}
.top{
	height: 70px;
	width: 100%;
	background-color: #63065f;
	position: relative;
}
.logo{
	/*height:inherit;*/
	/*width: 200px;*/
	width: 200px;
	position: absolute;
	left:50%;
	margin-left: -100px;
}

/*.nav{
	margin-top: -10px;
	padding-top: 10px;
	height: 60px;
	width: 100%;
	background-color: #63065f;
	position: relative;
}*/
.nav{
	position: relative;
	background-color: #63065f;
	width: 100%;
	height: 100px;
}

.nav-ul{
	position: relative;
	left: 50%;
	width: 352px;
	margin-left: -176px;

}
.nav-ul li{
	float: left;
	font-size: 14px;
	margin-right: 5px;
	margin-left: 5px;
	padding: 0px 5px;
	background-color: #fff;
	font-weight: bold;
	border-radius: 10px;

}
.nav-ul li a{
	color: #63065f;
}
</style>
