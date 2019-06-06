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
			activities:[],
      reviews:[]
    }
  },
  components:{
    SlideImg,
    NewsCard,
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
							if(data[i].routerLink!='#')
								data[i].href="https://njuesport.club" + data[i].routerLink;
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
            //"api/api/reviewCards?displayNum=8",   //dev
            "https://njuesport.club:8030/api/reviewCards?displayNum=8",	//build
          )
          .then(function(response) {
            var data=response.data;
						for(var i=0;i<data.length;i++)
						{
							if(data[i].routerLink!='#')
								data[i].href="https://njuesport.club" + data[i].routerLink;
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
