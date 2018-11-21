<template>
  <div class="contact">
    <div class="intro_body">
		<div class="paragraphs">
			<h2>关于网站</h2>
			<p>网站处于建设初期，功能可能并不完善，稍有不便还请见谅。</p>
			<p>如想提交BUG可以发送邮件至biokube@qq.com，谢谢！</p></br>

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
.intro_body{
	position: relative;
	margin-top: 30px;
}
.paragraphs{
	position: relative;
	left: 50%;
	width:280px;
	margin-left: -140px;
}
h2{
	font-size: 18px;
	margin-bottom: 10px;
}
p{
	font-size: 13px;
}
</style>
