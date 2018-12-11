# nju_esport

> 南大电竞社官网

## Build Setup


### install dependencies
```
npm install
```
### serve with hot reload at localhost:8080
```
npm run dev
```
### build for production with minification
```
npm run build
```
### build for production and view the bundle analyzer report
```
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 更新网站


### 更新首页卡片
```
./components/index.vue

//在activities或reviews数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
      	title:"游戏沙龙第三期",
      	date:"待定",
      	class:"游戏沙龙",
      	coverPic:"xxxx",  //封面图片url
      	href:"xxxxx",    //跳转url
	routerLink:"xxxx" //移动端页面可选属性，一般不需要该属性，当跳转链接为路由时，将href填为#，同时在该属性中填相对路径
	id:"xxxx"    //该条新闻的唯一id，不可重复，内容没有限制，建议语义化标签
}
```
### 更新活动页面新闻
```
//由于活动内容较多，为提升速度，将数据存放在服务器，页面加载时动态请求
//因此数据存放在JSON文件中

./data/activities.json

//在json文件中的data元素数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
      	title:"游戏沙龙第二期",
      	date:"2018年10月13日",
      	class:"游戏沙龙",
      	coverPic:"xxxx,
      	href:"xxxxx",
	id:"xxxx"    //该条新闻的唯一id，不可重复，内容没有限制，建议语义化标签
}
```
### 更新合作伙伴
```
./components/Partner.vue

//在partnerList数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
        coverPic:"xxxxx",
        title:"xxxxx",
        content:[
            "xxxx",
            "xxxx",
            "xxxx",
        ],
	id:"xxxx"    //该条新闻的唯一id，不可重复，内容没有限制，建议语义化标签
        
	//其中content为一个数组，可以有一个或多个元素，每一个元素为一个段落，若不需分段可以直接存放一个元素
}
```
### 更新首页滚动图
```
./components/utils/SlideImg.vue

//在mounted()函数中的that.someList数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
        html: '',
        style: {
		'background':'url(xxxxxxxx)'
        },
	href:'xxxxxxxx'
}, 
//其中html为html元素，按照v-html解析，可直接按一般html格式书写,无需要一般为空。
//style为样式，可按一般css格式书写，一般用来设置背景图片url。
//href为点击图片跳转地址
```
### 注意
#### 由于在滚动图组件未加载完时，会临时加载滚动图中的第一张进行“预载”，因此若要修改滚动图组件中第一张图片，需同时修改以下位置：
```
./components/utils/SlideImg.vue

template模板中
<div slot="loading"><a href="图片跳转地址" target="_blank">img src="预载的第一张图片url"></a></div>
```
