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
      	href:"xxxxx"    //跳转url
}
```
### 更新活动页面新闻
```
./components/Activities.vue

//在activities数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
      	title:"游戏沙龙第二期",
      	date:"2018年10月13日",
      	class:"游戏沙龙",
      	coverPic:"xxxx,
      	href:"xxxxx"
}
```
### 更新合作伙伴
```
./components/Partner.vue

//在activities数组中，添加，修改，或删除如下结构体（注意顺序影响显示顺序）
{
	    	coverPic:"xxxxx",
	    	title:"xxxxx",
	    	content:[
		    	"xxxx",
		    	"xxxx",
		    	"xxxx",
		    	]
          //其中content为一个数组，可以有一个或多个元素，每一个元素为一个段落，若不需分段可以直接存放一个元素
}
```
