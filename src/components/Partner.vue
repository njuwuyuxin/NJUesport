<template>
	<div class="partner">
	    <PartnerCard v-for="partner in partnerList" v-bind:PartnerInfo="partner" :key="partner.id"></PartnerCard>
	</div>
</template>

<script>
import PartnerCard from './utils/PartnerCard'
export default {
  name: 'Partner',
  data () {
    return {
	    partnerList:[
		{
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/cubejoy.png",
			href:"https://www.cubejoy.com/",
	    	title:"关于方块游戏",
	    	content:[
		    	"方块游戏为皖新传媒旗下皖新文化科技公司打造的游戏运营和发行平台，致力于为用户提供丰富多彩的游戏娱乐内容。公司核心业务为PC游戏发行、代理、运营，将不断通过代理引进、自研开发、合作销售等多种方式将全球优秀作品引入中国，并通过自有发行平台“方块游戏”为用户提供购买、下载、激活、社群等一系列游戏体验服务、倡导简单快乐游戏。此外，方块游戏亦面向国内外游戏开发者提供包括资金扶持、版号申请、加密保护、运营推广等在内的一站式发行通道合作。"
		    	],
		    id:"1"
	    },
	    {
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/sonkwo.png",
			href:"https://www.sonkwo.com/store?rcode=cbfcf0c1c4",
	    	title:"关于杉果游戏",
	    	content:[
		    	"杉果游戏®是中电博亚创立的游戏品牌，以数字分销平台为基础，致力于为中国玩家提供最好的游戏作品、顶级的游戏服务，以及核心玩家专属的游戏内容社区。",
		    	"杉果游戏®商城于2013年1月18日在中国地区正式上线。截止2017年，杉果游戏已成功发布超过2,500款作品，无论是AAA级制作的顶级作品，还是获奖无数的精致独立游戏，都在通过杉果游戏®商城呈献给中国游戏玩家。伴随游戏产业的发展，游戏商城的作品数量每天继续以飞快的速度增长，不断带给中国玩家更多的选择和体验。",
		    	],
		    id:"2"
	    }, 
		{
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/ps.png",
			href:"https://www.playstation.com.cn/",
	    	title:"关于索尼PlayStation",
	    	content:[
		    	"索尼互动娱乐（Sony InteractiveEntertainment）出品的历代PlayStation硬件产品全球销量达数亿台，游戏软件销量数十亿套，是全球最受欢迎的电子游戏平台之一。",
		    	"索尼互动娱乐除致力于将索尼全球最先进的电子游戏产品、软件和服务介绍到中国市场，同时也积极和国内游戏开发团队开展合作，推动国内家用游戏软件的开发制作，促进国内游戏产业的健康发展，并致力于将国内优质的游戏产品推广到全球，在世界舞台上展示中国文化的魅力。"
				],
		    id:"3"
	    },
	    {
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/tencent.png",
			href:"https://ieg.tencent.com/",
	    	title:"关于腾讯互娱",
	    	content:[
		    	"腾讯互动娱乐，全球领先的综合互动娱乐服务品牌，旗下涵盖腾讯游戏、腾讯文学、腾讯动漫等多个互动娱乐业务平台，致力为用户提供包括网络游戏、文学、动漫、戏剧、影视等在内的多元化、高品质综合互动娱乐体验。立足“泛娱乐”战略，腾讯互动娱乐持续基于互联网与移动互联网的多领域共生，打造明星IP（知识产权，Intellectual Property）的粉丝经济，全面拥抱互动娱乐新时代，让想象绽放！！"
		    	],
		    id:"4"
	    },
	    {
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/rng.png",
			href:"https://weibo.com/SHroyalClub",
	    	title:"关于RNG",
	    	content:[
		    	"皇族电子竞技俱乐部（RNG）成立于2012年5月，现拥有英雄联盟、守望先锋、王者荣耀和街头篮球4个游戏分部。其中皇族英雄联盟分部取得2013年、2014年英雄联盟全球总决赛亚军，2016年LPL春季赛冠军，2017年德玛西亚杯长沙站冠军，2018年LPL春季赛冠军、MSI季中邀请赛冠军及德玛西亚杯夏季赛冠军。",
		    	"2018年RNG电竞高校伙伴正式启动，南大电竞社成为第一批合作伙伴，共同促进电竞事业在国内的良性健康发展，让更多的人能够感受并理解电竞文化！"
		    	],
		    id:"5"
	    },
		{
	    	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/logo/sng.png",
			href:"https://weibo.com/tbgclub",
	    	title:"关于SNG",
	    	content:[
		    	"苏宁电子竞技俱乐部（SNG）成立于2015年，现拥有英雄联盟、绝地求生、堡垒之夜等游戏分部。其中英雄联盟分部于2017年获得LSPL春季赛冠军后升入2017LPL夏季联赛。SNG是LPL舞台上的新生力量，其敢打敢拼的风格让其迅速崭露头角",
		    	],
		    id:"6"
	    },
	    ]
    }
  },
  components:{
  	PartnerCard,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.partner{
	margin-bottom: 100px;
}
</style>
