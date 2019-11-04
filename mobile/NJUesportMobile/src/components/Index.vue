<template>
	<div class="index">
		<SlideImg></SlideImg>
		<div class="bodyframe">
			<div class="body">
				<div class="Title1">游戏沙龙</div>
				<div class="act">
					<NewsCard v-for="news in activities" v-bind:NewsInfo=news :key="news.id"></NewsCard>
				</div>
				<div class="Title2">其他活动</div>
				<div class="review">
					<NewsCard v-for="news in reviews" v-bind:NewsInfo=news :key="news.id"></NewsCard>
				</div>
				<div class="Title3">论坛好帖</div>
				<div class="bbs">
					<PostCard v-for="post in posts" v-bind:PostInfo=post :key="post.id"></PostCard>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NewsCard from './utils/NewsCard'
import SlideImg from './utils/SlideImg'
import PostCard from './utils/PostCard'
export default {
	name: 'Index',
	data () {
		return {
		activities:[],
		reviews:[],
		posts:[],
		}
	},
	components:{
		NewsCard,
		SlideImg,
		PostCard,
		},
		methods:{
		InitNews:function(){
			(function(_this){
			_this.$axios
			.get(
				//"api/api/activityCards?displayNum=4",   //dev
				"https://njuesport.club:8030/api/gameSalon"
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
				"https://njuesport.club:8030/api/otherActivities",
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

			//调用论坛好帖API
			(function(_this){
			_this.$axios
			.get(
				//"api/api/reviewCards?displayNum=8",   //dev
				"https://njuesport.club:8030/api/bbsPost",	//build
			)
			.then(function(response) {
				var data=response.data;
				_this.posts = data;
				console.log(data);
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
.Title1,.Title2,.Title3{
	height: 50px;
	font-size: 18px;
	color:#63065f;
	font-weight: bold;
	line-height: 50px;
}

.act:after,.review:after{
	content: "020"; 
	display: block; 
	height: 0; 
	clear: both; 
	visibility: hidden;
}
</style>
