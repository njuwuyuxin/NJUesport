<template>
  <div class="activities">
    <ActCard v-for="acts in activitiesOnShow" v-bind:ActInfo="acts" :key="acts.id"></ActCard>
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
	    activities:[]
    }
 },
  components:{
  	ActCard,
  },
  methods:{
  	LoadMore:function(){
	  	console.log("send an ajax");
	  	(function(_this){
        _this.$axios
          .get(
            //"api/activities.php?index="+_this.showIndex,   //dev
            //"http://118.89.104.33/activities.php?index="+_this.showIndex,	//build
            "/activities.php?index="+_this.showIndex,	//build
          )
          .then(function(response) {
          	console.log("response:");
          	console.log(response);
            var data=response.data;
            console.log("data:");
            console.log(data);
            if(data.length<10)
            	_this.showAll=true;
            for(var i=0;i<data.length;i++)
            	_this.activitiesOnShow.push(data[i]);
            _this.showIndex+=data.length;
          })
          .catch(function(error) {
            console.log(error);
          });
    	})(this);
  	}
  },
  mounted(){
  	// for(;this.showIndex<10;this.showIndex++)
  	// 	this.activitiesOnShow.push(this.activities[this.showIndex]);
  	this.LoadMore(this);
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
