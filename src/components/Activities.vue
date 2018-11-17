<template>
  <div class="activities">
    <ActCard v-for="acts in activitiesOnShow" v-bind:ActInfo="acts"></ActCard>
    <div class="buttonBox">  	
    	<button v-on:click="LoadMore">{{showAll?"已经没有更多啦":"点击加载更多"}}</button>
    </div>
  </div>
</template>

<script>
import ActCard from './utils/ActCard'
export default {
  name: 'Activities',
  data () {
    return {
    	activitiesOnShow:[],
    	showIndex:0,
    	showAll:false,
	    activities:[
	    {	
	   		coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181114.jpg",
	    	href:"https://www.wjx.top/jq/30747979.aspx",
	    	title:"2018南京大学游戏大选海选环节正式开始",
	    	date:"2018.11.14",
	    	tag:"游戏大选",
	    	content:"看完了今年的TGA候选名单了吗？属于我们南大学子自己的游戏大选也正式开始啦！快来参与海选环节，助力你最喜欢的游戏或电竞选手进入提名投票环节！",
	    },
	    {
	   		coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181022_2.jpg",
	    	href:"https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q",
	    	title:"首届“新生杯”电子竞技大赛比赛结果出炉",
	    	date:"2018.10.22",
	    	tag:"大型比赛",
	    	content:"紧张刺激的首届“新生杯”电子竞技大赛已经结束，小伙伴们想不想知道最终战报呢？就让我们来看看三个项目的比赛结果吧!",
	    },
	    {
	   		coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181022_1.jpg",
			href:"https://mp.weixin.qq.com/s/Qf57HVDVET9UCh5oHBXl5g",
			title:"游戏沙龙万圣节特别期预告 | 恐怖游戏试玩来袭",
			date:"2018.10.22",
			tag:"游戏沙龙",
			content:"一年一度的万圣节即将来临，在享受STEAM/PSN等游戏平台万圣折扣的同时，别忘了来我们的游戏沙龙特别期现场，亲身体验一番应景的恐怖游戏！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181016.jpg",
			href:"https://mp.weixin.qq.com/s/wL1XB9H0UJdhR3oUwamlcg",
			title:"游戏沙龙第二期回顾 | 力量越大责任越大",
			date:"2018.10.16",
			tag:"游戏沙龙",
			content:"由南大电竞社电玩分部主办的游戏沙龙第二期于上周六圆满结束！跟电玩姬一起来回顾一下这期活动吧~"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181012.jpg",
			href:"https://mp.weixin.qq.com/s/6R7rQUV6HWXHCo7OupqjJw",
			title:"游戏沙龙第二期预告 | 《漫威蜘蛛侠》彩蛋大盘点",
			date:"2018.10.12",
			tag:"游戏沙龙",
			content:"在《漫威蜘蛛侠》中藏着数不胜数的漫威彩蛋，它们究竟是哪些呢？跟随电玩姬一探究竟！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181010.jpg",
			href:"https://mp.weixin.qq.com/s/tz6iEvADNjRUO_jJUSAQOA",
			title:"游戏沙龙第二期预告 | 《漫威蜘蛛侠》各媒体评测",
			date:"2018.10.10",
			tag:"游戏沙龙",
			content:"《漫威蜘蛛侠》为什么广受好评？一起来看看几家专业媒体的评测吧。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20181008.jpg",
			href:"https://mp.weixin.qq.com/s/s_AejJjj1_cGzCWtA_LwKg",
			title:"游戏沙龙第二期预告 | 线下试玩《漫威蜘蛛侠》等游戏领好礼",
			date:"2018.10.08",
			tag:"游戏沙龙",
			content:"游戏沙龙第二期正式开催，除了MVP《漫威蜘蛛侠》外，还有《怪物猎人：世界》《底特律：变人》提供试玩！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180821.jpg",
			href:"https://mp.weixin.qq.com/s/RCAolebvkJ8UjGBrliRGaQ",
			title:"南大电竞社《星际争霸2》哭弱杯线上赛最后一日战报出炉！",
			date:"2018.08.21",
			tag:"水友赛",
			content:"哭弱杯终于迎来反向晋级赛的半决赛和决赛啦！就让我们一起来看看战果如何吧~"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180820.jpg",
			href:"https://mp.weixin.qq.com/s/RCAolebvkJ8UjGBrliRGaQ",
			title:"南大电竞社《星际争霸2》哭弱杯线上赛第三日战报出炉！",
			date:"2018.08.20",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180818.jpg",
			href:"https://mp.weixin.qq.com/s/gc9bf6q2rXwL5XVtIXMwxw",
			title:"南大电竞社《英雄联盟》暑期水友赛圆满结束",
			date:"2018.08.18",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180816.jpg",
			href:"https://mp.weixin.qq.com/s/EVOc9LPlfwK0FUrVLtbTDA",
			title:"南大电竞社《星际争霸2》哭弱杯线上赛第二日战报出炉！",
			date:"2018.08.16",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180814.jpg",
			href:"https://mp.weixin.qq.com/s/_9n-hp7mStlPY0ow-uj43w",
			title:"南大电竞社《星际争霸2》哭弱杯线上赛首日战报出炉！",
			date:"2018.08.14",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180601.jpg",
			href:"https://mp.weixin.qq.com/s/vNjGjSpr-yr71EHrsRMJ4g",
			title:"游戏沙龙第一期回顾 | 力战心劫舍身救赎",
			date:"2018.06.01",
			tag:"游戏沙龙",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180526.jpg",
			href:"https://mp.weixin.qq.com/s/1XrOX9A6rdfHlWGFplDCFQ",
			title:"游戏沙龙第一期预告 | 游戏BOSS攻略下",
			date:"2018.05.26",
			tag:"游戏沙龙",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180525.jpg",
			href:"https://mp.weixin.qq.com/s/h3jzSi8bFahlY-v-WdOfwg",
			title:"游戏沙龙第一期预告 | 游戏BOSS攻略上",
			date:"2018.05.25",
			tag:"游戏沙龙",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180522.jpg",
			href:"https://mp.weixin.qq.com/s/8o94cCRng7q-cRdSq5weiA",
			title:"游戏沙龙第一期预告 | 《救赎之路SINNER》暗星工作室专访",
			date:"2018.05.22",
			tag:"游戏沙龙",
			content:"二柄APP对《救赎之路SINNER》暗星工作室进行了专访，主创们对于自己的游戏有什么看法呢？"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180521.jpg",
			href:"https://mp.weixin.qq.com/s/LJU4M4m96Q3m4IRStEZJww",
			title:"游戏沙龙第一期预告 | 挑战救赎之路赢取激活码",
			date:"2018.05.21",
			tag:"游戏沙龙",
			content:"在即将到来的游戏沙龙第一期中，我们挑选了于近期发售的国产硬核动作游戏《救赎之路SINNER》给大家带来前所未有的颤栗游戏体验！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180520.jpg",
			href:"https://mp.weixin.qq.com/s/IxfZS0eXrAbSegLDc-294g",
			title:"首届“天命杯”《刺激战场》交流赛开启报名",
			date:"2018.05.20",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180513.jpg",
			href:"https://mp.weixin.qq.com/s/qH0So5BDfXkuYBY1Bw-9MQ",
			title:"游戏沙龙第零期预告 | 来校庆展台体验《底特律：变人》吧",
			date:"2018.05.13",
			tag:"游戏沙龙",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180422.jpg",
			href:"https://mp.weixin.qq.com/s/uKw5vrFMd3h5f3qLE2WXOw",
			title:"南大电竞社X杉果游戏 校园电玩展展台回顾",
			date:"2018.04.22",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180420.jpg",
			href:"https://mp.weixin.qq.com/s/LW9QYf4CELNX5UhI2rpYEQ",
			title:"社巡展台剧透第五弹 | 老猎人与老司机",
			date:"2018.04.20",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180417.jpg",
			href:"https://mp.weixin.qq.com/s/kUnlxXoXsAXfn-uKRsTZQg",
			title:"社巡展台剧透第四弹 | 育碧游戏了解一下",
			date:"2018.04.17",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180416.jpg",
			href:"https://mp.weixin.qq.com/s/BX61cJwZKQ3UCekqpe4uCw",
			title:"社巡展台剧透第三弹 | 魂学家们看过来",
			date:"2018.04.16",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180415.jpg",
			href:"https://mp.weixin.qq.com/s/AaPncYjEnqssZqK_XX34NQ",
			title:"社巡展台剧透第二弹 | 还记得那款难到炸的《掘地求升》吗",
			date:"2018.04.15",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180414.jpg",
			href:"https://mp.weixin.qq.com/s/IwmMt6yP9_GklYVhe2nhcQ",
			title:"社巡展台剧透第一弹 | 这款炸裂级好评的游戏竟会提供试玩",
			date:"2018.04.14",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180402.jpg",
			href:"https://mp.weixin.qq.com/s/MKoKdv9uQW9CpcWKHYP4YQ",
			title:"《星际争霸》寒假线上赛圆满结束",
			date:"2018.04.02",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180401.jpg",
			href:"https://mp.weixin.qq.com/s/PqCPnxWnVIT71QcmbW2T9g",
			title:"NJU MAJOR《DOTA2》线下淘汰赛圆满结束",
			date:"2018.04.01",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180326.jpg",
			href:"https://mp.weixin.qq.com/s/btvc4ZSn7lAjQW9cpgufzw",
			title:"NJU MAJOR《DOTA2》线上小组赛圆满结束",
			date:"2018.03.26",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180323.jpg",
			href:"https://mp.weixin.qq.com/s/_NaKoysLISV-xrTfgzjTrQ",
			title:"NJU MAJOR《DOTA2》线上小组赛即将开始",
			date:"2018.03.23",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180319.jpg",
			href:"https://mp.weixin.qq.com/s/tB8iw7wb0HqM5ndoLYjyLQ",
			title:"NJU MAJOR《DOTA2》比赛开启报名",
			date:"2018.03.19",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20180203.jpg",
			href:"https://mp.weixin.qq.com/s/g1qv_pfxcvpNUU2KeuzjYQ",
			title:"《星际争霸》寒假线上赛开启报名",
			date:"2018.02.03",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171223.jpg",
			href:"https://mp.weixin.qq.com/s/f-Jpxos30bHoxYZU6xDHMg",
			title:"《炉石传说》圣诞线上赛开启报名",
			date:"2017.12.23",
			tag:"水友赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171219.jpg",
			href:"https://mp.weixin.qq.com/s/pp2WGeLEESrol9Xt_RMV1w",
			title:"南大电竞社X方块游戏 冬至未至展台完美收官",
			date:"2017.12.19",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171214.jpg",
			href:"https://steamcn.com/t338623-1-1",
			title:"南大电竞社X方块游戏 给学生党线下送福利",
			date:"2017.12.14",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171213.jpg",
			href:"https://mp.weixin.qq.com/s/pCugya57w-BXA1fMQzETgQ",
			title:"铭记历史，勇担重任，在中国梦的宏伟实践中书写青春华章——致全国青年学子的一封倡议书",
			date:"17.12.13",
			tag:"公告",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171031.jpg",
			href:"https://mp.weixin.qq.com/s/QdzW4KgqWniTrien_JHXcQ",
			title:"2017 WEPLAY游戏文化展报告",
			date:"2017.10.31",
			tag:"展台活动",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171027.jpg",
			href:"https://mp.weixin.qq.com/s/DVN2_pqUC-cQmW01sg9MMQ",
			title:"南大LOL征途决赛圆满结束",
			date:"2017.10.27",
			tag:"大型比赛",
			content:"  			"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171023.jpg",
			href:"https://mp.weixin.qq.com/s/86FTGuElD7MdshnWGEjJKw",
			title:"第四届《王者荣耀》全国高校联赛南大选拔赛圆满结束 恰王者少年为校而战",
			date:"2017.10.23",
			tag:"大型比赛",
			content:"经过一天的鏖战，第四届《王者荣耀》全国高校联赛南大选拔赛圆满落幕，冠军队伍皮皮驴开车啦战队将代表南京大学参加省选拔赛！感谢所有参赛选手为大家呈现了一场场精彩绝伦的比赛，也感谢各位COSER为现场炒热气氛。"
		},

		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171019.jpg",
			href:"https://mp.weixin.qq.com/s/do1YcLc-l5vdhSGqNvVl_Q",
			title:"南大LOL征途杯决赛即将开始",
			date:"2017.10.19",
			tag:"大型比赛",
			content:"经过两周的激烈角逐，决赛队伍最终产生！究竟谁能代表南大参加《英雄联盟》全国高校联赛，让我们拭目以待。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171018.jpg",
			href:"https://mp.weixin.qq.com/s/20G2M3wsu4yZ63YDiLh0kA",
			title:"第四届《王者荣耀》全国高校联赛南大选拔赛即将开始",
			date:"2017.10.18",
			tag:"大型比赛",
			content:"第四届《王者荣耀》全国高校联赛开始了！校园选拔赛的所有参赛者皆可获得钻石铭文体验卡等参赛奖励，前八强则有200-2000元不等的现金奖励，冠军更可代表南京大学直升第四届《王者荣耀》高校联赛南京省赛！各路大神不心动嘛？"
		},

		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171014.jpg",
			href:"https://mp.weixin.qq.com/s/Sdvucmf8iqHIlupiXyw0sg",
			title:"南大LOL征途杯第二轮小组赛即将开始",
			date:"2017.10.14",
			tag:"大型比赛",
			content:"第二年轮小组赛将于10月14日在南大和园的浪淘沙网吧举行，届时将有12支队伍参赛吼，8支参加正赛，4支参加娱乐赛。既有电竞紧张刺激的氛围，又有娱乐反套路的乐趣，保证让大家一饱眼福！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171012.jpg",
			href:"https://mp.weixin.qq.com/s/NR9DK7ar5XcriPIv_ZIF-Q",
			title:"南大LOL征途杯第一轮小组赛圆满结束",
			date:"2017.10.12",
			tag:"大型比赛",
			content:"恭喜lannister战队和NPC战队获得第一轮小组赛正赛的丰厚奖金和礼物，另外所有参加了娱乐赛的妹子也获得了我们精心准备的礼物噢!"
		},

		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20171001.jpg",
			href:"https://mp.weixin.qq.com/s/L2DAwwIoH97z-t9M2hdAFw",
			title:"南大LOL征途杯第一轮小组赛即将开始",
			date:"2017.10.01",
			tag:"大型比赛",
			content:"重大消息！南大LOL征途杯开赛了！苦于没有一个平台展示绝佳的技术？想和黑友小伙伴一起搞事情？想结交更多的朋友一起撸啊撸？我们满足你！这里还有丰厚奖品等你来！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170925.jpg",
			href:"https://mp.weixin.qq.com/s/vGVM4hbvf_NSxH7KH-l2Yw",
			title:"WGC高校精英赛开启火热报名",
			date:"2017.09.25",
			tag:"大型比赛",
			content:"WGC高校精英赛（WeChat Games Championship），是由微信游戏打造的高校电竞赛事，旨在为广大高校电竞热爱者提供一个竞技舞台。首届比赛将在全国9大城市、数百所高校拉开帷幕。除了闪耀着光芒的无上荣耀，还有丰厚的奖金在领奖台上虚位以待。"
		},

		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170924.jpg",
			href:"https://mp.weixin.qq.com/s/DLpBS1Fc0AyQsur1wtynAQ",
			title:"手游《乱世王者》展台回顾",
			date:"2017.09.24",
			tag:"展台活动",
			content:"《乱世王者》手游现已全平台不限号正式开启，为何不加入我们，既得江山又收美人呢？"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170914.jpg",
			href:"https://mp.weixin.qq.com/s/eHYFygNKCy-rHqFUdxv-rg",
			title:"网游《冒险岛2》展台回顾",
			date:"2017.09.14",
			tag:"展台活动",
			content:"《冒险岛2》终于迎来了不删档公测，正值开学季，《冒险岛2》团队拉着萌物们来到南京大学仙林校区，搞了点事情！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170509.jpg",
			href:"https://mp.weixin.qq.com/s/vjVB6k4QMTapJnn9omNQ3w",
			title:"第五届《英雄联盟》全国高校联赛线上赛5月11日鸣锣开战",
			date:"2017.05.09",
			tag:"大型比赛",
			content:"第五届《英雄联盟》全国高校联赛全国线上赛将于2017年5月11日掀开战幕。5月11日至5月14日，来自全国范围内的31支高校战队将向8个线下赛资格发起冲击。5月25日至5月28日，全国总决赛将会来到南京大学，12支顶级高校战队将在持续一周的赛程当中，决出冠军荣耀的归属。"
		},

		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170501.jpg",
			href:"https://mp.weixin.qq.com/s/ozsbkxZECs6jTFm5n3wKzA",
			title:"手游《龙之谷》展台回顾",
			date:"2017.05.01",
			tag:"展台活动",
			content:"方肇周那抹别样的鲜红如一团烈焰，充满着青春的热情，少年少女整理行装，来一场说走就走的旅行，我在龙之谷等你。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20170318.jpg",
			href:"https://mp.weixin.qq.com/s/INRtP4jxCAA9LaUttZwD0A",
			title:"南大征途杯《英雄联盟》比赛即将开始",
			date:"2017.03.18",
			tag:"大型比赛",
			content:"还在为路人匹配中的小打小闹激动或是沮丧，之后又因找不到人分享而倍感孤单？常常梦想着成为Best Riven NJU、南大浪子彦，却苦于竞技平台的难觅？南大征途杯《英雄联盟》比赛正在向你召唤！无论是想招罗三五好友组建战队扬名立万，还是想为证明自己的水平踏上征程，你都能在这里找到最适合的舞台！" 
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20161030.jpg",
			href:"https://mp.weixin.qq.com/s/fF3b9zNrECTHBO7qBo0_ag",
			title:"南大杯《守望先锋》《DOTA2》比赛圆满结束",
			date:"2016.10.30",
			tag:"大型比赛",
			content:"南大杯《守望先锋》《DOTA2》比赛在这两天已经全部结束，恭喜“堡垒说的队”与“我爱冷冷战队”分别获得OW与DOTA2的冠军！"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20161029.jpg",
			href:"https://mp.weixin.qq.com/s/2y13uxpN4wwM8kIGSYgyjQ",
			title:"南大杯各大赞助商介绍",
			date:"2016.10.29",
			tag:"大型比赛",
			content:"本次南大杯电竞比赛的准备与举办，少不了南播玩、青春飞扬网咖等赞助商的鼎力支持，一起来了解一下他们吧。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20161024.jpg",
			href:"https://mp.weixin.qq.com/s/mkzcocwmPTszGn4KKgacbg",
			title:"南大杯《英雄联盟》比赛圆满结束",
			date:"2016.10.24",
			tag:"大型比赛",
			content:"经过两天的鏖战，南大杯《英雄联盟》比赛圆满落幕。16支战队，17场比赛，胜利的狂喜，败北的失落，以及各种可能与不可能所带来的悬念，都在一局局的比赛中体现得淋漓尽致。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20161018.jpg",
			href:"https://mp.weixin.qq.com/s/XGSIB3UBZ57HLTj64YmezQ",
			title:"南大杯《守望先锋》比赛时间更正",
			date:"2016.10.18",
			tag:"大型比赛",
			content:"南大杯《守望先锋》比赛时间应为10月29日、30日两天，特此更正。"
		},
		{
			coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/activity/20161017.jpg",
			href:"https://mp.weixin.qq.com/s/SsVVItUds8y0Dzxsj9tDlA",
			title:"南大杯电竞比赛即将开始",
			date:"2016.10.17",
			tag:"大型比赛",
			content:"2016年10月22日至30日期间我社将陆续开展《英雄联盟》《守望先锋》《DOTA2》《炉石传说》的比赛，奖品多多，欢迎大家踊跃报名。"
		},
	    ]
    }
 },
  components:{
  	ActCard,
  },
  methods:{
  	LoadMore:function(){
  		if(this.showAll==false)
  		{
  			if(this.showIndex<this.activities.length-10)
	  		{
	  			for(var i=0;i<10;i++)
	  				this.activitiesOnShow.push(this.activities[this.showIndex+i]);
	  			this.showIndex+=10;
	  		}
	  		else
	  		{
	  			for(var i=0;i<this.activities.length-this.showIndex;i++)
	  				this.activitiesOnShow.push(this.activities[this.showIndex+i]);
	  			this.showIndex=this.activities.length-1;
	  			this.showAll=true;
	  		}
	  	}
  	}
  },
  mounted(){
  	for(;this.showIndex<10;this.showIndex++)
  		this.activitiesOnShow.push(this.activities[this.showIndex]);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activities{
	margin-top: 40px;
	margin-bottom: 50px;
}
.buttonBox{
	margin-top: 50px;
	position: relative;
}
button{
	position: relative;
	left: 50%;
	margin-left: -100px;
	border:0;
	background-color: #63065f;
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	width: 200px;
	height: 50px;
}
</style>
