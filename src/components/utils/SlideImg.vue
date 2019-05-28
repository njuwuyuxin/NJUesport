<template>
<!-- 制作一个框架包裹slider -->
 <div style="width:100%;height:420px">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 直接使用slideritem slot -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" v-html="item.html"></slideritem>
          <!-- 设置loading,可自定义 -->
          <!-- <div slot="loading">loading...</div> -->
          <div slot="loading"><a href="https://njuesport.club/GameSalon3rd" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_salon20181216.jpg"></a></div>
      </slider>
</div>
</template>
<script>
import { slider, slideritem } from 'vue-concise-slider'// import slider components
export default {
   name: 'SlideImg',
   // el:'#app'
   data () {
      return {
        //Image list
        someList:[],
        //Sliding configuration [obj]
        options: {
          currentPage: 0,
          thresholdDistance:100,
          thresholdTime:500,
          autoplay:4000,
          loop:true,
          infinite:1,
          direction:'horizontal',
          loopedSlides:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          speed: 500,
          addActive:'',
          offsetLeft:'',
        }
      }
    },
    components: {
      slider,
      slideritem
    },
    mounted () {
      let that = this
      setTimeout(function () {
        that.someList = [
          {
            html: '',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2019sonkwopai.jpg)'
            },
            href:"https://www.sonkwo.com/operation_activities_part/1557027424.html?rcode=cbfcf0c1c4"
          },
          {
            html: '',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_salon20181216.jpg)'
            },
            href:"https://www.njuesport.club/GameSalon3rd"
          },
          {
            html: '',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2018dongzhi.jpg)'
            },
            href:"https://mp.weixin.qq.com/s/hWTouIDpLI6FKggTMi6kmA"
          },
          {
            html: '',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2018xinshengbei.jpg)'
            },
            href:"https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q"
          },
          {
            html: '',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_salon20181013.jpg)'
            },
            href:"https://steamcn.com/t429743-1-1"
          },
        ]
      }, 2000)
    },
    methods: {
      // Listener event
      slide (data) {
      },
      onTap (data) {
        //console.log(data);
        if(this.someList[data.currentPage].href!='#')
        	window.open(this.someList[data.currentPage].href);
      },
      onInit (data) {
        //console.log(data)
      }
    }
}
</script>
