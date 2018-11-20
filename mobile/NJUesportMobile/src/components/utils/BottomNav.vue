<template>
  <div class="bottomNav">
    <div class="footer">
		<div class="footer1">
			<a href="https://www.nju.edu.cn/"><img src="
https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/nju.png" class="footer_img1"></a> <a href="http://bbs.nju.edu.cn/"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/njubbs.png" class="footer_img1"></a><a href="https://www.sonkwo.com/store?rcode=cbfcf0c1c4"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/sonkwo.png" class="footer_img1"></a><a href="https://www.cubejoy.com/"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/cubejoy.png" class="footer_img1"></a>
		</div>

		<div class="footer2">
			<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/500px.png" class="footer_img2">
			<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo2/cli_500px.png" class="footer_img2">
		</div>	
	</div>
	<div class="BeiAn">
		<div>COPYRIGHT © NJUESPORT ALL RIGHTS RESERVED</div>
		<div><a href="http://www.miitbeian.gov.cn" style="color:#7a5678">苏ICP备18055040号</a></div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomNav{
	margin-top: 40px;
}
.footer{
	width: 100%;
	/*height: 200px;*/
	position: relative;
	background-color: #63065f;

}
.footer1{
	width: 350px;
	height: 40px;
	background-color: #63065f;
	position: relative;
	left: 50%;
	margin-left: -175px;

}
.footer_img1{
	height: 22px;
	float: left;
	margin:8px 6px;
}
.footer2{
	position: relative;
	left: 50%;
	margin-left: -130px;
}
.footer_img2{
	height: 50px;
	margin: 0 40px;
	margin-bottom: 10px;
}
.BeiAn{
	padding-top: 5px;
	background-color:#390336;
	height: 30px;
	color:#7a5678;
}
.BeiAn div {
	font-size: 8px;
	text-align: center;
}
</style>
