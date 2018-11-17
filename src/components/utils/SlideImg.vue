<template>
<!-- 制作一个框架包裹slider -->
 <div style="width:100%;height:420px">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <!-- 直接使用slideritem slot -->
          <slideritem v-for="(item,index) in someList" :key="index" :style="item.style" v-html="item.html"></slideritem>
          <!-- 设置loading,可自定义 -->
          <!-- <div slot="loading">loading...</div> -->
          <div slot="loading"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner1.jpg"></div>
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
          thresholdTime:100,
          autoplay:4000,
          loop:true,
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
            html: '<a href="https://steamcn.com/t429743-1-1" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner1.jpg"></a>',
            style: {

            }
          },
          {
            html: '<a href="https://steamcn.com/t429743-1-1" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner2.jpg"></a>',
            style: {
              
            }
          },
          {
            html: '<a href="https://steamcn.com/t429743-1-1" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner3.jpg"></a>',
            style: {
              
            }
          },
          {
            html: '<a href="https://steamcn.com/t429743-1-1" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner4.jpg"></a>',
            style: {
              
            }
          },
          {
            html: '<a href="https://steamcn.com/t429743-1-1" target="_blank"><img src="https://image-1253276483.cos.ap-shanghai.myqcloud.com/image/banner/banner5.jpg"></a>',
            style: {
              
            }
          }
        ]
      }, 2000)
    },
    methods: {
      // Listener event
      slide (data) {
        //console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        //console.log(data)
      }
    }
}
</script>