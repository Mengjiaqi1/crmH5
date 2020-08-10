<template>
  <div class="wrap">
    <myHeader />
    <main>
      <div class="none"></div>
      <div class="selection">
        <div class="selec_tit">
          <span class="selec_tit_type">选择部门</span>
          <span class="selec_tit_empty" @click="changeSeCempty">清空</span>
        </div>
        <div class="selec_content">
          <div
            v-for="(each, index) in sectionData"
            :key="each.id"
            :class="RadioSelec == index ? 'active' : 'each'"
            @click="changeSection(index)"
          >
            <span>{{ each.name }}</span>
          </div>
        </div>
      </div>
      <div class="selection">
        <div class="selec_tit">
          <span class="selec_tit_type">选择时间</span>
          <span class="selec_tit_empty" @click="changeTimeEmpty">清空</span>
        </div>
        <div class="selec_content">
          <div
            v-for="(each, index) in timeData"
            :key="index"
            :class="timeSelec == index ? 'active' : 'each'"
            @click="changeTime(index)"
          >
            <span>{{ each.time }}</span>
          </div>
          <!-- <div :class="[selectFlag === false ? 'each' : 'active']">
            <img src="../common/images/more.png" class="more" alt="" />
          </div> -->
        </div>
      </div>
    </main>
    <footer>
      <div class="recovery">
        <van-checkbox
          v-model="checked"
          checked-color="#07c160"
          icon-size=".19rem"
        >
          恢复默认
        </van-checkbox>
      </div>
      <div class="selecBox">
        <div
          :class="[cancelShow == 1 ? 'selecActive' : 'confirm']"
          @click="changeCancel()"
        >
          取消
        </div>
        <div
          :class="[cancelShow == 2 ? 'selecActive' : 'confirm']"
          @click="changeConfirm()"
        >
          确认
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectFlag: true,
      checked: true,
      RadioSelec: -1,
      timeSelec: -1,
      cancelShow: 1,
      sectionData: [
        {
          name: "我的",
          checked: false,
          id: "0"
        },
        {
          name: "全公司",
          checked: false,
          id: "1"
        },
        {
          name: "营销中心",
          checked: false,
          id: "3"
        }
      ],
      timeData: [
        {
          time: "今日",
          id: "0"
        },
        {
          time: "本周",
          id: "1"
        },
        {
          time: "本月",
          id: "2"
        },
        {
          time: "昨日",
          id: "3"
        },
        {
          time: "上周",
          id: "4"
        },
        {
          time: "更多",
          id: "98"
        },
        {
          time: "上月",
          id: "5"
        },
        {
          time: "年份",
          id: "6"
        },
        {
          time: "半年",
          id: "7"
        },
        {
          time: "季度",
          id: "8"
        },
        {
          time: "月份",
          id: "9"
        },
        {
          time: "自定义",
          id: "10"
        },
        {
          time: "收起",
          id: "180"
        }
      ]
    };
  },
  methods: {
    changeSeCempty() {
      this.RadioSelec = 4;
    },
    changeSection(ind) {
      this.RadioSelec = ind;
    },
    changeTime(ind) {
      this.timeSelec = ind;
    },
    changeTimeEmpty() {
      this.timeSelec = "a";
    },

    changeCancel() {
      this.cancelShow = 1;
    },
    changeConfirm() {
      this.cancelShow = 2;
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  main {
    margin-top: 0.44rem;
    flex: 1;
    overflow: scroll;
    .none {
      width: 100%;
      height: 0.12rem;
      background: rgba(248, 249, 250, 1);
    }
    .selection {
      padding: 0 0.12rem;
      box-sizing: border-box;
    }
    .selec_tit {
      width: 100%;
      height: 0.44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .selec_tit_type {
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 0.22rem;
      }
      .selec_tit_empty {
        font-size: 0.14rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 0.2rem;
      }
    }
    .selec_content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .more {
        width: 0.22rem;
        height: 0.2rem;
        color: #999;
      }
      .each {
        width: 31%;
        height: 0.34rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        background: rgba(251, 251, 251, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.04rem;
        margin-bottom: 0.11rem;
      }
      .active {
        width: 31%;
        height: 0.34rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.04rem;
        font-size: 0.14rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 106, 255, 1);
        background: rgba(242, 247, 255, 1);
        border: 0.01rem solid rgba(0, 106, 255, 1);
        background: url("../common/images/Select.png") no-repeat bottom right;
        background-size: 0.18rem 0.18rem;
        margin-bottom: 0.11rem;
        box-sizing: border-box;
      }
    }
  }
  footer {
    width: 100%;
    padding: 0 0.12rem;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 0;
    .selecBox {
      width: 100%;
      margin-top: 0.12rem;
      margin-bottom: 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cancel {
        width: 49%;
        height: 0.39rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 106, 255, 1);
        line-height: 0.22rem;
        background: rgba(242, 247, 255, 1);
        border-radius: 0.04rem;
      }
      .confirm {
        width: 49%;
        height: 0.39rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 106, 255, 1);
        line-height: 0.22rem;
        background: rgba(242, 247, 255, 1);
        border-radius: 0.04rem;
      }
      .selecActive {
        width: 49%;
        height: 0.39rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 0.22rem;
        background: rgba(0, 106, 255, 1);
        border-radius: 0.04rem;
      }
    }
  }
}
</style>
