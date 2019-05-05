<template>
  <div>
    <div class="search">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text">
      </div>
      <!-- 搜索结果 -->
      <div class="result"></div>
    </div>
    <!-- 焦点图 -->
    <swiper
      class="banner"
      indicator-dots
      indicator-color="rgba(255, 255, 255, 0.6)"
      indicator-active-color="#fff"
      autoplay
      circular
    >
      <swiper-item v-for="(list, key) in bannerList" :key="key">
        <navigator :url="list.navigator_url">
          <img :src="list.image_src">
        </navigator>
      </swiper-item>


    </swiper>
    <!-- 导航 -->
    <div class="navs">
      <navigator v-for="(item, index) in navList" :key="index" :url="item.navigator_url">
        <img :src="item.image_src">
      </navigator>
    </div>
    <!-- 楼层 -->
    <div class="floors">
      <div class="floor" v-for="(item, index) in floorsList" :key="index">
        <!-- 标题 -->
        <div class="title">
          <img :src="item.floor_title.image_src">
        </div>
        <!-- 图片 -->
        <div class="pics">
          <navigator :url="list.navigator_url" v-for="(list, key) in item.product_list"  :key="key">
            <img :src="list.image_src">
          </navigator>

        </div>
      </div>
    </div>
    <span class="gotop" v-show="!isTop" @click="goTop">顶</span>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      bannerList: [],
      navList: [],
      floorsList: [],
      isTop: true
    }
  },
  methods: {
    async getBanner () {
      // let that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata',
      //   method: 'get',
      //   success: function (info) {
      //     that.bannerList = info.data.message
      //   }
      // })
      const { message } = await request({ url: 'api/public/v1/home/swiperdata' })
      this.bannerList = message
    },
    async getNavs () {
      // let that = this
      // mpvue.request({
      //   url: 'https://www.zhengzhicheng.cn/api/public/v1/home/catitems',
      //   success: function (info) {
      //     that.navList = info.data.message
      //   }
      // })
      const { message } = await request({ url: 'api/public/v1/home/catitems' })
      this.navList = message
    },
    async getFloors () {
      const { message } = await request({ url: 'api/public/v1/home/floordata' })
      this.floorsList = message
    },
    goTop () {
      mpvue.pageScrollTo({
        scrollTop: 0
      })
    }
  },
  mounted () {
    this.getBanner()
    this.getNavs()
    this.getFloors()
  },
  onPullDownRefresh () {
    this.getBanner()
    this.getNavs()
    this.getFloors()
    mpvue.stopPullDownRefresh()
  },
  onPageScroll (ev) {
    this.isTop = ev.scrollTop < 100
  }
}
</script>

<style scoped lang="less">
.search .input-box {
  background-color: #ff2d4a;
  padding: 21rpx 16rpx;
}
.search .input-box input {
  height: 60rpx;
  background-color: #fff;
  border-radius: 10rpx;
  font-size: 24rpx;
  padding: 0 30rpx;
  color: #666;
}
/* 焦点图 */
.banner {
  width: 750rpx;
  height: 340rpx;
  navigator {
    width: 100%;
    height: 100%;
  }
}
/* 导航 */
.navs {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 42rpx;
}
.navs navigator {
  width: 128rpx;
  height: 140rpx;
}
/* 楼层 */
.floor .title {
  width: 750rpx;
  height: 60rpx;
  background-color: #f4f4f4;
  padding-top: 24rpx;
  padding-left: 10rpx;
}
.floor .pics {
  padding: 22rpx;
  overflow: hidden;
}
.floor .pics img {
  width: 232rpx;
  height: 188rpx;
  float: left;
  margin-right: 10rpx;
  margin-bottom: 10rpx;
}

.floor .pics navigator:nth-child(2n + 1) img {
  margin-right: 0;
}
.floor .pics navigator:first-child img {
  height: 386rpx;
  margin-right: 10rpx;
}
.gotop {
  position: fixed;
  bottom: 70rpx;
  right: 30rpx;
  width: 88rpx;
  height: 88rpx;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  text-align: center;
  line-height: 88rpx;
}
</style>
