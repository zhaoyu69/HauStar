<template>
  <div class="nav">
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
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'Nav',
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
