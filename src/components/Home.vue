<template>
  <div class="home">
    <!--dklist-->
    <flexbox :gutter="0">
      <flexbox-item v-for="type in types" :key="type.id" :span="1/3" class="item">
        <div class="item-img-wrap" v-on:click="dk(type)" v-bind:class="{active:type.isActive}">
          <img :src="type.src" alt="">
        </div>
        <p class="item-label">{{ type.label }}</p>
      </flexbox-item>
    </flexbox>

    <!--dialog-->
    <x-dialog v-model="show" class="dialog-demo" hide-on-blur>
      <div class="log">
        <p class="log-header">打卡日志</p>
        <div class="log-content">
          <p class="log-time">{{ nowTime }}</p>
          <div style="margin-top: 10px">
            <img :src="showItem.src" alt="" style="width: 32px;height: 32px;">
            <p style="font-size: 12px;">{{ showItem.label }}</p>
          </div>
          <x-textarea :max="200" :placeholder="'写点什么吧...'" class="log-text" @on-change="logTextChange"></x-textarea>
        </div>
        <div class="log-footer">
          <x-button type="primary" text="保存" class="btn" @click.native="saveLog"></x-button>
          <x-button type="warn" text="关闭" class="btn" @click.native="closeLog"></x-button>
        </div>
      </div>
    </x-dialog>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem, XTextarea, XDialog, XButton} from 'vux';
  import demoSrc from "@/assets/sun.png";
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XTextarea,
      XDialog,
      XButton,
    },
    methods: {
      dk: function(type) {
        type.isActive = !type.isActive;
        this.show = type.isActive;
        this.showItem = type;
        this.nowTime = this.$moment().format('YYYY/MM/DD HH:mm:ss');
      },
      saveLog: function() {
        alert(this.logText);
        this.show = false;
      },
      closeLog: function() {
        this.show = false;
      },
      logTextChange: function(value) {
        this.logText = value || "";
      }
    },
    data() {
      return {
        show: false,
        showItem: {},
        nowTime: this.$moment().format('YYYY/MM/DD HH:mm:ss'),
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
        logText: ""
      }
    }
  }
</script>

<style>
  .dialog-demo .weui-mask {
    background-color: rgba(0,0,0,.3);
  }
</style>
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
  }
  .log {
    .log-header {
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
    .log-footer {
      margin-bottom: 5px;
      .btn {
        font-size: 12px;
        display: inline-block;
        width: 60px;
        height: 24px;
        line-height: 24px;
      }
    }
  }
</style>
