<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import Index from'./components/index'
import Nav from'./components/Nav'
import BottomNav from'./components/BottomNav'
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
#app {
}
</style>
