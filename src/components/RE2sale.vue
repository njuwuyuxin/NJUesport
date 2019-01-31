<template>
  <div class="sale">
    <img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/sale_pc_part1.jpg" class="pic">
    <div class="version">
	  	<div class="standard">
	  		<div class="introBox">
	  			<div class="type">普通版</div>
	  			<div class="intro">
		  			<div class="price-left">￥185</div>
					<div class="price-right">
						<div class="del">原价￥325</div>
						<div>非社员价￥195</div>
					</div>
		  		</div>
		  		<a href="https://2.taobao.com/item.htm?spm=2007.1000337.16.4.444e675ev4Xex5&id=586769026316" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/cart.png"class="buy"></a>
	  		</div> 		
	  	</div>
	  	<div class="deluxe">
	  		<div class="introBox">
	  			<div class="type">豪华版</div>
		  		<div class="intro">
		  			<div class="price-left">￥215</div>
					<div class="price-right">
						<div class="del">原价￥378</div>
						<div>非社员价￥225</div>
					</div>
		  		</div>
		  		<a href="https://2.taobao.com/item.htm?spm=2007.1000338.6.3.e75d6235I9Tu2F&id=586637493135" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/cart.png"class="buy"></a>
		  	</div>
	  	</div>
  	</div>
  	<div class="info">
  		<p>注意事项</p>
  		<p>1、标准版仅包含游戏、豪华版除游戏本体外还包含2套里昂服装、3套克莱尔服装、原版配乐替换、豪华武器“武士之刃——艾伯特型”。</p>
  		<p>2、本激活码仅限中国大陆IP用户激活下载运行，先确认收货才会发码，一旦发码概不退款、介意者勿购。</p>
  		<p>3、南大电竞社社员购买前请通过“聊一聊”提供学号和姓名，核实后会降价10元。</p>
  	</div>
  </div>
  
</template>

<script>
export default {
  name: 'RE2sale',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin:0;
	padding: 0;
}
.sale{
	background-color: #000;
}
.pic{
	width: 100%;
}
.version{
	padding-top: 100px;
	width: 1650px;
	height: 700px;
	position: relative;
	left: 50%;
	margin-left: -825px;
	overflow: hidden;
}
.type{
	position: absolute;
	color: #fff;
	line-height: 80px;
	margin-left: 80px;
	font-size: 28px;
}
.standard{
	width: 773px;
	height: 509px;
	background-image: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/standard.jpg);
	float: left;
}
.standard:hover{
	width: 769px;
	height: 505px;
	/*padding-left: -3px;*/
	/*padding-top: -2px;*/
	background-position: center center;
	border:solid #f40 2px;
}
.deluxe{
	width: 771px;
	height: 509px;
	background-image: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/deluxe.jpg);
	float: left;
	margin-left: 100px;
}
.deluxe:hover{
	width: 767px;
	height: 505px;
	background-position: center center;
	border:solid #f40 2px;
}
.introBox{
	height: 80px;
}
.intro{
	color: #fff;
	/*text-align: center;*/
	font-size: 26px;
	width: 276px;
	margin-top: 428px;
	/*padding-top: 428px;*/
	position: relative;
	left: 50%;
	margin-left: -138px;
}
.del{
	text-decoration: line-through;
}
.price-left{
	font-size: 60px;
	width: 150px;
	float: left;
}
.price-right{
	margin-top: 15px;
	font-size: 20px;
	float: right;
	height: 64px;
	float: left;
}
.buy{
	height: 76px;
	float: right;
	margin-right: 80px;
}
.info{
	font-size: 22px;
	color: #fff;
	text-align: center;
	padding-bottom: 200px;
}
</style>
