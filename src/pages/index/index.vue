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
    <swiper class="banner" indicator-dots indicator-color="rgba(255, 255, 255, 0.6)" indicator-active-color="#fff"
    autoplay circular>
      <swiper-item>
        <img src="/static/uploads/banner1.png">
      </swiper-item>
      <swiper-item>
        <img src="/static/uploads/banner2.png">
      </swiper-item>
      <swiper-item>
        <img src="/static/uploads/banner3.png">
      </swiper-item>
    </swiper>
    <!-- 导航 -->
    <div class="navs">
      <navigator>
        <img src="/static/uploads/icon_index_nav_1@2x.png">
      </navigator>
      <navigator>
        <img src="/static/uploads/icon_index_nav_2@2x.png">
      </navigator>
      <navigator>
        <img src="/static/uploads/icon_index_nav_3@2x.png">
      </navigator>
      <navigator>
        <img src="/static/uploads/icon_index_nav_4@2x.png">
      </navigator>
    </div>
    <!-- 楼层 -->
    <div class="floors">
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <img src="/static/uploads/pic_floor01_title.png">
        </div>
        <!-- 图片 -->
        <div class="pics">
          <img src="/static/uploads/pic_floor01_1@2x.png">
          <img src="/static/uploads/pic_floor01_2@2x.png">
          <img src="/static/uploads/pic_floor01_3@2x.png">
          <img src="/static/uploads/pic_floor01_4@2x.png">
          <img src="/static/uploads/pic_floor01_5@2x.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

.floor .pics img:nth-child(2n+1) {
  margin-right: 0;
}
.floor .pics img:first-child {
  height: 386rpx;
  margin-right: 10rpx;
}
</style>
