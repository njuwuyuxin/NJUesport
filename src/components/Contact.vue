<template>
	<div class="frame">
		<div class="contact">
	    	<h2>关于网站</h2>
		    <p>网站处于建设初期，仅适合屏宽1920的设备进行浏览，稍有不便还请见谅。</p>
		    <p>如想提交BUG可以发送邮件至biokube@qq.com，谢谢！</p>
		    <h2>商务合作</h2>
		    <p><b>电玩分部涉及游戏可以联系</b></p>
		    <p>QQ：1870071075</p>
		    <p>微信：BIOKUBE</p>
		    <p>邮箱：biokube@qq.com</p>
		    <p>上课时间无法及时回复还请见谅！</p>
		    <p><b>其他游戏可以联系</b></p>
		    <p>手机：18061790350</p>
		    <p>微信：wayay1999</p>
		    <p>邮箱：wayay1999@126.com</p>
		    <p>上课时间无法及时回复还请见谅！</p>
	  	</div>
	</div>
  	
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
	margin-top: 40px;
}
p{
	margin-top: 20px;
}
.frame{
	position: relative;
}
.contact{
	position: relative;
	width: 1240px;
	height: auto;
	left: 50%;
	margin-left: -620px;
	margin-bottom: 150px;
}
</style>
