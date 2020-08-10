<template>
  <div class="home">
    <header>
      <div class="header_box">
        <div class="header_title">
          <div class="h_left">
            <img src="../common/images/goBack.png" alt="" />
            <img src="../common/images/close.png" alt="" />
          </div>
          <div class="h_right">
            <img src="../common/images/scan.png" alt="" />
            <img src="../common/images/add.png" @click="changeAdd" alt="" />
          </div>
        </div>
        <div class="follow_up" v-if="flag">
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>全部客户</span>
          </li>
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>跟进客户</span>
          </li>
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>跟进客户</span>
          </li>
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>跟进客户</span>
          </li>
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>跟进客户</span>
          </li>
          <li>
            <img src="../common/images/customer.png" alt="" />
            <span>跟进客户</span>
          </li>
        </div>
        <div class="board"><span>我的工作看板</span></div>
        <div class="boardNew">
          <div class="board_left">
            <img src="../common/images/kanban-icon@2x.png" alt="" />
          </div>
          <div class="board_center">
            <img src="../common/images/bar.png" alt="" />
            <div class="board_text">
              <p><span>部门：</span><span>营销中心</span></p>
              <router-link tag="p" to="/selection">
                <span>时间：</span><span>上周</span>
              </router-link>
            </div>
          </div>
          <router-link to="/customHome" class="board_right">
            <img src="../common/images/right.png" alt="" />
          </router-link>
        </div>
      </div>
      <div class="list_box">
        <div class="list_center">
          <div class="list">
            <li>
              <img src="../common/images/chance.png" alt="" />
              <span>全部机会</span>
            </li>
            <li>
              <img src="../common/images/follow.png" alt="" />
              <span>跟进记录</span>
            </li>
            <li>
              <img src="../common/images/order.png" alt="" />
              <span>合同订单</span>
            </li>
            <li>
              <img src="../common/images/contacts.png" alt="" />
              <span>联系人</span>
            </li>
          </div>
          <div class="list list2">
            <li>
              <img src="../common/images/productm.png" alt="" />
              <span>产品管理</span>
            </li>
            <li>
              <img src="../common/images/Payment.png" alt="" />
              <span>回款计划</span>
            </li>
            <li>
              <img src="../common/images/customer.png" alt="" />
              <span>全部客户</span>
            </li>
            <router-link tag="li" to="/commonForms">
              <img src="../common/images/set.png" alt="" />
              <span>设置</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="saleskit" v-if="toastFlag">
        <p class="kitclose" @click="toToast">
          <img src="../common/images/saleclose.png" alt="" />
        </p>
        <div class="kit_center">
          <p>销售大区2020年6月简报</p>
          <span class="btn">查阅详情</span>
        </div>
      </div>
    </header>
    <main>
      <div class="none" ref="bH"></div>
      <div class="briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>简报</span>
          </div>
          <div class="b_tit_r">
            <img src="../common/images/more.png" alt="" />
          </div>
        </div>
        <div class="b_list">
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/customers.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/customers.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/customers.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/customers.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/customers.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
          <li>
            <p class="num">1234</p>
            <p class="icon">
              <img src="../common/images/amount.png" alt="" />
              <span>当前客户数</span>
            </p>
          </li>
        </div>
      </div>
      <div class="none"></div>
      <div class="kpi briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>业绩目标</span>
          </div>
          <div class="b_tit_r">
            <img src="../common/images/more.png" alt="" />
          </div>
        </div>
        <div class="kpi_finish">
          <img src="../common/images/finish.png" alt="" />
          <span>已完成目标</span>
        </div>
        <div class="echarts_Dashboard">
          <van-swipe class="my-swipe">
            <van-swipe-item>
              <Dashboard />
            </van-swipe-item>
            <van-swipe-item>
              <Dashboard />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div>
          <van-divider>查看详情</van-divider>
        </div>
      </div>
      <div class="none"></div>
      <!-- PK榜 -->
      <div class="pk briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>PK榜</span>
          </div>
          <div class="b_tit_r">
            <img src="../common/images/more.png" alt="" />
          </div>
        </div>
        <div class="sumPK">合同金额PK榜</div>
        <van-swipe class="my-swipe">
          <van-swipe-item>
            <div class="pk_details">
              <div class="runner-up">
                <div>
                  <img
                    src="../common/images/crown_2.png"
                    class="crown_2"
                    alt=""
                  />
                  <img src="../common/images/2.png" class="c_2" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
              <div class="champion">
                <div>
                  <img
                    src="../common/images/crown_1.png"
                    class="crown_1"
                    alt=""
                  />
                  <img src="../common/images/1.png" class="c_1" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
              <div class="Second-runner-up">
                <div>
                  <img
                    src="../common/images/crown_3.png"
                    class="crown_3"
                    alt=""
                  />
                  <img src="../common/images/3.png" class="c_3" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="pk_details">
              <div class="runner-up">
                <div>
                  <img
                    src="../common/images/crown_2.png"
                    class="crown_2"
                    alt=""
                  />
                  <img src="../common/images/2.png" class="c_2" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
              <div class="champion">
                <div>
                  <img
                    src="../common/images/crown_1.png"
                    class="crown_1"
                    alt=""
                  />
                  <img src="../common/images/1.png" class="c_1" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
              <div class="Second-runner-up">
                <div>
                  <img
                    src="../common/images/crown_3.png"
                    class="crown_3"
                    alt=""
                  />
                  <img src="../common/images/3.png" class="c_3" alt="" />
                </div>
                <span class="pk_nums">126,000.00</span>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <div>
          <van-divider @click="pkDetails">查看详情</van-divider>
        </div>
      </div>
      <div class="remind">
        <div class="reminds">
          <div class="r_left">
            <img src="../common/images/remind.png" class="r_img" alt="" />
            <p class="r_text">北京邮政公司的跟进提醒</p>
          </div>
          <div class="r_right">
            <span class="r_time">2分钟前</span>
            <img src="../common/images/rights.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 客户数据 -->
      <div class="customer briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>客户数据</span>
          </div>
          <div class="b_tit_r">
            <img src="../common/images/more.png" alt="" />
          </div>
        </div>
        <div class="C_echarts">
          <BarEchart />
        </div>
        <div class="c_nums">
          <li>
            <p class="c_num">1234</p>
            <p class="c_text">当前客户数</p>
          </li>
          <li>
            <p class="c_num c_news">1234</p>
            <p class="c_text">新增客户数</p>
          </li>

          <li>
            <p class="c_num">1234</p>
            <p class="c_text">当前客户数</p>
          </li>
          <li>
            <p class="c_num">1234</p>
            <p class="c_text">当前客户数</p>
          </li>
        </div>
      </div>
      <div class="none"></div>
      <!-- 资金管理 -->
      <div class="capital briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>资金管理</span>
          </div>
          <div class="b_tit_r">
            <img src="../common/images/more.png" alt="" />
          </div>
        </div>
        <div class="d_account">
          <div class="d_header">
            <div class="balance">
              <p>
                <span class="balance_text">余额</span>
                <img src="../common/images/species.png" alt="" />
              </p>
            </div>
            <div class="d">
              <p class="d_num">298,000.00</p>
              <p class="d_text">
                <span>默认账户</span><span class="unit">(元)</span>
              </p>
            </div>
            <div class="d_img">
              <div class="d_imgBox">
                <img src="../common/images/d.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <!-- 净流水 -->
        <div class="clean_water">
          <div class="cw_header">
            <p class="cw_text">净流水</p>
            <p class="cw_money"><span>￥</span><span>688,876.00</span></p>
          </div>
          <van-swipe class="cw-swipe">
            <van-swipe-item>
              <div class="cw_center">
                <div class="cw_c_list">
                  <p class="cw_c_money">299,389.00</p>
                  <p class="cw_textBox">
                    <span class="cw_c_text">回款</span>
                    <img
                      src="../common/images/loss.png"
                      alt=""
                      class="cw_c_unit"
                    />
                  </p>
                </div>
                <div class="cw_list_lang">
                  <div class="lang"></div>
                </div>
                <div class="cw_c_list">
                  <p class="cw_c_money">299,389.00</p>
                  <p class="cw_textBox">
                    <span class="cw_c_text">付款</span>
                    <img
                      src="../common/images/surplus.png"
                      alt=""
                      class="cw_c_unit"
                    />
                  </p>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="cw_center">
                <div class="cw_c_list">
                  <p class="cw_c_money">299,389.00</p>
                  <p class="cw_textBox">
                    <span class="cw_c_text">回款</span>
                    <img
                      src="../common/images/loss.png"
                      alt=""
                      class="cw_c_unit"
                    />
                  </p>
                </div>
                <div class="cw_list_lang">
                  <div class="lang"></div>
                </div>
                <div class="cw_c_list">
                  <p class="cw_c_money">299,389.00</p>
                  <p class="cw_textBox">
                    <span class="cw_c_text">付款</span>
                    <img
                      src="../common/images/surplus.png"
                      alt=""
                      class="cw_c_unit"
                    />
                  </p>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>

          <div class="cw_list">
            <li>
              <img src="../common/images/make.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">计划收款</p>
            </li>
            <li>
              <img src="../common/images/writeOff.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">回款核销</p>
            </li>
            <li>
              <img src="../common/images/debt.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">回收坏账</p>
            </li>
            <li>
              <img src="../common/images/hc.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">红冲回款</p>
            </li>
            <li>
              <img src="../common/images/Invoice.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">销项开票</p>
            </li>
            <li>
              <img src="../common/images/payments.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">计划付款</p>
            </li>
            <li>
              <img src="../common/images/Payment_verification.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">付款核销</p>
            </li>
            <li>
              <img src="../common/images/Bad_debt_payment.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">付款坏账</p>
            </li>
            <li>
              <img src="../common/images/Red_offset_payment.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">红冲付款</p>
            </li>
            <li>
              <img src="../common/images/Input_invoice.png" alt="" />
              <p class="cw_list_money">121,989.00</p>
              <p class="cw_list_text">进项开票</p>
            </li>
          </div>
        </div>
      </div>
      <div class="none"></div>
      <div class="progress briefing">
        <div class="b_tit">
          <div class="b_tit_l">
            <img src="../common/images/Title-icon.png" alt="" />
            <span>工作流进展</span>
            <b class="pross_num">12</b>
          </div>
          <div class="b_tit_r">
            <span class="check">查看全部</span>
            <img src="../common/images/rights.png" alt="" />
          </div>
        </div>
        <div class="order">
          <span class="order_text">合同订单</span>
          <span class="approval">待审批</span>
        </div>
        <div class="pro_banner">
          <van-swipe class="my-swipe">
            <van-swipe-item>
              <div class="progressBox">
                <div class="p_left">
                  <h6 class="IDname">隔壁二当家</h6>
                  <h6 class="date">
                    <span>2020-9-12</span><span class="mhs">12:22:15</span>
                  </h6>
                </div>
                <div class="p_right">
                  <h6 class="Urging">催办</h6>
                </div>
              </div>
            </van-swipe-item>
            <van-swipe-item>
              <div class="progressBox">
                <div class="p_left">
                  <h6 class="IDname">隔壁二当家</h6>
                  <h6 class="date">
                    <span>2020-9-12</span><span class="mhs">12:22:15</span>
                  </h6>
                </div>
                <div class="p_right">
                  <h6 class="Urging">催办</h6>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </main>
    <MyFooter />
  </div>
