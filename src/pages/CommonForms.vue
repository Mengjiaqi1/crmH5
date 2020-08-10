<template>
  <div class="wrap" v-if="isReoladAlive">
    <myHeader>
      <div class="h_center">常用表单</div>
      <div class="h_right"></div>
      <!-- <i class="iconfont icon-quanbukehu-icon"></i> -->
      <!-- <i class="iconfont">&#xe608;</i> -->
      <!-- <i class="icon iconfont icon-liwu"></i> -->
    </myHeader>
    <main>
      <div class="my_forms">
        <div class="my_forms_tit">我的表单</div>
        <div class="my_forms_list">
          <div
            class="my_forms_listEven"
            v-cloak
            v-for="el in queryMenuData"
            :key="el.id"
            @click="changeQueryData(el.name, el.icon, el.id)"
          >
            <div class="my_forms_top">
              <img src="../common/images/forms_customer.png" alt="" />
              <img
                src="../common/images/forms_reduce.png"
                alt=""
                class="addImg"
              />
            </div>
            <span class="my_forms_text">{{ el.name }}</span>
          </div>
        </div>
        <div class="none"></div>
        <!-- 全部表单 Treeselect  -->
        <div class="my_forms_content">
          <van-tabs v-model="active" animated>
            <van-tab v-for="each in MenuData" :key="each.id" :title="each.name">
              <div
                v-for="val in each.children"
                :key="val.id"
                class="Forms_customer"
              >
                <div class="Forms_tit">{{ val.name }}</div>
                <div class="my_forms_list my_forms_content_list">
                  <div
                    class="my_forms_listEven my_forms_listTop"
                    v-for="el in val.children"
                    :key="el.id"
                    @click="changeForms(el.name, el.icon, el.id)"
                  >
                    <div class="my_forms_top">
                      <img src="../common/images/forms_all.png" alt="" />
                      <span class="my_forms_img">
                        <img
                          :src="el.checked ? forms_reduce : forms_add"
                          class="addImg"
                        />
                      </span>
                    </div>
                    <span class="my_forms_text">{{ el.name }}</span>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { getTreeselect, getcustomIndex, getCreate } from "../services/forms";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isReoladAlive: true,
      active: 2,
      typeFlag: false,
      type: "", // 0 增 1减
      userId: -1,
      MenuData: [], // 获取表单数据
      queryMenuData: [], // 查询表单数据
      newData: "",
      delMenuData: [], // 删除表单
      forms_add: require("../assets/forms_add.png"),
      forms_reduce: require("../assets/forms_reduce.png"),
      count: 1,
      data: [
        {
          name: "1",
          id: 1
        },
        {
          name: 2,
          id: 2
        }
      ]
    };
  },
  created() {
    if (this.typeFlag == false) {
      this.changeForms();
    }

    this.changeQueryData();
    this.treeselect();
    this.reload();
  },
  mounted() {},
  methods: {
    //我的表单 删除表单
    changeQueryData(name, icon, id) {
      getCreate(0, name, icon, (this.type = "1"), id).then(res => {
        if (res.code == "200") {
          this.queryMenuData = res.data;
          this.delMenuData = res.data;
          this.getcustomIndex();
          this.treeselect();
        }
      });
    },
    //查询我的表单
    getcustomIndex() {
      getcustomIndex().then(res => {
        if (res && res.code == "200") {
          this.queryMenuData = res && res.data;
          for (var i = 0; i < this.queryMenuData.length; i++) {
            this.count = this.queryMenuData.length;
            if (this.queryMenuData.length > 7 && this.count > 7) {
              this.count = 7;
              this.$toast({
                message: "最多添加7个表单",
                position: "center"
              });
            }
          }
        }
      });
    },

    // 获取全部表单
    treeselect() {
      getTreeselect().then(res => {
        if (res && res.code == "200") {
          this.MenuData = res.data;
        }
      });
    },

    // 修改自定义表单 增加删除表单

    changeForms(name, icon, id) {
      this.MenuData &&
        this.MenuData.map(each => {
          if (each.children) {
            for (var i = 0; i < each.children.length; i++) {
              var child = each.children[i];
              if (child.children) {
                for (var t = 0; t < child.children.length; t++) {
                  let type = child.children[t];
                  if (type.id == id && type.checked == false) {
                    this.type = 0;
                    for (var i = 0; i < this.queryMenuData.length; i++) {
                      this.count = this.queryMenuData.length;
                      if (this.count < 0) {
                        this.count = 0;
                      }
                      if (this.count > 7) {
                        this.$toast({
                          message: "最多添加8个表单",
                          position: "center"
                        });
                        this.count = 7;
                        this.typeFlag = true;
                      }
                    }
                  }
                  if (type.id == id && type.checked == true) {
                    this.type = 1;
                    this.count -= 1;
                    if (this.count < 0) {
                      this.count = 0;
                    }
                    this.typeFlag = false;
                  }
                }
              }
            }
          }
        });
      if (this.typeFlag == false) {
        getCreate(0, name, icon, this.type, id).then(res => {
          if (res.code == "200") {
            this.getcustomIndex();
            this.treeselect();
          }
        });
      }
    },

    // 刷新数据页面闪动问题
    reload() {
      this.isReoladAlive = false;
      this.$nextTick(() => {
        this.isReoladAlive = true;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
[v-cloak] {
  display: none !important;
}
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  main {
    flex: 1;
    overflow: scroll;
    margin-top: 0.44rem;
    .none {
      width: 100%;
      height: 0.12rem;
      background: rgba(248, 248, 248, 1);
    }
    .my_forms {
      width: 100%;
      box-sizing: border-box;

      .my_forms_tit {
        width: 100%;
        height: 0.32rem;
        display: flex;
        align-items: center;
        background: rgba(248, 248, 248, 1);
        padding-left: 0.12rem;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 0.17rem;
        box-sizing: border-box;
      }
    }
    .my_forms_list {
      width: 100%;

      padding-bottom: 0.2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      box-sizing: border-box;
      .my_forms_listEven {
        width: 25%;

        margin-top: 0.23rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .my_forms_top {
          width: 0.4rem;
          height: 0.4rem;
          margin-top: 0.1rem;
          // border: 0.01rem dashed #ccc;
          position: relative;
          img {
            width: 0.4rem;
            height: 0.4rem;
          }
          .addImg {
            width: 0.15rem;
            height: 0.15rem;
            position: absolute;
            top: -0.07rem;
            right: -0.07rem;
          }
          .forms_reduce {
            border-radius: 50%;
            background: rgba(255, 97, 137, 1);
            line-height: 0.12rem;
            display: inline-block;
            text-align: center;
            color: #fff;
          }
          .forms_add {
            width: 0.15rem;
            height: 0.15rem;
            border-radius: 50%;
            background: rgba(23, 221, 131, 1);
            line-height: 0.15rem;
            text-align: center;
            display: inline-block;
            color: #fff;
            position: absolute;
            top: -0.07rem;
            right: -0.07rem;
          }
        }
        .my_forms_text {
          font-size: 0.12rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 0.17rem;
          margin-top: 0.07rem;
        }
      }
    }
    .Forms_customer {
      padding: 0 0.12rem;
      box-sizing: border-box;
      .Forms_tit {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 0.13rem 0 0.14rem 0;
        font-size: 0.12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        line-height: 0.17rem;
      }
      .my_forms_content_list {
        background: rgba(251, 251, 251, 1);
        border-radius: 4px;
        padding: 0 0 0.1rem 0;
        .my_forms_listTop {
          margin-top: 0.1rem;
        }
      }
    }
    .my_forms_content {
      min-height: 3rem;
      /deep/.van-tab--active {
        color: #006aff;
      }
      /deep/.van-tabs__line {
        background-color: #006aff;
      }
    }
  }
}
</style>
