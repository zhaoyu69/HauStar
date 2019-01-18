<template>
  <div id="app">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#35495e', width: '200px'}">
      <!-- drawer menu -->
      <ul slot="drawer" class="drawer-content">
        <h1 class="logo">
          <img src="@/assets/logo.png" alt="">
        </h1>
        <group class="drawer-content-list">
          <cell title="关于" link="/about" value="" @click.native="drawerVisibility = false"></cell>
          <cell title="Github" link="https://github.com/zhaoyu69/HauStar" value="" @click.native="drawerVisibility = false"></cell>
        </group>
      </ul>
      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="53px">
        <x-header
          slot="header"
          :title="title"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;">
          <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;" @click.native="changeDrawerVisibility"></x-icon>
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
    </drawer>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, ViewBox, XHeader, Drawer, Group, Cell } from 'vux'
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem,
      ViewBox,
      XHeader,
      Drawer,
      Group,
      Cell
    },
    computed: {
      title () {
        switch (this.$route.path) {
          case '/' : return "打卡";
          case '/statistics' : return "统计";
          case '/rewards' : return "奖惩";
          case '/about' : return "关于";
        }
      }
    },
    methods: {
      changeDrawerVisibility: function() {
        this.drawerVisibility = !this.drawerVisibility;
      }
    },
    data() {
      return {
        drawerVisibility: false,
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

<style scoped lang="less">
  .logo {
    text-align: center;
    padding: 20px;
    padding-bottom: 0;
    img {
      width: 100%;
      display: inline-block;
    }
  }
  .drawer-content-item {
    margin: 5px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #fff;
  }
</style>
