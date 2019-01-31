<template>
  <div class="sale">
    <img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/mobile/sale_mobile_part1.jpg" class="pic">
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
		  		<a href="https://2.taobao.com/item.htm?spm=2007.1000337.16.4.444e675ev4Xex5&id=586769026316" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/pc/cart.png" class="buy"></a>
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
	padding-top: 50px;
	width: 360px;
	height: 600px;
	position: relative;
	left: 50%;
	margin-left: -180px;
	/*overflow: hidden;*/
}
.type{
	position: absolute;
	color: #fff;
	line-height: 16px;
	margin-left: 40px;
	margin-top: 8px;
	font-size: 16px;
}
.standard{
	width: 360px;
	height: 251px;
	background-image: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/mobile/sale_mobile_part2.jpg);
	background-size: cover;
}

.deluxe{
	width: 360px;
	height: 251px;
	background-image: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/RE2sale/mobile/sale_mobile_part3.jpg);
	background-size: cover;
	margin-top: 30px;
}
.introBox{
	margin-top: 204px;
	position: absolute;
	height: 34px;
	width: 360px;
}
.intro{
	color: #fff;
	width: 138px;
	height: 34px;
	position: relative;
	left: 50%;
	margin-left: -69px;
}
.del{
	text-decoration: line-through;
}
.price-left{
	font-size: 24px;
	width: 70px;
	float: left;
}
.price-right{
	margin-top: 3px;
	font-size: 10px;
	/*float: right;*/
	height: 35px;
	float: left;
}
.buy{
	height: 34px;
	position: absolute;
	margin-top: -36px;
	margin-left: 212px;
}
.info{
	width: 300px;
	position: relative;
	left: 50%;
	margin-left: -150px;
	font-size: 16px;
	color: #fff;
	text-align: center;
	padding-bottom: 80px;
	margin-bottom: -40px;
}
</style>
