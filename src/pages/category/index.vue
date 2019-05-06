<template>
  <div>
    <search></search>
    <!-- 分类 -->
    <div class="category">
      <!-- 顶级分类 -->
      <ul class="sup">
        <li class="active">大家电</li>
        <li>热门推荐</li>
        <li>苏宁房产</li>
        <li>手机相机</li>
        <li>电脑办公</li>
        <li>厨卫电器</li>
        <li>食品酒水</li>
        <li>居家生活</li>
        <li>厨房家电</li>
      </ul>
      <!-- 子分类 -->
      <div class="sub">
        <scroll-view scroll-y>
          <img class="thumb" src="/static/uploads/pic_floor03_1@2x.png">
          <div class="children">
            <div class="title">家电</div>
            <div class="brands">
              <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_4@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_3@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_2@2x.png">
                <span>曲面电视</span>
              </a>
                <a href="">
                <img src="/static/uploads/pic_floor03_1@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>

            </div>
          </div>
          <div class="children">
            <div class="title">家电</div>
            <div class="brands">
              <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_4@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_3@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_2@2x.png">
                <span>曲面电视</span>
              </a>
                <a href="">
                <img src="/static/uploads/pic_floor03_1@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>
               <a href="">
                <img src="/static/uploads/pic_floor03_5@2x.png">
                <span>曲面电视</span>
              </a>

            </div>
          </div>

        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
// import search from '@/components/search'
export default {
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  .category {
    width: 100%;
    position: absolute;
    bottom: 0;
    top: 100rpx;
    display: flex;
    .sup {
      width: 196rpx;
      background-color: #f4f4f4;
      display: flex;
      flex-direction: column;
      li {
        flex: 1;
        font-size: 27rpx;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active {
          color: #ea4451;
          background-color: #fff;
          position: relative;
          &::before {
            content: '';
            display: block;
            height: 60rpx;
            width: 8rpx;
            background-color: #ea4451;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%)
          }
        }

      }
    }
    .sub {
      flex: 1;
      // background-color: pink;
      padding: 20rpx;
      scroll-view {
        height: 100%;

      }
      .thumb {
        width: 100%;
        height: 180rpx;
      }
      .children {
        text-align: center;
        .title {
          font-size: 30rpx;
          color: #333;
          padding: 20rpx 0;

          &::before {
            content: '/';
            color: #999;
            margin-right: 20rpx;
          }
           &::after {
            content: '/';
            color: #999;
            margin-left: 20rpx;
          }
        }
      }
      .brands {
        display: flex;
        flex-wrap: wrap;
        a {
          width: 33.33333%;
          margin-bottom: 20rpx;
        }
        img {
          width: 120rpx;
          height: 120rpx;
        }
        span {
          display: block;
          font-size: 24rpx;
          color: #333;
        }
      }
    }
  }
</style>
