<template>
  <header>
    <div class="h_left">
      <img
        src="../common/images/d_right.png"
        class="goBack"
        @click="$router.go(-1)"
        alt=""
      />

      <img
        src="../common/images/d_close.png"
        class="close"
        @click="changeClose"
        alt=""
      />
    </div>
    <slot></slot>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeClose() {
      location.replace("/");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../css/_minix.scss";
@import "../css/common.scss";
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
header {
  width: 100%;
  height: 0.44rem;
  padding: 0 0.15rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  .h_left {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    .goBack {
      width: 0.25rem;
      height: 0.25rem;
      margin-right: 0.1rem;
    }
    .close {
      width: 0.25rem;
      height: 0.25rem;
    }
  }
  .h_center {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.16rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 0.22rem;
  }
  .h_right {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > span {
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>
