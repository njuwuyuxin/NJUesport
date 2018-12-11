<template>
  <div class="index">
  	<SlideImg></SlideImg>
  	<div class="bodyframe">
    	<div class="body">
	  		<div class="Title1">最新活动</div>
			<div class="act">
		    	  <NewsCard v-for="news in activities" v-bind:NewsInfo=news :key="news.id"></NewsCard>
		    </div>
		    <div class="Title2">精彩回顾</div>
		    <div class="review">
		    	  <NewsCard v-for="news in reviews" v-bind:NewsInfo=news :key="news.id"></NewsCard>
		    </div>
		</div>
	</div>
  </div>
</template>

<script>
import NewsCard from './utils/NewsCard'
import SlideImg from './utils/SlideImg'
export default {
  name: 'Index',
  data () {
    return {
      activities:[
      {
      	title:"游戏沙龙第三期",
      	date:"2018年12月16日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181216.jpg",
        href:"#",
        routerLink:"/GameSalon3rd",
        id:"1"
      },
      {
      	title:"2018冬至未至社团嘉年华",
      	date:"2018年12月8日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018dongzhi.jpg",
      	href:"https://mp.weixin.qq.com/s/hWTouIDpLI6FKggTMi6kmA",
        id:"2"
      },
      {
      	title:"2018南京大学游戏大选",
      	date:"2018年11月14日至25日",
      	class:"游戏大选",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018njuga.jpg",
      	href:"https://tp.wjx.top/jq/31130953.aspx",
        id:"3"
      },
      {
      	title:"游戏沙龙万圣节特别期",
      	date:"2018年10月28日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181028.jpg",
      	href:"https://mp.weixin.qq.com/s/Qf57HVDVET9UCh5oHBXl5g",
        id:"4"
      },
      ],

      reviews:[
      {
      	title:"首届“新生杯”电子竞技大赛",
      	date:"2018年10月13日至14日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018xinshengbei.jpg",
      	href:"https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q",
        id:"1"
      },
      {
      	title:"游戏沙龙第二期",
      	date:"2018年10月13日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181013.jpg",
      	href:"https://steamcn.com/t429743-1-1",
        id:"2"
      },
      {
      	title:"首届\"天命杯\"刺激战场交流赛",
      	date:"2018年5月27日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018pubg.jpg",
      	href:"https://mp.weixin.qq.com/s/IxfZS0eXrAbSegLDc-294g",
        id:"3"
      },
      {
      	title:"游戏沙龙第一期",
      	date:"2018年5月27日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20180527.jpg",
      	href:"https://steamcn.com/t389636-1-1",
        id:"4"
      },
      {
      	title:"游戏沙龙第零期",
      	date:"2018年5月20日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20180520.jpg",
      	href:"https://mp.weixin.qq.com/s/qH0So5BDfXkuYBY1Bw-9MQ",
        id:"5" 
      },
      {
      	title:"2018社团巡礼校园电玩展",
      	date:"2018年4月21日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018shexun.jpg",
      	href:"https://steamcn.com/t381795-1-1",
        id:"6"
      },
      ],
    }
  },
  components:{
  	NewsCard,
  	SlideImg,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bodyframe{
	position: relative;
}
.body{
	left: 50%;
	/*left:7%;*/
	width: 318px;
	/*width: 89%;*/
	margin-left: -153px; 
	height: auto;
	position: relative;
}
.Title1{
	height: 50px;
	font-size: 18px;
	color:#63065f;
	font-weight: bold;
	line-height: 50px;
}
.Title2{
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	font-weight: bold;
	color:#63065f;
}

.act:after,.review:after{
	content: "020"; 
	display: block; 
	height: 0; 
	clear: both; 
	visibility: hidden;
}
</style>
