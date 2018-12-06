<template>
  <div class="videotest">
  	<div class="filter">
  		<div class="logo"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo.png""></div>
  	</div>
    <video src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/video/SpiderMan.mp4" loop muted autoplay height="1080px" width="100%"></video>
  </div>
</template>

<script>
export default {
  name: 'VideoTest',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0;
	margin: 0;
}
.videotest{
	height: 1080px;
	width: 100%;
	margin-top: -10px;
	margin-bottom: -10px;
}
.filter{
	height: 1080px;
	width: 100%;
	position: absolute;
	background: rgb(0,0,0,0);
}
.logo{
	position: absolute;
	left: 50%;
	margin-left: -162px;
}
</style>
