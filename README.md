# NJU_ESPORT

> 南大电竞社官网

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

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

目前网站更新均通过后端修改，前端不再存储页面信息

### 注意
#### 由于在滚动图组件未加载完时，会临时加载滚动图中的第一张进行“预载”，因此若要修改滚动图组件中第一张图片，需同时修改以下位置：
```
./components/utils/SlideImg.vue

template模板中
<div slot="loading"><a href="图片跳转地址" target="_blank">img src="预载的第一张图片url"></a></div>
```
### 注意事项
node版本建议使用较新版本 10.x以上，使用旧版本可能会有兼容性问题
