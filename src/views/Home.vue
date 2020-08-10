<template>
  <div class="shouye">
    <my-header>
      <div class="left" @click="$router.go(-1)">
        <img src="@/assets/left.png" alt="" /><span class="goback">返回</span>
      </div>
      <div class="center">签到设置</div>
      <div class="right"><span>更多</span></div>
    </my-header>
    <main>
      <div>
        <p class="cardTitle">已添加的卡片</p>
        <drag-gable> </drag-gable>
      </div>
      <div>
        <p class="cardTitle">未添加的卡片</p>
        <drag-gable> </drag-gable>
      </div>
    </main>
    <footer>底部</footer>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src

import { Toast } from "vant";
import DragGable from "@/components/DragGable";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  components: {
    DragGable
  }
};
</script>
<style lang="scss" scoped>
.shouye {
  height: 7rem;
  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    overflow: auto;
    .cardTitle {
      width: 100%;
      height: 0.2rem;
      text-indent: 0.1rem;
      background: rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      font-size: 0.12rem;
    }
  }
  footer {
    height: 0.55rem;
    background: orange;
  }
}
</style>
