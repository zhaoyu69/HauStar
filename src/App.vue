<template>
  <div id="app">
    <router-view/>
    <Nav />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import '~vux/src/styles/1px.less';
#app {
  height: 100vh;
}
</style>
