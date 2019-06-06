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
      activities:[],
      reviews:[],
    }
  },
  components:{
  	NewsCard,
  	SlideImg,
	},
	methods:{
  	InitNews:function(){
	  	(function(_this){
        _this.$axios
          .get(
            //"api/api/activityCards?displayNum=4",   //dev
            "https://njuesport.club:8030/api/activityCards?displayNum=4",	//build
          )
          .then(function(response) {
            var data=response.data;
						for(var i=0;i<data.length;i++)
						{
							_this.activities.push(data[i]);
						}
          })
          .catch(function(error) {
            console.log(error);
          });
			})(this);
			
			(function(_this){
        _this.$axios
          .get(
            //"api/api/reviewCards?displayNum=6",   //dev
            "https://njuesport.club:8030/api/reviewCards?displayNum=6",	//build
          )
          .then(function(response) {
            var data=response.data;
						for(var i=0;i<data.length;i++)
						{
							_this.reviews.push(data[i]);
						}
          })
          .catch(function(error) {
            console.log(error);
          });
    	})(this);
  	}
  },
  mounted(){
  	this.InitNews(this);
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
