<template>
  <div class="about">
    <img src="@/assets/bulb.png" alt="" class="logo">
    <p>习否习否</p>
    <p>应是绿肥红瘦</p>
    <div class="foot">
      <p>v0.0.1</p>
      <p>HauStar ©2019 Created by zhaoyu.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    components: {

    }
  }
</script>

<style scoped lang="less">
  .about {
    background-color: #eee;
    height: 100%;
    overflow: hidden;
    text-align: center;
    position: relative;
    .logo {
      display: block;
      width: 100px;
      height: auto;
      margin: 30px auto;
    }
    .foot {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 20px;
      font-size: 12px;
    }
  }
</style>
