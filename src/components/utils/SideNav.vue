<template>
  <div class="sideNav">
	    <div id="side_guider">
	        <div class="side_item" id="side_item_top"><a href="#summary">电竞社概况</a></div>
	        <div class="side_item"><a href="#department">理事部门介绍</a></div>
	        <div class="side_item_small"><a href="#d1">活动部</a></div>
	        <div class="side_item_small"><a href="#d2">宣传部</a></div>
	        <div class="side_item"><a href="#game_department">游戏分部介绍</a></div>
	        <div class="side_item_small"><a href="#g1">英雄联盟分部</a></div>
	        <div class="side_item_small"><a href="#g2">王者荣耀分部</a></div>
	        <div class="side_item_small"><a href="#g3">炉石传说分部</a></div>
	        <div class="side_item_small"><a href="#g4">守望先锋分部</a></div>
	        <div class="side_item_small"><a href="#g5">电玩分部</a></div>
	        <div class="side_item_small"><a href="#g6">DOTA2分部</a></div>
	        <div class="side_item_small" id="side_item_bottom" style="border:0;" ><a href="#g7">星际2分部</a></div>

	    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
	text-decoration: none;
	color:inherit;
}
#side_guider{
    width: 160px;
    height: 490px;
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 8px;
    position: fixed;
    left:5%;
    top:16%;
    box-shadow: darkgrey 5px 5px 30px 2px;
}
.side_item{
    width: 160px;
    height:40px;
    border-bottom: 1px solid lightgray;
    /*text-align: center;*/
    line-height: 40px;
    font-size: 20px;
    color: #0088cc;
    font-weight: bold;
    text-indent: 1em;
}
.side_item_small{
     width: 160px;
    height:40px;
    border-bottom: 1px solid lightgray;
    /*text-align: center;*/
    line-height: 40px;
    font-size: 16px;
    color: #0088cc;
    font-weight: bold;
    text-indent: 2em;
}
.side_item:hover,.side_item_small:hover{
    background-color: lightgray;
}
#side_item_top:hover{
    border-radius: 8px 8px 0 0;
}
#side_item_bottom:hover
{
    border-radius: 0 0 8px 8px;
}
</style>