</template>
<script>
import MyFooter from "@/components/MyFooter.vue";
import Dashboard from "@/components/Dashboard.vue";
import BarEchart from "@/components/BarEchart.vue";

export default {
  data() {
    return {
      flag: false,
      toastFlag: true
    };
  },
  created() {},
  methods: {
    changeAdd: function() {
      this.flag = !this.flag;
    },
    toToast() {
      this.$toast({
        message: "确定关闭",
        position: "center"
      });
      this.toastFlag = !this.toastFlag;
      this.$refs.bH.style.marginTop = 1.03 + "rem";
    },
    pkDetails() {
      this.$router.push({ path: "/" });
    }
  },
  mounted() {},
  computed: {},
  components: {
    MyFooter,
    Dashboard,
    BarEchart
  }
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .none {
    width: 100%;
    height: 0.1rem;
    background: rgba(248, 249, 250, 1);
  }
  header {
    position: relative;
    .header_box {
      width: 100%;
      height: 3rem;
      box-sizing: border-box;
      background: url("../common/images/BG.png") no-repeat center center;
      background-size: 100%;
    }
    .header_title {
      width: 100%;
      height: 0.39rem;
      padding-top: 0.1rem;
      box-sizing: border-box;
      .h_left {
        float: left;
        img {
          width: 0.25rem;
          height: 0.25rem;
          margin-left: 0.1rem;
        }
      }
      .h_right {
        float: right;
        img {
          width: 0.25rem;
          height: 0.25rem;
          margin-right: 0.1rem;
        }
      }
    }
    .follow_up {
      width: 1.2rem;
      height: 2.75rem;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0 0 0.2rem 0 rgba(0, 30, 77, 0.3);
      border-radius: 0.04rem;
      z-index: 99;
      position: absolute;
      top: 0.44rem;
      right: 0.12rem;
      padding: 0 0.12rem;
      li {
        height: 0.44rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 0.01rem solid #dbe4ef;
        img {
          width: 0.2rem;
          height: 0.2rem;
        }
        span {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 0.2rem;
          margin-left: 0.1rem;
        }
      }
    }

    .board {
      width: 100%;
      height: 0.29rem;
      font-size: 0.21rem;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 0.29rem;
      letter-spacing: 0.01rem;
      display: flex;
      margin-top: 0.2rem;
      text-indent: 0.12rem;
    }

    .boardNew {
      width: 100%;
      height: 0.8rem;
      margin-top: 0.24rem;
      padding: 0 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .board_left {
        flex: 3;
        display: flex;
        align-items: center;
        img {
          width: 0.8rem;
          height: 0.8rem;
        }
      }
      .board_center {
        flex: 5;
        height: 0.53rem;
        display: flex;
        align-items: center;
        img {
          width: 0.13rem;
          height: 0.4rem;
          margin-right: 0.08rem;
        }
        .board_text {
          p {
            display: flex;
            &:nth-of-type(2) {
              margin-top: 0.05rem;
            }
            span {
              font-size: 0.14rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 0.2rem;
            }
          }
        }
      }
      .board_right {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.22rem;
          height: 0.22rem;
        }
      }
    }
    .list_box {
      width: 100%;
      box-sizing: border-box;
      padding: 0 0.15rem;
      position: absolute;
      top: 2rem;
      left: 0;
    }
    .list_center {
      width: 100%;
      height: 1.92rem;
      border-radius: 0.08rem;
      box-shadow: 0.04rem 0.04rem 0.06rem 0 rgba(0, 106, 255, 0.1);
      background: rgba(255, 255, 255, 1);
    }
    .list {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 0.08rem;
      padding-top: 0.23rem;
      box-sizing: border-box;
      li {
        flex: 1;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        img {
          width: 0.4rem;
          height: 0.4rem;
        }
        span {
          text-align: center;
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(164, 164, 164, 1);
          line-height: 0.17rem;
          margin-top: 0.1rem;
        }
      }
    }
    .saleskit {
      width: 100%;
      height: 0.88rem;
      margin-top: 1.03rem;
      z-index: 99;
      .kitclose {
        height: 0.2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 0.11rem;
        img {
          width: 0.18rem;
          height: 0.18rem;
        }
      }
      .kit_center {
        margin: 0 auto;
        p {
          font-size: 0.16rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 0.22rem;
          margin-bottom: 0.13rem;
        }
        .btn {
          background: rgba(242, 249, 255, 1);
          border-radius: 0.04rem;
          border: 1px solid rgba(2, 143, 255, 1);
          padding: 0.03rem 0.16rem;
          color: rgba(0, 106, 255, 1);
          line-height: 0.17rem;
        }
      }
    }
  }
  main {
    flex: 1;
    overflow: scroll;
    margin-bottom: 0.6rem;
    .b_tit {
      width: 100%;
      height: 0.44rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dbe4ef;
      .b_tit_l {
        display: flex;
        align-items: center;
        img {
          width: 0.12rem;
          height: 0.12rem;
        }
        span {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 0.2rem;
          margin-left: 0.05rem;
        }
      }
      .b_tit_r {
        img {
          width: 0.24rem;
          height: 0.24rem;
        }
      }
    }
    .briefing {
      width: 100%;
      padding: 0 0.12rem;
      margin-bottom: 0.11rem;
      box-sizing: border-box;
      .b_list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        li {
          width: 48%;
          height: 0.88rem;
          background: rgba(251, 251, 251, 1);
          border-radius: 0.08rem;
          margin-top: 0.12rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .num {
            font-size: 0.21rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 0.29rem;
          }
          .icon {
            display: flex;
            align-items: center;
            img {
              width: 0.2rem;
              height: 0.2rem;
            }
            span {
              font-size: 0.12rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(153, 153, 153, 1);
              line-height: 0.17rem;
              margin-left: 0.04rem;
            }
          }
        }
      }
    }
    .kpi_finish {
      width: 100%;
      margin-top: 0.28rem;
      display: flex;
      justify-content: flex-end;
      img {
        width: 0.16rem;
        height: 0.16rem;
      }
      span {
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 0.17rem;
        margin-left: 0.04rem;
      }
    }
    .pk {
      .sumPK {
        margin-top: 0.2rem;
        margin-bottom: 0.24rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 106, 255, 1);
        line-height: 0.17rem;
      }
      .pk_details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-bottom: 0.2rem;
        .pk_nums {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 0.2rem;
          margin-top: 0.05rem;
        }
        .runner-up {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.3rem;
          .crown_2 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 0.7rem;
            height: 0.7rem;
          }
          .c_2 {
            margin-top: 0.05rem;
            width: 0.7rem;
            height: 0.7rem;
          }
        }
        .champion {
          display: flex;
          flex-direction: column;
          align-items: center;
          .crown_1 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 1.42rem;
            height: 0.88rem;
          }
          .c_1 {
            margin-top: 0.05rem;
            width: 0.7rem;
            height: 0.8rem;
          }
        }
        .Second-runner-up {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 0.4rem;
          .crown_3 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 0.7rem;
            height: 0.7rem;
          }
          .c_3 {
            width: 0.65rem;
            height: 0.65rem;
          }
        }
      }
    }
    .remind {
      width: 100%;
      height: 0.78rem;
      background: #f8f9fa;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-right: 0.12rem;
      padding-left: 0.2rem;
      position: relative;
      .reminds {
        width: 100%;
        height: 0.34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0.03rem -0.03rem 0.04rem 0 rgba(255, 146, 1, 0.1);
        border-radius: 0.04rem;
        .r_img {
          width: 0.58rem;
          height: 0.58rem;
          position: absolute;
          top: 50%;
          left: 0;
          margin-top: -0.29rem;
        }
        .r_left {
          display: flex;
          align-items: center;
          overflow: hidden;

          .r_text {
            display: flex;
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 146, 1, 1);
            line-height: 0.17rem;
            margin-left: 0.38rem;
          }
        }
        .r_right {
          display: flex;
          align-items: center;
          .r_time {
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 0.17rem;
          }
          img {
            width: 0.11rem;
            height: 0.11rem;
            padding-right: 0.1rem;
          }
        }
      }
    }
    .customer {
      .C_echarts {
        width: 2.6rem;
        height: 1.87rem;
        margin: 0 auto;
        // background: plum;
      }
      .c_nums {
        margin-top: 0.2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 48%;
          height: 0.68rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          //   align-items: center;
          margin-top: 0.12rem;
          .c_num {
            font-size: 0.21rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.29rem;
          }
          .c_news {
            color: rgba(1, 124, 255, 1);
          }
          .c_text {
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 0.17rem;
          }
        }
      }
    }
    .capital {
      width: 100%;
      height: 100%;
      .d_account {
        width: 100%;
        height: 1.25rem;
        .d_header {
          width: 100%;
          height: 1rem;
          background: rgba(1, 124, 255, 1);
          display: flex;
          justify-content: space-between;
          position: relative;
          .balance {
            flex: 3;
            p {
              width: 0.54rem;
              height: 0.24rem;
              background: rgba(255, 223, 0, 1);
              box-shadow: 0.03rem 0.03rem 0.04rem 0 rgba(255, 146, 1, 0.1);
              border-radius: 0 1rem 1rem 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 0.12rem;
              .balance_text {
                font-size: 0.12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: rgba(255, 146, 1, 1);
                line-height: 0.17rem;
                margin-left: 0.05rem;
              }
              img {
                width: 0.2rem;
                height: 0.2rem;
              }
            }
          }
          .d {
            flex: 4;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .d_num {
              font-size: 0.24rem;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: rgba(255, 255, 255, 1);
              line-height: 0.33rem;
            }
            .d_text {
              font-size: 0.12rem;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(148, 188, 255, 1);
              line-height: 0.17rem;
              .unit {
                margin-left: 0.05rem;
              }
            }
          }
          .d_img {
            flex: 3;
            .d_imgBox {
              width: 100%;
              height: 100%;
              img {
                position: absolute;
                top: 0;
                right: 0;
              }
            }
          }
        }
      }
    }
    .clean_water {
      width: 100%;
      margin-top: 0.1rem;
      .cw_header {
        width: 100%;
        height: 0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .cw_text {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 0.2rem;
        }
        .cw_money {
          font-size: 0.18rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(1, 124, 255, 1);
          line-height: 0.25rem;
        }
      }
      .cw_center {
        width: 100%;
        height: 1.1rem;
        background: rgba(253, 253, 253, 1);
        box-shadow: 0.02rem 0.02rem 0.04rem 0 rgba(79, 105, 132, 0.1);
        display: flex;
        justify-content: space-between;
        .cw_c_list {
          flex: 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .cw_c_money {
            font-size: 0.16rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 0.22rem;
          }
          .cw_c_text {
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 0.17rem;
          }
          .cw_c_unit {
            widows: 0.14rem;
            height: 0.14rem;
            margin-left: 0.05rem;
          }
          .cw_textBox {
            margin-top: 0.12rem;
          }
        }
        .cw_list_lang {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          .lang {
            width: 0.01rem;
            height: 0.43rem;
            background: #dadada;
          }
        }
      }
      .cw_list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 47%;
          margin-top: 0.1rem;
          background: rgba(251, 251, 251, 1);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding-left: 0.06rem;
          padding-bottom: 0.12rem;
          img {
            width: 0.4rem;
            height: 0.4rem;
          }
          .cw_list_money {
            display: flex;
            font-size: 0.16rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.22rem;
          }
          .cw_list_text {
            display: flex;
            font-size: 0.12rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 0.17rem;
          }
        }
      }
    }
    .progress {
      .b_tit_l {
        .pross_num {
          width: 0.24rem;
          height: 0.14rem;
          background: rgba(1, 124, 255, 1);
          border-radius: 0.07rem;
          font-weight: 400;
          display: inline-block;
          text-align: center;
          line-height: 0.14rem;
          color: #fff;
          margin-left: 0.1rem;
        }
      }
      .b_tit_r {
        display: flex;
        align-items: center;
        .check {
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 0.17rem;
        }
        img {
          width: 0.11rem;
          height: 0.11rem;
          color: #999999;
          margin-left: 0.1rem;
        }
      }
      .order {
        width: 100%;
        height: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .order_text {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
        }
        .approval {
          font-size: 0.14rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(255, 146, 1, 1);
        }
      }
      .pro_banner {
        width: 100%;
        height: 1.1rem;
      }
      .progressBox {
        width: 100%;
        height: 1rem;
        // background: rgb(220, 255, 229);
        background: rgba(251, 251, 251, 1);
        box-shadow: 0.04rem 0.04rem 0.06rem 0rgba (13, 34, 64, 0.06);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.1rem;
        box-sizing: border-box;
        .p_left {
          flex: 7;
          .IDname {
            display: flex;
            font-size: 0.14rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 0.2rem;
          }
          .date {
            display: flex;
            font-size: 0.14rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 0.2rem;
            margin-top: 0.04rem;
            .mhs {
              margin-left: 0.05rem;
            }
          }
        }
        .p_right {
          flex: 3;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .Urging {
            font-size: 0.12rem;
            width: 0.56rem;
            height: 0.2rem;
            background: rgba(23, 221, 131, 1);
            border-radius: 0.04rem;
            color: #fff;
            text-align: center;
            line-height: 0.2rem;
          }
        }
      }
    }
    // 轮播图样式
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 0.2rem;
      //   line-height: 1rem;
      text-align: center;
    }
    /deep/.van-swipe__indicator {
      width: 0.16rem;
      height: 0.03rem;
      opacity: 1;
      background: rgba(0, 106, 255, 0.5);
      border-radius: 0%;
    }
    /deep/.van-swipe__indicator--active {
      width: 0.16rem;
      height: 0.03rem;
      opacity: 1;
      background: rgba(0, 106, 255, 1);
      border-radius: 0%;
    }
    /deep/.van-divider {
      font-size: 0.12rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 0.17rem;
    }
  }
}
</style>
