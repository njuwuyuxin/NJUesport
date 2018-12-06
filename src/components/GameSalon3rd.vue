<template>
  <div class="salon3">
  	<div class="back">
  		<!-- <div class="part1"></div> -->
  		<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part1.png" class="pic">
  		<div class="body">
  			<div class="part2">
  				<div class="col-1">
  					2018年12月16日 </br>
  					上午场 09:00-12:00 </br>
  					下午场 13:00-17:00 </br>
  					江苏省南京市栖霞区仙林大道163号 </br>
  					南京大学仙林校区九食堂西区 </br>
  					</br>
  					<div class="baidumap" id="allmap"></div>
  				</div>
  				<div class="col-2">
  					NJU电玩姬是南大电竞社电玩分部运营的 </br>
  					公众号，除了发布每次活动的信息， </br>
  					还会推送STEAM/PS4/X1等平台的 </br>
  					新游资讯、游戏评测、折扣优惠等等。 </br>
  					</br>
  					目前已覆盖QQ、微信、微博三平台， </br>
  					推荐关注QQ公众号，与电玩姬直接互动！ </br>
  				</div>
  				
  			</div>
		    <div class="part3">
		    	<div class="p3-frame">
		    		<a href="https://www.sonkwo.com/products/2293?game_id=2293&rcode=cbfcf0c1c4" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/overcooked_logo.png"></a>
		    		<a href="https://www.sonkwo.com/products/3593?game_id=3658&rcode=cbfcf0c1c4" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/overcooked2_logo.png"></a>    	
			    	<a href="https://store.steampowered.com/app/857950/Incredible_Mandy/" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/mandy_logo.png"></a>
			    	<a href="https://store.steampowered.com/app/698870/Metaverse_Keeper/" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/leak_logo.png"></a>
			    	<a href="https://store.playstation.com/zh-hans-hk/product/UP1004-CUSA03041_00-ASIAPLACEHOLDER0" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/rdr2_logo.png"></a>
			    	<a href="https://store.playstation.com/zh-hans-hk/product/HP9000-CUSA09893_00-ASIAPLACEHOLDER0" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/msm_logo.png"></a>
			    	<a href="https://www.sonkwo.com/products/3796?game_id=3907&rcode=cbfcf0c1c4" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/sc6_logo.png"></a>
			    	<a href="http://act.wangyuan.com/gjqt3/201811/sale/index.html" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/gujian3_logo.png"></a>
			    	<div class="black-block"></div>
			    	<a href="https://www.ubisoft.com.cn/games/console/jd2019" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/jd19_logo.png"></a>
			    	<a href="http://www.sonkwo.hk/products/5?game_id=7&rcode=cbfcf0c1c4" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/re2_logo.png"></a>
		    	</div>
		    	
		    </div>
		    <div class="part4">
		    	<div class="stage">
		    		《灵魂能力6》晋级赛 </br>
		    		</br>
		    		上午场11:00开始 下午场15:00开始 </br>
		    		</br>
		    		规则待定 </br>
		    	</div>
		    </div>
		    <div class="part5">
		    	<div class="stage">
		    		《舞力全开2019》比舞大会 </br>
		    		</br>
		    		上午场10:00开始 下午场16:00开始 </br>
		    		</br>
		    		规则待定 </br>
		    	</div>
		    </div>
		    <div class="part6"></div>
  		</div>

  	</div>
    
  </div>
</template>

<script>
import BMap from 'BMap'
import BMapSymbolSHAPEPOINT from 'BMap_Symbol_SHAPE_POINT'
export default {
  name: 'Salon3',
  data () {
    return {
      
    }
  },
  mounted(){
  	this.baiduMap();
  },
  methods:{
  	 baiduMap:function(){
	     var map = new BMap.Map('allmap');
	     var point = new BMap.Point(118.962218,32.12253);
	     map.centerAndZoom(point, 19);
	     map.enableScrollWheelZoom(true);
	     var marker = new BMap.Marker(point);  // 创建标注
	     map.addOverlay(marker);              // 将标注添加到地图中
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baidumap{
	width: 520px;
	height: 220px;
	margin-left: 14px;
	float: left;
}
.salon3{
	font-family: "黑体";
	text-align: center;
	font-size: 25px;
	line-height: 30px;
	color:#fff;
}
.back{
	background-color: #090917;
	position: relative;
}
.body{
	width: 1222px;
	position: relative;
	left: 50%;
	margin-left: -611px;
}
.pic{
	width: 100%;
}
.part1{
	/*width: 1920px;*/
	width: 1920vw;
	height: 471px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part1.png);
}
.part2{

	width: 1222px;
	height: 544px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part2.png);
}
.part3{
	width: 1222px;
	height: 485px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part3.png);
}
.p3-frame{
	width: 1170px;
	height: 350px;
	padding-top: 50px;
	padding-left: 30px;
}
.black-block{
	width: 200px;
	height: 89px;
	float: left;
	margin:20px 45px;
}
.part3 img{
	display: block;
	float: left;
	margin:20px 45px;
}
.part4{
	width: 1222px;
	height: 434px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part4.png);
}
.stage{
	width: 400px;
	height: 140px;
	margin-left: 100px;
	padding-top: 140px;
}
.part5{
	width: 1222px;
	height: 431px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part5.png);
}
.part6{
	width: 1222px;
	height: 653px;
	background: url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/GameSalon3rd/part6.png);
}
.col-1{
	width: 560px;
	height: 160px;
	margin-left: 30px;
	padding-top: 80px;
	float: left;
}
.col-2{
	width: 560px;
	height: 220px;
	margin-left: 60px;
	padding-top: 80px;
	float: left;
}
</style>
