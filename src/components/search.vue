<template>
   <div class="search" :class="{ focused: focused }">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text" @click="goSearch" :placeholder="placeholder" @input="qs" v-model="query">
        <span @click="cancelSearch">取消</span>
      </div>
      <!-- 搜索结果 -->
      <div class="content">
        <div class="title">
          搜索历史
          <span class="clear"></span>
        </div>
        <div class="history">
         <a href="">小米</a>
         <a href="">小米是多少</a>
         <a href="">小米</a>
        </div>
        <!-- 搜索推荐 -->
        <div class="result" v-show="queryList.length">
          <scroll-view scroll-y>
            <a href="" v-for="item in queryList" :key="item.goods_id">{{item.goods_name}}</a>
          </scroll-view>
        </div>
      </div>
    </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      focused: false,
      placeholder: '',
      query: '',
      queryList: []
    }
  },
  methods: {
    goSearch () {
      this.focused = true
      this.placeholder = '请输入商品信息'
    },
    cancelSearch () {
      this.focused = false
      this.placeholder = ''
      this.query = ''
      this.queryList = []
    },
    async qs () {
      const { message } = await request({
        url: 'api/public/v1/goods/search',
        data: {
          query: this.query
        }
      })
      this.queryList = message.goods
    }
  }
}
</script>

<style scoped lang="less">
.search  {
  display: flex;
  flex-direction: column;
  .input-box {
    background-color: #ff2d4a;
    height: 60rpx;
    padding: 20rpx 16rpx;
    position: relative;
    display: flex;
    justify-content: space-between;
    &::after {
      content: "搜索";
      display: block;
      height: 44rpx;
      line-height: 44rpx;
      width: 54rpx;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: #999;
      font-size: 24rpx;
      padding-left: 60rpx;
      background: url('https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png') no-repeat;
      background-size: 38rpx;
    }
    &::before {
      content: '';
      display: none;
      height: 44rpx;
      width: 44rpx;
      background: url('https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png') no-repeat;
      background-size: 38rpx;
      position: absolute;
      top: 50%;
      left: 50rpx;
      transform: translateY(-50%)

    }
    input {
      height: 60rpx;
      background-color: #fff;
      border-radius: 10rpx;
      font-size: 24rpx;
      padding: 0 30rpx 0 90rpx;
      color: #666;
      flex: 1;
    }
    span {
      display: block;
      width: 80rpx;
      height: 60rpx;
      line-height: 60rpx;
      font-size: 24rpx;
      text-align: center;
      color: #999;
      display: none;
    }
  }
  &.focused {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    .input-box {
      background-color: #eee;
      &::after {
        display: none;
      }
      &::before  {
        display: block;
      }
      span {
        display: block;
      }
    }
    .content {
      display: block;
    }
  }
  .content {
    display: none;
    flex: 1;
    background-color: #fff;
    padding: 30rpx;
    position: relative;
    .title {
      font-size: 27rpx;
      color: #333;
    }
    .clear {
      float: right;
      width: 27rpx;
      height: 27rpx;
      background: url('https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/clear.png');
      background-size: cover;
    }
    .history {
      padding-top: 30rpx;
      a {
        display: inline-block;
        background-color: #ddd;
        color: #333;
        font-size: 24rpx;
        padding: 10rpx 20rpx;
        margin-right: 20rpx;
        margin-bottom: 10rpx;
      }
    }
    .result {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #fff;
      scroll-view {
        height: 100%;
      }
      a {
        font-size: 24rpx;
        padding: 20rpx 18rpx;
        border-bottom: 1rpx solid #000;
      }
    }
  }
}



</style>
