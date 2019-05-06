<template>
   <div class="search">
      <!-- 搜索框 -->
      <div class="input-box">
        <input type="text">
      </div>
      <!-- 搜索结果 -->
      <div class="result"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
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
</style>
