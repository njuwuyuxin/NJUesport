<template>
  	<div class="index">
	    <top_nav></top_nav>
	    <slide_img></slide_img>
	    <div class="bodyframe">
	    	<div class="body">
		    	<div class="Title1">最新活动</div>
	    		<div class="act">
			    	<NewsCard v-for="news in activities" v-bind:NewsInfo=news></NewsCard>
			    </div>
			    <div class="Title2">精彩回顾</div>
			    <div class="review">
			    	<NewsCard v-for="news in reviews" v-bind:NewsInfo=news></NewsCard>
			    </div>
		    </div>
	    </div>
	    <BottomNav></BottomNav>
  	</div>
</template>

<script>
import top_nav from'./Nav'
import slide_img from'./SlideImg'
import NewsCard from'./Newscard'
import BottomNav from'./BottomNav'
export default {
  name: 'Index',
  data () {
    return {
      activities:[
      {
      	title:"游戏沙龙第三期",
      	date:"待定",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card8.jpg",
      	href:"#"
      },
      {
      	title:"2018南京大学游戏大选",
      	date:"2018年11月14日至25日",
      	class:"游戏大选",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card10.jpg",
      	href:"https://www.wjx.top/jq/30747979.aspx"
      },
      {
      	title:"游戏沙龙万圣节特别期",
      	date:"2018年10月28日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card9.jpg",
      	href:"https://mp.weixin.qq.com/s/Qf57HVDVET9UCh5oHBXl5g"
      },
      {
      	title:"首届“新生杯”电子竞技大赛",
      	date:"2018年10月13日至14日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card7.jpg",
      	href:"https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q"
      },
      ],

      reviews:[
      {
      	title:"游戏沙龙第二期",
      	date:"2018年10月13日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card6.jpg",
      	href:"https://steamcn.com/t429743-1-1"
      },
      {
      	title:"首届\"天命杯\"刺激战场交流赛",
      	date:"2018年5月27日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card5.jpg",
      	href:"https://mp.weixin.qq.com/s/IxfZS0eXrAbSegLDc-294g"
      },
      {
      	title:"游戏沙龙第一期",
      	date:"2018年5月27日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card4.jpg",
      	href:"https://steamcn.com/t389636-1-1"
      },
      {
      	title:"游戏沙龙第零期",
      	date:"2018年5月20日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card3.jpg",
      	href:"https://mp.weixin.qq.com/s/qH0So5BDfXkuYBY1Bw-9MQ"
      },
      {
      	title:"2018社团巡礼校园电玩展",
      	date:"2018年4月21日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card2.jpg",
      	href:"https://steamcn.com/t381795-1-1"
      },
      {
      	title:"2017冬至未至社团嘉年华",
      	date:"2017年12月17日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/card1.jpg",
      	href:"https://mp.weixin.qq.com/s/qH0So5BDfXkuYBY1Bw-9MQ"
      },
      ],
    }
  },
  components:{
  	top_nav,
    slide_img,
    NewsCard,
    BottomNav,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.Title1{
	height: 100px;
	font-size: 32px;
	color:#63065f;
	font-weight: bold;
	line-height: 100px;
}
.Title2{
	height: 80px;
	font-size: 32px;
	font-weight: bold;
	color:#63065f;
}
.bodyframe{
	position: relative;
}
.body{
	left: 50%;
	width: 1252px;
	margin-left: -626px;
	height: auto;
	position: relative;
}
.act{
	width: 1252px;
	height: auto;
}
.act:after,.review:after{
	content: "020"; 
	display: block; 
	height: 0; 
	clear: both; 
	visibility: hidden;
}
</style>
