<template>
  <div class="activities">
	<div class="scrollBox">
		<scroller :on-infinite="infinite" :noDataText="loadingTips" ref="my_scroller">
			<div>
	    		<ActCard v-for="acts in activitiesOnShow" v-bind:ActInfo="acts" :key="acts.id"></ActCard>		
			</div>
	    </scroller>
	</div>
  </div>
</template>

<script>
import ActCard from './utils/ActCard';
import Vue from 'vue';
import VueScroller from 'vue-scroller';
Vue.use(VueScroller);

export default {
  name: 'Activities',
  data () {
    return {
     	activitiesOnShow:[],
    	showIndex:0,
    	showAll:false,
	    activities:[],
	    loadingTips:"已经没有更多了",
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
            "../activities.php?index="+_this.showIndex,	//build
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
  	},
  	infinite:function(done)
  	{
  		console.log("infinite");
  		
  		if(this.showAll){
  			this.loadingTips="已经没有更多啦";
  			this.$refs.my_scroller.finishInfinite(true);
  			setTimeout(()=>{
  				done&&done(true);
  			},1000)
  		}
  		else{
  			setTimeout(()=>{
  				this.LoadMore();
  				console.log(this.$refs.my_scroller);
  				this.$refs.my_scroller.finishInfinite(false);
  			},1500)
  		}
  	}
  },
  mounted(){
  this.LoadMore(this);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.scrollBox{
	position: relative;
	height: 540px;
	width: 100%;
}
.scroll{
	position: relative;
	height: 800px;
}
</style>
