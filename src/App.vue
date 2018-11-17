<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Index from'./components/index'
import Nav from'./components/utils/Nav'
import BottomNav from'./components/utils/BottomNav'
export default {
  name: 'App',
  components: {
    Nav,
    BottomNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
html, body { font-family: Segoe, "Segoe UI", "DejaVu Sans", "Trebuchet MS", Verdana, sans-serif;}
#app {
}
</style>
