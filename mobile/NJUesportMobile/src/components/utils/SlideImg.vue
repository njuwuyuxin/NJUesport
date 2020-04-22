<template>
<!-- 制作一个框架包裹slider -->
 <div style="width:100vw;height:30vw">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 直接使用slideritem slot -->
          <!-- 之后路由地址可以统一写在list里,href填/mobile/xxx相对地址即可 -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" v-html="item.html"></slideritem>
          <!-- 设置loading,可自定义 -->
          <div slot="loading"><a class="loading" href="https://bbs.njuesport.club/thread/98.html"></a></div>
          <!-- <div slot="loading" class="loading"><router-link to="/GameSalon3rd" style="display: block;width: 100%;height: 100%;"></router-link></div> -->
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
            html: '<a href="https://bbs.njuesport.club/thread/98.html"  style="display:block;width:100vw;height:30vw"></a>',
            style: {
            	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2019xinshengbei.jpg)',
              'background-repeat':'no-repeat',
              'background-size':'140% 100%',
              'background-position':"top center",
            },
          },
          // {
          //   html: '<a href="https://www.sonkwo.com/operation_activities_part/1557027424.html?rcode=cbfcf0c1c4"  style="display:block;width:100vw;height:30vw"></a>',
          //   style: {
          //   	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2019sonkwopai.jpg)',
          //     'background-repeat':'no-repeat',
          //     'background-size':'140% 100%',
          //     'background-position':"top center",
          //   },
          // },
          // {
          //   html: '<a href="/mobile/GameSalon3rd" style="display:block;width:100vw;height:30vw"></router-link>',
          //   style: {
          //     'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_salon20181216.jpg)',
          //     'background-repeat':'no-repeat',
          //     'background-size':'140% 100%',
          //     'background-position':"top center",
          //   },
          // },
          // {
          //   html: '<a href="https://mp.weixin.qq.com/s/hWTouIDpLI6FKggTMi6kmA"  style="display:block;width:100vw;height:30vw"></a>',
          //   style: {
          //   	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2018dongzhi.jpg)',
          //     'background-repeat':'no-repeat',
          //     'background-size':'140% 100%',
          //     'background-position':"top center",
          //   },
          // },
          // {
          //   html: '<a href="https://mp.weixin.qq.com/s/_ARdMvYzXtIQJLOtJJdR2Q" style="display:block;width:100vw;height:30vw"></a>',
          //   style: {
          //   	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2018xinshengbei.jpg)',
          //     'background-repeat':'no-repeat',
          //     'background-size':'140% 100%',
          //     'background-position':"top center",
          //   },
          // },
          // {
          //   html: '<a href="https://steamcn.com/t429743-1-1" style="display:block;width:100vw;height:30vw"></a>',
          //   style: {
          //   	'background':'url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_salon20181013.jpg)',
          //     'background-repeat':'no-repeat',
          //     'background-size':'140% 100%',
          //     'background-position':"top center",
          //   },
          // }
        ]
      }, 2000)
    },
    methods: {
      // Listener event
      slide (data) {
      },
      onTap (data) {
        console.log(data);
        // if(this.someList[data.currentPage].href!='#')
        // 	window.open(this.someList[data.currentPage].href);
      },
      onInit (data) {
        //console.log(data)
      }
    }
}
</script>
<style scoped>
.loading{
  width: 100vw;
  height: 30vw;
  background:url(https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner_2019xinshengbei.jpg);
  background-repeat:no-repeat;
  background-size:140% 100%;
  background-position:top center;
  display: block;
}
</style>
