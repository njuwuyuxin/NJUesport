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
import SlideImg from'./utils/SlideImg'
import NewsCard from'./utils/Newscard'
export default {
  name: 'Index',
  data () {
    return {
      activities:[
      {
      	title:"游戏沙龙第四期",
      	date:"2019年6月待定",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salontemp.jpg",
      	href:"",
        id:"1"
      },
      {
      	title:"2019体育月游园会",
      	date:"2019年4月20日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2019tiyuyue.jpg",
      	href:"https://mp.weixin.qq.com/s/pYl8c4WeJyhziek-NRCaDA",
        id:"2"
      },
      {
      	title:"2019社团巡礼",
      	date:"2019年4月13日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2019shexun.jpg",
      	href:"https://mp.weixin.qq.com/s/WmqvB3FJfOsWqmy7C9I_yg",
        id:"3"
      },
      {
      	title:"游戏沙龙第三期",
      	date:"2018年12月16日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181216.jpg",
      	href:"https://www.njuesport.club/GameSalon3rd",
        id:"4"
      },
      ],

      reviews:[
      {
      	title:"2018冬至未至社团嘉年华",
      	date:"2018年12月8日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018dongzhi.jpg",
      	href:"https://mp.weixin.qq.com/s/hWTouIDpLI6FKggTMi6kmA",
        id:"1"
      },
      {
      	title:"游戏沙龙万圣节特别期",
      	date:"2018年10月28日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181028.jpg",
      	href:"https://mp.weixin.qq.com/s/Qf57HVDVET9UCh5oHBXl5g",
        id:"2"
      },
      {
      	title:"首届“新生杯”电子竞技大赛",
      	date:"2018年10月13日至14日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018xinshengbei.jpg",
      	href:"https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q",
        id:"3"
      },
      {
      	title:"游戏沙龙第二期",
      	date:"2018年10月13日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20181013.jpg",
      	href:"https://steamcn.com/t429743-1-1",
        id:"4"
      },
      {
      	title:"首届\"天命杯\"刺激战场交流赛",
      	date:"2018年5月27日",
      	class:"大型比赛",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018pubg.jpg",
      	href:"https://mp.weixin.qq.com/s/IxfZS0eXrAbSegLDc-294g",
        id:"5"
      },
      {
      	title:"游戏沙龙第一期",
      	date:"2018年5月27日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20180527.jpg",
      	href:"https://steamcn.com/t389636-1-1",
        id:"6"
      },
      {
      	title:"游戏沙龙第零期",
      	date:"2018年5月20日",
      	class:"游戏沙龙",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/salon20180520.jpg",
      	href:"https://mp.weixin.qq.com/s/qH0So5BDfXkuYBY1Bw-9MQ",
        id:"7" 
      },
      {
      	title:"2018社团巡礼校园电玩展",
      	date:"2018年4月21日",
      	class:"展台活动",
      	coverPic:"https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/card/2018shexun.jpg",
      	href:"https://steamcn.com/t381795-1-1",
        id:"8"
      },
      ],
    }
  },
  components:{
    SlideImg,
    NewsCard,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
