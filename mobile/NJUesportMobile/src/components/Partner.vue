<template>
  <div class="partner">
    <div class="intro_body">
		<div class="paragraphs">
			<div class="partner">
				<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/sonkwo.png" class="partner_img1" >
				<p>杉果游戏®是中电博亚创立的游戏品牌，以数字分销平台为基础，致力于为中国玩家提供最好的游戏作品、顶级的游戏服务，以及核心玩家专属的游戏内容社区。</p>
				<p>杉果游戏®商城于2013年1月18日在中国地区正式上线。截止2017年，杉果游戏已成功发布超过2,500款作品，无论是AAA级制作的顶级作品，还是获奖无数的精致独立游戏，都在通过杉果游戏®商城呈献给中国游戏玩家。伴随游戏产业的发展，游戏商城的作品数量每天继续以飞快的速度增长，不断带给中国玩家更多的选择和体验。</p>
				<p>此外，杉果游戏®社区也已正式开放，玩家可以通过PC或移动设备等多种终端访问社区，满足玩家对于游戏经验、资讯、活动等信息的分享与沟通需求。杉果游戏®社区致力于为全球以中文为基础的游戏玩家打造全方位的社交中心，同时为他们提供最顶级的游戏服务。</p></br></br>
			</div>
			<div class="partner">
				<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/cubejoy.png" class="partner_img2" >
				<p>方块游戏为国内上市公司皖新传媒（601801）旗下全资公司，公司核心业务为PC游戏发行、代理、运营，将不断通过代理引进、自研开发、合作销售等多种方式将全球优秀作品引入中囯，并通过自有发行平台“方块游戏”为用户提供购买、下载、激活、社群等一系列游戏体验服务。</p></br></br>
			</div>
			<div class="partner">
				<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/tencent.png" class="partner_img3" >
				<p>腾讯互动娱乐，全球领先的综合互动娱乐服务品牌，旗下涵盖腾讯游戏、腾讯文学、腾讯动漫等多个互动娱乐业务平台，致力为用户提供包括网络游戏、文学、动漫、戏剧、影视等在内的多元化、高品质综合互动娱乐体验。立足“泛娱乐”战略，腾讯互动娱乐持续基于互联网与移动互联网的多领域共生，打造明星IP（知识产权，Intellectual Property）的粉丝经济，全面拥抱互动娱乐新时代，让想象绽放！！</p></br></br>
			</div>
			<div class="partner">
				<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/sng.png" class="partner_img4" >
				<p>苏宁电子竞技俱乐部（SNG）成立于2015年，现拥有英雄联盟、绝地求生、堡垒之夜等游戏分部。其中英雄联盟分部于2017年获得LSPL春季赛冠军后升入2017LPL夏季联赛。SNG是LPL舞台上的新生力量，其敢打敢拼的风格让其迅速崭露头角。</p></br></br>
			</div>
			<div class="partner">
				<img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/rng.png" class="partner_img5" >
				<p>皇族电子竞技俱乐部（RNG）成立于2012年5月，现拥有英雄联盟、守望先锋、王者荣耀和街头篮球4个游戏分部。其中皇族英雄联盟分部取得2013年、2014年英雄联盟全球总决赛亚军，2016年LPL春季赛冠军，2017年德玛西亚杯长沙站冠军，2018年LPL春季赛冠军、MSI季中邀请赛冠军及德玛西亚杯夏季赛冠军。</p>
					<p>2018年RNG电竞高校伙伴正式启动，南大电竞社成为第一批合作伙伴，共同促进电竞事业在国内的良性健康发展，让更多的人能够感受并理解电竞文化！</p></br></br>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'Partner',
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
.partner{
	position: relative;
}
p{
	text-indent: 2em;
	font-size: 14px;
}
.partner_img1,.partner_img2,.partner_img3,.partner_img4,.partner_img5{
	position: relative;
	left: 50%;
	margin-bottom: 10px;
}
.partner_img1{
	width: 200px;
	margin-left: -100px;

}
.partner_img2{
	width: 140px;
	margin-left: -70px;
}
.partner_img3{
	width: 180px;
	margin-left: -90px;
}
.partner_img4{
	width: 100px;
	margin-left: -50px;
}
.partner_img5{
	width: 200px;
	margin-left: -100px;
}
</style>
