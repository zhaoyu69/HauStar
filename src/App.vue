<template>
  <div id="app">
    <!-- main content -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header
        slot="header"
        :title="title"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </x-header>
      <router-view/>
      <tabbar class="tab">
        <tabbar-item :selected="this.$route.path === '/'" link="/">
          <img slot="icon" src="@/assets/nav_dk.png">
          <img slot="icon-active" src="@/assets/nav_dk_active.png">
          <span slot="label">打卡</span>
        </tabbar-item>
        <tabbar-item :selected="this.$route.path === '/statistics'" link="/statistics">
          <img slot="icon" src="@/assets/nav_tj.png">
          <img slot="icon-active" src="@/assets/nav_tj_active.png">
          <span slot="label">统计</span>
        </tabbar-item>
        <tabbar-item :selected="this.$route.path === '/rewards'" link="/rewards">
          <img slot="icon" src="@/assets/nav_jc.png">
          <img slot="icon-active" src="@/assets/nav_jc_active.png">
          <span slot="label">奖惩</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, ViewBox, XHeader } from 'vux'
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem,
      ViewBox,
      XHeader
    },
    computed: {
      title () {
        if (this.$route.path === '/') return '打卡';
        if (this.$route.path === '/statistics') return '统计';
        if (this.$route.path === '/rewards') return '奖惩';
      }
    }
  }
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  @import '~vux/src/styles/1px.less';
  @import 'styles/font/font.css';
  html, body{
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    font-family: "pop";
  }
  #app {
    height: 100%;
  }
</style>
