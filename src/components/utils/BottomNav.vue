<template>
  <div class="bottom-nav">
    <div class="footerframe">
        <div class="footer">
          	<img class="footimg" src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/footer.png" usemap="#FooterMap"/>
            <map name="FooterMap" id="FooterMap">
	            <area shape="rect" coords="338,115,529,179" href="https://www.nju.edu.cn/" target="_blank" />
	            <area shape="rect" coords="545,115,736,179" href="http://bbs.nju.edu.cn/" target="_blank" />
	            <area shape="rect" coords="749,115,1025,179" href="https://www.sonkwo.com/store?rcode=cbfcf0c1c4" target="_blank" />
	            <area shape="rect" coords="1037,115,1205,179" href="https://www.cubejoy.com/" target="_blank" />
            </map>
        </div>   
    </div>      
    <div>  
	    <div class="footer2">
          	<span class="copyright">COPYRIGHT © NJUESPORT ALL RIGHTS RESERVED</span>
          	<span class="sg">&nbsp;|&nbsp;</span>
          	<span class="address">
          		<a href="http://www.miitbeian.gov.cn/" class="copymail" target="_blank">苏ICP备18055040号</a>
          	</span>
          	</font>
	    </div>
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
a{
	color: inherit;
}
.footerframe{
	position: relative;
	background-color: #63065f;
	width:100%;
	height:200px;
}
.footimg{
	position: absolute;
	left: 50%;
	margin-left: -950px;
	width:1899px;
	height:200px;
}
.footer2{
	background-color: #390336;
	width:100%;
	height:30px;
	color: #7a5678;
	text-align: center;
	font-size: 14px;
	line-height: 30px;
}
</style>
