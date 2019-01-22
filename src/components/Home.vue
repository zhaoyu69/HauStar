<template>
  <div class="home">
    <!--dklist-->
    <flexbox :gutter="0">
      <flexbox-item v-for="(type, index) in types" :key="type.id" :span="1/3" class="item">
        <div class="item-img-wrap" v-on:click="dk(type, records[index])" v-bind:class="{active: (records[index] && records[index].active)}">
          <img :src="(records[index] && records[index].active) ? type.activeSrc : type.src" alt="">
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
            <img :src="types[activeIndex] && types[activeIndex].src" alt="" style="width: 50px;height: 50px;">
            <p style="font-size: 12px;">{{ types[activeIndex] && types[activeIndex].label }}</p>
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
  import typesService from "../services/types";
  import recordsService from "../services/records";
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XTextarea,
      XDialog,
      XButton,
    },
    data() {
      return {
        show: false,
        activeIndex: -1,
        nowTime: this.$moment().format('YYYY/MM/DD HH:mm:ss'),
        types: [],
        records: [],
        logText: ""
      }
    },
    mounted() {
      typesService.getTypes()
        .then(Types => this.types = Types);
      recordsService.getRecords()
        .then(records => this.records = records);
    },
    methods: {
      dk: function(type, record) {
        this.activeIndex = this.types.findIndex(_type => _type.id === type.id);
        this.nowTime = this.$moment().format('YYYY/MM/DD HH:mm:ss');
        const newRecord = {
          active: record && !record.active,
          time: this.$moment(),
          log: this.logText
        };
        this.records[this.activeIndex] = newRecord;
        this.show = newRecord.active;
      },
      saveLog: function() {
        this.records[this.activeIndex].log = this.logText;
        recordsService.addRecords(this.records);
        this.show = false;
      },
      closeLog: function() {
        this.show = false;
      },
      logTextChange: function(value) {
        this.logText = value || "";
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
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: 0 auto;
      border: 1px solid #f1f1f1;
      line-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .item-label {
      margin-top: 3px;
      font-size: 12px;
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
