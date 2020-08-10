<template>
  <footer class="footer">
    <router-link class="footer_item" to="/home">
      <i class="icon home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="footer_item" to="/visitor">
      <i class="icon visitor"></i>
      <span>访客</span>
    </router-link>
    <router-link class="footer_item" to="/work">
      <i class="icon work"></i>
      <span class="text">工作</span>
    </router-link>
    <router-link class="footer_item" to="/news">
      <i class="icon news"></i>
      <span>消息</span>
    </router-link>
    <router-link class="footer_item" to="/mine">
      <i class="icon mine"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  height: 0.5rem;
  padding-bottom: 0.04rem;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0rem 0.03rem 0.12rem 0rem rgba(0, 0, 0, 0.08);
  .footer_item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    text-decoration: none;
    color: #7e8185;
    i {
      display: block;
      width: 0.28rem;
      height: 0.28rem;
      background-repeat: no-repeat;
      &.home {
        background-image: url("../common/images/home.png");
        background-size: 0.28rem 0.28rem;
      }
      &.visitor {
        background-image: url("../common/images/visitor_back.png");
        background-size: 0.28rem 0.28rem;
      }
      &.work {
        background-image: url("../common/images/work_back.png");
        background-size: 0.28rem 0.28rem;
      }
      &.news {
        background-image: url("../common/images/news_back.png");
        background-size: 0.28rem 0.28rem;
      }
      &.mine {
        background-image: url("../common/images/mine_back.png");
        background-size: 0.28rem 0.28rem;
      }
    }
    span {
      text-align: center;
      //   line-height: 0.2rem;
      font-size: 0.12rem;
    }
  }
  .router-link-active {
    color: #cf995f;
    i.home {
      background-image: url("../common/images/home_back.png");
      background-size: 0.28rem 0.28rem;
    }
    i.visitor {
      background-image: url("../common/images/visitor.png");
      background-size: 0.28rem 0.28rem;
    }
    i.work {
      background-image: url("../common/images/work.png");
      background-size: 0.28rem 0.28rem;
    }
    i.news {
      background-image: url("../common/images/news.png");
      background-size: 0.28rem 0.28rem;
    }
    i.mine {
      background-image: url("../common/images/mine.png");
      background-size: 0.28rem 0.28rem;
    }
  }
}
</style>
