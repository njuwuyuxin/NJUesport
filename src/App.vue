<template>
  <div id="app">
    <top_nav></top_nav>
    <slide_img></slide_img>
    
  </div>
</template>

<script>
// import top-nav from './components/HelloWorld'
import top_nav from'./components/Nav'
import slide_img from'./components/SlideImg'
export default {
  name: 'App',
  components: {
    top_nav,
    slide_img
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
}
</style>
