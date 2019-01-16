<template>
  <div class="home">
    <flexbox :gutter="0">
      <flexbox-item v-for="type in types" :key="type.id" :span="1/3" class="item">
        <div class="item-img-wrap" v-on:click="dk(type)" v-bind:class="{active:type.isActive}">
          <img :src="type.src" alt="">
        </div>
        <p class="item-label">{{ type.label }}</p>
        <x-dialog v-model="show" class="dialog-demo" hide-on-blur>
          <div class="log">
            <p class="log-title">打卡日志</p>
            <div class="log-content">
              <p class="log-time">{{ nowTime }}</p>
              <div style="margin-top: 10px">
                <img :src="type.src" alt="" style="width: 32px;height: 32px;">
                <p style="font-size: 12px;">{{ type.label }}</p>
              </div>
              <x-textarea :max="200" :placeholder="'写点什么吧...'" class="log-text"></x-textarea>
            </div>
          </div>
        </x-dialog>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XTextarea, XDialog} from 'vux';
  import demoSrc from "@/assets/sun.png";
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XTextarea,
      XDialog
    },
    methods: {
      dk: function(type) {
        type.isActive = !type.isActive;
        this.show = type.isActive;
      }
    },
    data() {
      return {
        nowTime: this.$moment().format('YYYY/MM/DD HH:mm:ss'),
        show: false,
        types: [{
          src: demoSrc,
          label: "1",
          isActive: true,
        }, {
          src: demoSrc,
          label: "2",
          isActive: false,
        }, {
          src: demoSrc,
          label: "3",
          isActive: false,
        }],
      }
    }
  }
</script>

<style scoped lang="less">
  .home {
    padding: 20px 0;
  }
  .item {
    text-align: center;
    .item-img-wrap {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 auto;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #f1f1f1;
      &.active {
        background: #fff493;
      }
      img {
        width: 32px;
        height: 32px;
      }
    }
    .item-label {
      margin-top: 3px;
    }
    .log {
      .log-title {
        background: #09BB07;
        color: #fff;
        padding: 3px 0;
      }
      .log-content {
        .log-time {
          font-size: 14px;
          color: #bbb;
          border-bottom: 1px solid #eee;
        }
        .log-text {
          font-size: 12px;
        }
      }
    }
  }
</style>
