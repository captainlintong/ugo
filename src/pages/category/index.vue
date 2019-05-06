<template>
  <div>
    <search></search>
    <!-- 分类 -->
    <div class="category">
      <!-- 顶级分类 -->
      <ul class="sup">
        <scroll-view scroll-y>
          <li
          :class="{active: topKey === currentIndex}"
          v-for="(top, topKey) in categoryList"
          :key="top.cat_id"
          @click="getSub(topKey)"
          >{{ top.cat_name }}</li>
        </scroll-view>
      </ul>
      <!-- 子分类 -->
      <div class="sub">
        <scroll-view scroll-y>
          <img class="thumb" src="/static/uploads/pic_floor03_1@2x.png">
          <div class="children" v-for="(child, childKey) in sub" :key="childKey">
            <div class="title">{{ child.cat_name }}</div>
            <div class="brands">
              <a href="" v-for="(brand, brandKey) in child.children" :key="brandKey">
                <img :src="brand.cat_icon">
                <span>{{ brand.cat_name }}</span>
              </a>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import request from '@/utils/request'
export default {
  data () {
    return {
      categoryList: [],
      currentIndex: 0
    }
  },
  components: {
    search
  },
  methods: {
    // 分类接口
    async getCategory () {
      const { message } = await request({
        url: 'api/public/v1/categories'
      })
      this.categoryList = message
    },
    // 查找子分类
    getSub (key) {
      // 改变当前的索引值
      this.currentIndex = key
    }
  },
  computed: {
    sub () {
      // 当数据顶级分类获取成功，才可以
      return this.categoryList.length && this.categoryList[this.currentIndex].children
    }
  },
  mounted () {
    // 获取分类数据
    this.getCategory()
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

      scroll-view {
        height: 100%;
      }
      li {
        height: 100rpx;
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
