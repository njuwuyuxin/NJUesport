<template>
	<div class="frame">
		<div class="partnerCard">
		    <a v-bind:href="PartnerInfo.href" target="_blank"><img class="pic" v-bind:src="PartnerInfo.coverPic"></a>
		    <!--<h2 class="title">{{PartnerInfo.title}}</h2>-->
		    <div class="paras" v-for="para in PartnerInfo.content">{{para}}</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'PartnerCard',
  data () {
    return {
      
    }
  },
  props:{
  	PartnerInfo:Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame{
	position: relative;
}
.partnerCard{
	height: auto;
	width: 1240px;
	position: relative;
	left: 50%;
	margin-left: -620px;
}
.pic{
	margin-top: 50px;
}
.title{
	margin:30px 0;
}
.paras{
	font-size: 18px;
	margin:1em 0;
}
</style>
